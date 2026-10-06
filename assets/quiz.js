window.CPP_QUIZ = [
    {
        "id": "cas-01",
        "number": 1,
        "title": "Calculer les frais de livraison",
        "domain": "E-commerce",
        "scenario": "Une boutique propose trois calculs de livraison : par distance, par poids ou selon un barème de points relais. Chaque calcul suit des règles différentes. Le panier doit pouvoir recevoir l’un de ces calculs sans contenir une suite de conditions sur tous les transporteurs.",
        "need": "Quel pattern permet de remplacer la manière de calculer tout en gardant le même appel depuis le panier ?",
        "correct": "strategy",
        "why": "Strategy sépare chaque manière de calculer dans un objet interchangeable. Le panier demande un montant au contrat commun ; il ne connaît pas les détails de chaque barème. Ajouter un nouveau calcul demande une nouvelle stratégie, sans réécrire le calcul du panier.",
        "hint": "Le besoin porte sur plusieurs façons de réaliser le même calcul, pas sur les états successifs du panier.",
        "options": [
            {
                "pattern": "command",
                "feedback": "Command représenterait une action à stocker ou à déclencher plus tard. Ici, on cherche des variantes du même calcul."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy sépare chaque manière de calculer dans un objet interchangeable. Le panier demande un montant au contrat commun ; il ne connaît pas les détails de chaque barème. Ajouter un nouveau calcul demande une nouvelle stratégie, sans réécrire le calcul du panier."
            },
            {
                "pattern": "state",
                "feedback": "State représenterait les états du panier, comme brouillon ou payé. Ici, le panier choisit entre plusieurs calculs indépendants de son cycle de vie."
            },
            {
                "pattern": "observer",
                "feedback": "Observer préviendrait des abonnés après un événement. Il ne choisit pas la règle de calcul des frais."
            }
        ]
    },
    {
        "id": "cas-02",
        "number": 2,
        "title": "Brancher un ancien logiciel RH",
        "domain": "Ressources humaines",
        "scenario": "Le portail attend un service qui reçoit un objet Collaborateur et propose creerCompte(). L’ancien logiciel RH exige un matricule, un code de service et un appel nommé insertUser(). Vous ne pouvez pas modifier ce logiciel.",
        "need": "Quel pattern place la traduction des appels et des données à un endroit dédié ?",
        "correct": "adapter",
        "why": "Adapter respecte le contrat attendu par le portail et traduit l’appel vers le logiciel RH. La conversion des données reste dans cet intermédiaire. Le portail continue à parler en collaborateurs plutôt qu’en paramètres propres au logiciel ancien.",
        "hint": "Les deux services font un travail proche, mais leurs contrats ne sont pas compatibles.",
        "options": [
            {
                "pattern": "adapter",
                "feedback": "Adapter respecte le contrat attendu par le portail et traduit l’appel vers le logiciel RH. La conversion des données reste dans cet intermédiaire. Le portail continue à parler en collaborateurs plutôt qu’en paramètres propres au logiciel ancien."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator ajoute un comportement autour du même contrat. Ici, il faut rendre deux contrats différents compatibles."
            },
            {
                "pattern": "facade",
                "feedback": "Facade simplifie généralement un ensemble de services. Le problème précis est ici la traduction vers un contrat existant incompatible."
            },
            {
                "pattern": "proxy",
                "feedback": "Proxy conserverait le même contrat pour contrôler un accès. Il ne suffit pas ici : les paramètres et les noms des opérations doivent être traduits."
            }
        ]
    },
    {
        "id": "cas-03",
        "number": 3,
        "title": "Assembler une campagne de messages",
        "domain": "Marketing",
        "scenario": "Une campagne contient un nom, des destinataires, plusieurs canaux, des pièces jointes et des créneaux facultatifs. Ces éléments arrivent en plusieurs étapes. Il faut obtenir à la fin une campagne distincte de l’objet utilisé pour la préparer.",
        "need": "Quel pattern convient pour rassembler ces éléments avant de remettre l’objet final ?",
        "correct": "builder",
        "why": "Builder conserve les éléments pendant la préparation et fournit la campagne finale lors de build(). Les appels de préparation rendent les choix lisibles et évitent un constructeur avec de nombreux paramètres facultatifs. Les règles de construction peuvent être vérifiées au moment de produire la campagne.",
        "hint": "La préparation se fait par étapes ; vous ne partez pas d’une campagne déjà configurée à copier.",
        "options": [
            {
                "pattern": "prototype",
                "feedback": "Prototype copierait une campagne existante. Le besoin décrit une construction progressive à partir de plusieurs informations."
            },
            {
                "pattern": "singleton",
                "feedback": "Singleton imposerait une instance unique. Plusieurs campagnes doivent au contraire pouvoir être créées."
            },
            {
                "pattern": "abstract-factory",
                "feedback": "Abstract Factory fournirait une famille de produits compatibles. Ici, on assemble un seul produit final."
            },
            {
                "pattern": "builder",
                "feedback": "Builder conserve les éléments pendant la préparation et fournit la campagne finale lors de build(). Les appels de préparation rendent les choix lisibles et évitent un constructeur avec de nombreux paramètres facultatifs. Les règles de construction peuvent être vérifiées au moment de produire la campagne."
            }
        ]
    },
    {
        "id": "cas-04",
        "number": 4,
        "title": "Réagir à une facture créée",
        "domain": "Gestion commerciale",
        "scenario": "Après la création d’une facture, un tableau de bord, un journal et un service de statistiques veulent être prévenus. Ces réactions sont indépendantes et peuvent être ajoutées ou retirées. La facture ne doit pas connaître leurs classes concrètes.",
        "need": "Quel pattern organise la diffusion de cette information aux objets intéressés ?",
        "correct": "observer",
        "why": "Observer permet à des objets de s’inscrire auprès d’une source puis de recevoir ses événements. La source connaît le contrat des abonnés et non le détail de leurs réactions. Le mécanisme peut rester local ; une livraison fiable entre serveurs demanderait des garanties supplémentaires.",
        "hint": "Plusieurs réactions indépendantes suivent une même information publiée.",
        "options": [
            {
                "pattern": "mediator",
                "feedback": "Mediator centraliserait des décisions de coordination entre composants. Ici, chaque abonné réagit indépendamment à une information."
            },
            {
                "pattern": "command",
                "feedback": "Command représente une action à exécuter. Le besoin principal est la diffusion d’un événement à plusieurs intéressés."
            },
            {
                "pattern": "observer",
                "feedback": "Observer permet à des objets de s’inscrire auprès d’une source puis de recevoir ses événements. La source connaît le contrat des abonnés et non le détail de leurs réactions. Le mécanisme peut rester local ; une livraison fiable entre serveurs demanderait des garanties supplémentaires."
            },
            {
                "pattern": "facade",
                "feedback": "Facade offrirait une entrée simple à des services. Elle ne permet pas à elle seule de gérer des abonnés ajoutables et retirables."
            }
        ]
    },
    {
        "id": "cas-05",
        "number": 5,
        "title": "Gérer un prêt de matériel",
        "domain": "Gestion de parc",
        "scenario": "Un prêt passe par Préparé, Remis puis Retourné. Selon la situation actuelle, remettre(), prolonger() ou retourner() ont des comportements et des autorisations différents. Les mêmes tests sur le statut se répètent dans de nombreuses méthodes.",
        "need": "Quel pattern répartit ces comportements selon la situation actuelle du prêt ?",
        "correct": "state",
        "why": "State place les comportements propres à chaque état dans des classes distinctes. Le prêt transmet une action à son état courant, qui la traite ou la refuse. Les transitions restent soumises aux règles métier : le pattern ne les valide pas automatiquement.",
        "hint": "Ce qui change est la situation du même objet au cours de sa vie.",
        "options": [
            {
                "pattern": "strategy",
                "feedback": "Strategy ferait choisir une manière d’effectuer un travail. Ici, les actions permises dépendent du cycle de vie du prêt."
            },
            {
                "pattern": "state",
                "feedback": "State place les comportements propres à chaque état dans des classes distinctes. Le prêt transmet une action à son état courant, qui la traite ou la refuse. Les transitions restent soumises aux règles métier : le pattern ne les valide pas automatiquement."
            },
            {
                "pattern": "chain",
                "feedback": "Une chaîne ferait passer une demande entre plusieurs intervenants. Ici, un seul état courant détermine la réaction du prêt."
            },
            {
                "pattern": "prototype",
                "feedback": "Prototype copie un objet. Il ne répartit pas les comportements selon les états métier."
            }
        ]
    },
    {
        "id": "cas-06",
        "number": 6,
        "title": "Simplifier la préparation d’une arrivée",
        "domain": "Portail interne",
        "scenario": "Un écran prépare une arrivée en réservant du matériel, en demandant des comptes et en créant un suivi. Plusieurs écrans répètent ces appels. Les services existent déjà ; on veut proposer une opération preparerArrivee() facile à utiliser.",
        "need": "Quel pattern fournit ce point d’entrée simple vers plusieurs services ?",
        "correct": "facade",
        "why": "Facade rassemble les appels nécessaires derrière une opération claire pour les écrans. Les services gardent leurs responsabilités propres ; la façade les coordonne. Elle ne transforme pas automatiquement les appels en transaction : les échecs partiels restent à gérer.",
        "hint": "Les contrats existants conviennent ; c’est leur utilisation répétée qui est trop compliquée.",
        "options": [
            {
                "pattern": "facade",
                "feedback": "Facade rassemble les appels nécessaires derrière une opération claire pour les écrans. Les services gardent leurs responsabilités propres ; la façade les coordonne. Elle ne transforme pas automatiquement les appels en transaction : les échecs partiels restent à gérer."
            },
            {
                "pattern": "observer",
                "feedback": "Observer diffuse un événement. Ici, le point d’entrée doit orchestrer explicitement une opération demandée par l’écran."
            },
            {
                "pattern": "composite",
                "feedback": "Composite organise des éléments et des groupes dans un arbre. Les services ne forment pas ce type de structure."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter traduirait un contrat incompatible. Aucun changement de contrat n’est demandé ici."
            }
        ]
    },
    {
        "id": "cas-07",
        "number": 7,
        "title": "Spécialiser la création d’un export",
        "domain": "Reporting",
        "scenario": "Une classe abstraite Rapport définit generer() : récupérer les données, demander un export, puis produire le résultat. Les sous-classes RapportCsv et RapportPdf doivent chacune redéfinir creerExport() pour fournir leur produit, sans réécrire generer().",
        "need": "Quel pattern correspond à ce point de création redéfini par les sous-classes ?",
        "correct": "factory-method",
        "why": "Factory Method laisse une sous-classe préciser le produit créé par une méthode. Le parcours commun du rapport utilise le contrat Export. La partie ciblée ici est bien creerExport(), même si le parcours generer() peut aussi rappeler Template Method.",
        "hint": "Concentrez-vous sur la méthode de création que la sous-classe doit redéfinir.",
        "options": [
            {
                "pattern": "prototype",
                "feedback": "Prototype partirait d’un export existant pour le copier. Le rapport crée ici son produit par une méthode spécialisée."
            },
            {
                "pattern": "builder",
                "feedback": "Builder assemblerait progressivement un export complexe. Ici, une méthode de création choisit le produit concret."
            },
            {
                "pattern": "abstract-factory",
                "feedback": "Abstract Factory crée plusieurs produits cohérents. Le point de création demandé ici concerne un seul type de produit."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method laisse une sous-classe préciser le produit créé par une méthode. Le parcours commun du rapport utilise le contrat Export. La partie ciblée ici est bien creerExport(), même si le parcours generer() peut aussi rappeler Template Method."
            }
        ]
    },
    {
        "id": "cas-08",
        "number": 8,
        "title": "Calculer la taille d’une arborescence",
        "domain": "Gestion documentaire",
        "scenario": "Un espace documentaire contient des fichiers et des dossiers. Chaque dossier peut contenir d’autres dossiers. Le même appel taille() doit fonctionner sur un fichier seul comme sur un dossier complet, en additionnant récursivement les tailles de ses enfants.",
        "need": "Quel pattern donne une opération commune aux éléments simples et aux ensembles ?",
        "correct": "composite",
        "why": "Composite définit un contrat commun pour un élément et pour un groupe d’éléments. Le fichier calcule sa propre taille ; le dossier demande leur taille à ses enfants. La structure peut donc être traitée uniformément, quel que soit son niveau de profondeur.",
        "hint": "La relation importante est un arbre contenant des feuilles et des groupes.",
        "options": [
            {
                "pattern": "visitor",
                "feedback": "Visitor ajoute des opérations à des types déjà établis. Le besoin principal est ici de représenter et traiter uniformément l’arbre."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator enveloppe généralement un objet pour lui ajouter un comportement. Ici, un groupe rassemble plusieurs enfants."
            },
            {
                "pattern": "composite",
                "feedback": "Composite définit un contrat commun pour un élément et pour un groupe d’éléments. Le fichier calcule sa propre taille ; le dossier demande leur taille à ses enfants. La structure peut donc être traitée uniformément, quel que soit son niveau de profondeur."
            },
            {
                "pattern": "iterator",
                "feedback": "Iterator aide à parcourir une collection. Il ne définit pas, à lui seul, le contrat commun aux feuilles et aux groupes."
            }
        ]
    },
    {
        "id": "cas-09",
        "number": 9,
        "title": "Différer les actions d’un éditeur",
        "domain": "Outil de création",
        "scenario": "Un éditeur doit enregistrer des demandes de déplacement, de rotation et de suppression. Chaque demande garde la cible et ses paramètres. Elles doivent pouvoir être placées dans une file puis exécutées plus tard par un composant qui ne connaît pas chaque type d’action.",
        "need": "Quel pattern transforme chaque demande d’action en objet exécutable ?",
        "correct": "command",
        "why": "Command représente une action et ses paramètres dans un objet. La file ne connaît que executer(). Déplacement, rotation et suppression peuvent ainsi être déclenchés de la même manière. Un historique ou une annulation demanderait de prévoir les informations nécessaires en plus.",
        "hint": "Le point central est de conserver une action avant son exécution.",
        "options": [
            {
                "pattern": "memento",
                "feedback": "Memento sauvegarde l’état d’un objet. Il ne représente pas une action à exécuter plus tard."
            },
            {
                "pattern": "command",
                "feedback": "Command représente une action et ses paramètres dans un objet. La file ne connaît que executer(). Déplacement, rotation et suppression peuvent ainsi être déclenchés de la même manière. Un historique ou une annulation demanderait de prévoir les informations nécessaires en plus."
            },
            {
                "pattern": "state",
                "feedback": "State décrit la situation actuelle d’un objet. Il ne sert pas à mettre des actions en file."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy sélectionne une variante d’un même calcul. Ici, on conserve plusieurs actions différentes avec leurs paramètres."
            }
        ]
    },
    {
        "id": "cas-10",
        "number": 10,
        "title": "Changer une suite d’intégration",
        "domain": "SaaS multi-fournisseurs",
        "scenario": "Chaque client choisit la suite A ou la suite B. Pour une même suite, le connecteur d’annuaire et le canal de notification doivent être compatibles. Une fois la suite choisie, le code doit obtenir ces deux outils ensemble sans mélanger les fournisseurs.",
        "need": "Quel pattern fournit cette famille cohérente de produits ?",
        "correct": "abstract-factory",
        "why": "Abstract Factory propose un contrat de création pour plusieurs produits liés. Une fabrique de suite A fournit les deux produits A ; une fabrique B fournit les deux produits B. Le client choisit une famille et utilise les contrats de ses produits.",
        "hint": "Le choix d’un fournisseur engage plusieurs objets qui doivent fonctionner ensemble.",
        "options": [
            {
                "pattern": "abstract-factory",
                "feedback": "Abstract Factory propose un contrat de création pour plusieurs produits liés. Une fabrique de suite A fournit les deux produits A ; une fabrique B fournit les deux produits B. Le client choisit une famille et utilise les contrats de ses produits."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method traite un point de création spécialisé. Le besoin vise ici la cohérence entre plusieurs produits d’une même famille."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter peut aider à intégrer un fournisseur, mais il ne garantit pas à lui seul la sélection d’une famille cohérente de produits."
            },
            {
                "pattern": "builder",
                "feedback": "Builder prépare un objet par étapes. Ici, plusieurs outils distincts sont fournis comme une famille."
            }
        ]
    },
    {
        "id": "cas-11",
        "number": 11,
        "title": "Combiner compression et chiffrement",
        "domain": "Traitement de fichiers",
        "scenario": "Un service écrit un flux. Selon le besoin, on veut l’envelopper avec de la compression, du chiffrement, ou les deux dans un ordre choisi. Chaque enveloppe doit rester utilisable par le même appel ecrire().",
        "need": "Quel pattern permet d’empiler ces comportements autour du service de base ?",
        "correct": "decorator",
        "why": "Decorator respecte le contrat du service qu’il contient, ajoute son traitement puis transmet le travail. On peut composer plusieurs enveloppes sans créer une classe pour chaque combinaison. L’ordre des couches doit être choisi, car il peut changer le résultat.",
        "hint": "Il faut ajouter des traitements combinables autour d’une même opération.",
        "options": [
            {
                "pattern": "adapter",
                "feedback": "Adapter changerait le contrat pour le rendre compatible. Ici, toutes les couches conservent ecrire()."
            },
            {
                "pattern": "bridge",
                "feedback": "Bridge sépare deux axes de variation. Ici, on veut empiler plusieurs couches, éventuellement plusieurs à la fois."
            },
            {
                "pattern": "proxy",
                "feedback": "Proxy contrôle l’accès à un service. Le besoin vise surtout l’ajout de transformations empilables sur le flux."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator respecte le contrat du service qu’il contient, ajoute son traitement puis transmet le travail. On peut composer plusieurs enveloppes sans créer une classe pour chaque combinaison. L’ordre des couches doit être choisi, car il peut changer le résultat."
            }
        ]
    },
    {
        "id": "cas-12",
        "number": 12,
        "title": "Charger un rapport seulement si nécessaire",
        "domain": "Analyse de données",
        "scenario": "Un rapport complet coûte cher à charger. L’écran attend un objet proposant lire(). Un intermédiaire doit offrir cette même méthode, vérifier le droit de lecture puis charger le vrai rapport au premier accès seulement.",
        "need": "Quel pattern interpose ce contrôle et ce chargement différé ?",
        "correct": "proxy",
        "why": "Proxy présente le même contrat que l’objet réel et décide quand lui donner accès. Il peut vérifier un droit et retarder son chargement. L’écran conserve son appel lire(), sans connaître le moment où le rapport coûteux est réellement créé.",
        "hint": "Le contrat ne change pas ; c’est l’accès à l’objet réel qui est maîtrisé.",
        "options": [
            {
                "pattern": "builder",
                "feedback": "Builder assemble un objet par étapes. Le besoin porte sur le moment de charger et d’autoriser l’accès à un objet."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter rendrait compatibles des contrats différents. Le rapport et son intermédiaire ont ici le même contrat."
            },
            {
                "pattern": "proxy",
                "feedback": "Proxy présente le même contrat que l’objet réel et décide quand lui donner accès. Il peut vérifier un droit et retarder son chargement. L’écran conserve son appel lire(), sans connaître le moment où le rapport coûteux est réellement créé."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator ajoute un comportement combinable au service. Ici, l’intention déterminante est de contrôler l’accès au rapport réel et sa création."
            }
        ]
    },
    {
        "id": "cas-13",
        "number": 13,
        "title": "Conserver le parcours d’un import",
        "domain": "Import de données",
        "scenario": "Tous les imports doivent lire, vérifier puis enregistrer, dans cet ordre. Une classe de base fournit ce parcours complet et une vérification commune. Les sous-classes redéfinissent seulement la lecture du CSV ou du JSON.",
        "need": "Quel pattern garde le déroulement commun en laissant des étapes aux sous-classes ?",
        "correct": "template-method",
        "why": "Template Method définit le squelette d’un traitement dans une classe de base. Les sous-classes précisent certaines étapes sans réécrire l’ordre général. Ici, le contrat de lecture varie, tandis que vérifier puis enregistrer reste partagé.",
        "hint": "La variation se fait par héritage à l’intérieur d’un déroulement déjà défini.",
        "options": [
            {
                "pattern": "chain",
                "feedback": "Une chaîne relie des intervenants indépendants. Ici, une classe de base impose un ordre commun aux sous-classes."
            },
            {
                "pattern": "template-method",
                "feedback": "Template Method définit le squelette d’un traitement dans une classe de base. Les sous-classes précisent certaines étapes sans réécrire l’ordre général. Ici, le contrat de lecture varie, tandis que vérifier puis enregistrer reste partagé."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy confierait une variante à un autre objet. Le mécanisme décrit est ici un parcours hérité dont certaines étapes sont redéfinies."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method spécialise la création d’un produit. Le besoin concerne ici les étapes d’un traitement, pas une création."
            }
        ]
    },
    {
        "id": "cas-14",
        "number": 14,
        "title": "Réutiliser un modèle de configuration",
        "domain": "Provisionnement",
        "scenario": "Une configuration de poste comporte de nombreux réglages et une liste d’applications. L’équipe dispose de configurations validées par métier. Elle veut partir d’une copie d’un modèle existant, modifier cette copie et conserver le modèle intact.",
        "need": "Quel pattern utilise l’objet déjà configuré comme point de départ ?",
        "correct": "prototype",
        "why": "Prototype produit un nouvel objet à partir d’un objet existant. La copie démarre avec les réglages du modèle, puis peut évoluer séparément. Pour la liste d’applications et ses éléments, il faut définir explicitement ce qui est recopié afin d’éviter des modifications partagées involontaires.",
        "hint": "Les réglages de départ existent déjà dans un objet que vous voulez reproduire.",
        "options": [
            {
                "pattern": "prototype",
                "feedback": "Prototype produit un nouvel objet à partir d’un objet existant. La copie démarre avec les réglages du modèle, puis peut évoluer séparément. Pour la liste d’applications et ses éléments, il faut définir explicitement ce qui est recopié afin d’éviter des modifications partagées involontaires."
            },
            {
                "pattern": "singleton",
                "feedback": "Singleton conserverait une instance unique. Le besoin est d’obtenir plusieurs configurations distinctes."
            },
            {
                "pattern": "builder",
                "feedback": "Builder rassemble des informations progressivement. Ici, la construction part explicitement de la copie d’un objet complet."
            },
            {
                "pattern": "flyweight",
                "feedback": "Flyweight partagerait des données communes. Ici, on veut justement pouvoir modifier une copie indépendamment du modèle."
            }
        ]
    },
    {
        "id": "cas-15",
        "number": 15,
        "title": "Coordonner un formulaire de réservation",
        "domain": "Interface utilisateur",
        "scenario": "Le choix d’une date change les créneaux proposés, le créneau modifie le prix et certaines options désactivent le bouton de confirmation. Les composants ne doivent plus se référencer mutuellement ; un objet doit décider des mises à jour à réaliser.",
        "need": "Quel pattern centralise cette coordination entre composants ?",
        "correct": "mediator",
        "why": "Mediator reçoit les changements des composants et décide des réactions des autres. Le champ de date ne connaît donc plus directement le sélecteur de créneau ou le bouton. La coordination est rassemblée dans un objet au rôle explicite.",
        "hint": "Il faut prendre des décisions entre composants, pas simplement publier une information à des abonnés indépendants.",
        "options": [
            {
                "pattern": "composite",
                "feedback": "Composite représenterait un arbre d’éléments. La difficulté porte ici sur leurs interactions croisées."
            },
            {
                "pattern": "facade",
                "feedback": "Facade offre une entrée simple vers des services. Ici, ce sont les échanges et décisions entre composants qui doivent être réorganisés."
            },
            {
                "pattern": "observer",
                "feedback": "Observer diffuse des événements à des abonnés. Le besoin exige ici un objet central qui décide des mises à jour entre composants."
            },
            {
                "pattern": "mediator",
                "feedback": "Mediator reçoit les changements des composants et décide des réactions des autres. Le champ de date ne connaît donc plus directement le sélecteur de créneau ou le bouton. La coordination est rassemblée dans un objet au rôle explicite."
            }
        ]
    },
    {
        "id": "cas-16",
        "number": 16,
        "title": "Afficher beaucoup de repères cartographiques",
        "domain": "Cartographie",
        "scenario": "Une carte affiche 200 000 repères. Chaque repère possède ses coordonnées, mais beaucoup partagent exactement le même symbole, la même couleur et le même libellé de type. On veut partager ces descriptions immuables tout en gardant les positions propres à chaque repère.",
        "need": "Quel pattern réduit la duplication de ces données communes ?",
        "correct": "flyweight",
        "why": "Flyweight partage les données communes et stables entre de nombreux objets. Les coordonnées restent propres à chaque repère, tandis qu’une description de type peut être réutilisée. Le partage est pertinent parce que la répétition et le volume sont ici importants.",
        "hint": "Il faut distinguer les données répétées des données propres à chaque occurrence.",
        "options": [
            {
                "pattern": "singleton",
                "feedback": "Singleton imposerait une seule instance d’une classe. Ici, plusieurs descriptions partagées existent, une par type de symbole."
            },
            {
                "pattern": "prototype",
                "feedback": "Prototype créerait des copies indépendantes. Cela ne supprime pas la duplication des données que l’on veut partager."
            },
            {
                "pattern": "flyweight",
                "feedback": "Flyweight partage les données communes et stables entre de nombreux objets. Les coordonnées restent propres à chaque repère, tandis qu’une description de type peut être réutilisée. Le partage est pertinent parce que la répétition et le volume sont ici importants."
            },
            {
                "pattern": "composite",
                "feedback": "Composite organise des groupes et des feuilles. Il ne traite pas le partage de descriptions identiques."
            }
        ]
    },
    {
        "id": "cas-17",
        "number": 17,
        "title": "Orienter un ticket vers le bon support",
        "domain": "Assistance",
        "scenario": "Un ticket passe d’abord par le support de proximité, puis par l’équipe spécialisée, puis par l’expert. Chaque niveau peut le prendre en charge ; sinon il le transmet au suivant. Le parcours s’arrête au premier niveau capable de traiter le ticket.",
        "need": "Quel pattern représente ce passage entre intervenants successifs ?",
        "correct": "chain",
        "why": "Chain of Responsibility relie des intervenants par un lien vers le suivant. Chacun décide de traiter la demande ou de la transmettre. Le client n’a pas à connaître à l’avance celui qui la traitera. Il faut aussi définir le résultat si aucun niveau ne peut intervenir.",
        "hint": "La demande peut passer de main en main et tous les intervenants ne la traitent pas forcément.",
        "options": [
            {
                "pattern": "observer",
                "feedback": "Observer préviendrait tous les abonnés concernés. Ici, un seul intervenant doit prendre en charge le ticket et arrêter le parcours."
            },
            {
                "pattern": "chain",
                "feedback": "Chain of Responsibility relie des intervenants par un lien vers le suivant. Chacun décide de traiter la demande ou de la transmettre. Le client n’a pas à connaître à l’avance celui qui la traitera. Il faut aussi définir le résultat si aucun niveau ne peut intervenir."
            },
            {
                "pattern": "state",
                "feedback": "State représenterait le statut du ticket. Le besoin décrit l’enchaînement des équipes susceptibles de le traiter."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy choisirait une seule manière de traiter avant l’appel. Ici, la demande cherche son intervenant en parcourant une chaîne."
            }
        ]
    },
    {
        "id": "cas-18",
        "number": 18,
        "title": "Retrouver une ancienne version de texte",
        "domain": "Édition de documents",
        "scenario": "Un éditeur doit proposer Annuler. Avant chaque modification, il peut enregistrer une version complète du contenu. On ne veut pas décrire une opération inverse pour chaque type de modification ; on veut restaurer une valeur sauvegardée.",
        "need": "Quel pattern correspond à cette sauvegarde puis restauration d’état ?",
        "correct": "memento",
        "why": "Memento conserve un instantané de l’état pour permettre son rétablissement. L’objet à sauvegarder contrôle les informations placées dans ce souvenir. L’historique peut contenir plusieurs souvenirs, avec un coût mémoire à surveiller pour les documents volumineux.",
        "hint": "On conserve ce que l’objet était, plutôt que la description d’une action inverse.",
        "options": [
            {
                "pattern": "memento",
                "feedback": "Memento conserve un instantané de l’état pour permettre son rétablissement. L’objet à sauvegarder contrôle les informations placées dans ce souvenir. L’historique peut contenir plusieurs souvenirs, avec un coût mémoire à surveiller pour les documents volumineux."
            },
            {
                "pattern": "state",
                "feedback": "State change le comportement selon le statut courant. Il n’enregistre pas automatiquement les anciennes valeurs du document."
            },
            {
                "pattern": "command",
                "feedback": "Command représente une action. Il pourrait servir à une autre conception d’Annuler, mais le besoin impose ici des instantanés complets."
            },
            {
                "pattern": "prototype",
                "feedback": "Prototype vise à créer de nouveaux objets à partir de modèles. Ici, l’objectif est de mémoriser puis restaurer l’état d’un objet suivi."
            }
        ]
    },
    {
        "id": "cas-19",
        "number": 19,
        "title": "Masquer la pagination d’un catalogue",
        "domain": "API de données",
        "scenario": "Un service distant livre les produits par pages. Le code appelant doit pouvoir les parcourir un par un avec un mécanisme standard, sans gérer lui-même les numéros de page ni connaître la collection interne du connecteur.",
        "need": "Quel pattern fournit cette abstraction de parcours ?",
        "correct": "iterator",
        "why": "Iterator sépare le parcours de la représentation de la collection. Un itérateur peut récupérer la page suivante quand c’est nécessaire, tout en exposant les éléments un par un. Les erreurs réseau et la cohérence des pages restent des problèmes à traiter en complément.",
        "hint": "Le sujet est la manière de parcourir des éléments sans dévoiler leur stockage.",
        "options": [
            {
                "pattern": "observer",
                "feedback": "Observer diffuse des changements à des abonnés. Ici, un appelant souhaite parcourir une suite d’éléments."
            },
            {
                "pattern": "facade",
                "feedback": "Facade pourrait simplifier une API, mais elle ne définit pas à elle seule un parcours élément par élément compatible avec les boucles du langage."
            },
            {
                "pattern": "composite",
                "feedback": "Composite organise un arbre d’objets. Le catalogue paginé ne nécessite pas une relation feuille-groupe."
            },
            {
                "pattern": "iterator",
                "feedback": "Iterator sépare le parcours de la représentation de la collection. Un itérateur peut récupérer la page suivante quand c’est nécessaire, tout en exposant les éléments un par un. Les erreurs réseau et la cohérence des pages restent des problèmes à traiter en complément."
            }
        ]
    },
    {
        "id": "cas-20",
        "number": 20,
        "title": "Ajouter des analyses sur des demandes stables",
        "domain": "Pilotage métier",
        "scenario": "Le modèle possède trois types de demandes dont la liste évolue rarement. L’équipe ajoute souvent des opérations : chiffrage, bilan carbone et rapport d’audit. Chaque opération doit traiter les trois types sans disperser son code dans toutes leurs classes.",
        "need": "Quel pattern regroupe une nouvelle opération couvrant tous les types ?",
        "correct": "visitor",
        "why": "Visitor place une opération transversale dans un objet séparé. Chaque type de demande reçoit le visiteur et l’oriente vers la méthode adaptée. Ajouter une analyse devient facile ; ajouter un nouveau type de demande impose en revanche de compléter les visiteurs.",
        "hint": "Les types restent stables, tandis que de nouvelles opérations sur tous ces types sont fréquentes.",
        "options": [
            {
                "pattern": "decorator",
                "feedback": "Decorator ajoute un comportement autour d’un objet du même contrat. Il ne regroupe pas naturellement les traitements propres à chaque type de demande."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method spécialise une création d’objet. Aucune création de produit n’est le problème principal ici."
            },
            {
                "pattern": "visitor",
                "feedback": "Visitor place une opération transversale dans un objet séparé. Chaque type de demande reçoit le visiteur et l’oriente vers la méthode adaptée. Ajouter une analyse devient facile ; ajouter un nouveau type de demande impose en revanche de compléter les visiteurs."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy choisit une variante d’un même travail. Le besoin vise ici une nouvelle opération capable de traiter plusieurs types stables."
            }
        ]
    },
    {
        "id": "cas-21",
        "number": 21,
        "title": "Faire évoluer alertes et canaux séparément",
        "domain": "Supervision",
        "scenario": "Il existe déjà une famille de classes d’alertes métier : AlerteStock et AlerteIncident, avec leurs logiques propres. Les modes de transmission, courriel ou SMS, forment une autre famille. Toute alerte doit pouvoir utiliser tout mode sans créer AlerteStockSms, AlerteStockCourriel et toutes les autres combinaisons.",
        "need": "Quel pattern sépare explicitement ces deux familles qui évoluent indépendamment ?",
        "correct": "bridge",
        "why": "Bridge sépare l’abstraction métier de son mécanisme de réalisation. Une alerte conserve une référence vers un contrat de transmission. Ajouter un type d’alerte ne multiplie plus les classes de canaux ; ajouter un canal ne multiplie plus les types d’alertes.",
        "hint": "Deux familles doivent évoluer librement sans produire une classe pour chaque combinaison.",
        "options": [
            {
                "pattern": "decorator",
                "feedback": "Decorator empile des comportements autour d’un même contrat. Ici, les alertes et les transmissions ont des responsabilités et contrats différents."
            },
            {
                "pattern": "bridge",
                "feedback": "Bridge sépare l’abstraction métier de son mécanisme de réalisation. Une alerte conserve une référence vers un contrat de transmission. Ajouter un type d’alerte ne multiplie plus les classes de canaux ; ajouter un canal ne multiplie plus les types d’alertes."
            },
            {
                "pattern": "composite",
                "feedback": "Composite représente des ensembles récursifs. Il ne résout pas la multiplication des combinaisons entre deux familles."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter traduit un contrat existant incompatible. Ici, les deux familles sont organisées volontairement pour évoluer séparément."
            }
        ]
    },
    {
        "id": "cas-22",
        "number": 22,
        "title": "Évaluer un petit langage de règles",
        "domain": "Gestion des droits",
        "scenario": "Les règles utilisent un vocabulaire volontairement réduit : un droit, ET, OU et NON. Une règle est déjà fournie sous forme d’arbre d’objets. Chaque nœud doit savoir évaluer sa partie de la règle pour un utilisateur.",
        "need": "Quel pattern attribue un sens calculable aux éléments de ce petit langage ?",
        "correct": "interpreter",
        "why": "Interpreter représente les éléments d’un langage par des objets capables de s’évaluer. Une feuille teste un droit ; ET ou OU combinent les résultats de leurs enfants. L’énoncé fournit déjà l’arbre : transformer un texte libre en cet arbre serait une étape supplémentaire.",
        "hint": "L’arbre ne sert pas seulement à stocker des éléments : il représente une expression à évaluer.",
        "options": [
            {
                "pattern": "interpreter",
                "feedback": "Interpreter représente les éléments d’un langage par des objets capables de s’évaluer. Une feuille teste un droit ; ET ou OU combinent les résultats de leurs enfants. L’énoncé fournit déjà l’arbre : transformer un texte libre en cet arbre serait une étape supplémentaire."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy remplace une manière de réaliser un travail. Il ne décrit pas la grammaire et l’évaluation d’une expression composée."
            },
            {
                "pattern": "chain",
                "feedback": "Une chaîne suit des intervenants successifs. Une règle avec ET, OU et NON possède une structure d’expression plus riche."
            },
            {
                "pattern": "composite",
                "feedback": "Composite peut expliquer la forme de l’arbre. Le besoin plus précis est ici d’interpréter les éléments d’un langage de règles."
            }
        ]
    },
    {
        "id": "cas-23",
        "number": 23,
        "title": "Garantir une instance dans un processus",
        "domain": "Application locale",
        "scenario": "Dans une application locale, une ancienne bibliothèque impose qu’un pilote matériel soit encapsulé par un seul objet de configuration pendant toute la vie du processus. On exige un constructeur non public et un point d’accès qui retourne toujours cette même instance. Aucune unicité entre machines n’est demandée.",
        "need": "Quel pattern correspond précisément à cette contrainte d’instance unique accessible par la classe ?",
        "correct": "singleton",
        "why": "Singleton contrôle la construction et fournit un accès commun à une instance conservée par la classe. La portée décrite est le processus, pas un ensemble de serveurs. Dans une autre conception, créer l’objet au démarrage puis le transmettre explicitement peut être préférable pour les tests.",
        "hint": "Le besoin précise à la fois une instance unique et un accès contrôlé fourni par la classe.",
        "options": [
            {
                "pattern": "flyweight",
                "feedback": "Flyweight partage plusieurs objets par valeur ou par clé. Ici, on exige précisément une seule instance de cette classe."
            },
            {
                "pattern": "prototype",
                "feedback": "Prototype créerait des copies. Cela irait à l’encontre de l’unicité demandée."
            },
            {
                "pattern": "builder",
                "feedback": "Builder contrôle les étapes d’assemblage, sans imposer qu’une seule instance existe dans le processus."
            },
            {
                "pattern": "singleton",
                "feedback": "Singleton contrôle la construction et fournit un accès commun à une instance conservée par la classe. La portée décrite est le processus, pas un ensemble de serveurs. Dans une autre conception, créer l’objet au démarrage puis le transmettre explicitement peut être préférable pour les tests."
            }
        ]
    },
    {
        "id": "cas-24",
        "number": 24,
        "title": "Séparer écran et règles métier",
        "domain": "Application de gestion",
        "scenario": "Une demande HTTP de soumission doit être reçue, appliquée au dossier puis présentée sur une page. On veut que la règle de soumission reste dans le modèle métier et que le code de présentation ne prenne pas cette décision.",
        "need": "Quel modèle organise ces trois responsabilités ?",
        "correct": "mvc",
        "why": "MVC distingue le contrôleur qui reçoit l’action, le modèle qui porte l’état et les règles métier, et la vue qui prépare la présentation. Le contrôleur coordonne l’appel au métier sans absorber toutes ses règles. MVC complète ici les patterns GoF sans faire partie de leur liste.",
        "hint": "Cherchez une organisation entre réception de l’action, métier et présentation.",
        "options": [
            {
                "pattern": "mediator",
                "feedback": "Mediator coordonne des composants qui interagissent. Le besoin vise ici l’organisation générale d’une fonctionnalité entre métier et présentation."
            },
            {
                "pattern": "facade",
                "feedback": "Facade simplifie l’utilisation de services. Elle n’impose pas la séparation entre modèle, vue et contrôleur décrite ici."
            },
            {
                "pattern": "mvc",
                "feedback": "MVC distingue le contrôleur qui reçoit l’action, le modèle qui porte l’état et les règles métier, et la vue qui prépare la présentation. Le contrôleur coordonne l’appel au métier sans absorber toutes ses règles. MVC complète ici les patterns GoF sans faire partie de leur liste."
            },
            {
                "pattern": "state",
                "feedback": "State peut servir dans le modèle pour gérer les statuts. Il ne sépare pas les responsabilités de l’écran et du métier."
            }
        ]
    },
    {
        "id": "cas-25",
        "number": 25,
        "title": "Représenter une plage de réservation",
        "domain": "Planification",
        "scenario": "Une plage horaire possède un début et une fin, avec début strictement avant fin. Une fois créée, elle ne doit pas changer. Deux plages ayant les mêmes bornes sont considérées égales ; aucun identifiant propre ne les distingue.",
        "need": "Quelle forme d’objet métier convient à cette donnée et à ses règles ?",
        "correct": "value-object",
        "why": "Un Value Object est défini par ses valeurs plutôt que par une identité. Il peut protéger l’ordre des bornes dès sa création et rester immuable. Deux instances distinctes peuvent donc être égales si leurs débuts et fins sont égaux. Ce concept complète les patterns GoF.",
        "hint": "La question insiste sur les valeurs, l’égalité et l’absence d’identité propre.",
        "options": [
            {
                "pattern": "memento",
                "feedback": "Memento sauvegarde un état pour le restaurer. La plage est ici une valeur métier stable, sans mécanisme de retour en arrière."
            },
            {
                "pattern": "value-object",
                "feedback": "Un Value Object est défini par ses valeurs plutôt que par une identité. Il peut protéger l’ordre des bornes dès sa création et rester immuable. Deux instances distinctes peuvent donc être égales si leurs débuts et fins sont égaux. Ce concept complète les patterns GoF."
            },
            {
                "pattern": "singleton",
                "feedback": "Singleton ne doit fournir qu’une instance. Plusieurs plages différentes doivent pouvoir exister."
            },
            {
                "pattern": "prototype",
                "feedback": "Prototype concerne la copie d’un objet existant. Il ne définit pas à lui seul l’égalité par valeur et les invariants de cette plage."
            }
        ]
    },
    {
        "id": "cas-26",
        "number": 26,
        "title": "Préparer une requête de recherche complexe",
        "domain": "Catalogue B2B",
        "scenario": "Une recherche peut accumuler des filtres, des colonnes de tri, des limites et une sélection de champs. Un objet prépare ces choix au fil des écrans, puis remet une requête finale indépendante, cohérente et prête à envoyer.",
        "need": "Quel pattern rend cette construction progressive explicite ?",
        "correct": "builder",
        "why": "Builder sépare la collecte des choix et la création de la requête finale. Les opérations de préparation restent lisibles et la cohérence peut être vérifiée à la construction. Le builder ne devrait pas modifier une requête déjà remise si de nouveaux filtres lui sont ajoutés.",
        "hint": "Le problème porte sur l’assemblage d’un objet, pas sur la manière de parcourir son résultat.",
        "options": [
            {
                "pattern": "builder",
                "feedback": "Builder sépare la collecte des choix et la création de la requête finale. Les opérations de préparation restent lisibles et la cohérence peut être vérifiée à la construction. Le builder ne devrait pas modifier une requête déjà remise si de nouveaux filtres lui sont ajoutés."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy changerait l’algorithme de recherche. Le besoin consiste à construire les paramètres d’une requête."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method spécialise le choix du produit créé dans une sous-classe. Ici, les valeurs d’un même produit s’assemblent en plusieurs étapes."
            },
            {
                "pattern": "iterator",
                "feedback": "Iterator parcourt les résultats d’une recherche. Il ne prépare pas les filtres et tris de la requête."
            }
        ]
    },
    {
        "id": "cas-27",
        "number": 27,
        "title": "Actualiser plusieurs vues d’un match",
        "domain": "Suivi sportif",
        "scenario": "Le score d’un match change. Un écran public, un résumé statistique et une trace de journal doivent pouvoir s’inscrire aux changements. Aucun de ces objets ne décide comment mettre à jour les autres.",
        "need": "Quel pattern permet ces réactions indépendantes aux changements du score ?",
        "correct": "observer",
        "why": "Observer découple la source des changements et les objets qui réagissent. Chaque vue s’abonne, reçoit la nouvelle information et réalise sa propre mise à jour. On peut ajouter une autre réaction sans ajouter un appel concret dans la source du score.",
        "hint": "Aucun coordinateur ne choisit les réactions des autres vues.",
        "options": [
            {
                "pattern": "proxy",
                "feedback": "Proxy contrôlerait l’accès à un objet. Il n’organise pas des abonnements multiples aux changements."
            },
            {
                "pattern": "mediator",
                "feedback": "Mediator centraliserait des décisions entre les vues. Ici, leurs réactions doivent rester indépendantes."
            },
            {
                "pattern": "state",
                "feedback": "State représenterait les phases du match et leurs comportements. Le besoin concerne la diffusion d’un changement de donnée."
            },
            {
                "pattern": "observer",
                "feedback": "Observer découple la source des changements et les objets qui réagissent. Chaque vue s’abonne, reçoit la nouvelle information et réalise sa propre mise à jour. On peut ajouter une autre réaction sans ajouter un appel concret dans la source du score."
            }
        ]
    },
    {
        "id": "cas-28",
        "number": 28,
        "title": "Mettre des impressions en attente",
        "domain": "Logistique",
        "scenario": "Plusieurs postes demandent des impressions d’étiquettes. Chaque demande garde son imprimante, son document et son nombre de copies. Une file doit pouvoir les conserver puis déclencher leur exécution plus tard, avec un appel commun.",
        "need": "Quel pattern donne une représentation objet à chaque demande d’impression ?",
        "correct": "command",
        "why": "Command conserve l’action à effectuer et ses paramètres. La file manipule un contrat commun sans savoir comment chaque imprimante travaille. Si la file doit survivre à un arrêt, sa persistance et la prévention des doubles impressions devront être ajoutées.",
        "hint": "La demande doit exister comme un objet avant de produire son effet.",
        "options": [
            {
                "pattern": "memento",
                "feedback": "Memento stockerait un ancien état. Une demande d’impression décrit ici une action à accomplir."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy choisirait une manière d’imprimer. Ici, chaque objet représente une demande particulière à exécuter plus tard."
            },
            {
                "pattern": "command",
                "feedback": "Command conserve l’action à effectuer et ses paramètres. La file manipule un contrat commun sans savoir comment chaque imprimante travaille. Si la file doit survivre à un arrêt, sa persistance et la prévention des doubles impressions devront être ajoutées."
            },
            {
                "pattern": "facade",
                "feedback": "Facade pourrait rendre un appel d’impression simple, mais ne représente pas à elle seule chaque action stockée dans la file."
            }
        ]
    },
    {
        "id": "cas-29",
        "number": 29,
        "title": "Uniformiser deux services de stockage",
        "domain": "Cloud",
        "scenario": "Le code métier utilise stocker(chemin, contenu). Un fournisseur exige putObject(bucket, key, bytes) et l’autre uploadFile(nom, flux). Des intermédiaires doivent convertir les paramètres et les erreurs pour conserver le contrat métier existant.",
        "need": "Quel pattern isole les différences de contrats des fournisseurs ?",
        "correct": "adapter",
        "why": "Adapter fait correspondre chaque bibliothèque au contrat attendu par le métier. Les conversions de chemin, contenu et erreurs restent proches du fournisseur. Le client travaille avec le même contrat sans reprendre les détails de chaque API.",
        "hint": "Il faut traduire des interfaces techniques différentes vers une interface métier déjà définie.",
        "options": [
            {
                "pattern": "decorator",
                "feedback": "Decorator ajoute un comportement derrière un même contrat. Ici, l’opération et les paramètres doivent d’abord être traduits."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter fait correspondre chaque bibliothèque au contrat attendu par le métier. Les conversions de chemin, contenu et erreurs restent proches du fournisseur. Le client travaille avec le même contrat sans reprendre les détails de chaque API."
            },
            {
                "pattern": "proxy",
                "feedback": "Proxy garderait le même contrat que l’objet qu’il représente. Ici, les contrats des fournisseurs sont différents de celui attendu."
            },
            {
                "pattern": "bridge",
                "feedback": "Bridge organise deux axes de variation indépendants. L’énoncé demande avant tout de rendre des contrats existants compatibles."
            }
        ]
    },
    {
        "id": "cas-30",
        "number": 30,
        "title": "Encadrer le traitement d’un remboursement",
        "domain": "Service client",
        "scenario": "Un dossier de remboursement passe par À étudier, Approuvé, Payé ou Refusé. approuver(), payer() et refuser() doivent se comporter différemment selon l’étape actuelle. Une fois payé, un nouvel appel payer() doit être refusé.",
        "need": "Quel pattern distribue les comportements selon l’étape actuelle du dossier ?",
        "correct": "state",
        "why": "State représente la situation courante par un objet auquel le dossier transmet ses actions. Les états autorisent ou refusent ces actions et peuvent conduire vers un nouvel état. La prévention d’un double paiement entre appels concurrents exige aussi des garanties techniques adaptées.",
        "hint": "Les règles dépendent de l’histoire et de la situation actuelle d’un même dossier.",
        "options": [
            {
                "pattern": "state",
                "feedback": "State représente la situation courante par un objet auquel le dossier transmet ses actions. Les états autorisent ou refusent ces actions et peuvent conduire vers un nouvel état. La prévention d’un double paiement entre appels concurrents exige aussi des garanties techniques adaptées."
            },
            {
                "pattern": "chain",
                "feedback": "Une chaîne ferait circuler une demande entre des intervenants. L’énoncé concerne les états successifs d’un seul dossier."
            },
            {
                "pattern": "command",
                "feedback": "Command peut représenter payer() comme une action, mais ne répartit pas à elle seule les comportements selon l’état courant."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy permettrait de choisir une méthode de calcul du remboursement. Ici, le comportement dépend de son cycle de traitement."
            }
        ]
    },
    {
        "id": "cas-31",
        "number": 31,
        "title": "Ajouter des options à un lecteur audio",
        "domain": "Média",
        "scenario": "Un lecteur de base reçoit un signal et le restitue. On veut lui ajouter une normalisation du volume, une réduction du bruit ou les deux. Chaque traitement enveloppe un autre lecteur et expose la même opération lire(), sans modifier le lecteur de base.",
        "need": "Quel pattern correspond à ces couches de traitement combinables ?",
        "correct": "decorator",
        "why": "Decorator conserve le contrat du lecteur et ajoute un traitement autour de l’objet qu’il contient. Les options se combinent par enveloppement au lieu d’exiger une sous-classe pour chaque combinaison. Il faut définir l’ordre des traitements et leurs effets.",
        "hint": "Une option peut envelopper une autre option ; toutes restent appelées de la même manière.",
        "options": [
            {
                "pattern": "composite",
                "feedback": "Composite rassemble plusieurs enfants dans un groupe. Chaque option décrite enveloppe un autre lecteur pour enrichir son comportement."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy choisit une variante d’un travail. Ici, plusieurs traitements doivent pouvoir être empilés autour du même objet."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter modifierait le contrat utilisé. Les options et le lecteur ont déjà le même contrat."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator conserve le contrat du lecteur et ajoute un traitement autour de l’objet qu’il contient. Les options se combinent par enveloppement au lieu d’exiger une sous-classe pour chaque combinaison. Il faut définir l’ordre des traitements et leurs effets."
            }
        ]
    },
    {
        "id": "cas-32",
        "number": 32,
        "title": "Éviter des lectures distantes identiques",
        "domain": "Catalogue distribué",
        "scenario": "Un client appelle lireProduit(id) sur un service distant coûteux. Un représentant local doit offrir ce même contrat, réutiliser une valeur déjà chargée si elle est encore valable, sinon déléguer au service réel. Le contenu retourné n’est pas enrichi.",
        "need": "Quel pattern représente le service et contrôle le recours à l’accès distant ?",
        "correct": "proxy",
        "why": "Proxy peut interposer un cache derrière le même contrat que le service réel. Il décide si l’accès distant est nécessaire. La durée de validité et l’invalidation restent des règles à définir ; garder une valeur sans limite risquerait de retourner une information périmée.",
        "hint": "Le résultat reste celui du service ; l’intermédiaire décide s’il faut réellement y accéder.",
        "options": [
            {
                "pattern": "flyweight",
                "feedback": "Flyweight partage des données intrinsèques répétées entre de nombreux objets. Ici, on évite des lectures distantes par une politique de cache."
            },
            {
                "pattern": "decorator",
                "feedback": "Un décorateur pourrait techniquement porter certains mécanismes, mais l’intention décrite est ici de représenter le service et de contrôler son accès par un cache."
            },
            {
                "pattern": "proxy",
                "feedback": "Proxy peut interposer un cache derrière le même contrat que le service réel. Il décide si l’accès distant est nécessaire. La durée de validité et l’invalidation restent des règles à définir ; garder une valeur sans limite risquerait de retourner une information périmée."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter ferait la traduction entre contrats. Le client et le représentant utilisent ici exactement le même contrat."
            }
        ]
    },
    {
        "id": "cas-33",
        "number": 33,
        "title": "Créer des widgets d’une même plateforme",
        "domain": "Interface multiplateforme",
        "scenario": "Une application doit créer des boutons, menus et boîtes de dialogue pour la plateforme A ou B. Tous les widgets d’un écran doivent venir de la même plateforme. Le client veut choisir la plateforme une fois puis demander chacun des widgets.",
        "need": "Quel pattern garantit la création de cette famille de produits compatibles ?",
        "correct": "abstract-factory",
        "why": "Abstract Factory regroupe les opérations de création d’une famille. Une fabrique de plateforme A produit ses boutons, menus et dialogues ; une autre produit ceux de B. Les écrans utilisent les contrats des produits et gardent un choix de famille cohérent.",
        "hint": "Il n’y a pas un seul produit à choisir : plusieurs produits doivent rester de la même famille.",
        "options": [
            {
                "pattern": "facade",
                "feedback": "Facade simplifie l’appel de services existants. Le problème central porte sur la création de plusieurs produits compatibles."
            },
            {
                "pattern": "abstract-factory",
                "feedback": "Abstract Factory regroupe les opérations de création d’une famille. Une fabrique de plateforme A produit ses boutons, menus et dialogues ; une autre produit ceux de B. Les écrans utilisent les contrats des produits et gardent un choix de famille cohérent."
            },
            {
                "pattern": "factory-method",
                "feedback": "Factory Method spécialise un point de création. Le besoin demande ici une famille entière de widgets cohérents."
            },
            {
                "pattern": "builder",
                "feedback": "Builder assemblerait progressivement un seul objet. Ici, la fabrique fournit plusieurs widgets distincts et compatibles."
            }
        ]
    },
    {
        "id": "cas-34",
        "number": 34,
        "title": "Valider un dépôt de document",
        "domain": "Gestion documentaire",
        "scenario": "Avant d’accepter un document, il faut contrôler sa taille, son format puis son contenu. Les contrôles doivent pouvoir être réordonnés ou ajoutés selon l’espace de dépôt. Dans cette version, le premier contrôle en échec arrête le parcours.",
        "need": "Quel pattern compose ce parcours de contrôles indépendants ?",
        "correct": "chain",
        "why": "Chain of Responsibility permet à chaque contrôle de décider de refuser ou de transmettre la demande au suivant. La configuration de la chaîne peut varier selon le contexte sans réécrire un bloc unique de vérifications. Collecter toutes les erreurs demanderait une autre politique de parcours.",
        "hint": "Plusieurs vérifications se suivent, et un refus peut interrompre la transmission.",
        "options": [
            {
                "pattern": "chain",
                "feedback": "Chain of Responsibility permet à chaque contrôle de décider de refuser ou de transmettre la demande au suivant. La configuration de la chaîne peut varier selon le contexte sans réécrire un bloc unique de vérifications. Collecter toutes les erreurs demanderait une autre politique de parcours."
            },
            {
                "pattern": "observer",
                "feedback": "Observer diffuse une information à des abonnés. Ici, la progression vers le contrôle suivant dépend du résultat du précédent."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy sélectionnerait une seule manière de travailler. Ici, plusieurs contrôles participent successivement au même parcours."
            },
            {
                "pattern": "template-method",
                "feedback": "Template Method fixe un squelette dans une classe de base. Ici, le parcours doit être assemblé à partir de contrôles indépendants et réordonnables."
            }
        ]
    },
    {
        "id": "cas-35",
        "number": 35,
        "title": "Exporter plusieurs documents dans plusieurs formats",
        "domain": "Gestion administrative",
        "scenario": "Une application possède déjà des classes de documents : Facture, BonLivraison et Devis. Elle ajoute indépendamment les rendus HTML, PDF et texte. Un document doit pouvoir recevoir un rendu sans créer une sous-classe pour chaque paire document-format.",
        "need": "Quel pattern sépare ces deux dimensions de conception ?",
        "correct": "bridge",
        "why": "Bridge fait collaborer la famille des documents avec un contrat de rendu, au lieu de les fusionner dans une hiérarchie de combinaisons. Un nouveau document réutilise les rendus existants ; un nouveau rendu peut servir les documents existants qui respectent ce contrat.",
        "hint": "Les types de documents et les formats constituent deux familles qui doivent évoluer séparément.",
        "options": [
            {
                "pattern": "abstract-factory",
                "feedback": "Abstract Factory fournit des familles de produits cohérents. Ici, il faut justement pouvoir combiner librement tous les documents avec tous les rendus."
            },
            {
                "pattern": "decorator",
                "feedback": "Decorator superposerait des comportements sur un même contrat. Ici, le document et le rendu ont des rôles distincts."
            },
            {
                "pattern": "adapter",
                "feedback": "Adapter réconcilierait des contrats déjà incompatibles. L’enjeu est ici de concevoir deux familles indépendantes sans multiplier leurs combinaisons."
            },
            {
                "pattern": "bridge",
                "feedback": "Bridge fait collaborer la famille des documents avec un contrat de rendu, au lieu de les fusionner dans une hiérarchie de combinaisons. Un nouveau document réutilise les rendus existants ; un nouveau rendu peut servir les documents existants qui respectent ce contrat."
            }
        ]
    },
    {
        "id": "cas-36",
        "number": 36,
        "title": "Changer la manière de répartir des tâches",
        "domain": "Ordonnancement",
        "scenario": "Une équipe répartit des tâches soit selon la compétence, soit selon la charge, soit selon une priorité métier. Ces règles effectuent des calculs différents sur les mêmes entrées. Le service de répartition doit pouvoir recevoir l’une de ces règles, sans changer de statut métier.",
        "need": "Quel pattern rend ces règles de répartition interchangeables ?",
        "correct": "strategy",
        "why": "Strategy sépare les différentes règles de répartition derrière un contrat commun. Le service délègue la décision à la règle qu’il reçoit. Le choix porte sur la manière de calculer la répartition, et non sur un état successif du service.",
        "hint": "Le même service fait le même travail, mais avec plusieurs règles de calcul possibles.",
        "options": [
            {
                "pattern": "command",
                "feedback": "Command stocke une action à déclencher. Ici, on choisit l’algorithme de répartition utilisé au moment du calcul."
            },
            {
                "pattern": "state",
                "feedback": "State est adapté aux comportements dépendant du cycle de vie. Le service ne change pas d’état ; il reçoit une règle de calcul."
            },
            {
                "pattern": "strategy",
                "feedback": "Strategy sépare les différentes règles de répartition derrière un contrat commun. Le service délègue la décision à la règle qu’il reçoit. Le choix porte sur la manière de calculer la répartition, et non sur un état successif du service."
            },
            {
                "pattern": "chain",
                "feedback": "Une chaîne ferait examiner la demande par plusieurs intervenants successifs. Ici, une seule règle choisie réalise le calcul."
            }
        ]
    }
];
