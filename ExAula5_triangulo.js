/*
* Ecxercicio 3: Apartir de 3 valor dizer se os 3 numeros formam um triango
* Ricardo D. Muenchen 15/04/24
*/

const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("1 - Digite o comprimento do primeiro lado: ")); 
let lado2 = parseInt(prompt("2 - Digite o comprimento do segundo lado: "));
let lado3 = parseInt(prompt("3 - Digite o comprimento do terceiro lado: "));


if ((lado1 + lado2 > lado3) && (lado1+ lado3 > lado2) && (lado2 + lado3 > lado1)){
    console.log("É possível formar um triângulo com estas medidas");
} else {
    console.log("Não é possivel formar um triângulo");
}

