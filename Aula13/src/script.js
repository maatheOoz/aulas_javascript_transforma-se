// Array Global //
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

// Utilizando a propriedade length //
let tamanhoFrutas = frutas.length

// frutas.length = 2;

// console.log("O tamanho do array de frutas é: " + tamanhoFrutas);
console.log(frutas);

let minhasFrutas = frutas.toString();

console.log(minhasFrutas);

// Utilizando o método at() //
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

// Utilizando o método join() //
let apresentacaoFrutas = frutas.join(", ");

console.log(apresentacaoFrutas);

// Utilizando o método pop() //
let removerFrutas = frutas.pop();

console.log(removerFrutas);
console.log(frutas);

// Utilizando o método push() //
let adicionarFrutas = frutas.push("Limão");

console.log(adicionarFrutas);
console.log(frutas);

// Utilizando o método shift() //
let deslocarFrutas = frutas.shift();

console.log(deslocarFrutas);
console.log(frutas);

// Utilizando o método unshift() //
let deslocarFrutas2 = frutas.unshift("Melão");

console.log(deslocarFrutas2);
console.log(frutas);

frutas[0] = "Kiwi";

console.log(frutas);

// Utilizando o length para adicionar items ao array //
frutas[frutas.length] = "Laranja";

console.log(frutas);

// Utilizando o método isArray() //
console.log(Array.isArray(frutas));

// Utilizando o método delete() //
// delete frutas[0];
// delete frutas[4];
// delete frutas[2];

frutas[0] = "Abacate"

console.log(frutas);

// Utilizando o método concat() //
const motos = ["Hornet", "Ducati", "Yamaha"];
const carros = ["Gol", "Onix", "Marea"];

const veiculos = motos.concat(carros);

console.log(veiculos);

// Utilizando o copyWithin() //
// let copiaItems = frutas.copyWithin(2, 0);

console.log(frutas);

// Exemplo de matriz em JavaScript //
// const matriz = [
//  [1, 2], 
//  [3, 4], 
//  [5, 6]
// ];


const matriz = [[1, 2], [3, 4], [5, 6]];

console.log(matriz[1][0]);

// Exemplo de vetor em JavaScript (array unidimensional) //
const comida = ["Pizza", "Arroz", "Macarrão"];

// Utilizando o método flat() //
const listaNumeros = [[1, 2], [3, 4], [5, 6]];

const novaListaNumeros = listaNumeros.flat();

console.log(listaNumeros);
console.log(novaListaNumeros);

// Utilizando o método flatMap() //
const listaNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novaListaNumeros2 = listaNumeros2.flatMap((item) => {
    return [item, item * 10];
});

console.log(novaListaNumeros2);

// Utilizando o método splice() //
console.log(frutas);
let novaListaFrutas = frutas.splice(2, 0, "Pêra", "Carambola");

console.log(frutas);
// console.log(novaListaFrutas);

// Utilizando o toSpliced() //
console.log(frutas);
const frutasToSpliced = frutas.toSpliced(0, 0);

console.log(frutasToSpliced);

//Utilizando o slice() //
const copiaFrutas = frutas.toSpliced(0, 0);

const frutasSlice = copiaFrutas.slice(2);

console.log(frutasSlice);

const frutasSlice2 = copiaFrutas.slice(1, 4);

console.log(frutasSlice2);
