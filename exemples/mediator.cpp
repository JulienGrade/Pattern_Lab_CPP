#include <iostream>
#include <string>
#include <utility>

class Mediateur {
public:
    virtual ~Mediateur() = default;
    virtual void texteSaisi(const std::string &texte) = 0;
};
class Composant {
public:
    explicit Composant(Mediateur &mediateur) : mediateur_(mediateur) {
    }
    virtual ~Composant() = default;

protected:
    Mediateur &mediateur_;
};
class Champ final : public Composant {
public:
    using Composant::Composant;
    void saisir(const std::string &texte) {
        mediateur_.texteSaisi(texte);
    }
};
class Vue final : public Composant {
public:
    using Composant::Composant;
    void afficher(std::string texte) {
        texte_ = std::move(texte);
    }
    const std::string &texte() const {
        return texte_;
    }

private:
    std::string texte_;
};
// Concrete Mediator : possède et coordonne ses composants.
class Dialogue final : public Mediateur {
public:
    Dialogue() : champ_(*this), vue_(*this) {
    }
    Dialogue(const Dialogue &) = delete;
    Dialogue &operator=(const Dialogue &) = delete;
    void rechercher(const std::string &texte) {
        champ_.saisir(texte);
    }
    void texteSaisi(const std::string &texte) override {
        vue_.afficher("Recherche : " + texte);
    }
    const std::string &resultat() const {
        return vue_.texte();
    }

private:
    Champ champ_;
    Vue vue_;
};
int main() {
    Dialogue dialogue;
    dialogue.rechercher("C++");
    std::cout << dialogue.resultat() << '\n';
}
