/*
* Pedir ao usuario para adivinhar um numero entre 1 e 10
* Ricardo D. Muenchen 15/04/24
*/
const prompt = require('prompt-sync')();
const numeroCorreto = Math.floor((Math.random() * 10) + 1 );
let tentativa;

do{
    tentativa = parseInt(prompt("Adivinhe um numero entre 1 e 10: "));
    if(tentativa < numeroCorreto){
        console.log("Tente um numero Maior");
    } else if (tentativa > numeroCorreto){
        console.log("Tente um numero Menor");
    }
}while(tentativa !== numeroCorreto)

console.log("Parabêns! Você acertou");