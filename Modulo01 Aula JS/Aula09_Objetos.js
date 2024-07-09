/*
* Objetos
* São uma maneira de organizar dados, representações de um mundo real,
* composto por propriedades/caracteristicas/chaves/atributos e valores,
* utilizados na criação de uma classe.
* Ricardo D. Muenchen 22/04/2024
*/

//declaração
const pessoa = {
//  chave: valor
    nome: 'Edu',
    idade: 32,
    profissao: 'Desenvolvedor de Software',
    email: 'edu@codifica.com',
    empregada: true
}

//exibir
console.log(pessoa.nome);//mostra apenas a info de nome
console.log(pessoa); //mostra todas as infos do objeto pessoa
//modificar
pessoa.nome = 'James' // modifica a info de nome
console.log(pessoa['nome']);//mostra apenas a info de nome forma 2
//excluir
delete pessoa.empregada; //deleta o atributo empregada
console.log(pessoa)
//

pessoa.falar = function(){ //cria uma função para pessoa (não pode ser arrow function)
    return `Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`
}
console.log(pessoa.falar()) //chama a função
console.log(pessoa) //ja exibe a função como parte de pessoa

//forma antiga 
let nome1 = 'A';
let idade1 = 23;
let objeto = {
    nome1: nome1,
    idade1: idade1,
}
//pode ser omitido mas mantem a ,
let objeto2 = {
    nome1,
    idade1
}
console.log(objeto);
console.log(objeto2);