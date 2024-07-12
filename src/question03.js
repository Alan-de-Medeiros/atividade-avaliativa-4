/*Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, 
a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em 
consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a t
emperatura na unidade de medida escolhida.

Celsius para Fahrenheit = F = (C * 1.8) + 32 
Fahrenheit para Celsius = C = (F - 32) * (5/9)

Celsius para Kelvin = K = C + 273.15 
Kelvin para Celsius = C = K - 273.15

Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 
Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32*/

import leia from "readline-sync";


var unidadeOrigem = leia.question("INFORME A UNIDADE DE MEDIDA DE ORIGEM (C, F ou K): \n").toUpperCase();
var temperatura = leia.questionFloat("INFORME A TEMPERATURA:");
var unidadeDestino = leia.question("INFORME A UNIDADE DE MEDEIDA DE ORIGEM PARA A CONVERSAO (C, F ou K):").toUpperCase();


var temperaturaConvertida;


if (unidadeOrigem === 'C') {
    if (unidadeDestino === 'F') {
      
        temperaturaConvertida = (temperatura * 1.8) + 32;
    } else if (unidadeDestino === 'K') {
    
        temperaturaConvertida = temperatura + 273.15;
    } else {
      
        console.log("UNIDADE DE MEDIDA DE DESTINO INVALIDA");
    }
} else if (unidadeOrigem === 'F') {
    if (unidadeDestino === 'C') {
      
        temperaturaConvertida = (temperatura - 32) * (5 / 9);
    } else if (unidadeDestino === 'K') {
      
        temperaturaConvertida = (temperatura - 32) * (5 / 9) + 273.15;
    } else {
       
        console.log("UNIDADE DE MEDIDA DE DESTINO INVALIDA");
    }
} else if (unidadeOrigem === 'K') {
    if (unidadeDestino === 'C') {
       
        temperaturaConvertida = temperatura - 273.15;
    } else if (unidadeDestino === 'F') {
       
        temperaturaConvertida = (temperatura - 273.15) * 1.8 + 32;
    } else {
       
        console.log("UNIDADE DE MEDIDA DE DESTINO INVALIDA");
    }
} else {
    
    console.log("UNIDADE DE MEDIDA DE ORIGEM INVALIDA");
}


console.log("A TEMPERATURA CONVERTIDA E " + temperaturaConvertida.toFixed(2) + unidadeDestino);

