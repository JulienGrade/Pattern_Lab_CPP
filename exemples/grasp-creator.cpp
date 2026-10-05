#include <iostream>
#include <vector>
#include <stdexcept>

struct Ligne {
    int quantite;
};

class Commande {
public:
    void ajouter(int quantite) {
        if (quantite <= 0) throw std::invalid_argument("Quantite invalide");
        lignes_.push_back(Ligne{quantite});
    }

    std::size_t taille() const { return lignes_.size(); }

private:
    std::vector<Ligne> lignes_;
};

int main() {
    Commande commande;
    commande.ajouter(2);
    std::cout << commande.taille() << " ligne\n";
}
