#include <iostream>
#include <stdexcept>
#include <string>
#include <utility>
#include <vector>

class Editeur;
// Memento opaque : seul l’éditeur peut lire ou fabriquer son état.
class Sauvegarde {
    friend class Editeur;

public:
    Sauvegarde(const Sauvegarde &) = default;
    Sauvegarde &operator=(const Sauvegarde &) = default;

private:
    explicit Sauvegarde(std::string texte) : texte_(std::move(texte)) {
    }
    std::string texte_;
};
class Editeur {
public:
    void saisir(std::string texte) {
        texte_ = std::move(texte);
    }
    Sauvegarde sauvegarder() const {
        return Sauvegarde{texte_};
    }
    void restaurer(const Sauvegarde &sauvegarde) {
        texte_ = sauvegarde.texte_;
    }
    const std::string &texte() const {
        return texte_;
    }

private:
    std::string texte_;
};
// Caretaker : conserve les instantanés sans accéder à leur contenu.
class Historique {
public:
    explicit Historique(Editeur &editeur) : editeur_(editeur) {
    }
    void memoriser() {
        sauvegardes_.push_back(editeur_.sauvegarder());
    }
    void annuler() {
        if (sauvegardes_.empty()) {
            throw std::logic_error("Historique vide");
        }
        editeur_.restaurer(sauvegardes_.back());
        sauvegardes_.pop_back();
    }

private:
    Editeur &editeur_;
    std::vector<Sauvegarde> sauvegardes_;
};
int main() {
    Editeur editeur;
    Historique historique{editeur};
    editeur.saisir("Version A");
    historique.memoriser();
    editeur.saisir("Version B");
    historique.annuler();
    std::cout << editeur.texte() << '\n';
}
