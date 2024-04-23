/*
* Estruturas de repetição: FOR EACH / para cada
* Ricardo D. Muenchen 22/04/2024
*/

/*
    Metodo para arrays, executa um função para cada elemento do array
    Aceita ArrowFunction ( ()=>{} )
*/

let cores = ['Vermelho', 'Preto', 'Branco', 'Azul'];

cores.forEach((cor, indice)=>{console.log(indice+": "+cor)})
console.log('')
let compras = [];
compras['frutas'] = new Array('banana', 'laranja');

compras['frutas'].forEach((value, index)=>{console.log(index+": "+value)})