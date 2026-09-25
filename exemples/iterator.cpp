#include <iostream>
#include <vector>

class Collection {
public:
    auto begin() const { return valeurs_.begin(); }
    auto end() const { return valeurs_.end(); }

private:
    std::vector<int> valeurs_{2, 4, 6};
};

int main() {
    Collection collection;
    for (int valeur : collection) {
        std::cout << valeur << '\n';
    }
}
