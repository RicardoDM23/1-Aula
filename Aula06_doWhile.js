/*
* estrutura condicional DO WHILE
* Ricardo D. Muenchen 15/04/24
*/

const prompt = require('prompt-sync')();
let senha;

do{
    senha = prompt("Digite a senha: ");
} while ( senha !== "1234")

console.log("Senha Correta!")