/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Clara Gabrielle Bononi
*/
(function () {
    var soma = 0;
    var numero = 0;
    var resposta = "s";
    var i = 0;
    var quantidade = 0;
    var numeros = [];
    var pares = [];
    var impares = [];
    var quantidadePares = 0;
    var quantidadeImpares = 0;
    var resposta2 = "s";
    var resposta3 = "s";
    var resposta4 = "s";
    var resposta5 = "s";
    console.log("Digite números inteiros: ");
    for (i = 0; soma <= 100; i++) {
        numero = Number(prompt("Digite o número " + (i + 1) + ": "));
        numeros.push(numero);
        soma += numero;
        if (numero % 2 == 0) {
            pares.push(numero);
            quantidadePares++;
        }
        else {
            impares.push(numero);
            quantidadeImpares++;
        }
    }
    console.log("A soma dos números digitados é: " + soma);
    console.log("A quantidade de números digitados é: " + (i + 1));
    console.log("A quantidade de números pares digitados é: " + quantidadePares);
    console.log("Os números pares digitados foram: " + pares);
    console.log("A quantidade de números ímpares digitados é: " + quantidadeImpares);
    console.log("Os números ímpares digitados foram: " + impares);
    console.log("Os números digitados foram: " + numeros);
})();
