#include <iostream>
#include <string>
#include <utility>

struct Vue {
    std::string texte;
};

class Mediateur {
public:
    explicit Mediateur(Vue& vue) : vue_(vue) {}

    void texteSaisi(std::string texte) {
        vue_.texte = "Recherche : " + texte;
    }

private:
    Vue& vue_;
};

class Champ {
public:
    explicit Champ(Mediateur& mediateur) : mediateur_(mediateur) {}
    void saisir(std::string texte) { mediateur_.texteSaisi(std::move(texte)); }

private:
    Mediateur& mediateur_;
};

int main() {
    Vue vue;
    Mediateur mediateur{vue};
    Champ champ{mediateur};
    champ.saisir("C++");
    std::cout << vue.texte << '\n';
}
