// Definindo um array global
const times = ["São Paulo", "Manchester United", "Milan", "Rayo Vallecano"];

// Utilizando o método indexOf()
let posicaoItem = times.indexOf("Milan");

console.log(times);
console.log(posicaoItem);

// Utilizando o método lastIndexOf()
const times2 = ["São Paulo", "Stuttgart", "São Paulo", "Braga"];

let posicaoItem2 = times2.lastIndexOf("São Paulo");

console.log(times2);
console.log(posicaoItem2);

// Utilizando o método includes()
let verificarExistenciaItem = times.includes("Manchester United");
let verificarExistenciaItem2 = times.includes("Manchester City");

console.log(verificarExistenciaItem);
console.log(verificarExistenciaItem2);

// Utilizando o método find()
const number = [4, 6, 83, 64, 2, 17];

let encontrarMaior = number.find(verificaValor);

function verificaValor(valor) {
    return valor > 50; 
}

console.log(encontrarMaior);

// Utilizando o método findIndex()
let encontrarIndice = number.findIndex(verificaValor);

console.log(encontrarIndice);

// Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((valor) => valor > 50);

console.log(encontrarMaiorFinal);

// Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);

console.log(encontrarIndiceMaiorFinal);
