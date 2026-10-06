#include <iostream>
#include <memory>
#include <string>

struct Export {
    virtual ~Export() = default;
    virtual std::string texte() const = 0;
};

struct Csv final : Export {
    std::string texte() const override {
        return "Export CSV";
    }
};

class Rapport {
public:
    virtual ~Rapport() = default;
    std::string generer() const {
        return creerExport()->texte();
    }

protected:
    virtual std::unique_ptr<Export> creerExport() const = 0;
};

class RapportCsv final : public Rapport {
    std::unique_ptr<Export> creerExport() const override {
        return std::make_unique<Csv>();
    }
};

struct Pdf final : Export {
    std::string texte() const override {
        return "Export PDF";
    }
};
class RapportPdf final : public Rapport {
    std::unique_ptr<Export> creerExport() const override {
        return std::make_unique<Pdf>();
    }
};

int main() {
    RapportCsv csv;
    RapportPdf pdf;
    const Rapport &rapportCsv = csv;
    const Rapport &rapportPdf = pdf;
    std::cout << rapportCsv.generer() << '\n';
    std::cout << rapportPdf.generer() << '\n';
}
