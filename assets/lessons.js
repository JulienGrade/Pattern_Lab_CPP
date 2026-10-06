window.CPP_LESSONS = [
    {
        "id": "bases-classe-objet",
        "name": "Classe et objet",
        "family": "bases",
        "summary": "La classe décrit. L’objet existe avec ses propres valeurs.",
        "situation": "Deux instances, deux valeurs",
        "reading": "Le constructeur initialise nom_ pour chaque objet. lea et karim partagent le même type, mais chacun possède sa propre chaîne.",
        "limit": "Lea et Karim sont construits directement par valeur. Ils sont détruits automatiquement à la fin de main.",
        "code": "#include <iostream>\n#include <string>\n#include <utility>\n\nclass Collaborateur {\npublic:\n    explicit Collaborateur(std::string nom) : nom_(std::move(nom)) {\n    }\n    const std::string &nom() const {\n        return nom_;\n    }\n\nprivate:\n    std::string nom_;\n};\n\nint main() {\n    Collaborateur lea{\"Lea\"};\n    Collaborateur karim{\"Karim\"};\n    std::cout << lea.nom() << ' ' << karim.nom() << '\\n';\n}\n",
        "output": "Lea Karim\n",
        "when": "",
        "compare": "",
        "case": "Un annuaire contient deux collaborateurs avec des noms différents. Le programme doit représenter deux personnes indépendantes avec une même structure.",
        "decision": "Le constructeur est appelé une fois pour chaque objet. nom_ appartient à l’instance consultée.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-classe-objet.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": []
            }
        ]
    },
    {
        "id": "bases-membres",
        "name": "Attributs et opérations",
        "family": "bases",
        "summary": "Un attribut conserve l’état. Une méthode consulte ou transforme cet état.",
        "situation": "L’état change par une opération",
        "reading": "incrementer() modifie valeur_. valeur() est une consultation const qui renvoie l’entier courant.",
        "limit": "Un entier privé empêche l’appelant de modifier directement la représentation.",
        "code": "#include <iostream>\n\nclass Compteur {\npublic:\n    void incrementer() {\n        ++valeur_;\n    }\n    int valeur() const {\n        return valeur_;\n    }\n\nprivate:\n    int valeur_ = 0;\n};\n\nint main() {\n    Compteur compteur;\n    compteur.incrementer();\n    std::cout << compteur.valeur() << '\\n';\n}\n",
        "output": "1\n",
        "when": "",
        "compare": "",
        "case": "Une interface compte les clics d’un bouton. Elle a besoin de changer le compteur et de lire sa valeur courante.",
        "decision": "L’attribut garde le nombre. Les méthodes définissent les opérations que le client peut demander.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-membres.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": []
            }
        ]
    },
    {
        "id": "bases-visibilite",
        "name": "Visibilité et encapsulation",
        "family": "bases",
        "summary": "Protéger les données et montrer les services accessibles.",
        "situation": "Le stock reste valide",
        "reading": "retirer() vérifie la quantité demandée avant de modifier l’état. Retirer huit unités est refusé lorsque cinq sont disponibles.",
        "limit": "La création d’un setter général exposerait des modifications qui contournent la règle.",
        "code": "#include <iostream>\n\nclass Stock {\npublic:\n    bool retirer(int quantite) {\n        if (quantite <= 0 || quantite > quantite_)\n            return false;\n        quantite_ -= quantite;\n        return true;\n    }\n\n    int quantite() const {\n        return quantite_;\n    }\n\nprivate:\n    int quantite_ = 5;\n};\n\nint main() {\n    Stock stock;\n    std::cout << std::boolalpha << stock.retirer(8) << ' ' << stock.quantite() << '\\n';\n}\n",
        "output": "false 5\n",
        "when": "",
        "compare": "",
        "case": "Un stock de cinq unités ne doit pas accepter un retrait de huit unités, quel que soit l’écran qui le demande.",
        "decision": "La validation et la modification sont réunies dans retirer(). Le champ privé protège l’invariant.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-visibilite.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": []
            }
        ]
    },
    {
        "id": "bases-abstraction",
        "name": "Interface et classe abstraite",
        "family": "bases",
        "summary": "Un contrat commun permet à plusieurs classes de collaborer sans connaître leurs détails.",
        "situation": "Un contrat commun, un type concret",
        "reading": "Notification déclare une méthode virtuelle pure. Mail la redéfinit. L’appel par référence à Notification sélectionne le comportement de Mail.",
        "limit": "Le destructeur virtuel permet aussi de détruire correctement un dérivé possédé via la base.",
        "code": "#include <iostream>\n#include <string>\n\nstruct Notification {\n    virtual ~Notification() = default;\n    virtual std::string envoyer() const = 0;\n};\n\nstruct Mail final : Notification {\n    std::string envoyer() const override {\n        return \"Mail envoye\";\n    }\n};\n\nint main() {\n    Mail mail;\n    const Notification &notification = mail;\n    std::cout << notification.envoyer() << '\\n';\n}\n",
        "output": "Mail envoye\n",
        "when": "",
        "compare": "",
        "case": "Un service doit envoyer une notification, mais le canal concret peut changer. Il doit utiliser un appel commun.",
        "decision": "La classe abstraite définit le contrat. Le type Mail fournit le comportement de l’envoi.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-abstraction.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Mail",
                        "target": "Notification",
                        "type": "Héritage",
                        "detail": "Mail hérite de Notification."
                    }
                ]
            }
        ]
    },
    {
        "id": "bases-relations",
        "name": "Les relations entre classes",
        "family": "bases",
        "summary": "Un membre par valeur possède une donnée. Une référence permet de collaborer avec un objet existant.",
        "situation": "Posséder une ligne, observer un client",
        "reading": "Commande contient ses lignes par valeur et reçoit son client par référence constante. Les lignes sont une composition et le client une association.",
        "limit": "Le client doit vivre pendant toute l’utilisation de la commande. La commande ne prolonge pas sa durée de vie.",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Client {\n    std::string nom;\n};\n\nstruct Ligne {\n    int prix;\n};\n\nclass Commande {\npublic:\n    explicit Commande(const Client &client) : client_(client) {\n    }\n    void ajouter(int prix) {\n        lignes_.push_back(Ligne{prix});\n    }\n    void afficher() const {\n        std::cout << client_.nom << \" : \" << lignes_.size() << \" ligne\\n\";\n    }\n\nprivate:\n    const Client &client_;\n    std::vector<Ligne> lignes_;\n};\n\nint main() {\n    Client client{\"Lea\"};\n    Commande commande{client};\n    commande.ajouter(10);\n    commande.afficher();\n}\n",
        "output": "Lea : 1 ligne\n",
        "when": "",
        "compare": "",
        "case": "Une commande se rattache à un client existant et contient ses propres lignes. Ces deux relations ont des durées de vie différentes.",
        "decision": "La commande observe le client par référence et possède ses lignes par valeur.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-relations.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Commande",
                        "target": "Client",
                        "type": "Association",
                        "detail": "1 client"
                    },
                    {
                        "source": "Commande",
                        "target": "Ligne",
                        "type": "Composition",
                        "detail": "0..* lignes"
                    }
                ]
            }
        ]
    },
    {
        "id": "bases-multiplicites",
        "name": "Relations optionnelles et collections",
        "family": "bases",
        "summary": "optional exprime une présence facultative et vector une collection d’éléments.",
        "situation": "Une cardinalité devient un type",
        "reading": "optional<Badge> exprime zéro ou un badge. vector<string> exprime plusieurs membres, éventuellement aucun.",
        "limit": "vector ne garantit aucune borne minimale. Une règle « au moins un membre » demanderait une validation.",
        "code": "#include <iostream>\n#include <optional>\n#include <string>\n#include <vector>\n\nstruct Badge {\n    int numero;\n};\n\nstruct Equipe {\n    std::optional<Badge> badge;\n    std::vector<std::string> membres;\n};\n\nint main() {\n    Equipe equipe{std::nullopt, {\"Lea\", \"Karim\"}};\n    std::cout << equipe.badge.has_value() << ' ' << equipe.membres.size() << '\\n';\n}\n",
        "output": "0 2\n",
        "when": "",
        "compare": "",
        "case": "Une équipe peut avoir un badge ou aucun, et contenir plusieurs membres. Les types C++ doivent exprimer ces possibilités.",
        "decision": "optional garde la présence facultative. vector conserve les éléments multiples.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-multiplicites.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Equipe",
                        "target": "Badge",
                        "type": "Composition",
                        "detail": "0..1"
                    }
                ]
            }
        ]
    },
    {
        "id": "bases-lire-pattern",
        "name": "Lire les rôles d’un pattern en C++",
        "family": "bases",
        "summary": "Les types, les méthodes virtuelles et les membres indiquent qui collabore avec qui.",
        "situation": "Repérer le rôle de chaque objet",
        "reading": "Service utilise Politique par référence. Double fournit l’algorithme concret. executer() délègue le calcul sans connaître sa formule.",
        "limit": "La politique est créée avant le service. La référence reste valide pendant l’exécution.",
        "code": "#include <iostream>\n\nstruct Politique {\n    virtual ~Politique() = default;\n    virtual int calculer(int montant) const = 0;\n};\n\nstruct Double final : Politique {\n    int calculer(int montant) const override {\n        return montant * 2;\n    }\n};\n\nclass Service {\npublic:\n    explicit Service(const Politique &politique) : politique_(politique) {\n    }\n    int executer(int montant) const {\n        return politique_.calculer(montant);\n    }\n\nprivate:\n    const Politique &politique_;\n};\n\nint main() {\n    Double politique;\n    Service service{politique};\n    std::cout << service.executer(5) << '\\n';\n}\n",
        "output": "10\n",
        "when": "",
        "compare": "",
        "case": "Une opération doit pouvoir recevoir différents calculs sans réécrire la classe qui les utilise.",
        "decision": "Identifiez le contexte Service, le contrat Politique et la variante Double avant de suivre la délégation.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "bases-lire-pattern.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Service",
                        "target": "Politique",
                        "type": "Association",
                        "detail": "observe"
                    },
                    {
                        "source": "Double",
                        "target": "Politique",
                        "type": "Héritage",
                        "detail": "Double hérite de Politique."
                    }
                ]
            }
        ]
    },
    {
        "id": "factory-method",
        "name": "Factory Method",
        "family": "creation",
        "summary": "Confier le choix du produit à une sous-classe, tout en conservant le traitement commun.",
        "situation": "Le rapport laisse une sous-classe créer le produit",
        "reading": "Rapport est le Creator : generer() utilise le Product Export créé par la méthode virtuelle creerExport(). RapportCsv et RapportPdf sont les Concrete Creators ; Csv et Pdf sont leurs Concrete Products. Le client peut lancer le même traitement sur les deux créateurs.",
        "limit": "unique_ptr libère le produit temporaire après son utilisation. Le créateur doit varier pour justifier cette hiérarchie.",
        "code": "#include <iostream>\n#include <memory>\n#include <string>\n\nstruct Export {\n    virtual ~Export() = default;\n    virtual std::string texte() const = 0;\n};\n\nstruct Csv final : Export {\n    std::string texte() const override {\n        return \"Export CSV\";\n    }\n};\n\nclass Rapport {\npublic:\n    virtual ~Rapport() = default;\n    std::string generer() const {\n        return creerExport()->texte();\n    }\n\nprotected:\n    virtual std::unique_ptr<Export> creerExport() const = 0;\n};\n\nclass RapportCsv final : public Rapport {\n    std::unique_ptr<Export> creerExport() const override {\n        return std::make_unique<Csv>();\n    }\n};\n\nstruct Pdf final : Export {\n    std::string texte() const override {\n        return \"Export PDF\";\n    }\n};\nclass RapportPdf final : public Rapport {\n    std::unique_ptr<Export> creerExport() const override {\n        return std::make_unique<Pdf>();\n    }\n};\n\nint main() {\n    RapportCsv csv;\n    RapportPdf pdf;\n    const Rapport &rapportCsv = csv;\n    const Rapport &rapportPdf = pdf;\n    std::cout << rapportCsv.generer() << '\\n';\n    std::cout << rapportPdf.generer() << '\\n';\n}\n",
        "output": "Export CSV\nExport PDF\n",
        "when": "Utilisez-le si plusieurs types de rapports suivent les mêmes étapes mais doivent créer des exports différents.",
        "compare": "Factory Method choisit un produit, comme un export. Abstract Factory fournit plusieurs produits prévus pour fonctionner ensemble, comme un annuaire et un canal de notification.",
        "case": "Un outil génère des rapports CSV et pourra demain générer des rapports PDF. La préparation du rapport reste commune, mais chaque type de rapport doit décider quel export créer.",
        "decision": "RapportCsv et RapportPdf créent respectivement Csv et Pdf. La méthode generer() reste commune et manipule seulement le contrat Export.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "factory-method.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "RapportCsv",
                        "target": "Rapport",
                        "type": "Héritage",
                        "detail": "RapportCsv hérite de Rapport."
                    },
                    {
                        "source": "RapportPdf",
                        "target": "Rapport",
                        "type": "Héritage",
                        "detail": "RapportPdf hérite de Rapport."
                    },
                    {
                        "source": "Csv",
                        "target": "Export",
                        "type": "Héritage",
                        "detail": "Csv hérite de Export."
                    },
                    {
                        "source": "Pdf",
                        "target": "Export",
                        "type": "Héritage",
                        "detail": "Pdf hérite de Export."
                    },
                    {
                        "source": "Rapport",
                        "target": "Export",
                        "type": "Dépendance",
                        "detail": "generer() utilise le produit créé par creerExport()."
                    },
                    {
                        "source": "RapportCsv",
                        "target": "Csv",
                        "type": "Dépendance",
                        "detail": "Crée un Csv."
                    },
                    {
                        "source": "RapportPdf",
                        "target": "Pdf",
                        "type": "Dépendance",
                        "detail": "Crée un Pdf."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Creator",
                "classes": "Rapport",
                "purpose": "Définit generer() et le point de création virtuel."
            },
            {
                "role": "Concrete Creator",
                "classes": "RapportCsv, RapportPdf",
                "purpose": "Choisit le produit à instancier."
            },
            {
                "role": "Product",
                "classes": "Export",
                "purpose": "Contrat utilisé par le créateur."
            },
            {
                "role": "Concrete Product",
                "classes": "Csv, Pdf",
                "purpose": "Fournit chaque format d’export."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/factory-method"
    },
    {
        "id": "abstract-factory",
        "name": "Abstract Factory",
        "family": "creation",
        "summary": "Créer des familles cohérentes de produits sans exposer leurs classes concrètes.",
        "situation": "Une fabrique fournit une famille",
        "reading": "Fabrique est l’Abstract Factory. SuiteLocale et SuiteDistante sont les Concrete Factories. Canal et Annuaire sont les deux Abstract Products ; chaque famille fournit ses deux produits concrets. presenter() est le client qui ne dépend que de la fabrique abstraite.",
        "limit": "Les fabriques retournent des unique_ptr et transfèrent la propriété des produits au client. La fonction presenter() ne mélange pas les familles ; ajouter une nouvelle catégorie de produit imposerait de faire évoluer toutes les fabriques.",
        "code": "#include <iostream>\n#include <memory>\n#include <string>\n\nstruct Canal {\n    virtual ~Canal() = default;\n    virtual std::string nom() const = 0;\n};\n\nstruct Annuaire {\n    virtual ~Annuaire() = default;\n    virtual std::string nom() const = 0;\n};\n\nstruct CanalLocal final : Canal {\n    std::string nom() const override {\n        return \"Canal local\";\n    }\n};\n\nstruct AnnuaireLocal final : Annuaire {\n    std::string nom() const override {\n        return \"Annuaire local\";\n    }\n};\n\nstruct Fabrique {\n    virtual ~Fabrique() = default;\n    virtual std::unique_ptr<Canal> canal() const = 0;\n    virtual std::unique_ptr<Annuaire> annuaire() const = 0;\n};\n\nstruct SuiteLocale final : Fabrique {\n    std::unique_ptr<Canal> canal() const override {\n        return std::make_unique<CanalLocal>();\n    }\n    std::unique_ptr<Annuaire> annuaire() const override {\n        return std::make_unique<AnnuaireLocal>();\n    }\n};\n\nstruct CanalDistant final : Canal {\n    std::string nom() const override {\n        return \"Canal distant\";\n    }\n};\nstruct AnnuaireDistant final : Annuaire {\n    std::string nom() const override {\n        return \"Annuaire distant\";\n    }\n};\nstruct SuiteDistante final : Fabrique {\n    std::unique_ptr<Canal> canal() const override {\n        return std::make_unique<CanalDistant>();\n    }\n    std::unique_ptr<Annuaire> annuaire() const override {\n        return std::make_unique<AnnuaireDistant>();\n    }\n};\nvoid presenter(const Fabrique &fabrique) {\n    std::cout << fabrique.canal()->nom() << \" + \" << fabrique.annuaire()->nom() << '\\n';\n}\n\nint main() {\n    SuiteLocale locale;\n    SuiteDistante distante;\n    presenter(locale);\n    presenter(distante);\n}\n",
        "output": "Canal local + Annuaire local\nCanal distant + Annuaire distant\n",
        "when": "Utilisez-le quand changer de fournisseur doit remplacer tout un ensemble d’outils compatibles.",
        "compare": "Factory Method concerne le choix d’un produit. Abstract Factory concerne le choix d’une famille de produits. Builder prépare progressivement un seul objet.",
        "case": "Une application utilise une suite locale ou distante. Dans chaque cas, son canal et son annuaire doivent appartenir à la même famille de services.",
        "decision": "Une seule fabrique fournit les deux produits compatibles. Le client change de famille en recevant une autre fabrique.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "abstract-factory.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "SuiteLocale",
                        "target": "Fabrique",
                        "type": "Héritage",
                        "detail": "SuiteLocale hérite de Fabrique."
                    },
                    {
                        "source": "SuiteDistante",
                        "target": "Fabrique",
                        "type": "Héritage",
                        "detail": "SuiteDistante hérite de Fabrique."
                    },
                    {
                        "source": "CanalLocal",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "CanalLocal hérite de Canal."
                    },
                    {
                        "source": "CanalDistant",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "CanalDistant hérite de Canal."
                    },
                    {
                        "source": "AnnuaireLocal",
                        "target": "Annuaire",
                        "type": "Héritage",
                        "detail": "AnnuaireLocal hérite de Annuaire."
                    },
                    {
                        "source": "AnnuaireDistant",
                        "target": "Annuaire",
                        "type": "Héritage",
                        "detail": "AnnuaireDistant hérite de Annuaire."
                    },
                    {
                        "source": "SuiteLocale",
                        "target": "CanalLocal",
                        "type": "Dépendance",
                        "detail": "Crée le canal de la famille locale."
                    },
                    {
                        "source": "SuiteLocale",
                        "target": "AnnuaireLocal",
                        "type": "Dépendance",
                        "detail": "Crée l’annuaire de la même famille."
                    },
                    {
                        "source": "SuiteDistante",
                        "target": "CanalDistant",
                        "type": "Dépendance",
                        "detail": "Crée le canal de la famille distante."
                    },
                    {
                        "source": "SuiteDistante",
                        "target": "AnnuaireDistant",
                        "type": "Dépendance",
                        "detail": "Crée l’annuaire de la même famille."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Abstract Factory",
                "classes": "Fabrique",
                "purpose": "Contrat de création d’une famille complète."
            },
            {
                "role": "Concrete Factory",
                "classes": "SuiteLocale, SuiteDistante",
                "purpose": "Produit une famille cohérente."
            },
            {
                "role": "Abstract Product A",
                "classes": "Canal",
                "purpose": "Contrat du premier type de produit."
            },
            {
                "role": "Abstract Product B",
                "classes": "Annuaire",
                "purpose": "Contrat du second type de produit."
            },
            {
                "role": "Concrete Products",
                "classes": "CanalLocal, CanalDistant, AnnuaireLocal, AnnuaireDistant",
                "purpose": "Implémentations des deux produits dans chaque famille."
            },
            {
                "role": "Client",
                "classes": "main(), presenter()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/abstract-factory"
    },
    {
        "id": "builder",
        "name": "Builder",
        "family": "creation",
        "summary": "Assembler progressivement un objet, puis restituer un résultat cohérent.",
        "situation": "Composer des options avant la construction",
        "reading": "ConstructeurRapport est le Builder, RapportBuilder le Concrete Builder, Rapport le Product et Directeur le Director. Le directeur enchaîne les étapes d’une recette ; le client récupère le résultat sur le builder concret.",
        "limit": "Le Director est utile lorsque plusieurs clients partagent une recette. Il reste facultatif dans d’autres implémentations de Builder. resultat() renvoie ici une copie indépendante ; un autre builder pourrait construire une autre représentation à partir des mêmes étapes.",
        "code": "#include <iostream>\n#include <string>\n#include <utility>\n\nstruct Rapport {\n    std::string titre;\n    bool stock = false;\n};\n// Builder : les étapes de construction communes.\nclass ConstructeurRapport {\npublic:\n    virtual ~ConstructeurRapport() = default;\n    virtual void reinitialiser() = 0;\n    virtual void ajouterTitre(std::string titre) = 0;\n    virtual void ajouterStock() = 0;\n};\nclass RapportBuilder final : public ConstructeurRapport {\npublic:\n    void reinitialiser() override {\n        rapport_ = Rapport{};\n    }\n    void ajouterTitre(std::string titre) override {\n        rapport_.titre = std::move(titre);\n    }\n    void ajouterStock() override {\n        rapport_.stock = true;\n    }\n    Rapport resultat() const {\n        return rapport_;\n    }\n\nprivate:\n    Rapport rapport_;\n};\n// Director : connaît une recette, pas le stockage du produit.\nclass Directeur {\npublic:\n    explicit Directeur(ConstructeurRapport &builder) : builder_(builder) {\n    }\n    void inventaire() {\n        builder_.reinitialiser();\n        builder_.ajouterTitre(\"Inventaire\");\n        builder_.ajouterStock();\n    }\n\nprivate:\n    ConstructeurRapport &builder_;\n};\nint main() {\n    RapportBuilder builder;\n    Directeur directeur{builder};\n    directeur.inventaire();\n    const Rapport rapport = builder.resultat();\n    std::cout << rapport.titre << \" : stock \" << std::boolalpha << rapport.stock << '\\n';\n}\n",
        "output": "Inventaire : stock true\n",
        "when": "Utilisez-le quand un objet a plusieurs informations à renseigner, avec des choix facultatifs ou une préparation en plusieurs étapes.",
        "compare": "Builder rassemble les morceaux d’un nouvel objet. Prototype part d’un objet déjà configuré et en fait une copie.",
        "case": "Un même export d’inventaire doit être préparé selon une recette commune : réinitialiser le résultat, ajouter le titre puis ajouter les données de stock. D’autres représentations pourront réutiliser les mêmes étapes.",
        "decision": "Le Director conserve la recette. Le Builder expose ses étapes et le Concrete Builder produit un Rapport indépendant.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "builder.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "RapportBuilder",
                        "target": "ConstructeurRapport",
                        "type": "Héritage",
                        "detail": "RapportBuilder hérite de ConstructeurRapport."
                    },
                    {
                        "source": "Directeur",
                        "target": "ConstructeurRapport",
                        "type": "Association",
                        "detail": "Ordonne les étapes de construction."
                    },
                    {
                        "source": "RapportBuilder",
                        "target": "Rapport",
                        "type": "Composition",
                        "detail": "Assemble et conserve le produit en cours."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Builder",
                "classes": "ConstructeurRapport",
                "purpose": "Déclare les étapes de construction."
            },
            {
                "role": "Concrete Builder",
                "classes": "RapportBuilder",
                "purpose": "Assemble et fournit le rapport."
            },
            {
                "role": "Product",
                "classes": "Rapport",
                "purpose": "Résultat de la construction."
            },
            {
                "role": "Director",
                "classes": "Directeur",
                "purpose": "Enchaîne les étapes d’une recette réutilisable."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/builder"
    },
    {
        "id": "prototype",
        "name": "Prototype",
        "family": "creation",
        "summary": "Créer une nouvelle configuration à partir d’un objet modèle existant.",
        "situation": "Copier en conservant le type réel",
        "reading": "Document est le Prototype qui expose cloner(). Note est le Concrete Prototype qui sait copier son propre état. Le client clone à travers une référence Document, puis reçoit un nouvel objet de même type concret.",
        "limit": "La chaîne se copie par valeur. Des membres propriétaires exigeraient une politique de copie explicite.",
        "code": "#include <iostream>\n#include <memory>\n#include <string>\n#include <utility>\n\nstruct Document {\n    virtual ~Document() = default;\n    virtual std::unique_ptr<Document> cloner() const = 0;\n    virtual std::string titre() const = 0;\n};\n\nclass Note final : public Document {\npublic:\n    explicit Note(std::string titre) : titre_(std::move(titre)) {\n    }\n\n    std::unique_ptr<Document> cloner() const override {\n        return std::make_unique<Note>(*this);\n    }\n\n    std::string titre() const override {\n        return titre_;\n    }\n\nprivate:\n    std::string titre_;\n};\n\nint main() {\n    Note original{\"Contrat\"};\n    const Document &prototype = original;\n    const auto copie = prototype.cloner();\n    std::cout << copie->titre() << '\\n';\n}\n",
        "output": "Contrat\n",
        "when": "Utilisez-le si préparer un objet demande beaucoup de réglages et que plusieurs objets doivent partir des mêmes réglages.",
        "compare": "Builder construit étape après étape. Prototype reproduit un point de départ existant. Une copie doit être distincte de l’original, même si leurs valeurs sont d’abord identiques.",
        "case": "Un éditeur propose de dupliquer un document sélectionné. Le document peut être une note ou un autre type, et le bouton Dupliquer doit préserver son type concret.",
        "decision": "L’appel à cloner() est disponible via Document. Note sait comment copier son propre état, sans imposer au client de tester tous les types.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "prototype.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Note",
                        "target": "Document",
                        "type": "Héritage",
                        "detail": "Note hérite de Document."
                    },
                    {
                        "source": "Note",
                        "target": "Note",
                        "type": "Dépendance",
                        "detail": "copie *this"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Prototype",
                "classes": "Document",
                "purpose": "Déclare le clonage polymorphe."
            },
            {
                "role": "Concrete Prototype",
                "classes": "Note",
                "purpose": "Copie son propre type et son état."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/prototype"
    },
    {
        "id": "singleton",
        "name": "Singleton",
        "family": "creation",
        "summary": "Contrôler l’accès à une instance unique dans une portée explicitement définie.",
        "situation": "Une seule instance accessible",
        "reading": "Configuration réunit les rôles du Singleton : constructeur privé, copie interdite et instance() statique. main() est le client. La variable statique locale garantit une instance unique dans cette implémentation.",
        "limit": "L’initialisation locale statique est synchronisée depuis C++11. La synchronisation des modifications de l’objet reste une autre question. Le global implicite complique les tests.",
        "code": "#include <iostream>\n#include <string>\n\nclass Configuration {\npublic:\n    static Configuration &instance() {\n        static Configuration configuration;\n        return configuration;\n    }\n\n    Configuration(const Configuration &) = delete;\n    Configuration &operator=(const Configuration &) = delete;\n    std::string langue() const {\n        return \"fr\";\n    }\n\nprivate:\n    Configuration() = default;\n};\n\nint main() {\n    std::cout << Configuration::instance().langue() << '\\n';\n}\n",
        "output": "fr\n",
        "when": "Utilisez-le si cette unicité est une vraie contrainte dans le processus et si la configuration reste stable.",
        "compare": "Une classe avec des méthodes statiques ne crée pas forcément d’objet. Singleton fournit bien un objet unique. Transmettre un objet partagé peut offrir le même partage sans imposer un accès global.",
        "case": "Un petit programme utilise une configuration unique pendant son exécution. On souhaite centraliser la création de cette instance et interdire sa copie.",
        "decision": "La variable statique locale est construite au premier appel d’instance(). Un accès global doit rester un choix assumé, car il rend les dépendances moins visibles.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "singleton.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": []
            }
        ],
        "roles": [
            {
                "role": "Singleton",
                "classes": "Configuration",
                "purpose": "Contrôle la construction et fournit l’instance unique."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/singleton"
    },
    {
        "id": "adapter",
        "name": "Adapter",
        "family": "structure",
        "summary": "Traduire une interface existante vers celle attendue par le client.",
        "situation": "Traduire un contrat et ses unités",
        "reading": "Paiement est la Client Interface (Target), AncienTerminal le Service (Adaptee), Adaptateur l’Adapter. Le client appelle payerCentimes() sur le contrat attendu ; l’adaptateur vérifie le montant et traduit vers reglerEuros().",
        "limit": "La limite du terminal est explicite. Une somme de 2550 centimes est refusée, car elle perdrait des centimes dans cette API simplifiée.",
        "code": "#include <iostream>\n#include <stdexcept>\n\nstruct Paiement {\n    virtual ~Paiement() = default;\n    virtual int payerCentimes(int centimes) const = 0;\n};\n\nstruct AncienTerminal {\n    int reglerEuros(int euros) const {\n        return euros;\n    }\n};\n\nclass Adaptateur final : public Paiement {\npublic:\n    explicit Adaptateur(const AncienTerminal &terminal) : terminal_(terminal) {\n    }\n\n    int payerCentimes(int centimes) const override {\n        if (centimes < 0 || centimes % 100 != 0) {\n            throw std::invalid_argument(\"Le terminal accepte des euros entiers\");\n        }\n        return terminal_.reglerEuros(centimes / 100);\n    }\n\nprivate:\n    const AncienTerminal &terminal_;\n};\n\nint main() {\n    AncienTerminal ancien;\n    Adaptateur paiement{ancien};\n    const Paiement &cible = paiement;\n    std::cout << cible.payerCentimes(2500) << \" euros\\n\";\n}\n",
        "output": "25 euros\n",
        "when": "Utilisez-le pour brancher une bibliothèque ou un service dont les méthodes ne correspondent pas au contrat attendu.",
        "compare": "Adapter rend deux contrats compatibles. Facade propose une entrée simple vers plusieurs services. Proxy garde le même contrat et contrôle l’accès.",
        "case": "La nouvelle application exprime les paiements en centimes. Un ancien terminal reçoit seulement des montants en euros entiers. Le code client doit conserver son contrat en centimes.",
        "decision": "L’adaptateur porte la conversion et la vérification des montants représentables. Le terminal existant continue à recevoir ses appels habituels.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "adapter.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Adaptateur",
                        "target": "Paiement",
                        "type": "Héritage",
                        "detail": "Adaptateur hérite de Paiement."
                    },
                    {
                        "source": "Adaptateur",
                        "target": "AncienTerminal",
                        "type": "Association",
                        "detail": "observe"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Client Interface / Target",
                "classes": "Paiement",
                "purpose": "Contrat attendu par le client."
            },
            {
                "role": "Adapter",
                "classes": "Adaptateur",
                "purpose": "Convertit l’appel et les données."
            },
            {
                "role": "Service / Adaptee",
                "classes": "AncienTerminal",
                "purpose": "Service existant au contrat incompatible."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/adapter"
    },
    {
        "id": "bridge",
        "name": "Bridge",
        "family": "structure",
        "summary": "Faire évoluer indépendamment une abstraction métier et son mécanisme de réalisation.",
        "situation": "Faire varier deux axes indépendants",
        "reading": "Alerte est l’Abstraction et AlerteUrgente la Refined Abstraction. Canal est l’Implementation ; Mail et Sms sont ses Concrete Implementations. Le lien Alerte–Canal relie ces deux hiérarchies qui évoluent indépendamment.",
        "limit": "Un nouveau canal peut servir aux deux types d’alerte. Le canal doit vivre plus longtemps que son utilisateur.",
        "code": "#include <iostream>\n#include <string>\n\nstruct Canal {\n    virtual ~Canal() = default;\n    virtual std::string envoyer(std::string message) const = 0;\n};\n\nstruct Mail final : Canal {\n    std::string envoyer(std::string message) const override {\n        return \"Mail : \" + message;\n    }\n};\n\nclass Alerte {\npublic:\n    explicit Alerte(const Canal &canal) : canal_(canal) {\n    }\n    virtual ~Alerte() = default;\n    virtual std::string diffuser() const {\n        return canal_.envoyer(\"Information\");\n    }\n\nprotected:\n    const Canal &canal_;\n};\n\nclass AlerteUrgente final : public Alerte {\npublic:\n    using Alerte::Alerte;\n    std::string diffuser() const override {\n        return canal_.envoyer(\"Urgent\");\n    }\n};\n\nstruct Sms final : Canal {\n    std::string envoyer(std::string message) const override {\n        return \"SMS : \" + message;\n    }\n};\n\nint main() {\n    Mail mail;\n    Sms sms;\n    Alerte normale{mail};\n    AlerteUrgente urgente{sms};\n    std::cout << normale.diffuser() << '\\n';\n    std::cout << urgente.diffuser() << '\\n';\n}\n",
        "output": "Mail : Information\nSMS : Urgent\n",
        "when": "Utilisez-le quand deux choix évoluent séparément : ici, le contenu du document et son format de sortie.",
        "compare": "Adapter relie après coup des contrats différents. Bridge organise dès la conception deux éléments qui doivent évoluer séparément.",
        "case": "Une supervision propose des alertes normales ou urgentes, envoyées par mail ou SMS. Ajouter un canal ne doit pas imposer de recréer toutes les catégories d’alerte.",
        "decision": "Alerte et Canal forment deux hiérarchies indépendantes reliées par une référence ; leurs variantes peuvent se combiner.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "bridge.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "AlerteUrgente",
                        "target": "Alerte",
                        "type": "Héritage",
                        "detail": "AlerteUrgente hérite de Alerte."
                    },
                    {
                        "source": "Mail",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "Mail hérite de Canal."
                    },
                    {
                        "source": "Alerte",
                        "target": "Canal",
                        "type": "Association",
                        "detail": "observe"
                    },
                    {
                        "source": "Sms",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "Sms hérite de Canal."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Abstraction",
                "classes": "Alerte",
                "purpose": "Porte le comportement de haut niveau et délègue le transport."
            },
            {
                "role": "Refined Abstraction",
                "classes": "AlerteUrgente",
                "purpose": "Spécialise l’alerte sans imposer un canal."
            },
            {
                "role": "Implementation",
                "classes": "Canal",
                "purpose": "Contrat du transport."
            },
            {
                "role": "Concrete Implementation",
                "classes": "Mail, Sms",
                "purpose": "Fournit chaque transport concret."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/bridge"
    },
    {
        "id": "composite",
        "name": "Composite",
        "family": "structure",
        "summary": "Traiter une feuille et un groupe avec le même contrat, dans une structure arborescente.",
        "situation": "Parcourir uniformément un arbre",
        "reading": "Element est le Component. Article est la Leaf, sans enfant. Lot est le Composite : il possède des Element et délègue prix() à chacun. Le programme inclut un sous-lot pour montrer qu’un composite peut contenir un autre composite.",
        "limit": "unique_ptr exprime la propriété exclusive de chaque enfant. L’exemple utilise de petits prix entiers.",
        "code": "#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <utility>\n#include <vector>\n\nstruct Element {\n    virtual ~Element() = default;\n    virtual int prix() const = 0;\n};\n\nclass Article final : public Element {\npublic:\n    explicit Article(int prix) : prix_(prix) {\n    }\n    int prix() const override {\n        return prix_;\n    }\n\nprivate:\n    int prix_;\n};\n\nclass Lot final : public Element {\npublic:\n    void ajouter(std::unique_ptr<Element> enfant) {\n        if (!enfant)\n            throw std::invalid_argument(\"Enfant absent\");\n        enfants_.push_back(std::move(enfant));\n    }\n\n    int prix() const override {\n        int total = 0;\n        for (const auto &enfant : enfants_) {\n            total += enfant->prix();\n        }\n        return total;\n    }\n\nprivate:\n    std::vector<std::unique_ptr<Element>> enfants_;\n};\n\nint main() {\n    Lot lot;\n    lot.ajouter(std::make_unique<Article>(10));\n    auto sousLot = std::make_unique<Lot>();\n    sousLot->ajouter(std::make_unique<Article>(20));\n    lot.ajouter(std::move(sousLot));\n    std::cout << lot.prix() << '\\n';\n}\n",
        "output": "30\n",
        "when": "Utilisez-le quand les objets forment un arbre et qu’une action doit s’appliquer à un élément seul comme à un ensemble.",
        "compare": "Composite organise plusieurs enfants. Decorator enveloppe généralement un seul objet pour lui ajouter un comportement.",
        "case": "Un catalogue contient des articles et des lots, dont certains contiennent d’autres lots. Le client veut obtenir le prix de n’importe quel élément avec le même appel.",
        "decision": "Un lot additionne ses enfants via Element::prix(). La récursion apparaît naturellement lorsqu’un enfant est aussi un lot.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "composite.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Article",
                        "target": "Element",
                        "type": "Héritage",
                        "detail": "Article hérite de Element."
                    },
                    {
                        "source": "Lot",
                        "target": "Element",
                        "type": "Héritage",
                        "detail": "Lot hérite de Element."
                    },
                    {
                        "source": "Lot",
                        "target": "Element",
                        "type": "Composition",
                        "detail": "0..* enfants"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Component",
                "classes": "Element",
                "purpose": "Contrat commun aux éléments simples et composés."
            },
            {
                "role": "Leaf",
                "classes": "Article",
                "purpose": "Élément sans enfant."
            },
            {
                "role": "Composite",
                "classes": "Lot",
                "purpose": "Possède des éléments et combine leurs résultats."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/composite"
    },
    {
        "id": "decorator",
        "name": "Decorator",
        "family": "structure",
        "summary": "Ajouter des responsabilités autour d’un objet tout en préservant son contrat.",
        "situation": "Ajouter un comportement autour d’un autre",
        "reading": "Canal est le Component et Mail le Concrete Component. Decorateur respecte le même contrat et conserve un Canal. Journalise et Prioritaire sont les Concrete Decorators. L’appel traverse les couches puis revient en ajoutant les préfixes.",
        "limit": "Les références ne transfèrent pas la propriété. L’ordre de création garantit ici que les objets enveloppés vivent plus longtemps que leurs décorateurs. L’ordre d’empilement peut changer le résultat.",
        "code": "#include <iostream>\n#include <string>\n\nclass Canal {\npublic:\n    virtual ~Canal() = default;\n    virtual std::string envoyer() const = 0;\n};\nclass Mail final : public Canal {\npublic:\n    std::string envoyer() const override {\n        return \"Mail\";\n    }\n};\n// Decorator : même contrat, délégation vers un autre composant.\nclass Decorateur : public Canal {\npublic:\n    explicit Decorateur(const Canal &suivant) : suivant_(suivant) {\n    }\n    std::string envoyer() const override {\n        return suivant_.envoyer();\n    }\n\nprivate:\n    const Canal &suivant_;\n};\nclass Journalise final : public Decorateur {\npublic:\n    using Decorateur::Decorateur;\n    std::string envoyer() const override {\n        return \"[log] \" + Decorateur::envoyer();\n    }\n};\nclass Prioritaire final : public Decorateur {\npublic:\n    using Decorateur::Decorateur;\n    std::string envoyer() const override {\n        return \"[priorite] \" + Decorateur::envoyer();\n    }\n};\nint main() {\n    Mail mail;\n    Journalise journalise{mail};\n    Prioritaire prioritaire{journalise};\n    const Canal &canal = prioritaire;\n    std::cout << canal.envoyer() << '\\n';\n}\n",
        "output": "[priorite] [log] Mail\n",
        "when": "Utilisez-le pour ajouter des options combinables à un service tout en gardant la même méthode d’appel.",
        "compare": "Decorator ajoute un comportement. Proxy autorise, bloque ou retarde l’accès. Adapter change le contrat utilisé pour appeler un service.",
        "case": "Un envoi de mail peut être journalisé, prioritaire, ou les deux. Créer une sous-classe pour chaque combinaison multiplierait les classes.",
        "decision": "Des décorateurs combinables partagent le contrat Canal. Le client choisit l’empilement au moment de composer les objets.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "decorator.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Mail",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "Mail hérite de Canal."
                    },
                    {
                        "source": "Decorateur",
                        "target": "Canal",
                        "type": "Héritage",
                        "detail": "Decorateur hérite de Canal."
                    },
                    {
                        "source": "Journalise",
                        "target": "Decorateur",
                        "type": "Héritage",
                        "detail": "Journalise hérite de Decorateur."
                    },
                    {
                        "source": "Prioritaire",
                        "target": "Decorateur",
                        "type": "Héritage",
                        "detail": "Prioritaire hérite de Decorateur."
                    },
                    {
                        "source": "Decorateur",
                        "target": "Canal",
                        "type": "Association",
                        "detail": "Enveloppe un autre composant et lui délègue envoyer()."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Component",
                "classes": "Canal",
                "purpose": "Contrat partagé par tous les objets enveloppés."
            },
            {
                "role": "Concrete Component",
                "classes": "Mail",
                "purpose": "Comportement de départ."
            },
            {
                "role": "Base Decorator",
                "classes": "Decorateur",
                "purpose": "Conserve un composant et lui délègue les appels."
            },
            {
                "role": "Concrete Decorator",
                "classes": "Journalise, Prioritaire",
                "purpose": "Ajoute un comportement avant ou après la délégation."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/decorator"
    },
    {
        "id": "facade",
        "name": "Facade",
        "family": "structure",
        "summary": "Proposer une entrée simplifiée vers plusieurs responsabilités d’un sous-système.",
        "situation": "Présenter une action cohérente",
        "reading": "Vente est la Facade. Stock et Facturation sont les Subsystem Classes. main() est le client qui appelle uniquement confirmer() ; la façade orchestre ensuite la réservation et la facturation.",
        "limit": "Cet exemple montre l’orchestration. Il ne traite pas l’annulation d’une réservation après échec de facturation.",
        "code": "#include <iostream>\n\nstruct Stock {\n    void reserver() const {\n        std::cout << \"Stock reserve\\n\";\n    }\n};\n\nstruct Facturation {\n    void facturer() const {\n        std::cout << \"Facture creee\\n\";\n    }\n};\n\nclass Vente {\npublic:\n    void confirmer() const {\n        stock_.reserver();\n        facturation_.facturer();\n    }\n\nprivate:\n    Stock stock_;\n    Facturation facturation_;\n};\n\nint main() {\n    Vente vente;\n    vente.confirmer();\n}\n",
        "output": "Stock reserve\nFacture creee\n",
        "when": "Utilisez-le si plusieurs écrans répètent les mêmes appels techniques pour effectuer une opération métier.",
        "compare": "Facade simplifie l’utilisation de plusieurs services. Mediator organise les échanges entre plusieurs objets. Une façade ne remplace pas toute la logique métier par une seule énorme classe.",
        "case": "Confirmer une vente demande de réserver le stock puis de déclencher la facturation. Plusieurs écrans ont besoin de cette même séquence.",
        "decision": "Vente présente une opération simple qui coordonne les deux composants. Elle constitue le point d’entrée commun de cette action.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "facade.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Vente",
                        "target": "Stock",
                        "type": "Composition",
                        "detail": "1"
                    },
                    {
                        "source": "Vente",
                        "target": "Facturation",
                        "type": "Composition",
                        "detail": "1"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Facade",
                "classes": "Vente",
                "purpose": "Expose une opération simple au client."
            },
            {
                "role": "Subsystem Classes",
                "classes": "Stock, Facturation",
                "purpose": "Exécutent les opérations techniques coordonnées."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/facade"
    },
    {
        "id": "flyweight",
        "name": "Flyweight",
        "family": "structure",
        "summary": "Partager l’état intrinsèque immuable pour éviter de le répéter dans de nombreuses occurrences.",
        "situation": "Partager la partie immuable",
        "reading": "Style est le Flyweight : il conserve l’état intrinsèque immuable, ici la police. Styles est la Flyweight Factory qui réutilise les instances. Lettre joue le Context : elle conserve le caractère et la position, puis les transmet à dessiner().",
        "limit": "La police est intrinsèque et immuable ; caractère et position sont extrinsèques. shared_ptr partage explicitement la durée de vie du style. Le cache conserve ici ses styles jusqu’à sa destruction ; aucun gain mémoire n’est mesuré dans ce petit exemple.",
        "code": "#include <iostream>\n#include <map>\n#include <memory>\n#include <string>\n\nstruct Style {\n    const std::string police;\n    void dessiner(char valeur, int position) const {\n        std::cout << valeur << \" a \" << position << \" avec \" << police << '\\n';\n    }\n};\n\nclass Styles {\npublic:\n    std::shared_ptr<const Style> obtenir(const std::string &police) {\n        auto &style = cache_[police];\n        if (!style)\n            style = std::make_shared<const Style>(Style{police});\n        return style;\n    }\n\nprivate:\n    std::map<std::string, std::shared_ptr<const Style>> cache_;\n};\n\nstruct Lettre {\n    char valeur;\n    int position;\n    std::shared_ptr<const Style> style;\n    void afficher() const {\n        style->dessiner(valeur, position);\n    }\n};\n\nint main() {\n    Styles styles;\n    Lettre a{'A', 0, styles.obtenir(\"Comfortaa\")};\n    Lettre b{'B', 1, styles.obtenir(\"Comfortaa\")};\n    a.afficher();\n    b.afficher();\n    std::cout << std::boolalpha << (a.style == b.style) << '\\n';\n}\n",
        "output": "A a 0 avec Comfortaa\nB a 1 avec Comfortaa\ntrue\n",
        "when": "Utilisez-le lorsque beaucoup d’objets répètent réellement des données identiques et que leur partage économise une quantité utile de mémoire.",
        "compare": "Singleton impose une seule instance pour une classe. Flyweight permet plusieurs instances partagées, une par valeur ou clé du catalogue.",
        "case": "Un document contient des milliers de lettres qui utilisent souvent la même police. Répéter la description de la police dans chaque lettre consommerait inutilement de la mémoire.",
        "decision": "La position et le caractère restent propres à la lettre. La description immuable du style est partagée et récupérée dans un cache.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "flyweight.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Styles",
                        "target": "Style",
                        "type": "Association",
                        "detail": "partage et conserve"
                    },
                    {
                        "source": "Lettre",
                        "target": "Style",
                        "type": "Association",
                        "detail": "partage 1"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Flyweight",
                "classes": "Style",
                "purpose": "Conserve la police, état intrinsèque immuable et partagé."
            },
            {
                "role": "Flyweight Factory",
                "classes": "Styles",
                "purpose": "Retrouve ou crée un style partageable."
            },
            {
                "role": "Context",
                "classes": "Lettre",
                "purpose": "Conserve caractère et position, états extrinsèques propres à chaque lettre."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/flyweight"
    },
    {
        "id": "proxy",
        "name": "Proxy",
        "family": "structure",
        "summary": "Contrôler l’accès à un objet à travers le même contrat.",
        "situation": "Retarder une création coûteuse",
        "reading": "Image est le Service Interface (Subject), ImageDisque le Service réel et ImageProxy le Proxy. Le client manipule Image. Le proxy crée le service au premier appel puis lui délègue les affichages suivants.",
        "limit": "Le chargement n’apparaît qu’une fois. Cet exemple mono-thread ne synchronise pas les appels concurrents.",
        "code": "#include <iostream>\n#include <memory>\n\nstruct Image {\n    virtual ~Image() = default;\n    virtual void afficher() = 0;\n};\n\nstruct ImageDisque final : Image {\n    ImageDisque() {\n        std::cout << \"Chargement\\n\";\n    }\n    void afficher() override {\n        std::cout << \"Affichage\\n\";\n    }\n};\n\nclass ImageProxy final : public Image {\npublic:\n    void afficher() override {\n        if (!image_)\n            image_ = std::make_unique<ImageDisque>();\n        image_->afficher();\n    }\n\nprivate:\n    std::unique_ptr<ImageDisque> image_;\n};\n\nint main() {\n    ImageProxy image;\n    Image &service = image;\n    service.afficher();\n    service.afficher();\n}\n",
        "output": "Chargement\nAffichage\nAffichage\n",
        "when": "Utilisez-le si vous devez contrôler un accès, différer un chargement ou interposer un cache derrière le même contrat.",
        "compare": "Proxy contrôle l’accès à un service. Decorator enrichit ce que fait le service. Adapter permet de l’appeler avec un autre contrat.",
        "case": "Une galerie référence des images volumineuses, mais l’utilisateur n’en ouvre qu’une partie. Charger toutes les images dès la création des objets serait coûteux.",
        "decision": "ImageProxy représente une image avant son chargement. Il crée le véritable objet au premier affichage, puis le réutilise.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "proxy.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "ImageProxy",
                        "target": "Image",
                        "type": "Héritage",
                        "detail": "ImageProxy hérite de Image."
                    },
                    {
                        "source": "ImageDisque",
                        "target": "Image",
                        "type": "Héritage",
                        "detail": "ImageDisque hérite de Image."
                    },
                    {
                        "source": "ImageProxy",
                        "target": "ImageDisque",
                        "type": "Composition",
                        "detail": "0..1"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Service Interface / Subject",
                "classes": "Image",
                "purpose": "Contrat commun au proxy et au service réel."
            },
            {
                "role": "Service / Real Subject",
                "classes": "ImageDisque",
                "purpose": "Fournit le traitement réel."
            },
            {
                "role": "Proxy",
                "classes": "ImageProxy",
                "purpose": "Contrôle le chargement puis délègue au service réel."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/proxy"
    },
    {
        "id": "chain",
        "name": "Chain of Responsibility",
        "family": "comportement",
        "summary": "Faire circuler une requête entre des traitements chaînés selon une politique explicite.",
        "situation": "Faire passer une demande dans plusieurs filtres",
        "reading": "Filtre réunit le Handler abstrait et le comportement de transmission au suivant. Positif et Petit sont les Concrete Handlers. Le client assemble la chaîne puis lui soumet 42 et 120 ; chaque contrôle peut interrompre le parcours.",
        "limit": "Les filtres sont observés par pointeur et construits avant la chaîne. L’échec interrompt immédiatement le parcours.",
        "code": "#include <iostream>\n\nclass Filtre {\npublic:\n    explicit Filtre(const Filtre *suivant = nullptr) : suivant_(suivant) {\n    }\n    virtual ~Filtre() = default;\n\n    bool traiter(int valeur) const {\n        return accepter(valeur) && (!suivant_ || suivant_->traiter(valeur));\n    }\n\nprotected:\n    virtual bool accepter(int valeur) const = 0;\n\nprivate:\n    const Filtre *suivant_;\n};\n\nclass Positif final : public Filtre {\npublic:\n    using Filtre::Filtre;\n    bool accepter(int valeur) const override {\n        return valeur > 0;\n    }\n};\n\nclass Petit final : public Filtre {\npublic:\n    bool accepter(int valeur) const override {\n        return valeur < 100;\n    }\n};\n\nint main() {\n    Petit petit;\n    Positif chaine{&petit};\n    std::cout << std::boolalpha << chaine.traiter(42) << ' ' << chaine.traiter(120) << '\\n';\n}\n",
        "output": "true false\n",
        "when": "Utilisez-le quand les contrôles doivent être réordonnés, ajoutés ou réutilisés dans plusieurs parcours.",
        "compare": "Chain of Responsibility fait passer une demande dans plusieurs contrôles. Strategy choisit une seule manière d’effectuer un travail.",
        "case": "Une valeur entrante doit être positive puis inférieure à une limite. D’autres contrôles pourront être insérés sans réécrire chaque filtre.",
        "decision": "Chaque filtre accepte ou interrompt la demande. Le lien vers le suivant permet de composer une chaîne de validations.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "chain.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Positif",
                        "target": "Filtre",
                        "type": "Héritage",
                        "detail": "Positif hérite de Filtre."
                    },
                    {
                        "source": "Petit",
                        "target": "Filtre",
                        "type": "Héritage",
                        "detail": "Petit hérite de Filtre."
                    },
                    {
                        "source": "Filtre",
                        "target": "Filtre",
                        "type": "Association",
                        "detail": "suivant 0..1"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Handler / Base Handler",
                "classes": "Filtre",
                "purpose": "Contrat de traitement et transmission au suivant."
            },
            {
                "role": "Concrete Handler",
                "classes": "Positif, Petit",
                "purpose": "Effectue un contrôle et accepte ou interrompt la demande."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/chain-of-responsibility"
    },
    {
        "id": "command",
        "name": "Command",
        "family": "comportement",
        "summary": "Représenter une demande d’exécution comme un objet contenant son contexte.",
        "situation": "Transformer une action en objet",
        "reading": "Bouton est l’Invoker. Il appelle Commande, le contrat, sans manipuler Compteur. Incrementer est la Concrete Command qui connaît le Receiver Compteur. main() joue le Client en reliant ces objets.",
        "limit": "La commande observe son récepteur. L’annulation montrée concerne une seule exécution et l’opération inverse ; un véritable historique doit conserver les commandes exécutées et leurs données de restauration.",
        "code": "#include <iostream>\n\nclass Compteur {\npublic:\n    void incrementer() {\n        ++valeur_;\n    }\n    void decrementer() {\n        --valeur_;\n    }\n    int valeur() const {\n        return valeur_;\n    }\n\nprivate:\n    int valeur_ = 0;\n};\nclass Commande {\npublic:\n    virtual ~Commande() = default;\n    virtual void executer() = 0;\n    virtual void annuler() = 0;\n};\nclass Incrementer final : public Commande {\npublic:\n    explicit Incrementer(Compteur &compteur) : compteur_(compteur) {\n    }\n    void executer() override {\n        if (!executee_) {\n            compteur_.incrementer();\n            executee_ = true;\n        }\n    }\n    void annuler() override {\n        if (executee_) {\n            compteur_.decrementer();\n            executee_ = false;\n        }\n    }\n\nprivate:\n    Compteur &compteur_;\n    bool executee_ = false;\n};\n// Invoker : déclenche une commande sans connaître son récepteur.\nclass Bouton {\npublic:\n    explicit Bouton(Commande &commande) : commande_(commande) {\n    }\n    void cliquer() {\n        commande_.executer();\n    }\n    void annuler() {\n        commande_.annuler();\n    }\n\nprivate:\n    Commande &commande_;\n};\nint main() {\n    Compteur compteur;\n    Incrementer action{compteur};\n    Bouton bouton{action};\n    bouton.cliquer();\n    std::cout << compteur.valeur() << '\\n';\n    bouton.annuler();\n    std::cout << compteur.valeur() << '\\n';\n}\n",
        "output": "1\n0\n",
        "when": "Utilisez-le si une action doit être mise en attente, historisée ou rejouée plutôt qu’exécutée immédiatement.",
        "compare": "Command représente « quoi faire ». Strategy représente « comment faire le même travail ». Une file de commandes n’est pas nécessairement une file persistante.",
        "case": "Un bouton doit déclencher puis annuler une action sur un compteur sans contenir cette logique métier. Demain, ce bouton pourra recevoir une autre commande.",
        "decision": "Bouton appelle uniquement Commande. Incrementer réunit la demande, son récepteur et l’opération inverse.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "command.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Incrementer",
                        "target": "Commande",
                        "type": "Héritage",
                        "detail": "Incrementer hérite de Commande."
                    },
                    {
                        "source": "Bouton",
                        "target": "Commande",
                        "type": "Association",
                        "detail": "Déclenche une commande à travers le contrat."
                    },
                    {
                        "source": "Incrementer",
                        "target": "Compteur",
                        "type": "Association",
                        "detail": "Connaît le récepteur et appelle ses opérations."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Command",
                "classes": "Commande",
                "purpose": "Contrat d’exécution et d’annulation."
            },
            {
                "role": "Concrete Command",
                "classes": "Incrementer",
                "purpose": "Encapsule la demande et connaît son récepteur."
            },
            {
                "role": "Receiver",
                "classes": "Compteur",
                "purpose": "Effectue les opérations métier."
            },
            {
                "role": "Invoker",
                "classes": "Bouton",
                "purpose": "Déclenche la commande sans connaître le récepteur."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/command"
    },
    {
        "id": "interpreter",
        "name": "Interpreter",
        "family": "comportement",
        "summary": "Représenter les règles d’un petit langage et les évaluer sur un contexte.",
        "situation": "Évaluer un petit arbre d’expressions",
        "reading": "Expression est l’Abstract Expression. Variable est la Terminal Expression qui lit sa valeur dans Contexte. Somme est la Nonterminal Expression : elle combine récursivement deux expressions. main() construit l’arbre représentant base + bonus.",
        "limit": "La grammaire se limite ici aux variables et aux additions. Il n’y a pas d’analyseur de texte : le client construit directement l’arbre. Les opérandes référencés et le contexte restent vivants pendant l’évaluation ; une variable inconnue lève std::out_of_range.",
        "code": "#include <iostream>\n#include <map>\n#include <string>\n#include <utility>\n\nclass Contexte {\npublic:\n    void definir(std::string nom, int valeur) {\n        valeurs_[std::move(nom)] = valeur;\n    }\n    int lire(const std::string &nom) const {\n        return valeurs_.at(nom);\n    }\n\nprivate:\n    std::map<std::string, int> valeurs_;\n};\nclass Expression {\npublic:\n    virtual ~Expression() = default;\n    virtual int evaluer(const Contexte &contexte) const = 0;\n};\nclass Variable final : public Expression {\npublic:\n    explicit Variable(std::string nom) : nom_(std::move(nom)) {\n    }\n    int evaluer(const Contexte &contexte) const override {\n        return contexte.lire(nom_);\n    }\n\nprivate:\n    std::string nom_;\n};\nclass Somme final : public Expression {\npublic:\n    Somme(const Expression &gauche, const Expression &droite) : gauche_(gauche), droite_(droite) {\n    }\n    int evaluer(const Contexte &contexte) const override {\n        return gauche_.evaluer(contexte) + droite_.evaluer(contexte);\n    }\n\nprivate:\n    const Expression &gauche_;\n    const Expression &droite_;\n};\nint main() {\n    Contexte contexte;\n    contexte.definir(\"base\", 2);\n    contexte.definir(\"bonus\", 3);\n    Variable base{\"base\"};\n    Variable bonus{\"bonus\"};\n    Somme regle{base, bonus};\n    std::cout << regle.evaluer(contexte) << '\\n';\n}\n",
        "output": "5\n",
        "when": "Utilisez-le pour un petit langage de règles dont la grammaire reste limitée et stable.",
        "compare": "Composite décrit la forme d’un arbre. Interpreter utilise un arbre pour donner un sens à une expression et calculer son résultat.",
        "case": "Une petite règle calcule base + bonus à partir de valeurs qui changent selon le contexte d’exécution. La structure de la règle reste stable.",
        "decision": "Les variables sont des expressions terminales. Somme combine deux expressions et leur transmet le contexte d’évaluation.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "interpreter.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Variable",
                        "target": "Expression",
                        "type": "Héritage",
                        "detail": "Variable hérite de Expression."
                    },
                    {
                        "source": "Somme",
                        "target": "Expression",
                        "type": "Héritage",
                        "detail": "Somme hérite de Expression."
                    },
                    {
                        "source": "Somme",
                        "target": "Expression",
                        "type": "Association",
                        "detail": "Deux opérandes référencés ; évaluation récursive."
                    },
                    {
                        "source": "Variable",
                        "target": "Contexte",
                        "type": "Dépendance",
                        "detail": "Lit la valeur associée à son nom."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Abstract Expression",
                "classes": "Expression",
                "purpose": "Contrat d’évaluation."
            },
            {
                "role": "Terminal Expression",
                "classes": "Variable",
                "purpose": "Lit une valeur du contexte."
            },
            {
                "role": "Nonterminal Expression",
                "classes": "Somme",
                "purpose": "Combine récursivement des expressions."
            },
            {
                "role": "Context",
                "classes": "Contexte",
                "purpose": "Associe les noms de variables à leurs valeurs."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ]
    },
    {
        "id": "iterator",
        "name": "Iterator",
        "family": "comportement",
        "summary": "Parcourir une collection sans exposer sa représentation interne.",
        "situation": "Parcourir sans exposer le stockage",
        "reading": "Collection et Iterateur sont les deux contrats. Nombres est la Concrete Collection ; IterateurNombres est le Concrete Iterator qui conserve sa position et observe la collection. Le client parcourt les données uniquement par le contrat Iterateur.",
        "limit": "Cet exemple explicite les rôles du pattern. En C++ courant, les itérateurs de la bibliothèque standard et les ranges sont généralement préférables. La collection doit survivre à son itérateur ; courant() à la fin du parcours lève une exception.",
        "code": "#include <cstddef>\n#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <vector>\n\nclass Iterateur {\npublic:\n    virtual ~Iterateur() = default;\n    virtual bool termine() const = 0;\n    virtual int courant() const = 0;\n    virtual void suivant() = 0;\n};\nclass Collection {\npublic:\n    virtual ~Collection() = default;\n    virtual std::unique_ptr<Iterateur> creerIterateur() const = 0;\n};\nclass Nombres;\nclass IterateurNombres final : public Iterateur {\npublic:\n    explicit IterateurNombres(const Nombres &collection) : collection_(collection) {\n    }\n    bool termine() const override;\n    int courant() const override;\n    void suivant() override;\n\nprivate:\n    const Nombres &collection_;\n    std::size_t position_ = 0;\n};\nclass Nombres final : public Collection {\npublic:\n    std::unique_ptr<Iterateur> creerIterateur() const override {\n        return std::make_unique<IterateurNombres>(*this);\n    }\n    std::size_t taille() const {\n        return valeurs_.size();\n    }\n    int a(std::size_t position) const {\n        return valeurs_.at(position);\n    }\n\nprivate:\n    std::vector<int> valeurs_{2, 4, 6};\n};\nbool IterateurNombres::termine() const {\n    return position_ >= collection_.taille();\n}\nint IterateurNombres::courant() const {\n    return collection_.a(position_);\n}\nvoid IterateurNombres::suivant() {\n    if (termine()) {\n        throw std::out_of_range(\"Fin du parcours\");\n    }\n    ++position_;\n}\nint main() {\n    Nombres nombres;\n    const Collection &collection = nombres;\n    auto iterateur = collection.creerIterateur();\n    while (!iterateur->termine()) {\n        std::cout << iterateur->courant() << '\\n';\n        iterateur->suivant();\n    }\n}\n",
        "output": "2\n4\n6\n",
        "when": "Utilisez-le pour exposer un parcours standard tout en gardant la liberté de changer le stockage.",
        "compare": "Iterator décrit comment parcourir une collection. Composite décrit comment organiser des éléments et des groupes. Une structure Composite peut être parcourue avec un Iterator.",
        "case": "Une collection expose un parcours séquentiel de ses nombres sans imposer au client de connaître son vector ou ses indices internes.",
        "decision": "La collection fournit un itérateur abstrait. L’objet concret conserve la position et sait accéder aux valeurs.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "iterator.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "IterateurNombres",
                        "target": "Iterateur",
                        "type": "Héritage",
                        "detail": "IterateurNombres hérite de Iterateur."
                    },
                    {
                        "source": "Nombres",
                        "target": "Collection",
                        "type": "Héritage",
                        "detail": "Nombres hérite de Collection."
                    },
                    {
                        "source": "Collection",
                        "target": "Iterateur",
                        "type": "Dépendance",
                        "detail": "Expose un itérateur par son contrat."
                    },
                    {
                        "source": "Nombres",
                        "target": "IterateurNombres",
                        "type": "Dépendance",
                        "detail": "Crée un itérateur adapté à son stockage."
                    },
                    {
                        "source": "IterateurNombres",
                        "target": "Nombres",
                        "type": "Association",
                        "detail": "Observe les valeurs sans posséder la collection."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Iterator",
                "classes": "Iterateur",
                "purpose": "Contrat de parcours indépendant du stockage."
            },
            {
                "role": "Concrete Iterator",
                "classes": "IterateurNombres",
                "purpose": "Conserve la position du parcours."
            },
            {
                "role": "Collection / Iterable Collection",
                "classes": "Collection",
                "purpose": "Contrat de création d’un itérateur."
            },
            {
                "role": "Concrete Collection",
                "classes": "Nombres",
                "purpose": "Stocke les données et fournit l’itérateur adapté."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/iterator"
    },
    {
        "id": "mediator",
        "name": "Mediator",
        "family": "comportement",
        "summary": "Centraliser un protocole de collaboration entre plusieurs objets collègues.",
        "situation": "Centraliser une interaction entre composants",
        "reading": "Mediateur définit le contrat de notification. Dialogue est le Concrete Mediator qui coordonne Champ et Vue, les Components. Champ signale la saisie au médiateur ; il ne connaît pas Vue. Dialogue décide quelle vue actualiser.",
        "limit": "Dialogue possède ses composants, qui gardent une référence vers lui. Sa copie est supprimée pour éviter que les composants d’une copie continuent à référencer le médiateur d’origine. Les constructeurs des composants n’appellent pas le médiateur pendant sa construction.",
        "code": "#include <iostream>\n#include <string>\n#include <utility>\n\nclass Mediateur {\npublic:\n    virtual ~Mediateur() = default;\n    virtual void texteSaisi(const std::string &texte) = 0;\n};\nclass Composant {\npublic:\n    explicit Composant(Mediateur &mediateur) : mediateur_(mediateur) {\n    }\n    virtual ~Composant() = default;\n\nprotected:\n    Mediateur &mediateur_;\n};\nclass Champ final : public Composant {\npublic:\n    using Composant::Composant;\n    void saisir(const std::string &texte) {\n        mediateur_.texteSaisi(texte);\n    }\n};\nclass Vue final : public Composant {\npublic:\n    using Composant::Composant;\n    void afficher(std::string texte) {\n        texte_ = std::move(texte);\n    }\n    const std::string &texte() const {\n        return texte_;\n    }\n\nprivate:\n    std::string texte_;\n};\n// Concrete Mediator : possède et coordonne ses composants.\nclass Dialogue final : public Mediateur {\npublic:\n    Dialogue() : champ_(*this), vue_(*this) {\n    }\n    Dialogue(const Dialogue &) = delete;\n    Dialogue &operator=(const Dialogue &) = delete;\n    void rechercher(const std::string &texte) {\n        champ_.saisir(texte);\n    }\n    void texteSaisi(const std::string &texte) override {\n        vue_.afficher(\"Recherche : \" + texte);\n    }\n    const std::string &resultat() const {\n        return vue_.texte();\n    }\n\nprivate:\n    Champ champ_;\n    Vue vue_;\n};\nint main() {\n    Dialogue dialogue;\n    dialogue.rechercher(\"C++\");\n    std::cout << dialogue.resultat() << '\\n';\n}\n",
        "output": "Recherche : C++\n",
        "when": "Utilisez-le quand plusieurs composants se parlent dans tous les sens et que leurs règles de coordination deviennent difficiles à suivre.",
        "compare": "Mediator décide comment plusieurs objets collaborent. Observer diffuse un événement à des abonnés sans centraliser toutes leurs décisions.",
        "case": "Dans une boîte de recherche, une saisie doit actualiser le résultat. On souhaite que le champ puisse signaler un événement sans connaître la vue qui y réagit.",
        "decision": "Dialogue centralise la coordination. Champ et Vue communiquent avec le médiateur par un contrat commun.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "mediator.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Dialogue",
                        "target": "Mediateur",
                        "type": "Héritage",
                        "detail": "Dialogue hérite de Mediateur."
                    },
                    {
                        "source": "Champ",
                        "target": "Composant",
                        "type": "Héritage",
                        "detail": "Champ hérite de Composant."
                    },
                    {
                        "source": "Vue",
                        "target": "Composant",
                        "type": "Héritage",
                        "detail": "Vue hérite de Composant."
                    },
                    {
                        "source": "Composant",
                        "target": "Mediateur",
                        "type": "Association",
                        "detail": "Les composants signalent leurs événements au médiateur."
                    },
                    {
                        "source": "Dialogue",
                        "target": "Champ",
                        "type": "Composition",
                        "detail": "Possède le champ de saisie."
                    },
                    {
                        "source": "Dialogue",
                        "target": "Vue",
                        "type": "Composition",
                        "detail": "Possède et actualise la vue."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Mediator",
                "classes": "Mediateur",
                "purpose": "Contrat de notification entre composants."
            },
            {
                "role": "Concrete Mediator",
                "classes": "Dialogue",
                "purpose": "Coordonne les composants du dialogue."
            },
            {
                "role": "Base Component",
                "classes": "Composant",
                "purpose": "Conserve une référence vers le médiateur."
            },
            {
                "role": "Components",
                "classes": "Champ, Vue",
                "purpose": "Éléments coordonnés sans lien direct entre eux."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/mediator"
    },
    {
        "id": "memento",
        "name": "Memento",
        "family": "comportement",
        "summary": "Capturer un état pour le restaurer sans exposer directement sa représentation au gardien.",
        "situation": "Revenir à un état précédent",
        "reading": "Editeur est l’Originator qui crée et relit son état. Sauvegarde est le Memento dont les données restent privées. Historique est le Caretaker : il conserve les instantanés et demande une restauration sans interpréter leur contenu.",
        "limit": "friend autorise uniquement Editeur à accéder au contenu privé du memento. L’historique conserve des copies par valeur et doit vivre moins longtemps que l’éditeur. Cet exemple gère l’annulation, pas le rétablissement ni une limite de mémoire.",
        "code": "#include <iostream>\n#include <stdexcept>\n#include <string>\n#include <utility>\n#include <vector>\n\nclass Editeur;\n// Memento opaque : seul l’éditeur peut lire ou fabriquer son état.\nclass Sauvegarde {\n    friend class Editeur;\n\npublic:\n    Sauvegarde(const Sauvegarde &) = default;\n    Sauvegarde &operator=(const Sauvegarde &) = default;\n\nprivate:\n    explicit Sauvegarde(std::string texte) : texte_(std::move(texte)) {\n    }\n    std::string texte_;\n};\nclass Editeur {\npublic:\n    void saisir(std::string texte) {\n        texte_ = std::move(texte);\n    }\n    Sauvegarde sauvegarder() const {\n        return Sauvegarde{texte_};\n    }\n    void restaurer(const Sauvegarde &sauvegarde) {\n        texte_ = sauvegarde.texte_;\n    }\n    const std::string &texte() const {\n        return texte_;\n    }\n\nprivate:\n    std::string texte_;\n};\n// Caretaker : conserve les instantanés sans accéder à leur contenu.\nclass Historique {\npublic:\n    explicit Historique(Editeur &editeur) : editeur_(editeur) {\n    }\n    void memoriser() {\n        sauvegardes_.push_back(editeur_.sauvegarder());\n    }\n    void annuler() {\n        if (sauvegardes_.empty()) {\n            throw std::logic_error(\"Historique vide\");\n        }\n        editeur_.restaurer(sauvegardes_.back());\n        sauvegardes_.pop_back();\n    }\n\nprivate:\n    Editeur &editeur_;\n    std::vector<Sauvegarde> sauvegardes_;\n};\nint main() {\n    Editeur editeur;\n    Historique historique{editeur};\n    editeur.saisir(\"Version A\");\n    historique.memoriser();\n    editeur.saisir(\"Version B\");\n    historique.annuler();\n    std::cout << editeur.texte() << '\\n';\n}\n",
        "output": "Version A\n",
        "when": "Utilisez-le pour une fonction Annuler ou pour revenir à des versions successives d’un objet.",
        "compare": "Memento conserve un état. Command conserve une action. Revenir à un état et exécuter une action inverse sont deux manières différentes de proposer Annuler.",
        "case": "Un éditeur doit annuler la dernière modification, tout en interdisant au gestionnaire d’historique de lire ou modifier directement son état privé.",
        "decision": "L’éditeur crée des instantanés opaques. L’historique les conserve et les rend à leur créateur pour restaurer le texte.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "memento.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Historique",
                        "target": "Editeur",
                        "type": "Association",
                        "detail": "Demande la capture et la restauration."
                    },
                    {
                        "source": "Historique",
                        "target": "Sauvegarde",
                        "type": "Composition",
                        "detail": "0..* instantanés opaques conservés par valeur."
                    },
                    {
                        "source": "Editeur",
                        "target": "Sauvegarde",
                        "type": "Dépendance",
                        "detail": "Crée et relit le contenu privé grâce à friend."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Originator",
                "classes": "Editeur",
                "purpose": "Crée les instantanés et restaure son état."
            },
            {
                "role": "Memento",
                "classes": "Sauvegarde",
                "purpose": "Capture un état privé accessible à l’éditeur."
            },
            {
                "role": "Caretaker",
                "classes": "Historique",
                "purpose": "Conserve les instantanés sans inspecter leur contenu."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/memento"
    },
    {
        "id": "observer",
        "name": "Observer",
        "family": "comportement",
        "summary": "Informer des abonnés d’un fait sans coder chaque réaction dans son émetteur.",
        "situation": "Prévenir plusieurs abonnés",
        "reading": "Stock joue le rôle de Publisher. Observateur est le contrat Subscriber. VueStock et AlerteStock sont deux Concrete Subscribers. modifier() notifie les abonnés sans connaître leurs types concrets ; desabonner() retire une inscription.",
        "limit": "Les abonnés sont observés par pointeur, sans transfert de propriété. Ils doivent rester vivants pendant leur inscription. Cet exemple synchrone suppose que les méthodes actualiser() ne modifient pas la liste des abonnés pendant une notification ; une application réelle doit définir cette politique et gérer automatiquement les désinscriptions.",
        "code": "#include <algorithm>\n#include <iostream>\n#include <vector>\n\nclass Observateur {\npublic:\n    virtual ~Observateur() = default;\n    virtual void actualiser(int quantite) = 0;\n};\n// Publisher : conserve les abonnés et déclenche les notifications.\nclass Stock {\npublic:\n    void abonner(Observateur &observateur) {\n        if (std::find(abonnes_.begin(), abonnes_.end(), &observateur) == abonnes_.end()) {\n            abonnes_.push_back(&observateur);\n        }\n    }\n    void desabonner(Observateur &observateur) {\n        std::erase(abonnes_, &observateur);\n    }\n    void modifier(int quantite) {\n        quantite_ = quantite;\n        for (auto *abonne : abonnes_) {\n            abonne->actualiser(quantite_);\n        }\n    }\n\nprivate:\n    int quantite_ = 0;\n    std::vector<Observateur *> abonnes_;\n};\nclass VueStock final : public Observateur {\npublic:\n    void actualiser(int quantite) override {\n        std::cout << \"Stock : \" << quantite << '\\n';\n    }\n};\nclass AlerteStock final : public Observateur {\npublic:\n    void actualiser(int quantite) override {\n        if (quantite < 3) {\n            std::cout << \"Alerte : stock faible\\n\";\n        }\n    }\n};\nint main() {\n    VueStock vue;\n    AlerteStock alerte;\n    Stock stock;\n    stock.abonner(vue);\n    stock.abonner(alerte);\n    stock.modifier(2);\n    stock.desabonner(alerte);\n    stock.modifier(5);\n}\n",
        "output": "Stock : 2\nAlerte : stock faible\nStock : 5\n",
        "when": "Utilisez-le quand plusieurs réactions indépendantes doivent se déclencher après un même événement.",
        "compare": "Observer diffuse une information. Mediator coordonne une collaboration. Un abonné choisit quoi faire de l’événement reçu.",
        "case": "Lorsqu’un stock évolue, un écran doit afficher sa valeur et un système d’alerte doit réagir aux quantités faibles. Ces abonnés peuvent être ajoutés ou retirés sans modifier Stock.",
        "decision": "Le diffuseur ne connaît que Observateur. Chaque abonné implémente sa propre réaction ; le client gère les inscriptions.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "observer.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "VueStock",
                        "target": "Observateur",
                        "type": "Héritage",
                        "detail": "VueStock hérite de Observateur."
                    },
                    {
                        "source": "AlerteStock",
                        "target": "Observateur",
                        "type": "Héritage",
                        "detail": "AlerteStock hérite de Observateur."
                    },
                    {
                        "source": "Stock",
                        "target": "Observateur",
                        "type": "Association",
                        "detail": "0..* abonnés ; modifier() appelle actualiser() sur chacun."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Publisher / Subject",
                "classes": "Stock",
                "purpose": "Gère les inscriptions et notifie un changement."
            },
            {
                "role": "Subscriber / Observer",
                "classes": "Observateur",
                "purpose": "Contrat de réception des notifications."
            },
            {
                "role": "Concrete Subscriber",
                "classes": "VueStock, AlerteStock",
                "purpose": "Réagit aux changements chacun à sa manière."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/observer"
    },
    {
        "id": "state",
        "name": "State",
        "family": "comportement",
        "summary": "Déléguer un comportement à un objet représentant l’état courant.",
        "situation": "Confier la transition à l’état courant",
        "reading": "Commande est le Context. Etat est le contrat commun de comportement. Brouillon et Payee sont les Concrete States. Le contexte délègue avancer() à l’état courant ; Brouillon demande ensuite au contexte de passer à Payee.",
        "limit": "La référence vers le Context est passée en paramètre, plutôt que conservée dans l’état. shared_ptr garde l’état actif vivant pendant une transition. Les états sont immuables ; aucun cycle de propriété ne relie un état au contexte. La transition est décidée par l’état, contrairement au choix externe d’une Strategy.",
        "code": "#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <string>\n#include <utility>\n\nclass Commande;\nclass Etat {\npublic:\n    virtual ~Etat() = default;\n    virtual std::string nom() const = 0;\n    virtual void avancer(Commande &commande) const = 0;\n};\nclass Payee final : public Etat {\npublic:\n    std::string nom() const override {\n        return \"Payee\";\n    }\n    void avancer(Commande &) const override {\n        throw std::logic_error(\"Deja payee\");\n    }\n};\nclass Brouillon final : public Etat {\npublic:\n    std::string nom() const override {\n        return \"Brouillon\";\n    }\n    void avancer(Commande &commande) const override;\n};\nclass Commande {\npublic:\n    Commande() : etat_(std::make_shared<Brouillon>()) {\n    }\n    void changerEtat(std::shared_ptr<const Etat> etat) {\n        if (!etat) {\n            throw std::invalid_argument(\"Etat absent\");\n        }\n        etat_ = std::move(etat);\n    }\n    void avancer() {\n        // Garde l’état actif vivant jusqu’à la fin de son appel.\n        const auto actif = etat_;\n        actif->avancer(*this);\n    }\n    std::string etat() const {\n        return etat_->nom();\n    }\n\nprivate:\n    std::shared_ptr<const Etat> etat_;\n};\nvoid Brouillon::avancer(Commande &commande) const {\n    commande.changerEtat(std::make_shared<Payee>());\n}\nint main() {\n    Commande commande;\n    std::cout << commande.etat() << '\\n';\n    commande.avancer();\n    std::cout << commande.etat() << '\\n';\n}\n",
        "output": "Brouillon\nPayee\n",
        "when": "Utilisez-le si de nombreuses actions changent de comportement selon l’état et si les conditions deviennent répétitives.",
        "compare": "State exprime la situation actuelle d’un objet et les actions qu’elle permet. Strategy choisit une manière de calculer, sans représenter un cycle de vie.",
        "case": "Une commande commence en brouillon puis devient payée. La même demande avancer() doit changer de comportement selon son état et refuser une nouvelle progression après paiement.",
        "decision": "Le contexte délègue à Etat. L’état concret décide de la transition, puis demande au contexte de changer son état courant.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "state.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Brouillon",
                        "target": "Etat",
                        "type": "Héritage",
                        "detail": "Brouillon hérite de Etat."
                    },
                    {
                        "source": "Payee",
                        "target": "Etat",
                        "type": "Héritage",
                        "detail": "Payee hérite de Etat."
                    },
                    {
                        "source": "Commande",
                        "target": "Etat",
                        "type": "Association",
                        "detail": "Partage la propriété de l’état courant ; lui délègue avancer()."
                    },
                    {
                        "source": "Etat",
                        "target": "Commande",
                        "type": "Dépendance",
                        "detail": "Reçoit le contexte pour lui demander un changement d’état."
                    },
                    {
                        "source": "Brouillon",
                        "target": "Payee",
                        "type": "Dépendance",
                        "detail": "Crée l’état payé lors de la transition."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Context",
                "classes": "Commande",
                "purpose": "Conserve l’état courant et lui délègue son comportement."
            },
            {
                "role": "State",
                "classes": "Etat",
                "purpose": "Contrat du comportement dépendant de l’état."
            },
            {
                "role": "Concrete State",
                "classes": "Brouillon, Payee",
                "purpose": "Définit le comportement et les transitions autorisées."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/state"
    },
    {
        "id": "strategy",
        "name": "Strategy",
        "family": "comportement",
        "summary": "Rendre une règle de calcul interchangeable derrière un contrat stable.",
        "situation": "Injecter un calcul interchangeable",
        "reading": "Panier est le Context. Il conserve un Tarif, la Strategy, et lui délègue le calcul des frais. Standard et Express sont les Concrete Strategies. main() configure le panier, puis change sa stratégie sans remplacer le panier.",
        "limit": "Panier observe le tarif sans le posséder. Standard et Express doivent vivre plus longtemps que lui. Le pointeur est toujours initialisé à partir d’une référence valide ; changerTarif() n’accepte pas nullptr.",
        "code": "#include <iostream>\n\n// Strategy : le contrat commun de calcul des frais.\nclass Tarif {\npublic:\n    virtual ~Tarif() = default;\n    virtual int frais() const = 0;\n};\nclass Standard final : public Tarif {\npublic:\n    int frais() const override {\n        return 5;\n    }\n};\nclass Express final : public Tarif {\npublic:\n    int frais() const override {\n        return 12;\n    }\n};\n// Context : le panier conserve une stratégie interchangeable.\nclass Panier {\npublic:\n    explicit Panier(const Tarif &tarif) : tarif_(&tarif) {\n    }\n    void changerTarif(const Tarif &tarif) {\n        tarif_ = &tarif;\n    }\n    int total(int montant) const {\n        return montant + tarif_->frais();\n    }\n\nprivate:\n    const Tarif *tarif_;\n};\nint main() {\n    Standard standard;\n    Express express;\n    Panier panier{standard};\n    std::cout << panier.total(100) << '\\n';\n    panier.changerTarif(express);\n    std::cout << panier.total(100) << '\\n';\n}\n",
        "output": "105\n112\n",
        "when": "Utilisez-le si plusieurs manières de faire le même calcul doivent être interchangeables.",
        "compare": "Strategy choisit une manière de travailler. State change le comportement en fonction d’un état métier. Template Method conserve un déroulement et laisse des sous-classes préciser certaines étapes.",
        "case": "Un panier propose une livraison standard ou express. Les frais doivent changer sans remplacer le panier et sans introduire de condition sur chaque transporteur dans total().",
        "decision": "Panier délègue à Tarif. Changer la stratégie remplace le calcul, sans modifier le contexte.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "strategy.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Standard",
                        "target": "Tarif",
                        "type": "Héritage",
                        "detail": "Standard hérite de Tarif."
                    },
                    {
                        "source": "Express",
                        "target": "Tarif",
                        "type": "Héritage",
                        "detail": "Express hérite de Tarif."
                    },
                    {
                        "source": "Panier",
                        "target": "Tarif",
                        "type": "Association",
                        "detail": "Une stratégie active ; total() délègue le calcul de frais()."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Context",
                "classes": "Panier",
                "purpose": "Conserve une stratégie et lui délègue le calcul des frais."
            },
            {
                "role": "Strategy",
                "classes": "Tarif",
                "purpose": "Contrat commun aux calculs interchangeables."
            },
            {
                "role": "Concrete Strategy",
                "classes": "Standard, Express",
                "purpose": "Fournit chaque variante de calcul."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/strategy"
    },
    {
        "id": "template-method",
        "name": "Template Method",
        "family": "comportement",
        "summary": "Fixer le squelette d’un algorithme et spécialiser certaines étapes par héritage.",
        "situation": "Fixer les étapes, spécialiser un détail",
        "reading": "Import est l’Abstract Class. Sa méthode executer() fixe la séquence lecture–conversion–validation. ImportCsv et ImportJson sont les Concrete Classes : elles redéfinissent uniquement l’étape abstraite convertir().",
        "limit": "Template Method est ici un pattern fondé sur l’héritage. Il ne nécessite aucun template C++.",
        "code": "#include <iostream>\n\nclass Import {\npublic:\n    virtual ~Import() = default;\n\n    void executer() const {\n        std::cout << \"Lecture\\n\";\n        convertir();\n        std::cout << \"Validation\\n\";\n    }\n\nprotected:\n    virtual void convertir() const = 0;\n};\n\nclass ImportCsv final : public Import {\n    void convertir() const override {\n        std::cout << \"Conversion CSV\\n\";\n    }\n};\n\nclass ImportJson final : public Import {\n    void convertir() const override {\n        std::cout << \"Conversion JSON\\n\";\n    }\n};\n\nint main() {\n    ImportCsv csv;\n    ImportJson json;\n    csv.executer();\n    json.executer();\n}\n",
        "output": "Lecture\nConversion CSV\nValidation\nLecture\nConversion JSON\nValidation\n",
        "when": "Utilisez-le quand plusieurs traitements partagent un ordre d’étapes stable mais diffèrent sur quelques étapes.",
        "compare": "Template Method repose sur l’héritage. Strategy confie un travail à un autre objet. Strategy permet plus facilement de changer ce choix sur un objet déjà créé.",
        "case": "Plusieurs imports suivent les étapes lecture, conversion et validation. Seule la conversion varie selon le format de fichier.",
        "decision": "Import fixe la séquence dans executer(). ImportCsv et ImportJson personnalisent le point d’extension convertir(), sans changer l’ordre des étapes.",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "template-method.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "ImportCsv",
                        "target": "Import",
                        "type": "Héritage",
                        "detail": "ImportCsv hérite de Import."
                    },
                    {
                        "source": "ImportJson",
                        "target": "Import",
                        "type": "Héritage",
                        "detail": "ImportJson hérite de Import."
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Abstract Class",
                "classes": "Import",
                "purpose": "Fixe l’algorithme dans executer() et déclare l’étape variable."
            },
            {
                "role": "Concrete Class",
                "classes": "ImportCsv, ImportJson",
                "purpose": "Redéfinit l’étape convertir()."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/template-method"
    },
    {
        "id": "visitor",
        "name": "Visitor",
        "family": "comportement",
        "summary": "Ajouter une opération sur plusieurs types stables grâce à une double répartition des appels.",
        "situation": "Ajouter une opération sur plusieurs types",
        "reading": "Element est le contrat commun des éléments ; Fichier et Dossier sont les Concrete Elements. Visiteur est le contrat Visitor et Inventaire le Concrete Visitor. accepter() appelle visiter(*this) pour sélectionner l’opération correspondant au type concret.",
        "limit": "Ajouter un visiteur laisse les éléments stables. Ajouter un type d’élément impose de compléter tous les visiteurs.",
        "code": "#include <iostream>\n\nclass Fichier;\nclass Dossier;\n\nstruct Visiteur {\n    virtual ~Visiteur() = default;\n    virtual void visiter(const Fichier &) = 0;\n    virtual void visiter(const Dossier &) = 0;\n};\n\nstruct Element {\n    virtual ~Element() = default;\n    virtual void accepter(Visiteur &) const = 0;\n};\n\nclass Fichier final : public Element {\npublic:\n    void accepter(Visiteur &visiteur) const override {\n        visiteur.visiter(*this);\n    }\n};\n\nclass Dossier final : public Element {\npublic:\n    void accepter(Visiteur &visiteur) const override {\n        visiteur.visiter(*this);\n    }\n};\n\nstruct Inventaire final : Visiteur {\n    void visiter(const Fichier &) override {\n        std::cout << \"Un fichier\\n\";\n    }\n    void visiter(const Dossier &) override {\n        std::cout << \"Un dossier\\n\";\n    }\n};\n\nint main() {\n    Fichier fichier;\n    Dossier dossier;\n    Inventaire inventaire;\n    fichier.accepter(inventaire);\n    dossier.accepter(inventaire);\n}\n",
        "output": "Un fichier\nUn dossier\n",
        "when": "Utilisez-le si les types de demandes changent peu, mais que vous ajoutez souvent de nouvelles opérations sur ces types.",
        "compare": "Ajouter un nouveau visiteur permet d’ajouter une opération sans modifier chaque demande. Ajouter une nouvelle classe de demande demande, au contraire, de mettre les visiteurs à jour.",
        "case": "Une arborescence stable contient des fichiers et des dossiers. On veut ajouter un inventaire, puis d’autres analyses, sans concentrer ces traitements dans les éléments.",
        "decision": "Le visiteur reçoit chaque type concret par surcharge. L’appel virtuel accepter() transmet le bon type à visiter().",
        "diagramDescription": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
        "diagrams": [
            {
                "title": "Structure complète du pattern",
                "file": "visitor.svg",
                "reading": "La structure complète réunit les contrats, leurs implémentations et les liens de collaboration. Les rôles classiques sont indiqués dans les en-têtes ; main() joue le client et reste hors du diagramme.",
                "relations": [
                    {
                        "source": "Fichier",
                        "target": "Element",
                        "type": "Héritage",
                        "detail": "Fichier hérite de Element."
                    },
                    {
                        "source": "Dossier",
                        "target": "Element",
                        "type": "Héritage",
                        "detail": "Dossier hérite de Element."
                    },
                    {
                        "source": "Inventaire",
                        "target": "Visiteur",
                        "type": "Héritage",
                        "detail": "Inventaire hérite de Visiteur."
                    },
                    {
                        "source": "Element",
                        "target": "Visiteur",
                        "type": "Dépendance",
                        "detail": "accepte"
                    },
                    {
                        "source": "Visiteur",
                        "target": "Fichier",
                        "type": "Dépendance",
                        "detail": "visite"
                    },
                    {
                        "source": "Visiteur",
                        "target": "Dossier",
                        "type": "Dépendance",
                        "detail": "visite"
                    }
                ]
            }
        ],
        "roles": [
            {
                "role": "Visitor",
                "classes": "Visiteur",
                "purpose": "Déclare une opération pour chaque type d’élément."
            },
            {
                "role": "Concrete Visitor",
                "classes": "Inventaire",
                "purpose": "Implémente le traitement des éléments."
            },
            {
                "role": "Element",
                "classes": "Element",
                "purpose": "Déclare accepter()."
            },
            {
                "role": "Concrete Element",
                "classes": "Fichier, Dossier",
                "purpose": "Transmet son type concret au visiteur."
            },
            {
                "role": "Client",
                "classes": "main()",
                "purpose": "Crée et relie les objets, puis utilise leurs contrats."
            }
        ],
        "referenceUrl": "https://refactoring.guru/design-patterns/visitor"
    },
    {
        "id": "mvc",
        "name": "MVC",
        "family": "architecture",
        "summary": "Séparer l’état et les règles, la présentation et la coordination des interactions.",
        "situation": "Séparer état, rendu et coordination",
        "reading": "Modele porte le stock. Controleur traite une intention d’approvisionnement. Vue lit l’état pour l’afficher.",
        "limit": "MVC signifie Modèle-Vue-Contrôleur. Les règles de stock d’un domaine plus riche devraient appartenir au modèle ou à un service métier.",
        "code": "#include <iostream>\n#include <stdexcept>\n\nstruct Modele {\n    int stock = 0;\n};\n\nstruct Vue {\n    void afficher(const Modele &modele) const {\n        std::cout << \"Stock : \" << modele.stock << '\\n';\n    }\n};\n\nclass Controleur {\npublic:\n    Controleur(Modele &modele, const Vue &vue) : modele_(modele), vue_(vue) {\n    }\n    void approvisionner(int quantite) {\n        if (quantite <= 0)\n            throw std::invalid_argument(\"Quantite positive attendue\");\n        modele_.stock += quantite;\n        vue_.afficher(modele_);\n    }\n\nprivate:\n    Modele &modele_;\n    const Vue &vue_;\n};\n\nint main() {\n    Modele modele;\n    Vue vue;\n    Controleur controleur{modele, vue};\n    controleur.approvisionner(3);\n}\n",
        "output": "Stock : 3\n",
        "when": "Utilisez cette séparation quand les règles métier doivent rester compréhensibles même si les écrans changent.",
        "compare": "MVC organise les responsabilités du modèle, de la vue et du contrôleur. Strategy peut être utilisé à l’intérieur du modèle. MVC est distinct des 23 patterns classiques.",
        "case": "Une interface de stock doit pouvoir changer sa présentation sans mélanger la lecture des données, l’intention utilisateur et l’écriture de la vue.",
        "decision": "Le contrôleur reçoit l’approvisionnement, modifie le modèle puis demande à la vue de le présenter.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "mvc.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Controleur",
                        "target": "Modele",
                        "type": "Association",
                        "detail": "modifie"
                    },
                    {
                        "source": "Controleur",
                        "target": "Vue",
                        "type": "Association",
                        "detail": "déclenche"
                    },
                    {
                        "source": "Vue",
                        "target": "Modele",
                        "type": "Dépendance",
                        "detail": "lit"
                    }
                ]
            }
        ]
    },
    {
        "id": "value-object",
        "name": "Value Object",
        "family": "architecture",
        "summary": "Représenter une valeur métier immuable, valide et comparable par son contenu.",
        "situation": "Comparer les valeurs métier",
        "reading": "Montant stocke des centimes et refuse une valeur négative. L’égalité générée compare les membres, donc deux montants de 500 sont égaux.",
        "limit": "L’objet expose une lecture, sans méthode de modification. Une identité technique serait inutile pour cette valeur.",
        "code": "#include <iostream>\n#include <stdexcept>\n\nclass Montant {\npublic:\n    explicit Montant(int centimes) : centimes_(centimes) {\n        if (centimes < 0)\n            throw std::invalid_argument(\"Montant negatif\");\n    }\n\n    bool operator==(const Montant &) const = default;\n    int centimes() const {\n        return centimes_;\n    }\n\nprivate:\n    int centimes_;\n};\n\nint main() {\n    const Montant premier{500};\n    const Montant second{500};\n    std::cout << std::boolalpha << (premier == second) << '\\n';\n}\n",
        "output": "true\n",
        "when": "Utilisez-le quand une donnée possède une règle métier ou une signification qu’un simple entier ou texte n’exprime pas bien.",
        "compare": "Une entité conserve son identité même si ses propriétés changent, comme un dossier identifié par son numéro. Un Value Object est défini par ses valeurs, comme une quantité.",
        "case": "Une facture utilise des montants. Deux montants de 500 centimes doivent être égaux, quelle que soit leur origine, et une valeur négative doit être refusée.",
        "decision": "Montant réunit la valeur, sa validation et sa comparaison. L’égalité porte sur les centimes plutôt que sur une identité technique.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "value-object.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": []
            }
        ]
    },
    {
        "id": "grasp-expert",
        "name": "Information Expert",
        "family": "grasp",
        "summary": "Attribuer une responsabilité à l’objet qui possède les informations nécessaires.",
        "situation": "Donner le calcul à celui qui connaît les données",
        "reading": "Ligne connaît sa quantité et son prix. Commande connaît ses lignes et additionne leurs totaux.",
        "limit": "GRASP désigne des principes généraux d’attribution des responsabilités. L’exemple répartit le calcul aux deux niveaux qui disposent de l’information.",
        "code": "#include <iostream>\n#include <vector>\n\nstruct Ligne {\n    int quantite;\n    int prix;\n    int total() const {\n        return quantite * prix;\n    }\n};\n\nstruct Commande {\n    std::vector<Ligne> lignes;\n    int total() const {\n        int somme = 0;\n        for (const auto &ligne : lignes)\n            somme += ligne.total();\n        return somme;\n    }\n};\n\nint main() {\n    Commande commande{{{2, 10}, {1, 5}}};\n    std::cout << commande.total() << '\\n';\n}\n",
        "output": "25\n",
        "when": "Confiez une décision à l’objet qui connaît déjà les données utiles, si cela reste cohérent avec son rôle.",
        "compare": "Information Expert aide à choisir où placer une règle. High Cohesion aide à vérifier que l’objet garde un rôle clair.",
        "case": "Pour calculer une commande, il faut multiplier chaque quantité par son prix, puis additionner les lignes. On cherche où placer ces calculs.",
        "decision": "Ligne dispose des données de son total. Commande possède les lignes et réalise la somme. Chacune est experte de l’information qu’elle connaît.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-expert.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Commande",
                        "target": "Ligne",
                        "type": "Composition",
                        "detail": "0..*"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-creator",
        "name": "Creator",
        "family": "grasp",
        "summary": "Confier la création à un objet qui possède les données d’initialisation ou entretient un lien étroit avec le produit.",
        "situation": "Créer les objets dont on gère la collection",
        "reading": "Commande vérifie la quantité et crée sa Ligne avant de l’ajouter à la collection.",
        "limit": "Le créateur est celui qui contient et gère les éléments. Une fabrique distincte serait utile si la création devenait complexe.",
        "code": "#include <iostream>\n#include <stdexcept>\n#include <vector>\n\nstruct Ligne {\n    int quantite;\n};\n\nclass Commande {\npublic:\n    void ajouter(int quantite) {\n        if (quantite <= 0)\n            throw std::invalid_argument(\"Quantite invalide\");\n        lignes_.push_back(Ligne{quantite});\n    }\n\n    std::size_t taille() const {\n        return lignes_.size();\n    }\n\nprivate:\n    std::vector<Ligne> lignes_;\n};\n\nint main() {\n    Commande commande;\n    commande.ajouter(2);\n    std::cout << commande.taille() << \" ligne\\n\";\n}\n",
        "output": "1 ligne\n",
        "when": "Confiez la création à un objet qui possède, collecte ou utilise directement les données nécessaires.",
        "compare": "Creator est un principe de répartition des responsabilités. Builder est une solution possible quand cette création demande plusieurs étapes.",
        "case": "Une commande crée et conserve ses lignes. Les quantités doivent être vérifiées au moment de l’ajout.",
        "decision": "La responsabilité de création revient à Commande, qui connaît la collection et garantit la validation avant l’insertion.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-creator.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Commande",
                        "target": "Ligne",
                        "type": "Composition",
                        "detail": "0..* lignes"
                    },
                    {
                        "source": "Commande",
                        "target": "Ligne",
                        "type": "Dépendance",
                        "detail": "crée"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-controller",
        "name": "Controller",
        "family": "grasp",
        "summary": "Attribuer la réception d’une opération système à un objet qui coordonne sa réalisation.",
        "situation": "Recevoir une intention et déléguer",
        "reading": "Controleur reçoit un nom puis appelle Inscription. Le service vérifie la règle et produit le résultat.",
        "limit": "Le contrôleur coordonne un cas d’utilisation. Il garde peu de règles pour rester facile à faire évoluer.",
        "code": "#include <iostream>\n#include <stdexcept>\n#include <string>\n#include <utility>\n\nclass Inscription {\npublic:\n    std::string inscrire(std::string nom) const {\n        if (nom.empty())\n            throw std::invalid_argument(\"Nom requis\");\n        return \"Inscrit : \" + nom;\n    }\n};\n\nclass Controleur {\npublic:\n    explicit Controleur(const Inscription &service) : service_(service) {\n    }\n    std::string recevoir(std::string nom) const {\n        return service_.inscrire(std::move(nom));\n    }\n\nprivate:\n    const Inscription &service_;\n};\n\nint main() {\n    Inscription service;\n    Controleur controleur{service};\n    std::cout << controleur.recevoir(\"Lea\") << '\\n';\n}\n",
        "output": "Inscrit : Lea\n",
        "when": "Utilisez un contrôleur pour donner un point d’entrée clair aux actions venant de l’interface.",
        "compare": "GRASP Controller désigne un rôle de réception des actions. MVC précise aussi la séparation avec le modèle et la vue.",
        "case": "Une action de l’interface inscrit un utilisateur. Le traitement de l’intention doit rester identifiable si l’écran change.",
        "decision": "Controleur transmet l’inscription au service. La règle du nom obligatoire reste dans Inscription.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-controller.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Controleur",
                        "target": "Inscription",
                        "type": "Association",
                        "detail": "délègue"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-low-coupling",
        "name": "Low Coupling",
        "family": "grasp",
        "summary": "Limiter les dépendances qui rendent une modification locale coûteuse pour les autres objets.",
        "situation": "Dépendre d’un contrat limité",
        "reading": "Service consulte uniquement Depot::lire(). Le type concret Memoire est choisi au moment de construire le service.",
        "limit": "Le contrat réduit les détails que le client doit connaître. La référence exige que le dépôt reste vivant.",
        "code": "#include <iostream>\n\nstruct Depot {\n    virtual ~Depot() = default;\n    virtual int lire() const = 0;\n};\n\nstruct Memoire final : Depot {\n    int lire() const override {\n        return 7;\n    }\n};\n\nclass Service {\npublic:\n    explicit Service(const Depot &depot) : depot_(depot) {\n    }\n    int stock() const {\n        return depot_.lire();\n    }\n\nprivate:\n    const Depot &depot_;\n};\n\nint main() {\n    Memoire depot;\n    Service service{depot};\n    std::cout << service.stock() << '\\n';\n}\n",
        "output": "7\n",
        "when": "Limitez le nombre de détails techniques qu’une classe doit connaître sur les autres.",
        "compare": "Low Coupling concerne ce qu’une classe doit connaître des autres. High Cohesion concerne ce qui appartient à son propre rôle.",
        "case": "Un service doit consulter le stock tantôt en mémoire, tantôt dans un stockage externe. Son code ne devrait pas connaître le détail du stockage.",
        "decision": "Le contrat Depot ne propose que lire(). Le client reçoit la dépendance à la construction.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-low-coupling.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Service",
                        "target": "Depot",
                        "type": "Association",
                        "detail": "observe"
                    },
                    {
                        "source": "Memoire",
                        "target": "Depot",
                        "type": "Héritage",
                        "detail": "Memoire hérite de Depot."
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-high-cohesion",
        "name": "High Cohesion",
        "family": "grasp",
        "summary": "Rassembler dans un objet des responsabilités qui servent un rôle précis et cohérent.",
        "situation": "Rassembler les opérations qui vont ensemble",
        "reading": "CalculPrix réalise le calcul. Affichage produit le texte. Chaque type poursuit une responsabilité précise.",
        "limit": "Créer deux classes n’est pas un objectif en soi. Cette séparation aide quand calcul et présentation évoluent séparément.",
        "code": "#include <iostream>\n\nstruct CalculPrix {\n    int total(int quantite, int prix) const {\n        return quantite * prix;\n    }\n};\n\nstruct Affichage {\n    void montrer(int total) const {\n        std::cout << \"Total : \" << total << '\\n';\n    }\n};\n\nint main() {\n    CalculPrix calcul;\n    Affichage vue;\n    vue.montrer(calcul.total(3, 10));\n}\n",
        "output": "Total : 30\n",
        "when": "Rassemblez dans une classe les tâches qui servent un même objectif clairement nommé.",
        "compare": "High Cohesion garde les responsabilités d’une classe cohérentes. Low Coupling réduit la quantité de détails qu’elle connaît sur ses voisines.",
        "case": "Le calcul de prix évolue selon les règles commerciales, tandis que la présentation change avec les besoins de l’interface.",
        "decision": "CalculPrix regroupe le calcul et Affichage regroupe la restitution. Chacun a une raison claire de changer.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-high-cohesion.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": []
            }
        ]
    },
    {
        "id": "grasp-polymorphism",
        "name": "Polymorphism",
        "family": "grasp",
        "summary": "Confier aux types concernés les comportements qui varient, derrière un contrat commun.",
        "situation": "Attribuer les variantes à leurs types",
        "reading": "publier() utilise Document. Pdf connaît son format et implémente exporter().",
        "limit": "La variation est portée par le type concret. L’appelant évite de tester le nom de chaque format.",
        "code": "#include <iostream>\n#include <string>\n\nstruct Document {\n    virtual ~Document() = default;\n    virtual std::string exporter() const = 0;\n};\n\nstruct Pdf final : Document {\n    std::string exporter() const override {\n        return \"PDF\";\n    }\n};\n\nvoid publier(const Document &document) {\n    std::cout << document.exporter() << '\\n';\n}\n\nint main() {\n    Pdf document;\n    publier(document);\n}\n",
        "output": "PDF\n",
        "when": "Utilisez plusieurs implémentations quand le comportement change réellement selon le type.",
        "compare": "Polymorphism est le principe qui permet cet appel commun. Strategy organise concrètement le choix entre des comportements interchangeables.",
        "case": "Une publication doit accepter différents types de documents. Chaque format sait comment exporter son contenu.",
        "decision": "La variation est confiée aux types de Document. publier() travaille sur un contrat uniforme.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-polymorphism.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Pdf",
                        "target": "Document",
                        "type": "Héritage",
                        "detail": "Pdf hérite de Document."
                    },
                    {
                        "source": "publier()",
                        "target": "Document",
                        "type": "Dépendance",
                        "detail": "utilise"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-pure-fabrication",
        "name": "Pure Fabrication",
        "family": "grasp",
        "summary": "Créer une responsabilité logicielle cohérente sans imposer qu’elle corresponde à un objet du monde réel.",
        "situation": "Introduire un service pour une responsabilité technique",
        "reading": "Journal regroupe l’écriture des événements. Commande lui transmet la confirmation.",
        "limit": "Le journal est un objet de conception ajouté pour isoler une tâche technique. Il pourrait ensuite changer de destination de sortie.",
        "code": "#include <iostream>\n#include <string>\n\nstruct Journal {\n    void ecrire(const std::string &texte) const {\n        std::cout << texte << '\\n';\n    }\n};\n\nclass Commande {\npublic:\n    void confirmer(const Journal &journal) {\n        confirmee_ = true;\n        journal.ecrire(\"Commande confirmee\");\n    }\n\nprivate:\n    bool confirmee_ = false;\n};\n\nint main() {\n    Commande commande;\n    Journal journal;\n    commande.confirmer(journal);\n}\n",
        "output": "Commande confirmee\n",
        "when": "Créez une classe de service quand cela protège un rôle métier et rend une tâche technique réutilisable.",
        "compare": "Information Expert recherche un objet métier déjà bien placé. Pure Fabrication autorise un objet de conception supplémentaire quand aucun objet métier ne convient.",
        "case": "Plusieurs opérations métier doivent produire des traces. Ajouter le code technique de journalisation à chacune compliquerait leurs responsabilités.",
        "decision": "Journal porte cette responsabilité technique. La commande fournit seulement le message de confirmation.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-pure-fabrication.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Commande",
                        "target": "Journal",
                        "type": "Dépendance",
                        "detail": "utilise"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-indirection",
        "name": "Indirection",
        "family": "grasp",
        "summary": "Introduire un intermédiaire pour limiter une dépendance directe entre deux éléments.",
        "situation": "Intercaler un point de passage",
        "reading": "Notifications joue l’intermédiaire entre les clients et ServiceMail. Les clients publient un message dans le vocabulaire de l’application.",
        "limit": "L’intermédiaire est utile si la coordination ou le fournisseur évolue. Il doit apporter une responsabilité identifiable.",
        "code": "#include <iostream>\n#include <string>\n\nstruct ServiceMail {\n    void envoyer(const std::string &texte) const {\n        std::cout << \"Mail : \" << texte << '\\n';\n    }\n};\n\nclass Notifications {\npublic:\n    explicit Notifications(const ServiceMail &mail) : mail_(mail) {\n    }\n    void publier(const std::string &message) const {\n        mail_.envoyer(message);\n    }\n\nprivate:\n    const ServiceMail &mail_;\n};\n\nint main() {\n    ServiceMail mail;\n    Notifications notifications{mail};\n    notifications.publier(\"Bienvenue\");\n}\n",
        "output": "Mail : Bienvenue\n",
        "when": "Ajoutez un intermédiaire lorsqu’il absorbe une différence ou protège plusieurs appelants d’un changement.",
        "compare": "Indirection décrit l’idée d’interposer un objet. Adapter, Facade et Mediator sont des façons différentes de le faire selon le problème.",
        "case": "Les composants métier publient des notifications. Un point de passage commun doit décider comment contacter le service de mail.",
        "decision": "Notifications intervient entre le client et le service concret. La coordination peut évoluer dans cet intermédiaire.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-indirection.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "Notifications",
                        "target": "ServiceMail",
                        "type": "Association",
                        "detail": "délègue"
                    }
                ]
            }
        ]
    },
    {
        "id": "grasp-protected-variations",
        "name": "Protected Variations",
        "family": "grasp",
        "summary": "Placer un contrat stable autour d’un point de variation identifié.",
        "situation": "Isoler une source de changement",
        "reading": "ouvert() consulte le contrat Horloge. HorlogeFixe rend le résultat déterministe pour les tests.",
        "limit": "Une horloge système pourrait implémenter le même contrat. L’interface protège ici la variation du temps fourni.",
        "code": "#include <iostream>\n\nstruct Horloge {\n    virtual ~Horloge() = default;\n    virtual int heure() const = 0;\n};\n\nstruct HorlogeFixe final : Horloge {\n    int heure() const override {\n        return 9;\n    }\n};\n\nbool ouvert(const Horloge &horloge) {\n    return horloge.heure() >= 8 && horloge.heure() < 18;\n}\n\nint main() {\n    HorlogeFixe horloge;\n    std::cout << std::boolalpha << ouvert(horloge) << '\\n';\n}\n",
        "output": "true\n",
        "when": "Protégez une variation déjà réelle ou très probable, comme le remplacement prévu d’une intégration.",
        "compare": "Protected Variations désigne ce que vous cherchez à protéger. Low Coupling décrit un effet recherché : moins de classes à modifier lorsque cette partie change.",
        "case": "Une règle d’ouverture dépend de l’heure. Les tests doivent pouvoir contrôler cette heure sans attendre un moment précis de la journée.",
        "decision": "Le contrat Horloge protège la variation du temps fourni. HorlogeFixe rend le test reproductible.",
        "diagramDescription": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
        "diagrams": [
            {
                "title": "Structure des classes",
                "file": "grasp-protected-variations.svg",
                "reading": "La classe de base est au-dessus de ses spécialisations. Les attributs, méthodes et relations correspondent à cet exemple C++.",
                "relations": [
                    {
                        "source": "HorlogeFixe",
                        "target": "Horloge",
                        "type": "Héritage",
                        "detail": "HorlogeFixe hérite de Horloge."
                    },
                    {
                        "source": "ouvert()",
                        "target": "Horloge",
                        "type": "Dépendance",
                        "detail": "consulte"
                    }
                ]
            }
        ]
    }
];
