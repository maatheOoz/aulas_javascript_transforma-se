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

// Exemplo de If
let idade = 26;
let texto = 'Você é novo demais para dirigir';

if (idade >= 18) {
    texto = 'Você tem idade para dirigir!';
}

document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;
document.getElementById('ex2').innerHTML = texto;

// Exemplo if Alinhado
let idade2 = 18;
let pais = 'Brasil';
let mensagem = 'Você não pode dirigir!';

if (pais == 'Brasil') {
    if (idade2 >= 18) {
        mensagem = 'Você pode dirigir!';
    }
}

document.getElementById('ex3').innerHTML = mensagem;

// Exemplo If Alinhado com operador AND (&&)
let idade3 = 16;
let pais2 = 'Estados Unidos';
let mensagem2 = 'Você não pode dirigir!';

if ((pais2 == 'Estados Unidos') && (idade3 == 15)) {
    mensagem2 = 'Você pode dirigir!';
}

document.getElementById('ex4').innerHTML = mensagem2;