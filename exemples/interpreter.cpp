#include <iostream>
#include <map>
#include <string>
#include <utility>

class Contexte {
public:
    void definir(std::string nom, int valeur) {
        valeurs_[std::move(nom)] = valeur;
    }
    int lire(const std::string &nom) const {
        return valeurs_.at(nom);
    }

private:
    std::map<std::string, int> valeurs_;
};
class Expression {
public:
    virtual ~Expression() = default;
    virtual int evaluer(const Contexte &contexte) const = 0;
};
class Variable final : public Expression {
public:
    explicit Variable(std::string nom) : nom_(std::move(nom)) {
    }
    int evaluer(const Contexte &contexte) const override {
        return contexte.lire(nom_);
    }

private:
    std::string nom_;
};
class Somme final : public Expression {
public:
    Somme(const Expression &gauche, const Expression &droite) : gauche_(gauche), droite_(droite) {
    }
    int evaluer(const Contexte &contexte) const override {
        return gauche_.evaluer(contexte) + droite_.evaluer(contexte);
    }

private:
    const Expression &gauche_;
    const Expression &droite_;
};
int main() {
    Contexte contexte;
    contexte.definir("base", 2);
    contexte.definir("bonus", 3);
    Variable base{"base"};
    Variable bonus{"bonus"};
    Somme regle{base, bonus};
    std::cout << regle.evaluer(contexte) << '\n';
}
