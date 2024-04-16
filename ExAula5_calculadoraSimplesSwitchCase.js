/*
* Exercicio 5: Calculadora Simples com Switch
*/

const prompt = require('prompt-sync')();

let var1 = Number(prompt("1 - Digite o primeiro valor: ")); 
let var2 = Number(prompt("2 - Digite o segundo valor: "));
let ope = (prompt("3 - Digite a operação(+, -, /, *): "));
let result;
let zero;

switch(ope){
    case '+':
        result = var1 + var2;
        break;
    case '-':
        result = var1 - var2;
        break;
    case '/':
        if (var2 !== 0){
            result = var1 / var2
        }else{
            result = undefined;
            zero = 's'
        } 
        break;
    case '*':
        result = var1 * var2
        break;
    default:
        result = undefined;
        zero = 'n'
        break;
}

if (result !== undefined){
    console.log("Resultado: ", result);
} else {
    if (zero === 's'){
        console.log("Erro divisão por ZERO");
    }else{
        console.log("Operação invalida");
    }  
}




