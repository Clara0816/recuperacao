/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Clara Gabrielle Bononi
*/
const teclado = require(`prompt-sync`)();

let soma = 0;
let escolha = 0;

do {
  console.log(`--- Calculadora de Soma ---`);
  console.log(`1 - Adicionar número`);
  console.log(`2 - Sair`);

  
  escolha = parseInt(teclado("Digite a opção desejada: "));

  if (escolha == 1) {
    
    let numero = parseFloat(teclado("Digite um número: "));
    soma += numero;
    console.log(`Soma atual: ${soma}`);
  } else if  (escolha != 2) {
    console.log("Opção inválida. Tente novamente.");
  }
} while (escolha != 2 && soma <= 100);


if (soma > 100) {
  console.log("A soma excedeu o limite de 100.");
} else {
  console.log("Programa encerrado.");
}