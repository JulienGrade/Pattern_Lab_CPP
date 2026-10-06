#include <iostream>
#include <memory>

struct Image {
    virtual ~Image() = default;
    virtual void afficher() = 0;
};

struct ImageDisque final : Image {
    ImageDisque() {
        std::cout << "Chargement\n";
    }
    void afficher() override {
        std::cout << "Affichage\n";
    }
};

class ImageProxy final : public Image {
public:
    void afficher() override {
        if (!image_)
            image_ = std::make_unique<ImageDisque>();
        image_->afficher();
    }

private:
    std::unique_ptr<ImageDisque> image_;
};

int main() {
    ImageProxy image;
    Image &service = image;
    service.afficher();
    service.afficher();
}
