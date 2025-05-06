/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Clara gabrielle Bononi
*/
let teclado = require(`prompt-sync`)();

let somaA: number = 0;
let cont: number = 0;
let totalP: number = 0;

do {
  console.log(`Pessoa ${totalP + 1}:`);
  
  let altura = parseFloat(teclado("Digite sua altura: "));
  let idade = parseInt(teclado("Digite sua idade: "));

  if (idade >= 18) {
    somaA += altura;
    cont++;
  }

  totalP++;
} while (totalP < 10);

let mediaAltura: number;
if (cont > 0) {
  mediaAltura = somaA / cont;
} else {
  mediaAltura = 0;
}

console.log(`Média de altura das pessoas maiores de idade: ${mediaAltura} metros`);
console.log(`Total de pessoas maiores de idade: ${cont}`);