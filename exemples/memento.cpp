#include <iostream>
#include <string>
#include <utility>

class Editeur {
public:
    struct Sauvegarde {
        std::string texte;
    };

    void saisir(std::string texte) { texte_ = std::move(texte); }
    Sauvegarde sauvegarder() const { return {texte_}; }
    void restaurer(const Sauvegarde& sauvegarde) { texte_ = sauvegarde.texte; }
    const std::string& texte() const { return texte_; }

private:
    std::string texte_;
};

int main() {
    Editeur editeur;
    editeur.saisir("Version A");
    const auto sauvegarde = editeur.sauvegarder();
    editeur.saisir("Version B");
    editeur.restaurer(sauvegarde);
    std::cout << editeur.texte() << '\n';
}
