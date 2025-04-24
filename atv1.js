/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Clara Gabrielle Bononi
*/
var promptSync = require('prompt-sync')();
var numerox;
var numeroy;
numerox = Number(promptSync('Digite um número: '));
numeroy = Number(promptSync('Digite outro número: '));
console.log("Os n\u00FAmeros digitados foram: numerox = ".concat(numerox, " e numeroy = ").concat(numeroy));
numerox == numeroy;
numeroy == numerox;
console.log("Os n\u00FAmeros trocados s\u00E3o ".concat(numeroy, " e  ").concat(numerox));
