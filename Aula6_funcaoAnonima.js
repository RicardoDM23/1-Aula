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

let soma = function(num1,num2){
    return num1+num2;
}
console.log(soma(3,5));

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