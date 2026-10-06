#include <iostream>
#include <memory>
#include <string>

struct Canal {
    virtual ~Canal() = default;
    virtual std::string nom() const = 0;
};

struct Annuaire {
    virtual ~Annuaire() = default;
    virtual std::string nom() const = 0;
};

struct CanalLocal final : Canal {
    std::string nom() const override {
        return "Canal local";
    }
};

struct AnnuaireLocal final : Annuaire {
    std::string nom() const override {
        return "Annuaire local";
    }
};

struct Fabrique {
    virtual ~Fabrique() = default;
    virtual std::unique_ptr<Canal> canal() const = 0;
    virtual std::unique_ptr<Annuaire> annuaire() const = 0;
};

struct SuiteLocale final : Fabrique {
    std::unique_ptr<Canal> canal() const override {
        return std::make_unique<CanalLocal>();
    }
    std::unique_ptr<Annuaire> annuaire() const override {
        return std::make_unique<AnnuaireLocal>();
    }
};

struct CanalDistant final : Canal {
    std::string nom() const override {
        return "Canal distant";
    }
};
struct AnnuaireDistant final : Annuaire {
    std::string nom() const override {
        return "Annuaire distant";
    }
};
struct SuiteDistante final : Fabrique {
    std::unique_ptr<Canal> canal() const override {
        return std::make_unique<CanalDistant>();
    }
    std::unique_ptr<Annuaire> annuaire() const override {
        return std::make_unique<AnnuaireDistant>();
    }
};
void presenter(const Fabrique &fabrique) {
    std::cout << fabrique.canal()->nom() << " + " << fabrique.annuaire()->nom() << '\n';
}

int main() {
    SuiteLocale locale;
    SuiteDistante distante;
    presenter(locale);
    presenter(distante);
}
