#include <iostream>
#include <string>

struct Canal {
    virtual ~Canal() = default;
    virtual std::string envoyer(std::string message) const = 0;
};

struct Mail final : Canal {
    std::string envoyer(std::string message) const override {
        return "Mail : " + message;
    }
};

class Alerte {
public:
    explicit Alerte(const Canal& canal) : canal_(canal) {}
    virtual ~Alerte() = default;
    virtual std::string diffuser() const { return canal_.envoyer("Information"); }

protected:
    const Canal& canal_;
};

class AlerteUrgente final : public Alerte {
public:
    using Alerte::Alerte;
    std::string diffuser() const override { return canal_.envoyer("Urgent"); }
};

int main() {
    Mail canal;
    AlerteUrgente alerte{canal};
    std::cout << alerte.diffuser() << '\n';
}
