/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Clara Gabrielle Bononi
*/
var promptSync = require('prompt-sync')();
var n1 = Number(promptSync('Digite o primeiro número: '));
var n2 = Number(promptSync('Digite o segundo número: '));
var n3 = Number(promptSync('Digite o terceiro número: '));
var maior = 0;
var meio = 0;
var menor = 0;
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        meio = n2;
        menor = n3;
    }
    else {
        meio = n3;
        menor = n2;
    }
}
if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        meio = n1;
        menor = n3;
    }
    else {
        meio = n3;
        menor = n1;
    }
}
if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n1 > n2) {
        meio = n1;
        menor = n2;
    }
    else {
        meio = n2;
        menor = n1;
    }
}
console.log("A ordem decrescente \u00E9: ".concat(maior, ", ").concat(meio, ", ").concat(menor));
