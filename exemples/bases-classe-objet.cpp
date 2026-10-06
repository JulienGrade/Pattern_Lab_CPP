#include <iostream>
#include <string>
#include <utility>

class Collaborateur {
public:
    explicit Collaborateur(std::string nom) : nom_(std::move(nom)) {
    }
    const std::string &nom() const {
        return nom_;
    }

private:
    std::string nom_;
};

int main() {
    Collaborateur lea{"Lea"};
    Collaborateur karim{"Karim"};
    std::cout << lea.nom() << ' ' << karim.nom() << '\n';
}
