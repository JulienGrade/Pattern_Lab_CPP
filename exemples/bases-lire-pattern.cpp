#include <iostream>

struct Politique {
    virtual ~Politique() = default;
    virtual int calculer(int montant) const = 0;
};

struct Double final : Politique {
    int calculer(int montant) const override {
        return montant * 2;
    }
};

class Service {
public:
    explicit Service(const Politique &politique) : politique_(politique) {
    }
    int executer(int montant) const {
        return politique_.calculer(montant);
    }

private:
    const Politique &politique_;
};

int main() {
    Double politique;
    Service service{politique};
    std::cout << service.executer(5) << '\n';
}
