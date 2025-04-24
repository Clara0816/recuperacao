/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Clara Gabrielle Bononi
*/

const promptSync = require('prompt-sync')();

let numerox: number;
let numeroy: number;

numerox = Number(promptSync('Digite um número: '));
numeroy = Number(promptSync('Digite outro número: '));

console.log(`Os números digitados foram: numerox = ${numerox} e numeroy = ${numeroy}`);

numerox == numeroy 
numeroy == numerox 

console.log(`Os números trocados são ${numeroy} e  ${numerox}`)