#include <iostream>
#include <string>

struct Journal {
    void ecrire(const std::string &texte) const {
        std::cout << texte << '\n';
    }
};

class Commande {
public:
    void confirmer(const Journal &journal) {
        confirmee_ = true;
        journal.ecrire("Commande confirmee");
    }

private:
    bool confirmee_ = false;
};

int main() {
    Commande commande;
    Journal journal;
    commande.confirmer(journal);
}
