// Exemplo de Condição Lógica: If Else If
let y = 2;

if (y > 3) {
    console.log('A variável é maior que 3!');
} else if (y == 3) {
    console.log('A variável y é igual a 3!');
} else {
    console.log('A variável y possui um valor diferente das verificações!')
}

// Exemplo de if
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa noite!";
    elemento.style.color = "blue";
}

console.log(elemento);
console.log(pegarHoras);
console.log(pegarMinutos);
console.log(hora);

// Exemplo de if
let idade = 26;
let texto = 'Você é novo demais para dirigir';

if (idade >= 18) {
    texto = 'Você tem idade para dirigir!';
}

document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
document.getElementById('ex2').innerHTML = texto;