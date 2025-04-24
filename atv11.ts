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



let numero = parseInt(teclado("Digite um número para ver a tabuada: "));
let contador = 1;

while (contador <= 10) {
    let resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`);
    contador++;
}