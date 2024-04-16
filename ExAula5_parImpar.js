/*
* Exercicio 1: par ou impar
 */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("1 - Digite um numero:")); //parse int para garantir que o numero seja inteiro

let ternario = (numero%2 === 0) ? console.log(numero, "Par!"):console.log(numero ,"Impar!");
if(numero%2 === 0){ //% ou modulo é usado para verificar o resto da divisão
	console.log(numero, "é Par!");
}else{	
    console.log(numero ,"é Impar!");
}
/*

Com laço de repetição

for (let i = 0; i == 0;){
let numero = parseInt(prompt("Digite um numero:")); //parse int para garantir que o numero seja inteiro

let ternario = (numero%2 === 0) ? console.log(numero, "Par!"):console.log(numero ,"Impar!");
if(numero%2 === 0){ //% ou modulo é usado para verificar o resto da divisão
	console.log(numero, "é Par!");
}else{	
    console.log(numero ,"é Impar!");
} 
let ver = parseInt(prompt("continuar s/n?"));
if (ver === 'n'){
    i = 1
}
}
*/
