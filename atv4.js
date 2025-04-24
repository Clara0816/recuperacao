/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Clara Gabrielle Bononi
*/
var teclado = require('prompt-sync')();
var soma = 0;
var cont = 0;
var continuar = 's';
var media = 0;
var numero = 0;
var numeros = [];
var i = 0;
var n = 0;
var num = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var num9 = 0;
var num10 = 0;
console.log('Digite os números que deseja calcular a média: ');
while (continuar == 's') {
    numero = Number(teclado('Digite um número: '));
    numeros.push(numero);
    soma += numero;
    cont++;
    continuar = teclado('Deseja continuar? (s/n): ');
}

