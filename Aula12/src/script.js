// Criando um construtor
function Pessoa(primeiroNome, segundoNome, idade, pais) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.idade = idade;
    this.pais = pais;
};

const euMesmo = new Pessoa("Matheus", "Vieira", 26, "Brasil");

const minhaMae = new Pessoa("Monica", "Aparecida", 54, "Brasil")

console.log(euMesmo);
console.log(minhaMae);

// Reforçando criação de construtores de objetos
function Veiculo(marca, modelo, motor, cor, ano, rodas) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function() {
        return this.modelo + " acelerou.";
    }
};

const minhaMoto = new Veiculo("Ducati", "Panigale", "216cv", "Vermelha", 2019, 2);

console.log(minhaMoto);

const meuCarro = new Veiculo("Ford", "Galaxie 500", "164cv", "Vermelho", 1967, 4);

console.log(meuCarro);


meuCarro.placa = "0000-0000";

meuCarro.frear = function() {
    return this.modelo + " freou.";
}

console.log(meuCarro.frear());

Veiculo.prototype.parar = function() {
    return this.marca + " parou."
}

console.log(meuCarro.parar());
