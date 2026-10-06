#include <iostream>
#include <memory>
#include <string>
#include <utility>

struct Document {
    virtual ~Document() = default;
    virtual std::unique_ptr<Document> cloner() const = 0;
    virtual std::string titre() const = 0;
};

class Note final : public Document {
public:
    explicit Note(std::string titre) : titre_(std::move(titre)) {
    }

    std::unique_ptr<Document> cloner() const override {
        return std::make_unique<Note>(*this);
    }

    std::string titre() const override {
        return titre_;
    }

private:
    std::string titre_;
};

int main() {
    Note original{"Contrat"};
    const Document &prototype = original;
    const auto copie = prototype.cloner();
    std::cout << copie->titre() << '\n';
}
