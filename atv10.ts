/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Clara gabrielle Bononi
*/
let teclado = require('prompt-sync')();


let numero = parseInt(teclado("Digite um número para saber se é primo: "));
let divisores = 0;
let contador = 1;

while (contador <= numero) {
    if (numero % contador === 0) {
        divisores++;
    }
    contador++;
}

if (divisores === 2) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}