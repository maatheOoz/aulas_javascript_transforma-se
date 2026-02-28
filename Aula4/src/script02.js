// Exemplo de If Else //
// const horas = new Date().getHours();
// const minutos = new Date().getMinutes();
// const horario = String(horas) + ":" + String(minutos);
// let saudacao;

// if (horas > 18) {
//     saudacao = 'Boa noite!';
// } else {
//     saudacao = 'Bom dia!';
// }

// document.getElementById('ex1').innerHTML = saudacao;
// // document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
// document.getElementById('ex2').innerHTML = `Agora são: ${horario}`;

// Exemplo If Else If //
const horas = 7;
const minutos = new Date().getMinutes();
const horario = String(horas) + ":" + String(minutos);
let saudacao;

if (horas > 18) {
    saudacao = 'Boa noite!';
} else if (horas > 12) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Bom dia!';
}

document.getElementById('ex1').innerHTML = saudacao;
// document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
document.getElementById('ex2').innerHTML = `Agora são: ${horario}`;