#include <iostream>
#include <stdexcept>

struct Paiement {
    virtual ~Paiement() = default;
    virtual int payerCentimes(int centimes) const = 0;
};

struct AncienTerminal {
    int reglerEuros(int euros) const {
        return euros;
    }
};

class Adaptateur final : public Paiement {
public:
    explicit Adaptateur(const AncienTerminal &terminal) : terminal_(terminal) {
    }

    int payerCentimes(int centimes) const override {
        if (centimes < 0 || centimes % 100 != 0) {
            throw std::invalid_argument("Le terminal accepte des euros entiers");
        }
        return terminal_.reglerEuros(centimes / 100);
    }

private:
    const AncienTerminal &terminal_;
};

int main() {
    AncienTerminal ancien;
    Adaptateur paiement{ancien};
    const Paiement &cible = paiement;
    std::cout << cible.payerCentimes(2500) << " euros\n";
}
