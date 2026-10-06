#include <iostream>

class Compteur {
public:
    void incrementer() {
        ++valeur_;
    }
    int valeur() const {
        return valeur_;
    }

private:
    int valeur_ = 0;
};

int main() {
    Compteur compteur;
    compteur.incrementer();
    std::cout << compteur.valeur() << '\n';
}
