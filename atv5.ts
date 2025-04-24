/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Clara Gabrielle Bononi
*/
let teclado = require('prompt-sync')();
let maiorNumero: number = 0
let menorNumero: number = 0
let contador: number

for (let contador = 0; contador < 5; contador++) {
    let numero = parseInt(teclado(`Digite um número: `));


    if (contador === 1) {
        maiorNumero = numero;
        menorNumero = numero;

    } else if  (numero > maiorNumero) 
     maiorNumero = numero;
        
        
    else if (numero < menorNumero) {
            menorNumero = numero;
        }
    }

console.log(`O maior número é: ${maiorNumero}`);
console.log(`O menor número é: ${menorNumero}`);