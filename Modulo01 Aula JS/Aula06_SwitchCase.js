/*
* SWITCH CASE
* Ricardo D. Muenchen 15/04/24
*/

const prompt = require('prompt-sync')();

let dia = parseInt(prompt("1 - Insira um número do dia da semana: ")); 
let nomeDia;

switch(dia){
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = undefined;
        break;
}    

if (nomeDia !== undefined){
    console.log("O dia é", nomeDia);
} else {
    console.log("Não é um dia da semana");
}



