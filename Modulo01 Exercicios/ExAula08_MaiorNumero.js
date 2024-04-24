/*
* Encontrar o maior numero em um array
* Ricardo D. Muenchen 20/04/24
*/

let num = [1, 5, 3, 2];

function encontraMaior(vetor){
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i];
        }
    }
    return maior;
}

console.log("O maior elementos é: ", encontraMaior(num));