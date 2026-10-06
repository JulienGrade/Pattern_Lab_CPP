#include <iostream>
#include <memory>
#include <stdexcept>
#include <utility>
#include <vector>

struct Element {
    virtual ~Element() = default;
    virtual int prix() const = 0;
};

class Article final : public Element {
public:
    explicit Article(int prix) : prix_(prix) {
    }
    int prix() const override {
        return prix_;
    }

private:
    int prix_;
};

class Lot final : public Element {
public:
    void ajouter(std::unique_ptr<Element> enfant) {
        if (!enfant)
            throw std::invalid_argument("Enfant absent");
        enfants_.push_back(std::move(enfant));
    }

    int prix() const override {
        int total = 0;
        for (const auto &enfant : enfants_) {
            total += enfant->prix();
        }
        return total;
    }

private:
    std::vector<std::unique_ptr<Element>> enfants_;
};

int main() {
    Lot lot;
    lot.ajouter(std::make_unique<Article>(10));
    auto sousLot = std::make_unique<Lot>();
    sousLot->ajouter(std::make_unique<Article>(20));
    lot.ajouter(std::move(sousLot));
    std::cout << lot.prix() << '\n';
}
