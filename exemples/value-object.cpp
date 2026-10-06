#include <iostream>
#include <stdexcept>

class Montant {
public:
    explicit Montant(int centimes) : centimes_(centimes) {
        if (centimes < 0)
            throw std::invalid_argument("Montant negatif");
    }

    bool operator==(const Montant &) const = default;
    int centimes() const {
        return centimes_;
    }

private:
    int centimes_;
};

int main() {
    const Montant premier{500};
    const Montant second{500};
    std::cout << std::boolalpha << (premier == second) << '\n';
}
