#include <iostream>
#include <string>
#include <memory>

struct Export {
    virtual ~Export() = default;
    virtual std::string texte() const = 0;
};

struct Csv final : Export {
    std::string texte() const override { return "Export CSV"; }
};

class Rapport {
public:
    virtual ~Rapport() = default;
    std::string generer() const { return creerExport()->texte(); }

protected:
    virtual std::unique_ptr<Export> creerExport() const = 0;
};

class RapportCsv final : public Rapport {
    std::unique_ptr<Export> creerExport() const override {
        return std::make_unique<Csv>();
    }
};

int main() {
    RapportCsv rapport;
    std::cout << rapport.generer() << '\n';
}
