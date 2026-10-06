#include <iostream>

class Filtre {
public:
    explicit Filtre(const Filtre *suivant = nullptr) : suivant_(suivant) {
    }
    virtual ~Filtre() = default;

    bool traiter(int valeur) const {
        return accepter(valeur) && (!suivant_ || suivant_->traiter(valeur));
    }

protected:
    virtual bool accepter(int valeur) const = 0;

private:
    const Filtre *suivant_;
};

class Positif final : public Filtre {
public:
    using Filtre::Filtre;
    bool accepter(int valeur) const override {
        return valeur > 0;
    }
};

class Petit final : public Filtre {
public:
    bool accepter(int valeur) const override {
        return valeur < 100;
    }
};

int main() {
    Petit petit;
    Positif chaine{&petit};
    std::cout << std::boolalpha << chaine.traiter(42) << ' ' << chaine.traiter(120) << '\n';
}
