/*
* Somar todos os elementos de um array
* Ricardo D. Muenchen 20/04/24
*/

let elementos = [1, 2, 3, 4];

function somaElementos(vetor){
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    return soma;
}

console.log("A soma dos elementos é: ", somaElementos(elementos));