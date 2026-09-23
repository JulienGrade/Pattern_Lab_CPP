#include <iostream>

struct Expression {
    virtual ~Expression() = default;
    virtual int evaluer() const = 0;
};

struct Nombre final : Expression {
    explicit Nombre(int nombre) : valeur(nombre) {}
    int evaluer() const override { return valeur; }
    int valeur;
};

class Somme final : public Expression {
public:
    Somme(const Expression& gauche, const Expression& droite)
        : gauche_(gauche), droite_(droite) {}

    int evaluer() const override { return gauche_.evaluer() + droite_.evaluer(); }

private:
    const Expression& gauche_;
    const Expression& droite_;
};

int main() {
    Nombre a{2};
    Nombre b{3};
    Somme expression{a, b};
    std::cout << expression.evaluer() << '\n';
}
