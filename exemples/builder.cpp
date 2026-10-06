#include <iostream>
#include <string>
#include <utility>

struct Rapport {
    std::string titre;
    bool stock = false;
};
// Builder : les étapes de construction communes.
class ConstructeurRapport {
public:
    virtual ~ConstructeurRapport() = default;
    virtual void reinitialiser() = 0;
    virtual void ajouterTitre(std::string titre) = 0;
    virtual void ajouterStock() = 0;
};
class RapportBuilder final : public ConstructeurRapport {
public:
    void reinitialiser() override {
        rapport_ = Rapport{};
    }
    void ajouterTitre(std::string titre) override {
        rapport_.titre = std::move(titre);
    }
    void ajouterStock() override {
        rapport_.stock = true;
    }
    Rapport resultat() const {
        return rapport_;
    }

private:
    Rapport rapport_;
};
// Director : connaît une recette, pas le stockage du produit.
class Directeur {
public:
    explicit Directeur(ConstructeurRapport &builder) : builder_(builder) {
    }
    void inventaire() {
        builder_.reinitialiser();
        builder_.ajouterTitre("Inventaire");
        builder_.ajouterStock();
    }

private:
    ConstructeurRapport &builder_;
};
int main() {
    RapportBuilder builder;
    Directeur directeur{builder};
    directeur.inventaire();
    const Rapport rapport = builder.resultat();
    std::cout << rapport.titre << " : stock " << std::boolalpha << rapport.stock << '\n';
}
