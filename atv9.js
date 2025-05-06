/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Clara Gabrielle Bononi
*/
var teclado = require("prompt-sync")();
var n1 = parseInt(teclado("Digite o primeiro número: "));
var n2 = parseInt(teclado("Digite o segundo número: "));
while (n1 <= n2) {
    if (n1 % 2 != 0) {
        console.log("".concat(n1));
    }
    n1++;
}
