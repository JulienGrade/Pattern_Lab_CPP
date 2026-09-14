#include <iostream>
#include <string>
#include <utility>

struct Rapport {
    std::string titre;
    bool stock;
};

class RapportBuilder {
public:
    RapportBuilder& titre(std::string valeur) {
        titre_ = std::move(valeur);
        return *this;
    }

    RapportBuilder& avecStock() {
        stock_ = true;
        return *this;
    }

    Rapport construire() const { return {titre_, stock_}; }

private:
    std::string titre_ = "Rapport";
    bool stock_ = false;
};

int main() {
    const auto rapport = RapportBuilder{}.titre("Inventaire").avecStock().construire();
    std::cout << rapport.titre << " : stock " << std::boolalpha << rapport.stock << '\n';
}
