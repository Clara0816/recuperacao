/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Clara Gabrielle Bononi
*/

let teclado = require('prompt-sync')();

let x: number = parseInt(teclado("Digite um número x: "));
let y: number = parseInt(teclado("Digite um número y: "));

console.log(`Os números digitados foram: ${x} e ${y}`);

let recipienteZ : number = x;
x = y;
y = recipienteZ;

console.log(`Os números trocados são ${x} e ${y}`);