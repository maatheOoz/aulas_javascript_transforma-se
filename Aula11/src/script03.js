// Utilizando o this em função
function teste() {
    return console.log(this);
}

// teste();

const carro = {
    marca: "Ford",
    modelo: "Galaxie 500",
    cor: "Branco"
}

let carroArray = Object.values(carro);

let carroArraySring = carroArray.toString();

console.log(carroArraySring);
