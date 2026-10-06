#include <iostream>

struct Horloge {
    virtual ~Horloge() = default;
    virtual int heure() const = 0;
};

struct HorlogeFixe final : Horloge {
    int heure() const override {
        return 9;
    }
};

bool ouvert(const Horloge &horloge) {
    return horloge.heure() >= 8 && horloge.heure() < 18;
}

int main() {
    HorlogeFixe horloge;
    std::cout << std::boolalpha << ouvert(horloge) << '\n';
}
