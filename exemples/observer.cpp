#include <iostream>
#include <vector>
#include <functional>
#include <utility>

class Stock {
public:
    void abonner(std::function<void(int)> callback) {
        abonnes_.push_back(std::move(callback));
    }

    void modifier(int quantite) {
        quantite_ = quantite;
        for (const auto& callback : abonnes_) callback(quantite_);
    }

private:
    int quantite_ = 0;
    std::vector<std::function<void(int)>> abonnes_;
};

int main() {
    Stock stock;
    stock.abonner([](int quantite) { std::cout << "Stock : " << quantite << '\n'; });
    stock.modifier(5);
}
