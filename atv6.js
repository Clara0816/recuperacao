/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Clara gabrielle Bononi
*/
var numeros = [];
var pares = [];
var impares = [];
var quantidadePares = 0;
var quantidadeImpares = 0;
var i = 0;
var numero = 0;
var quantidade = 10;
var resposta = "s";
var resposta2 = "s";
var resposta3 = "s";
var resposta4 = "s";
var resposta5 = "s";
var resposta6 = "s";
var resposta7 = "s";
var resposta8 = "s";
var resposta9 = "s";
var resposta10 = "s";
console.log("Digite 10 números inteiros: ");
for (i = 0; i < quantidade; i++) {
    numero = Number(prompt("Digite o número " + (i + 1) + ": "));
    numeros.push(numero);
    if (numero % 2 == 0) {
        pares.push(numero);
        quantidadePares++;
    }
    else {
        impares.push(numero);
        quantidadeImpares++;
    }
}
