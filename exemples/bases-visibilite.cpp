#include <iostream>

class Stock {
public:
    bool retirer(int quantite) {
        if (quantite <= 0 || quantite > quantite_)
            return false;
        quantite_ -= quantite;
        return true;
    }

    int quantite() const {
        return quantite_;
    }

private:
    int quantite_ = 5;
};

int main() {
    Stock stock;
    std::cout << std::boolalpha << stock.retirer(8) << ' ' << stock.quantite() << '\n';
}
