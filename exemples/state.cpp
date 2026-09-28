#include <iostream>
#include <string>
#include <memory>
#include <stdexcept>

struct Etat {
    virtual ~Etat() = default;
    virtual std::string nom() const = 0;
    virtual std::unique_ptr<Etat> suivant() const = 0;
};

struct Payee final : Etat {
    std::string nom() const override { return "Payee"; }
    std::unique_ptr<Etat> suivant() const override {
        throw std::logic_error("Deja payee");
    }
};

struct Brouillon final : Etat {
    std::string nom() const override { return "Brouillon"; }
    std::unique_ptr<Etat> suivant() const override { return std::make_unique<Payee>(); }
};

class Commande {
public:
    void avancer() { etat_ = etat_->suivant(); }
    std::string etat() const { return etat_->nom(); }

private:
    std::unique_ptr<Etat> etat_ = std::make_unique<Brouillon>();
};

int main() {
    Commande commande;
    std::cout << commande.etat() << '\n';
    commande.avancer();
    std::cout << commande.etat() << '\n';
}
