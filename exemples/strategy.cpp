#include <iostream>

struct Tarif {
    virtual ~Tarif() = default;
    virtual int frais() const = 0;
};

struct Standard final : Tarif {
    int frais() const override { return 5; }
};

struct Express final : Tarif {
    int frais() const override { return 12; }
};

int total(int montant, const Tarif& tarif) {
    return montant + tarif.frais();
}

int main() {
    Standard standard;
    Express express;
    std::cout << total(100, standard) << ' ' << total(100, express) << '\n';
}
