/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Clara Gabrielle Bononi
*/
var teclado = require("prompt-sync")();
console.log("---------------------");
console.log("-- AN\u00C1LISE DE NOTAS --");
console.log("---------------------");
var maiorNota = 0;
var menorNota = 10;
var somaNotas = 0;
for (var i = 1; i <= 5; i++) {
    var nota = parseFloat(teclado("Digite a ".concat(i, "\u00AA nota: ")));
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    somaNotas += nota;
}
var media = somaNotas / 5;
console.log("Maior nota: ".concat(maiorNota));
console.log("Menor nota: ".concat(menorNota));
console.log("M\u00E9dia das notas: ".concat(media.toFixed(2)));
// O código lê 5 notas do usuário, calcula a maior e menor nota e a média das notas.
