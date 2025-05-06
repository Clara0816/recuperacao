/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Clara Gabrielle Bononi
*/
let teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado("Digite o primeiro número: "));
let n2: number = parseInt(teclado("Digite o segundo número: "));


  while (n1 <= n2) {
    if (n1 % 2 != 0) {
      console.log(`${n1}`); 
    }
    n1 ++; 
  }
