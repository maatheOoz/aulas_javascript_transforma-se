// Utilizando do método charAt()
let texto = "Abacate";
let exCharAt = texto.charAt(1);

console.log(exCharAt);

// Utilizando do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);

console.log(exCharCodeAt);

// Utilizando do método codePointAt()
let exCodePointAt = texto.codePointAt(6);

console.log(exCodePointAt);

// Utilizando do método at()
let exAt = texto.at(-2);
let exAtComoArray = texto[2];

console.log(exAt);
console.log(exAtComoArray);

// Utilizando do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);

console.log(texto3);

// Utilizando do método slice()
let frutas = "Banana, Maça e Uva";
let exSlice = frutas.slice(8, 13);

console.log(exSlice);

// Utilização do toUpperCase() e toLowerCase()
let carro = "Gol gti";
let carro2 = "IMPALA";

let exToLowerCase = carro2.toLocaleLowerCase();
let exToUpperCase = carro.toLocaleUpperCase();

console.log(exToUpperCase);
console.log(exToLowerCase);

// Utilizando do método isWellFormed()
let saudacao = "Olá, seja bem-vindo!";
let exIsWellFormed = saudacao.isWellFormed();

console.log(exIsWellFormed);

// Utilização do método trim()
let matheus = "             O Matheus gosta do São Paulo            "
let exTrim = matheus.trim();

console.log(exTrim);