// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

elemento.innerHTML = tamanho;
// elemento.innerHTML = `
//   <style>
//     .container {
//       display: flex;
//       gap: 30px;
//       background-color: orange;
//     }
    
//     .container div{
//       width: 100px;
//       height: 100px;
//       background-color: blanchedalmond;
//     }
//   </style>

//   <h1>ESSE É UM NOVO H1</h1>
//   <div class="container">
//     <div>Item 1</div>
//     <div>Item 2</div>
//     <div>Item 3</div>
//   </div>
// `;

// Exemplo de ulilização do caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união!';

let texto3 = 'Somente a dor \"coletiva\" gera a união!';

let texto4 = 'Somente a dor \\ coletiva gera a união!';

let texto5 = `Somente a dor \n coletiva gera a união!`;

console.log(texto2);
console.log(texto3);
console.log(texto4);
console.log(texto5);

// Exemplo de template string
let nome = "Matheus Vieira";
let idade = 26;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

let frase2 = "Meu nome é " + nome + " e tenho " + idade + " anos.";

console.log(frase);
console.log(frase2);

// Exemplo de adição de HTML com template string em JavaScript
const elemento2 = document.querySelector('.ex2');

elemento2.innerHTML = `
    <style>
        .container {
            background-color: orangered;
            display: flex;
            gap: 20px;
            justify-content: center;
        }

        .container div {
            color: darkgreen;
            width: 100px;
            height: 100px;
            background-color: orange;
            align-content: center;
            text-align: center;
        }
    </style>

    <h2>Exemplo de adição de conteúdo HTML em JavaScript:</h2>
    <div class="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`;