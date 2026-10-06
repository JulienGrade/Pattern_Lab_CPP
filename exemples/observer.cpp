#include <algorithm>
#include <iostream>
#include <vector>

class Observateur {
public:
    virtual ~Observateur() = default;
    virtual void actualiser(int quantite) = 0;
};
// Publisher : conserve les abonnés et déclenche les notifications.
class Stock {
public:
    void abonner(Observateur &observateur) {
        if (std::find(abonnes_.begin(), abonnes_.end(), &observateur) == abonnes_.end()) {
            abonnes_.push_back(&observateur);
        }
    }
    void desabonner(Observateur &observateur) {
        std::erase(abonnes_, &observateur);
    }
    void modifier(int quantite) {
        quantite_ = quantite;
        for (auto *abonne : abonnes_) {
            abonne->actualiser(quantite_);
        }
    }

private:
    int quantite_ = 0;
    std::vector<Observateur *> abonnes_;
};
class VueStock final : public Observateur {
public:
    void actualiser(int quantite) override {
        std::cout << "Stock : " << quantite << '\n';
    }
};
class AlerteStock final : public Observateur {
public:
    void actualiser(int quantite) override {
        if (quantite < 3) {
            std::cout << "Alerte : stock faible\n";
        }
    }
};
int main() {
    VueStock vue;
    AlerteStock alerte;
    Stock stock;
    stock.abonner(vue);
    stock.abonner(alerte);
    stock.modifier(2);
    stock.desabonner(alerte);
    stock.modifier(5);
}
