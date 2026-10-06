#include <iostream>

struct CalculPrix {
    int total(int quantite, int prix) const {
        return quantite * prix;
    }
};

struct Affichage {
    void montrer(int total) const {
        std::cout << "Total : " << total << '\n';
    }
};

int main() {
    CalculPrix calcul;
    Affichage vue;
    vue.montrer(calcul.total(3, 10));
}
