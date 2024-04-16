/*
* Exercicio 2: maior entre dois numeros
*/

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("1 - Digite o primeiro numero (inteiro):")); //parse int para garantir que o numero seja inteiro
let num2 = parseInt(prompt("2 - Digite o segundo numero (inteiro):")); //parse int para garantir que o numero seja inteiro

if(num1>num2){
    console.log("Numero 1 (",num1,") é maior");
}else if(num2>num1){
    console.log("Numero 2 (",num2,") é maior");
}else{
    console.log("Os numeros são iguais");
}