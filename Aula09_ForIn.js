/*
* Estruturas de repetição: FOR IN
* Ricardo D. Muenchen 22/04/2024
*/

/*
    FOR IN - chave retorna o indice de um array ou o atributo de um objeto
    sobre todas as propriedades enumeraveis de um objeto
*/

const pessoa = {
//  chave: valor
    nome: 'Edu',
    idade: 32,
    profissao: 'Desenvolvedor de Software',
    email: 'edu@codifica.com',
    empregada: true,
    descrever: function(){
        return `Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`
    }
}

//cria uma variavel que representa cada atributo (chave)
for(let chave in pessoa){ //1x para cada chave no caso 6x
    //primeira   nome           pessoa.nome
    //segunda   idade           pessoa.idade
    console.log(chave + ": " + pessoa[chave])
}

let numeros = [10,20,100];
for(let numero of numeros){
    console.log(numero + ': ' + numeros[numero])
}