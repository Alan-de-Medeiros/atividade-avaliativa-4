/*Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. 
Nesse momento será analisado apenas a quantidade de gols, passes certos e passes errados.

Cada Gol: 50 Pontos
Cada Passe Certo: 10 Pontos
Cada Passe Errado: -5 Pontos
Você deve solicitar o nome do jogador, quantidade de gols, número de passes certos e quantidade de passes errados. 
O algoritmo deve calcular a pontuação de casa jogador e informar se o jogador foi bem ou mal na partida, levando como base a seguinte tabela. 
No final, deve apresentar o jogador com melhor pontuação.

Pontuação < 50 - Péssima partida.
Pontuação de 50 até 100 - Partida ruim.
Pontuação de 100 até 150 - Fez o básico
Pontuação de 150 até 200 - Foi bem na partida
Pontuação acima de 200 - Jogou demais*/

import leia from "readline-sync"

var nome = leia.question("DIGITE O NOME DO JOGADOR: \n")
var qg = leia.questionInt("DIGITE A QTD DE GOLS: \n");
var qc = leia.questionInt("DIGITA A QTD DE PASSES CERTOS: \n")
var qe = leia.questionInt("DIGITE A QTD DE PASSES ERRADOS: \n")

var pontos = (qg * 50) + (qe * 10) + (qc * -5)

console.log(nome);

if (pontos < 50) {
    console.log("PESSIMA PARTIDA");
} else if (pontos >= 50 && pontos < 100) {
    console.log("PARTIDA RUIM");
} else if (pontos >= 100 && pontos < 150) {
    console.log("FEZ O BASICO");
} else if (pontos >= 150 && pontos < 200) {
    console.log("JOGOU BEM");
} else { 
    console.log("JOGOU DEMAIS")
}
