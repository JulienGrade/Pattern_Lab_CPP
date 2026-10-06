#include <iostream>
#include <stdexcept>

struct Modele {
    int stock = 0;
};

struct Vue {
    void afficher(const Modele &modele) const {
        std::cout << "Stock : " << modele.stock << '\n';
    }
};

class Controleur {
public:
    Controleur(Modele &modele, const Vue &vue) : modele_(modele), vue_(vue) {
    }
    void approvisionner(int quantite) {
        if (quantite <= 0)
            throw std::invalid_argument("Quantite positive attendue");
        modele_.stock += quantite;
        vue_.afficher(modele_);
    }

private:
    Modele &modele_;
    const Vue &vue_;
};

int main() {
    Modele modele;
    Vue vue;
    Controleur controleur{modele, vue};
    controleur.approvisionner(3);
}
