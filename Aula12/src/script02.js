// Primeiro array
const fruta = ["Laranja", "Melancia", "Melão", "Uva"];

console.log(fruta);

// Adicionando items ao Array
const carros = [];

carros[0] = "Volkswagen";
carros[1] = "Fiat";
carros[2] = "Ferrari";

console.log(carros);

// Criando array com new Array()
const cores = new Array("Vermelho", "Amarelo", "Laranja");

console.log(cores);
console.log(cores[0]);

// Alterando elementos de array
const frutas = ["Laranaja", "Melancia", "Uva", "Melão"];

frutas[0] = "Tangerina";

console.log(frutas[0]);

// Convertendo Array em String
let stringFrutas = frutas.toString();

console.log(stringFrutas);
console.log(typeof frutas);

// Exemplo de elementos de Array
const pessoa = {
  primeiroNome: "Matheus",
  segundoNome: "Vieira",
  idade: 26,
  pais: "Brasil",
}

function minhaFuncao() {
    return "Olá";
}

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao();

console.log(meuArray);

// Acessando a propriedade length
const frutas2 = ["Laranja", "Melancia", "Melão", "Uva"];

let letFrutas = frutas2[frutas2.length - 1];

console.log(letFrutas);

// Usando forEach em Array
const elemento = document.querySelector('.ex1');
const comida = ["Pizza", "Sushi", "Macarrão", "Salada", "Carne"];

// Adicionando item no Array
comida.push("Coxinha");
comida.push("Kibe");
comida.push("Miojo");

let texto = "<ul>";

comida.forEach(retornaItem);

texto = texto + "</ul>"

elemento.innerHTML = texto;

function retornaItem(item) {
    texto = texto + "<li>" + item + "</li>";
}
