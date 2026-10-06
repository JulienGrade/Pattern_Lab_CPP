#include <iostream>

class Compteur {
public:
    void incrementer() {
        ++valeur_;
    }
    void decrementer() {
        --valeur_;
    }
    int valeur() const {
        return valeur_;
    }

private:
    int valeur_ = 0;
};
class Commande {
public:
    virtual ~Commande() = default;
    virtual void executer() = 0;
    virtual void annuler() = 0;
};
class Incrementer final : public Commande {
public:
    explicit Incrementer(Compteur &compteur) : compteur_(compteur) {
    }
    void executer() override {
        if (!executee_) {
            compteur_.incrementer();
            executee_ = true;
        }
    }
    void annuler() override {
        if (executee_) {
            compteur_.decrementer();
            executee_ = false;
        }
    }

private:
    Compteur &compteur_;
    bool executee_ = false;
};
// Invoker : déclenche une commande sans connaître son récepteur.
class Bouton {
public:
    explicit Bouton(Commande &commande) : commande_(commande) {
    }
    void cliquer() {
        commande_.executer();
    }
    void annuler() {
        commande_.annuler();
    }

private:
    Commande &commande_;
};
int main() {
    Compteur compteur;
    Incrementer action{compteur};
    Bouton bouton{action};
    bouton.cliquer();
    std::cout << compteur.valeur() << '\n';
    bouton.annuler();
    std::cout << compteur.valeur() << '\n';
}
