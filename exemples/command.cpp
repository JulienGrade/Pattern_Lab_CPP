#include <iostream>

struct Compteur {
    int valeur = 0;
};

struct Commande {
    virtual ~Commande() = default;
    virtual void executer() = 0;
    virtual void annuler() = 0;
};

class Incrementer final : public Commande {
public:
    explicit Incrementer(Compteur& compteur) : compteur_(compteur) {}
    void executer() override { ++compteur_.valeur; }
    void annuler() override { --compteur_.valeur; }

private:
    Compteur& compteur_;
};

int main() {
    Compteur compteur;
    Incrementer action{compteur};
    action.executer();
    std::cout << compteur.valeur << '\n';
    action.annuler();
    std::cout << compteur.valeur << '\n';
}
