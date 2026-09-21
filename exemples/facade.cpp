#include <iostream>

struct Stock {
    void reserver() const { std::cout << "Stock reserve\n"; }
};

struct Facturation {
    void facturer() const { std::cout << "Facture creee\n"; }
};

class Vente {
public:
    void confirmer() const {
        stock_.reserver();
        facturation_.facturer();
    }

private:
    Stock stock_;
    Facturation facturation_;
};

int main() {
    Vente vente;
    vente.confirmer();
}
