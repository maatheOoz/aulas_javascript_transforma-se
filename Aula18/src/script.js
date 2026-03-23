// Utilizando o vento de carregamento load
const img = document.querySelector(".minha-imagem");
const elemento = document.querySelector(".info-carregamento")

console.log(img);

img.addEventListener("load", function () {
    elemento.innerHTML = "A imagem foi carregada.";
});

