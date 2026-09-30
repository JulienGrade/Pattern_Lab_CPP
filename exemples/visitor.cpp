#include <iostream>

class Fichier;
class Dossier;

struct Visiteur {
    virtual ~Visiteur() = default;
    virtual void visiter(const Fichier&) = 0;
    virtual void visiter(const Dossier&) = 0;
};

struct Element {
    virtual ~Element() = default;
    virtual void accepter(Visiteur&) const = 0;
};

class Fichier final : public Element {
public:
    void accepter(Visiteur& visiteur) const override { visiteur.visiter(*this); }
};

class Dossier final : public Element {
public:
    void accepter(Visiteur& visiteur) const override { visiteur.visiter(*this); }
};

struct Inventaire final : Visiteur {
    void visiter(const Fichier&) override { std::cout << "Un fichier\n"; }
    void visiter(const Dossier&) override { std::cout << "Un dossier\n"; }
};

int main() {
    Fichier fichier;
    Dossier dossier;
    Inventaire inventaire;
    fichier.accepter(inventaire);
    dossier.accepter(inventaire);
}
