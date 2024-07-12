/*Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele contém quantas palavras você tem nesse texto ou palavra. 
Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/

import leia from "readline-sync"

var texto = leia.question("Digite um texto para contar as palavras:");


texto = texto.replaceAll(" ", "");

var contador = 0;
var dentroPalavra = false;


for (var i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
     
        if (!dentroPalavra) {
            contador++; 
            dentroPalavra = true;
        }
    } else {
       
        dentroPalavra = false;
    }
}


console.log("O TEXTO POSSUI " + contador +  " PALAVRAS");
