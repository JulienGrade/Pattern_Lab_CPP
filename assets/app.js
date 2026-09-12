"use strict";

(() => {
    const lessons = window.CPP_LESSONS;
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
                `<a class="nav-link" href="#${lesson.id}" ${lesson.id === active.id ? 'aria-current="page"' : ""}>${escape(lesson.name)}</a>`
            ).join("")}</section>`;
        }).join("");
        document.getElementById("count").textContent = `${visible.length} notion(s) sur ${lessons.length}`;
    }

    function paragraph(title, content, extraClass = "") {
        if (!content) {
            return "";
        }
        return `<section class="card ${extraClass}"><h3>${escape(title)}</h3><p>${escape(content)}</p></section>`;
    }

    function render() {
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
            <nav class="actions" aria-label="Parcourir les notions">
                ${index > 0 ? `<a href="#${lessons[index - 1].id}">Précédent · ${escape(lessons[index - 1].name)}</a>` : ""}
                ${index < lessons.length - 1 ? `<a href="#${lessons[index + 1].id}">Suivant · ${escape(lessons[index + 1].name)}</a>` : ""}
            </nav>`;
        status.textContent = "";
        renderNavigation();
        document.getElementById("copy").addEventListener("click", () => copy(lesson.code));
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

    search.addEventListener("input", renderNavigation);
    window.addEventListener("hashchange", () => {
        render();
        article.focus({ preventScroll: true });
        article.scrollIntoView({ block: "start" });
    });
    render();
})();
