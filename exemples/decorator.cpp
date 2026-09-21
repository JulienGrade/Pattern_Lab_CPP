#include <iostream>
#include <string>

struct Canal {
    virtual ~Canal() = default;
    virtual std::string envoyer() const = 0;
};

struct Mail final : Canal {
    std::string envoyer() const override { return "Mail"; }
};

class Journalise final : public Canal {
public:
    explicit Journalise(const Canal& suivant) : suivant_(suivant) {}
    std::string envoyer() const override { return "[log] " + suivant_.envoyer(); }

private:
    const Canal& suivant_;
};

int main() {
    Mail mail;
    Journalise canal{mail};
    std::cout << canal.envoyer() << '\n';
}
