"use strict";

(() => {
    const lessons = window.CPP_LESSONS;
    const questions = window.CPP_QUIZ;
    const quizKey = "cpp-patterns-quiz-v1";
    const quizState = { current: 0, responses: {}, reviewed: {} };

    try {
        const saved = JSON.parse(localStorage.getItem(quizKey) || "null");
        if (saved) {
            if (Number.isInteger(saved.current)) {
                quizState.current = Math.max(0, Math.min(saved.current, questions.length - 1));
            }
            for (const question of questions) {
                const response = saved.responses?.[question.id];
                if (question.options.some(option => option.pattern === response)) {
                    quizState.responses[question.id] = response;
                    quizState.reviewed[question.id] = saved.reviewed?.[question.id] === true;
                }
            }
        }
    } catch {
        // Le QCM reste utilisable lorsque le stockage local est indisponible.
    }

    const familyNames = {
        bases: "Les bases objet",
        creation: "Création",
        structure: "Structure",
        comportement: "Comportement",
        architecture: "Architecture et valeurs",
        grasp: "Principes GRASP"
    };
    const search = document.getElementById("search");
    const navigation = document.getElementById("navigation");
    const article = document.getElementById("lesson");
    const status = document.getElementById("status");

    function escape(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character]));
    }

    function normalize(value) {
        return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    function activeLesson() {
        const id = location.hash.slice(1);
        return lessons.find(lesson => lesson.id === id) || lessons[0];
    }

    function renderNavigation() {
        const active = activeLesson();
        const isQuiz = location.hash === "#qcm";
        const query = normalize(search.value.trim());
        const visible = lessons.filter(lesson =>
            normalize([lesson.name, lesson.summary, lesson.reading, lesson.limit].join(" ")).includes(query)
        );

        navigation.innerHTML = Object.entries(familyNames).map(([id, label]) => {
            const group = visible.filter(lesson => lesson.family === id);
            if (group.length === 0) {
                return "";
            }
            return `<section><h2>${escape(label)}</h2>${group.map(lesson =>
                `<a class="nav-link" href="#${lesson.id}" ${!isQuiz && lesson.id === active.id ? 'aria-current="page"' : ""}>${escape(lesson.name)}</a>`
            ).join("")}</section>`;
        }).join("");
        navigation.innerHTML += `
            <section class="quiz-nav">
                <h2>S’entraîner</h2>
                <a class="nav-link" href="#qcm" ${isQuiz ? 'aria-current="page"' : ""}>
                    Choisir le bon pattern · QCM
                </a>
            </section>`;
        document.getElementById("count").textContent = `${visible.length} notion(s) sur ${lessons.length}`;
    }

    function paragraph(title, content, extraClass = "") {
        if (!content) {
            return "";
        }
        return `<section class="card ${extraClass}"><h3>${escape(title)}</h3><p>${escape(content)}</p></section>`;
    }

    function render() {
        if (location.hash === "#qcm") {
            renderQuiz();
            return;
        }
        const lesson = activeLesson();
        const index = lessons.indexOf(lesson);
        const file = `exemples/${lesson.id}.cpp`;
        article.innerHTML = `
            <header class="lesson-head">
                <p class="eyebrow">${escape(familyNames[lesson.family])}</p>
                <h2 id="title">${escape(lesson.name)}</h2>
                <p class="summary">${escape(lesson.summary)}</p>
            </header>
            <div class="lesson-grid">
                <div>
                    ${paragraph("L’idée à retenir", lesson.situation)}
                    ${paragraph("Un cas où il devient utile", lesson.case)}
                    ${paragraph("Pourquoi ce choix fonctionne", lesson.decision)}
                    ${paragraph("Lire le programme", lesson.reading)}
                    ${paragraph("Quand l’utiliser", lesson.when)}
                    ${paragraph("À surveiller en C++", lesson.limit, "note")}
                    ${paragraph("Comparer", lesson.compare)}
                    <section class="card">
                        <h3>Exécuter cet exemple</h3>
                        <p>Depuis le dossier du projet, avec Clang ou GCC et le standard C++20.</p>
                        <pre class="output"><code>clang++ -std=c++20 -Wall -Wextra -Wpedantic ${file} -o demo
./demo</code></pre>
                        <p>Windows avec GCC utilise un exécutable demo.exe, à lancer avec .\\demo.exe.</p>
                    </section>
                </div>
                <div>
                    <section class="card code-card" aria-label="Programme C++ complet">
                        <div class="code-toolbar">
                            <span>main.cpp · C++20</span>
                            <div>
                                <button type="button" id="copy">Copier</button>
                                <a href="${file}" download>Télécharger .cpp</a>
                            </div>
                        </div>
                        <pre><code>${escape(lesson.code)}</code></pre>
                    </section>
                    <section class="card">
                        <h3>Résultat attendu</h3>
                        <pre class="output"><code>${escape(lesson.output)}</code></pre>
                        <p>Sortie de l’exemple après compilation. Le navigateur affiche le code et sa sortie de référence.</p>
                    </section>
                </div>
            </div>
            ${renderDiagrams(lesson)}
            <nav class="actions" aria-label="Parcourir les notions">
                ${index > 0 ? `<a href="#${lessons[index - 1].id}">Précédent · ${escape(lessons[index - 1].name)}</a>` : ""}
                ${index < lessons.length - 1 ? `<a href="#${lessons[index + 1].id}">Suivant · ${escape(lessons[index + 1].name)}</a>` : ""}
                <a href="#qcm">S’entraîner · Choisir le bon pattern</a>
            </nav>`;
        status.textContent = "";
        renderNavigation();
        document.getElementById("copy").addEventListener("click", () => copy(lesson.code));
        document.querySelectorAll(".expand-diagram").forEach(button => {
            button.addEventListener("click", () => {
                const view = lesson.diagrams[Number(button.dataset.view)];
                const diagram = document.getElementById("diagram-large");
                diagram.src = `diagrammes/${view.file}`;
                diagram.alt = view.reading;
                document.getElementById("diagram-title").textContent = `${lesson.name} · ${view.title}`;
                document.getElementById("diagram-dialog").showModal();
            });
        });
    }

    function renderDiagrams(lesson) {
        return `
            <section class="card uml-section" aria-label="Comprendre la structure en UML">
                <h3>Comprendre le diagramme de classes</h3>
                <p>Les noms correspondent au programme C++. Lisez d’abord les classes,
                    puis les relations expliquées sous chaque vue.</p>
                ${lesson.diagrams.map((view, index) => `
                    <section class="uml-view">
                        <div class="diagram-toolbar">
                            <h4>${lesson.diagrams.length > 1 ? `${index + 1}. ` : ""}${escape(view.title)}</h4>
                            <button type="button" class="expand-diagram" data-view="${index}">
                                Agrandir la vue
                            </button>
                        </div>
                        <p>${escape(view.reading)}</p>
                        <div class="diagram-canvas" tabindex="0" role="region"
                             aria-label="${escape(view.title)} · défilement horizontal si nécessaire">
                            <img class="class-diagram" src="diagrammes/${view.file}"
                                 alt="${escape(view.reading)}">
                        </div>
                        ${view.relations.length ? `
                            <div class="relations-wrap">
                                <table class="relations-table">
                                    <caption>Lire les relations de cette vue</caption>
                                    <thead><tr><th scope="col">Départ</th><th scope="col">Relation</th>
                                        <th scope="col">Arrivée</th><th scope="col">Signification</th></tr></thead>
                                    <tbody>${view.relations.map(relation => `
                                        <tr><th scope="row">${escape(relation.source)}</th>
                                            <td>${escape(relation.type)}</td><td>${escape(relation.target)}</td>
                                            <td>${escape(relation.detail)}</td></tr>`).join("")}</tbody>
                                </table>
                            </div>` : ""}
                    </section>`).join("")}
                <details class="uml-key">
                    <summary>Lire les symboles UML et C++</summary>
                    <p>+ public · # protégé · − privé. Une opération terminée par = 0 est virtuelle pure.
                        Une classe abstraite définit un contrat et ne s’instancie pas directement.</p>
                    <p>Triangle vide : héritage, pointe vers la classe de base.
                        Losange plein : composition, placé du côté de l’objet propriétaire.
                        Flèche simple : association vers un objet connu.
                        Flèche en pointillés : dépendance vers un type utilisé.</p>
                    <p>Une fonction libre et un type standard sont explicitement indiqués comme tels.
                        Les membres montrés sont ceux utiles à l’exemple.</p>
                </details>
            </section>`;
    }

    async function copy(code) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
            } else {
                const field = document.createElement("textarea");
                field.value = code;
                field.style.position = "fixed";
                field.style.opacity = "0";
                document.body.append(field);
                field.select();
                const copied = document.execCommand("copy");
                field.remove();
                if (!copied) {
                    throw new Error("Copie indisponible");
                }
            }
            status.textContent = "Programme copié.";
        } catch {
            status.textContent = "La copie automatique est indisponible. Sélectionnez le code ou téléchargez le fichier C++.";
        }
    }

    function persistQuiz() {
        try {
            localStorage.setItem(quizKey, JSON.stringify(quizState));
        } catch {
            status.textContent = "La sauvegarde locale est indisponible. Vous pouvez continuer le QCM.";
        }
    }

    function renderQuiz() {
        const question = questions[quizState.current];
        const response = quizState.responses[question.id];
        const reviewed = quizState.reviewed[question.id] === true;
        const answered = questions.filter(item => quizState.reviewed[item.id]).length;
        const correct = questions.filter(item =>
            quizState.reviewed[item.id] && quizState.responses[item.id] === item.correct
        ).length;
        const name = id => lessons.find(lesson => lesson.id === id).name;

        article.innerHTML = `
            <header class="lesson-head">
                <p class="eyebrow">S’ENTRAÎNER</p>
                <h2 id="title">Choisir le bon design pattern</h2>
                <p class="summary">Lisez le besoin, choisissez une réponse et comparez les explications.
                    Chaque cas attend un seul choix. Vous pouvez parcourir librement les questions.</p>
                <p class="quiz-score">${correct} réponse(s) juste(s) · ${answered} question(s) validée(s)
                    sur ${questions.length}</p>
                <progress max="${questions.length}" value="${answered}"
                          aria-label="Questions validées">${answered} sur ${questions.length}</progress>
            </header>
            <section class="card quiz-question">
                <p class="eyebrow">CAS ${question.number} / ${questions.length} · ${escape(question.domain)}</p>
                <h3>${escape(question.title)}</h3>
                <p class="quiz-scenario">${escape(question.scenario)}</p>
                <form id="quiz-form">
                    <fieldset>
                        <legend>${escape(question.need)}</legend>
                        ${question.options.map((option, index) => `
                            <label class="quiz-option">
                                <input type="radio" name="pattern" value="${option.pattern}"
                                       ${response === option.pattern ? "checked" : ""}>
                                <span><b>${String.fromCharCode(65 + index)}</b>
                                    ${escape(name(option.pattern))}</span>
                            </label>`).join("")}
                    </fieldset>
                    <div class="quiz-controls">
                        <button class="primary-button" type="submit">Vérifier ma réponse</button>
                        <label class="question-picker">Aller au cas
                            <select id="question-select" aria-label="Choisir une question">
                                ${questions.map((item, index) =>
                                    `<option value="${index}" ${index === quizState.current ? "selected" : ""}>
                                        ${item.number} · ${escape(item.title)}
                                    </option>`
                                ).join("")}
                            </select>
                        </label>
                    </div>
                </form>
                <p id="quiz-message" role="status"></p>
                <details class="quiz-hint">
                    <summary>Un indice pour réfléchir</summary>
                    <p>${escape(question.hint)}</p>
                </details>
            </section>
            ${reviewed ? `
                <section class="card quiz-feedback" aria-live="polite">
                    <h3>${response === question.correct ? "Votre choix correspond au besoin." :
                        "Le choix attendu est " + escape(name(question.correct)) + "."}</h3>
                    <p>${escape(question.why)}</p>
                    <h3>Comparer les quatre choix</h3>
                    ${question.options.map(option => `
                        <div class="option-feedback">
                            <strong>${escape(name(option.pattern))}
                                ${option.pattern === question.correct ? " · choix attendu" : ""}
                                ${option.pattern === response ? " · votre réponse" : ""}</strong>
                            <p>${escape(option.feedback)}</p>
                        </div>`).join("")}
                    <a href="#${question.correct}">Revoir l’exemple C++ et le diagramme</a>
                </section>` : ""}
            <nav class="actions" aria-label="Parcourir le QCM">
                <button type="button" id="previous-question" ${quizState.current === 0 ? "disabled" : ""}>
                    Cas précédent
                </button>
                <button type="button" id="next-question"
                    ${quizState.current === questions.length - 1 ? "disabled" : ""}>Cas suivant</button>
                <a href="#bases-classe-objet">Retour aux notions</a>
            </nav>`;
        status.textContent = "";
        renderNavigation();

        const form = document.getElementById("quiz-form");
        form.addEventListener("change", event => {
            if (event.target.name !== "pattern") {
                return;
            }
            quizState.responses[question.id] = event.target.value;
            quizState.reviewed[question.id] = false;
            persistQuiz();
            renderQuiz();
            document.querySelector('input[name="pattern"]:checked').focus({ preventScroll: true });
        });
        form.addEventListener("submit", event => {
            event.preventDefault();
            if (!quizState.responses[question.id]) {
                document.getElementById("quiz-message").textContent = "Choisissez une réponse.";
                return;
            }
            quizState.reviewed[question.id] = true;
            persistQuiz();
            renderQuiz();
        });
        document.getElementById("question-select").addEventListener("change", event => {
            changeQuestion(Number(event.target.value));
        });
        document.getElementById("previous-question").addEventListener("click", () =>
            changeQuestion(quizState.current - 1)
        );
        document.getElementById("next-question").addEventListener("click", () =>
            changeQuestion(quizState.current + 1)
        );
    }

    function changeQuestion(index) {
        quizState.current = Math.max(0, Math.min(index, questions.length - 1));
        persistQuiz();
        renderQuiz();
        article.focus({ preventScroll: true });
        article.scrollIntoView({ block: "start" });
    }

    search.addEventListener("input", renderNavigation);
    window.addEventListener("hashchange", () => {
        render();
        article.focus({ preventScroll: true });
        article.scrollIntoView({ block: "start" });
    });
    document.getElementById("close-diagram").addEventListener("click", () => {
        document.getElementById("diagram-dialog").close();
    });
    render();
})();
