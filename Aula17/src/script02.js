// Utilizando o evento mouseover
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function() {
    caixa.innerHTML = "O mouse está em cima da caixa";
    caixa.style.background = "orange";
    caixa.style.color = "black";
});

caixa.addEventListener("mouseout", function() {
    caixa.innerHTML = "O mouse está fora da caixa";
    caixa.style.background = "orangered";
    caixa.style.color = "white";
});

// Exemplo de posição do mouse na página
const conteudo = document.querySelector(".conteudo");

document.addEventListener("mousemove", handlePosicao);

function handlePosicao(evento) {
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
};