#include <iostream>
#include <string>

class Canal {
public:
    virtual ~Canal() = default;
    virtual std::string envoyer() const = 0;
};
class Mail final : public Canal {
public:
    std::string envoyer() const override {
        return "Mail";
    }
};
// Decorator : même contrat, délégation vers un autre composant.
class Decorateur : public Canal {
public:
    explicit Decorateur(const Canal &suivant) : suivant_(suivant) {
    }
    std::string envoyer() const override {
        return suivant_.envoyer();
    }

private:
    const Canal &suivant_;
};
class Journalise final : public Decorateur {
public:
    using Decorateur::Decorateur;
    std::string envoyer() const override {
        return "[log] " + Decorateur::envoyer();
    }
};
class Prioritaire final : public Decorateur {
public:
    using Decorateur::Decorateur;
    std::string envoyer() const override {
        return "[priorite] " + Decorateur::envoyer();
    }
};
int main() {
    Mail mail;
    Journalise journalise{mail};
    Prioritaire prioritaire{journalise};
    const Canal &canal = prioritaire;
    std::cout << canal.envoyer() << '\n';
}
