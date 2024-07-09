/*
* Funçoes - Usadas para quando é necessario repetir 
* o mesmo bloco varias vezes durante o codigo
* Ricardo D. Muenchen 17/04/24
*/

// fun.      nomeFun                parametros
function calcularAreaTerreno(largura, comprimento) {
    let area = largura * comprimento;
    return area //o que ira retornar quando a função for chamada
}

const prompt = require('prompt-sync')();
let lg = prompt("Digite a largura do terreno em metros: ");
let cp = prompt("Digite o comprimento do terreno em metros: ");

//Chamada da função e passagem de parâmetros
console.log('O terreno possui ' + calcularAreaTerreno(lg,cp) + ' metros quadrados');
let resultado = calcularAreaTerreno(lg, cp);
console.log('O terreno possui ' + resultado + ' metros quadrados');