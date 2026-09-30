#include <iostream>

class Import {
public:
    virtual ~Import() = default;

    void executer() const {
        std::cout << "Lecture\n";
        convertir();
        std::cout << "Validation\n";
    }

protected:
    virtual void convertir() const = 0;
};

class ImportCsv final : public Import {
    void convertir() const override { std::cout << "Conversion CSV\n"; }
};

int main() {
    ImportCsv import;
    import.executer();
}
