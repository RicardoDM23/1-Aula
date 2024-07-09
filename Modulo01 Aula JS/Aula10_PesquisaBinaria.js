/*
* Pesquisa Binária
* Desenvolva um algoritimo que receba uma lista ordenada e um valor correto
* execute uma pesquisa binaria para encontrar o valor certo
* Ricardo D. Muenchen 24/04/2024
*/
//pesquisaBinaria
function bynarySearch(ar, item){
    let min = 0;
    let max = ar.length -1;

    while(min <= max){
        const mid = Math.floor((min + max)/2)
        
        if(ar[mid] === item){
            return mid;
        }else if(ar[mid]>item){
            max = mid - 1;
        }else{ //else if (ar[mid]<item){
            min = mid + 1;
        }
    }
    return -1;
}

let array = [1,2,3,4,5,6,7,8,9,10]
let valueSearch = 3

let indexResult = bynarySearch(array, valueSearch)
if (indexResult !== -1){
    console.log(array)
    console.log('Valor encontrado', array[indexResult],'Indice:',indexResult)
}else{
    console.log('Valor não encontrado na lista')
}