// Exemplos de operador de atribuição //
let x = 10;

x -= 5;
// x = x - 5;
console.log(x);

x += 5;
// x = x + 5;
console.log(x);

// Exemplos de aritmética em JavaScript //
let soma = 5 + 5 + 4;
console.log(soma);

const primeiroNome = 'Matheus';
const ultimoNome = ' da Silva';

let nomeCompleto = primeiroNome + ultimoNome;

let nomeCompleto2 = 'Matheus' + " " + 'Vieira';

console.log(nomeCompleto);
console.log(nomeCompleto2);

let teste = false;

if (teste === true) {
    console.log('Retorne uma mensagem como verdadeira!');
} else {
    console.log('Retorne uma mensagem como falsa!');
}

//Exemplos de tipos em JavaScript //
// String
let cor = 'Azul';
let fruta = 'Laranja';

console.log(cor);
console.log(fruta);

// Number
let soma1 = 5 + 5;
let subtracao = 10 - 3;

console.log(soma1);
console.log(subtracao);

// BigInt
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt(1234567890123456789012345);

console.log(bigint);
console.log(bigint2);

// Boolean
let valorVerdadeiro = true;
let valorFalso = false;

console.log(valorVerdadeiro);
console.log(valorFalso);

// Object
const carro = {
    marca: 'Ford',
    modelo: 'Galaxie 500',
    cor: 'Vermelho',
}

console.log(carro);
console.log('O modelo do carro é: ' + carro.modelo);

// Array Object
const frutas = ['Laranja', 'Banana', 'Uva', 'Morango', 'Abacaxi'];

console.log(frutas);

// Date Object
const data = new Date;

console.log(data);

// Undefined
let indefinido;

console.log(indefinido);

// Null
let nulo = null;

console.log(nulo);

// Symbol
let y = Symbol();

console.log(y);

// Exemplos de typeof //
let stringTipo = "300";
let numberTipo = 300;

const tipoDado = typeof stringTipo;

console.log(tipoDado);

// Exemplos de Boolean //
let cinco = 5;
let comparacao = cinco === 8;

console.log(comparacao);