/*
* criar a tabuada usando for
* Ricardo D. Muenchen 15/04/24
*/

const prompt = require('prompt-sync')();

let multiplicando = Number(prompt("1 - Tabuada(ate 10) do número: ")); 
let contador;

 // for (variavel; condição; incremento){}
for(contador = 0; contador <= 10; contador++){
    //console.log(multiplicando * contador);
    console.log(`${multiplicando} * ${contador} =`, multiplicando * contador);
}
