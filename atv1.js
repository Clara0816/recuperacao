/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Clara Gabrielle Bononi
*/
var teclado = require('prompt-sync')();
var x = parseInt(teclado("Digite um número x: "));
var y = parseInt(teclado("Digite um número y: "));
console.log("Os n\u00FAmeros digitados foram: ".concat(x, " e ").concat(y));
var recipienteZ = x;
x = y;
y = recipienteZ;
console.log("Os n\u00FAmeros trocados s\u00E3o ".concat(x, " e ").concat(y));
