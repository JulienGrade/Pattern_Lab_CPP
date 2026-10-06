#include <iostream>
#include <string>

struct Document {
    virtual ~Document() = default;
    virtual std::string exporter() const = 0;
};

struct Pdf final : Document {
    std::string exporter() const override {
        return "PDF";
    }
};

void publier(const Document &document) {
    std::cout << document.exporter() << '\n';
}

int main() {
    Pdf document;
    publier(document);
}
