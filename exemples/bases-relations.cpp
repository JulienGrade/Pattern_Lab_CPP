#include <iostream>
#include <string>
#include <vector>

struct Client {
    std::string nom;
};

struct Ligne {
    int prix;
};

class Commande {
public:
    explicit Commande(const Client &client) : client_(client) {
    }
    void ajouter(int prix) {
        lignes_.push_back(Ligne{prix});
    }
    void afficher() const {
        std::cout << client_.nom << " : " << lignes_.size() << " ligne\n";
    }

private:
    const Client &client_;
    std::vector<Ligne> lignes_;
};

int main() {
    Client client{"Lea"};
    Commande commande{client};
    commande.ajouter(10);
    commande.afficher();
}
