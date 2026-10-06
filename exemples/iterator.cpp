#include <cstddef>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <vector>

class Iterateur {
public:
    virtual ~Iterateur() = default;
    virtual bool termine() const = 0;
    virtual int courant() const = 0;
    virtual void suivant() = 0;
};
class Collection {
public:
    virtual ~Collection() = default;
    virtual std::unique_ptr<Iterateur> creerIterateur() const = 0;
};
class Nombres;
class IterateurNombres final : public Iterateur {
public:
    explicit IterateurNombres(const Nombres &collection) : collection_(collection) {
    }
    bool termine() const override;
    int courant() const override;
    void suivant() override;

private:
    const Nombres &collection_;
    std::size_t position_ = 0;
};
class Nombres final : public Collection {
public:
    std::unique_ptr<Iterateur> creerIterateur() const override {
        return std::make_unique<IterateurNombres>(*this);
    }
    std::size_t taille() const {
        return valeurs_.size();
    }
    int a(std::size_t position) const {
        return valeurs_.at(position);
    }

private:
    std::vector<int> valeurs_{2, 4, 6};
};
bool IterateurNombres::termine() const {
    return position_ >= collection_.taille();
}
int IterateurNombres::courant() const {
    return collection_.a(position_);
}
void IterateurNombres::suivant() {
    if (termine()) {
        throw std::out_of_range("Fin du parcours");
    }
    ++position_;
}
int main() {
    Nombres nombres;
    const Collection &collection = nombres;
    auto iterateur = collection.creerIterateur();
    while (!iterateur->termine()) {
        std::cout << iterateur->courant() << '\n';
        iterateur->suivant();
    }
}
