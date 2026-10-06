#include <iostream>

// Strategy : le contrat commun de calcul des frais.
class Tarif {
public:
    virtual ~Tarif() = default;
    virtual int frais() const = 0;
};
class Standard final : public Tarif {
public:
    int frais() const override {
        return 5;
    }
};
class Express final : public Tarif {
public:
    int frais() const override {
        return 12;
    }
};
// Context : le panier conserve une stratégie interchangeable.
class Panier {
public:
    explicit Panier(const Tarif &tarif) : tarif_(&tarif) {
    }
    void changerTarif(const Tarif &tarif) {
        tarif_ = &tarif;
    }
    int total(int montant) const {
        return montant + tarif_->frais();
    }

private:
    const Tarif *tarif_;
};
int main() {
    Standard standard;
    Express express;
    Panier panier{standard};
    std::cout << panier.total(100) << '\n';
    panier.changerTarif(express);
    std::cout << panier.total(100) << '\n';
}
