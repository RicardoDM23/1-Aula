/*
* Exercicio 4: Calculadora Simples
*/

const prompt = require('prompt-sync')();

let var1 = Number(prompt("1 - Digite o primeiro valor: ")); 
let var2 = Number(prompt("2 - Digite o segundo valor: "));
let ope = (prompt("3 - Digite a operação(+, -, /, *): "));
let resultado;

if (ope === '+'){
    resultado = var1 + var2
} else if (ope === '-'){
    resultado = var1 - var2
}else if (ope === '/'){
    if (var2 !== 0){
        resultado = var1 / var2
    }else{
        resultado = undefined;
        console.log("Erro divisão por ZERO");
    }   
}else if (ope === '*'){
    resultado = var1 * var2
}else{
    console.log("Operação invalida")
}
if(resultado !== undefined){
    console.log("Resultado: ", resultado);
}
