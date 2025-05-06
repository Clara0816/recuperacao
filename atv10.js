/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Clara gabrielle Bononi
*/
var teclado = require("prompt-sync")();
var somaA= 0;
var cont = 0;
var totalP = 0;
do {
    console.log("Pessoa ".concat(totalP + 1, ":"));
    var altura = parseFloat(teclado("Digite sua altura: "));
    var idade = parseInt(teclado("Digite sua idade: "));
    if (idade >= 18) {
        somaA += altura;
        cont++;
    }
    totalP++;
} while (totalP < 10);
var mediaAltura;
if (cont > 0) {
    mediaAltura = somaA / cont;
}
else {
    mediaAltura = 0;
}
console.log("M\u00E9dia de altura das pessoas maiores de idade: ".concat(mediaAltura, " metros"));
console.log("Total de pessoas maiores de idade: ".concat(cont));
