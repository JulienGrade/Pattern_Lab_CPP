#include <iostream>
#include <string>

struct Notification {
    virtual ~Notification() = default;
    virtual std::string envoyer() const = 0;
};

struct Mail final : Notification {
    std::string envoyer() const override {
        return "Mail envoye";
    }
};

int main() {
    Mail mail;
    const Notification &notification = mail;
    std::cout << notification.envoyer() << '\n';
}
