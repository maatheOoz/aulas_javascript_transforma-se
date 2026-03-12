// Utilizando o operador in
const pessoa = {
    primeiroNome: "Matheus",
    segundoNome: "Vieira",
    idade: 26,
    pais: "Brasil"
};

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados
const pessoa2 = {
    primeiroNome: "Santos",
    segundoNome: "da Silva",
    carros: {
        carro1: "Ford",
        carro2: "Volkswagen",
        carro3: "Honda"
    },
    filmes: {
        filme1: "Videodrome",
        filme2: "Cure"
    },
};

let filme1 = "filme1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);

console.log(pessoa2.filmes[filme1]);
