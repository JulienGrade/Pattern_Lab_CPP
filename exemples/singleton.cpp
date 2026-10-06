#include <iostream>
#include <string>

class Configuration {
public:
    static Configuration &instance() {
        static Configuration configuration;
        return configuration;
    }

    Configuration(const Configuration &) = delete;
    Configuration &operator=(const Configuration &) = delete;
    std::string langue() const {
        return "fr";
    }

private:
    Configuration() = default;
};

int main() {
    std::cout << Configuration::instance().langue() << '\n';
}
