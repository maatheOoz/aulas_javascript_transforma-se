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
