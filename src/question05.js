/*Escreva um algoritmo para verificar se uma roleta de cassino está viciada. 
A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (os pares são vermelhos, 
os pares são pretos). O programa deve contar setenta vezes cada cor (verde, vermelho, preto)
foi gerada e verificar se alguma cor tem uma frequência maior que 40%. 
Se houver, o programa deve indicar que a roleta pode estar viciada.*/


var contadorVerde = 0;
var contadorVermelho = 0;
var contadorPreto = 0;


for (var i = 0; i < 70; i++) {
    
    var numero = Math.floor(Math.random() * 37);
if (numero === 0) {
        contadorVerde++;
    } else if (numero % 2 === 1) {
        contadorVermelho++;
    } else {
        contadorPreto++;
    }
}


var giros = 70;
var frequencia = giros * 0.4;

if (contadorVerde > frequencia || contadorVermelho > frequencia || contadorPreto > frequencia) {
    console.log("A ROLA PODE ESTA VICIADA");
} else {
    console.log("A ROLETA NA PARECE ESTAR VICIADA");
}


console.log("VERDE: " + contadorVerde + " vezes");
console.log("VERMELHO: " + contadorVermelho + " vezes");
console.log("PRETO: " + contadorPreto +  " vezes");
