// Utilizando o getElementById()
const elemento = document.getElementById("selecionandoId");

console.log(elemento);

// Utilizando o getElementByTagName()
const elemento2 = document.getElementsByTagName("h1");

console.log(elemento2);

// Utilizando o getElementByClassName()
const elemento3 = document.getElementsByClassName("selecionandoClasse");

console.log(elemento3);

// Utilizando o querySelector()
const elemento4 = document.querySelector(".elementoClasse");

console.log(elemento4);

const elemento5 = document.querySelector("#elementoId");

console.log(elemento5);

// Utilizando o querySelectorAll()
const elementos = document.querySelectorAll("h3");

console.log(elementos[0]);
