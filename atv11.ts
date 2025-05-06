/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Clara Gabrielle Bononi
*/
let teclado = require('prompt-sync')();

const Gol = 50000;
const HB20 = 60000;
const Astra = 70000;
const Civic = 80000;

let descontoavista = 0.15;
let acrescimo = 1.13;
let valorC = 0;


console.log("Escolha um dos modelos de carro:");
console.log("1 - Gol: R$ 50.000,00");
console.log("2 - HB20: R$ 60.000,00");
console.log("3 - Astra: R$ 70.000,00");
console.log("4 - Civic: R$ 80.000,00");

let escolha: number = parseInt(teclado("Digite o número do modelo desejado: "));

if ( escolha == 1) {
    valorC= Gol;
} else if (escolha == 2) {
    valorC = HB20;
} else if (escolha == 3) {
    valorC = Astra;
} else if (escolha == 4) {
    valorC = Civic;
} else {
    console.log("Opção inválida. Tente novamente.");
}

if (valorC > 0)  
    console.log("Escolha a forma de pagamento:");
    console.log("1 - À vista");
    console.log("2 - Parcelado");
   
    let formaPagamento: number = parseInt(teclado("Digite o número da forma de pagamento desejada: "));

    if (formaPagamento == 1) {
        valorC = valorC - (valorC * descontoavista);
        console.log(`O valor do carro com desconto é: R$ ${valorC}`);
    } else if (formaPagamento == 2) {
        valorC = valorC * acrescimo;
        console.log(`O valor do carro parcelado é: R$ ${valorC}`);
    } else {
        console.log("Opção inválida. Tente novamente.");
    }