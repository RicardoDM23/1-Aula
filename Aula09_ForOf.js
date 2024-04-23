/*
* Estruturas de repetição: FOR OF
* Ricardo D. Muenchen 22/04/2024
*/

/*
    FOR OF - chave retorna os atributos de um objetos ou os valores de um array
    Não funciona bem com objetos
    sobre valores de arrays e strings entre outros
*/

let numeros = [10,20,100];
//util para acessar os elementos sem se preocupar com indices e chaves
for(let numero of numeros){
    console.log(numero)
}

let nomes = 'Ricardo Muenchen';
for (let nome of nomes){
    console.log(nome)
}