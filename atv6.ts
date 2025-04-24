/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Clara gabrielle Bononi
*/
let numeros: number[] = [];
let pares: number[] = [];
let impares: number[] = [];
let quantidadePares: number = 0;
let quantidadeImpares: number = 0;
let i: number = 0;
let numero: number = 0;
let quantidade: number = 10;
let resposta: string = "s";
let resposta2: string = "s";
let resposta3: string = "s";
let resposta4: string = "s";
let resposta5: string = "s";
let resposta6: string = "s";
let resposta7: string = "s";
let resposta8: string = "s";
let resposta9: string = "s";
let resposta10: string = "s";
console.log("Digite 10 números inteiros: ");
for (i = 0; i < quantidade; i++) {
    numero = Number(prompt("Digite o número " + (i + 1) + ": "));
    numeros.push(numero);
    if (numero % 2 == 0) {
        pares.push(numero);
        quantidadePares++;
    } else {
        impares.push(numero);
        quantidadeImpares++;
    }
}