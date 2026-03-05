// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base e altura), calcular e escrever a área do trapézio.

alert("Área do trapézio");

let baseMaior = parseFloat(prompt("Informe um valor da base maior: "));
let baseMenor = parseFloat(prompt("Informe um valor da base menor: "));
let altura = parseFloat(prompt("Informe o valor da altura do trapézio: "));

let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

alert(`O resultado da área do trapézio é: ${areaTrapezio}`);