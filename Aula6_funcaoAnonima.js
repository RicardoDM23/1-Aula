/*
* Função anonima - não possui nome
* usada geralmente para callback
* Ricardo D. Muenchen 17/04/24
*/

let exibirFuncao = function() { //é uma variavel que armazena uma função
    console.log('Ola');
}
//forma de chamar
exibirFuncao();

let somaTeste = function(num1,num2){
    return num1+num2;
}
console.log(somaTeste(3,5));

let teste = () => {
    console.log('Teste')
}

//Funçoes anonimas utilizando callback
function exibirArtigo(callcakSucesso, callbackErro){
    if(true){
        callcakSucesso('Funçoes de callback em caso de sucesso');
    } else {
        callbackErro('Funçoes de callbacck em caso de erro');
    }
}

let callbackSucesso = function(titulo) {
    console.log(titulo);
}

let callbackErro = function(erro){
    console.log(erro);
}

exibirArtigo(callbackSucesso,callbackErro)

//Calculadora com Fun. Anonima
let soma = function (num1, num2){
    return num1 + num2
}
let sub = function (num1, num2){
    return num1 - num2
}
let mult = function (num1, num2){
    return num1 * num2
}
let div = function (num1, num2){
    return num1 / num2
}

function calculadora(operacao, num1, num2, soma, sub, mult, div){
    let resultado;
    switch(operacao){
        case '+':
            resultado = soma(num1, num2);
            break;
        case '-':
            resultado = sub(num1, num2);
            break;
        case '/':
            resultado = div(num1, num2);
            break;
        case '*':
            resultado = mult(num1, num2);
            break;   
    }
    return resultado;
}

const prompt = require('prompt-sync')();
let ope = prompt("Operacao:");
let numero1 = parseInt(prompt("valor 1:"));
let numero2 = parseInt(prompt("valor 2:"));
console.log(calculadora(ope, numero1, numero2, soma, sub, mult, div));

