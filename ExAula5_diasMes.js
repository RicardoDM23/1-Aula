
/*
* criar usando switch uma estrutara que recebe um numero rquivalente a um mes e retornar o numero de dias
* Ricardo D. Muenchen 15/04/24
*/

const prompt = require('prompt-sync')();

let mes = parseInt(prompt("1 - Insira um número do mes: ")); 
let numDias;

switch(mes){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        numDias = 31;
        break;
    case 4: case 6: case 9: case 11:
        numDias = 30;
        break;
    case 2:
        numDias = 28;
        break;
    default:
        numDias = -1;
        break;
}    

if (numDias !== -1){
    console.log(numDias, "Dias");
} else {
    console.log("Não é um mes valido");
}