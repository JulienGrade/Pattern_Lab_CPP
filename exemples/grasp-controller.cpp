#include <iostream>
#include <string>
#include <utility>
#include <stdexcept>

class Inscription {
public:
    std::string inscrire(std::string nom) const {
        if (nom.empty()) throw std::invalid_argument("Nom requis");
        return "Inscrit : " + nom;
    }
};

class Controleur {
public:
    explicit Controleur(const Inscription& service) : service_(service) {}
    std::string recevoir(std::string nom) const { return service_.inscrire(std::move(nom)); }

private:
    const Inscription& service_;
};

int main() {
    Inscription service;
    Controleur controleur{service};
    std::cout << controleur.recevoir("Lea") << '\n';
}
