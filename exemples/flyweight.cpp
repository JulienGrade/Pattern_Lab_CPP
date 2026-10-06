#include <iostream>
#include <map>
#include <memory>
#include <string>

struct Style {
    const std::string police;
    void dessiner(char valeur, int position) const {
        std::cout << valeur << " a " << position << " avec " << police << '\n';
    }
};

class Styles {
public:
    std::shared_ptr<const Style> obtenir(const std::string &police) {
        auto &style = cache_[police];
        if (!style)
            style = std::make_shared<const Style>(Style{police});
        return style;
    }

private:
    std::map<std::string, std::shared_ptr<const Style>> cache_;
};

struct Lettre {
    char valeur;
    int position;
    std::shared_ptr<const Style> style;
    void afficher() const {
        style->dessiner(valeur, position);
    }
};

int main() {
    Styles styles;
    Lettre a{'A', 0, styles.obtenir("Comfortaa")};
    Lettre b{'B', 1, styles.obtenir("Comfortaa")};
    a.afficher();
    b.afficher();
    std::cout << std::boolalpha << (a.style == b.style) << '\n';
}
