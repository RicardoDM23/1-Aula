/*
* Busca em Arrays
* Ricardo D. Muenchen 17/04/24
*/

//Busca de elementos em array
let listaProdutos = Array('Computador', 'Caneta', 'Chuteira', 'Computador');
let aux = listaProdutos.indexOf('Computador');  // Recebe o elemento que esta procurando
                                                // se o elemento não existe retorna -1
                                                // retorna o primeiro indice que encontrar
                                                // é CaseSensitive
console.log(listaProdutos)
if (aux === -1){
    console.log('Elemento não existe no Array');
} else {
    console.log('Elemento existe e está na posição: ' + aux)
}