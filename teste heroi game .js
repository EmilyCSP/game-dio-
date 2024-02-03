// objeto JSON para representar um herói
const heroi = {
    nome: "Gandalf",
    idade: 1000,
    tipo: "mago",
    atacar: function() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou ataque genérico";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
};

// Exemplo do uso
heroi.atacar();

// 
const outroHeroi = {
    nome: "Conan",
    idade: 35,
    tipo: "guerreiro",
    atacar: function() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou ataque genérico";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
};

outroHeroi.atacar();SSSSSSSSS