#include <iostream>
#include <string>
#include <vector>
#include <optional>

struct Badge {
    int numero;
};

struct Equipe {
    std::optional<Badge> badge;
    std::vector<std::string> membres;
};

int main() {
    Equipe equipe{std::nullopt, {"Lea", "Karim"}};
    std::cout << equipe.badge.has_value() << ' ' << equipe.membres.size() << '\n';
}
