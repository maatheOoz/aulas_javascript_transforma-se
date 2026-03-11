// Criando meu primeiro objeto
const carro = { marca: "Ford", modelo: "Galaxie 500", ano: 1967, cor: "Vermelho"
};

console.log(carro);

// Exemplo 2 de criação de objeto
const carro2 = {
    marca: "Volkswagen",
    modelo: "Golf R",
    ano: 2024,
    cor: "Azul Marinho"
};

console.log(carro2);

// Exemplo 3 de criação de objeto
const carro3 = {};

carro3.marca = "Subaru";
carro3.modelo = "WRX STi";
carro3.ano = 1998;
carro3.cor = "Azul";

console.log(carro3["modelo"]);

// Exemplo 4 de criação de objeto
const carro4 = new Object({
    marca: "Honda",
    modelo: "Civic SI",
    ano: 2008,
    cor: "Vermelho",
    acelerar: function() {
        return this.modelo + " acelerou!";
    }
});

let marcaCarro = "marca";

console.log(carro4.acelerar());
console.log(carro4[marcaCarro]);
