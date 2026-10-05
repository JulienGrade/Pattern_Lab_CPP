#include <iostream>

struct Depot {
    virtual ~Depot() = default;
    virtual int lire() const = 0;
};

struct Memoire final : Depot {
    int lire() const override { return 7; }
};

class Service {
public:
    explicit Service(const Depot& depot) : depot_(depot) {}
    int stock() const { return depot_.lire(); }

private:
    const Depot& depot_;
};

int main() {
    Memoire depot;
    Service service{depot};
    std::cout << service.stock() << '\n';
}
