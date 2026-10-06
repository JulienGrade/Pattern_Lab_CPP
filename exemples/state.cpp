#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>
#include <utility>

class Commande;
class Etat {
public:
    virtual ~Etat() = default;
    virtual std::string nom() const = 0;
    virtual void avancer(Commande &commande) const = 0;
};
class Payee final : public Etat {
public:
    std::string nom() const override {
        return "Payee";
    }
    void avancer(Commande &) const override {
        throw std::logic_error("Deja payee");
    }
};
class Brouillon final : public Etat {
public:
    std::string nom() const override {
        return "Brouillon";
    }
    void avancer(Commande &commande) const override;
};
class Commande {
public:
    Commande() : etat_(std::make_shared<Brouillon>()) {
    }
    void changerEtat(std::shared_ptr<const Etat> etat) {
        if (!etat) {
            throw std::invalid_argument("Etat absent");
        }
        etat_ = std::move(etat);
    }
    void avancer() {
        // Garde l’état actif vivant jusqu’à la fin de son appel.
        const auto actif = etat_;
        actif->avancer(*this);
    }
    std::string etat() const {
        return etat_->nom();
    }

private:
    std::shared_ptr<const Etat> etat_;
};
void Brouillon::avancer(Commande &commande) const {
    commande.changerEtat(std::make_shared<Payee>());
}
int main() {
    Commande commande;
    std::cout << commande.etat() << '\n';
    commande.avancer();
    std::cout << commande.etat() << '\n';
}
