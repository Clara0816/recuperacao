/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Clara Gabrielle Bononi
*/
(() => {
    let soma: number = 0;
    let numero: number = 0;
    let resposta: string = "s";
    let i: number = 0;
    let quantidade: number = 0;
    let numeros: number[] = [];
    let pares: number[] = [];
    let impares: number[] = [];
    let quantidadePares: number = 0;
    let quantidadeImpares: number = 0;
    let resposta2: string = "s";
    let resposta3: string = "s";
    let resposta4: string = "s";
    let resposta5: string = "s";
    console.log("Digite números inteiros: ");
    for (i = 0; soma <= 100; i++) {
        numero = Number(prompt("Digite o número " + (i + 1) + ": "));
        numeros.push(numero);
        soma += numero;
        if (numero % 2 == 0) {
            pares.push(numero);
            quantidadePares++;
        } else {
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