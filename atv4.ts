/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Clara Gabrielle Bononi
*/

let teclado = require('prompt-sync')();
let soma = 0;
    let contador = 0;

    while (true) {
      let valor = prompt("Digite um número (ou clique Cancelar para parar):");

      if (valor === null) {
        break;
      }

      let numero = parseFloat(valor);
      soma += numero;
      contador++;
    }

    if (contador > 0) {
      let media = soma / contador;
      console.log("Média:", media);
    } else {
    }  console.log("Nenhum número digitado.");
