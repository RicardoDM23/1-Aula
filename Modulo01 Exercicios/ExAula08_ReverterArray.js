/*
* Reverter um array e apresentar original e modificado
* Ricardo D. Muenchen 20/04/24
*/

let elementos = [1,4,6,8,2]

function reverteArray (vetor){
    
    let resultado = [];
    for (i = vetor.length -1; i >= 0; i--){
        resultado.push(vetor[i])
    }
    return resultado;
}

console.log('Array original: ', elementos);
console.log('Array modificado: ', reverteArray(elementos));
console.log('Array reverse: ', elementos.reverse()) //simples