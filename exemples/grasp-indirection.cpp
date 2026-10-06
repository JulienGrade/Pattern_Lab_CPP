#include <iostream>
#include <string>

struct ServiceMail {
    void envoyer(const std::string& texte) const { std::cout << "Mail : " << texte << '\n'; }
};

class Notifications {
public:
    explicit Notifications(const ServiceMail& mail) : mail_(mail) {}
    void publier(const std::string& message) const { mail_.envoyer(message); }

private:
    const ServiceMail& mail_;
};

int main() {
    ServiceMail mail;
    Notifications notifications{mail};
    notifications.publier("Bienvenue");
}
