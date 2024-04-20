/*
* Encontrar o maior numero em um array
*/

let num = [1, 5, 3, 2];

function encontraMaior(vetor){
    let maior = 0;
    let aux = 0;
    for (let i = 0; i < vetor.length; i++){
        aux = vetor[i];
        if (maior < aux){
            maior = aux
        }
    }
    return maior;
}

console.log("O maior elementos é: ", encontraMaior(num));