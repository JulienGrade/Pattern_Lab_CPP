#include <iostream>
#include <vector>

struct Ligne {
    int quantite;
    int prix;
    int total() const { return quantite * prix; }
};

struct Commande {
    std::vector<Ligne> lignes;
    int total() const {
        int somme = 0;
        for (const auto& ligne : lignes) somme += ligne.total();
        return somme;
    }
};

int main() {
    Commande commande{{{2, 10}, {1, 5}}};
    std::cout << commande.total() << '\n';
}
