/*
* Encontrar o maior numero de uma matriz
* Ricardo D. Muenchen 20/04/24
*/

let elementos = [[1,2,33,4],[4,7,21,8],[3,65,2,7]];

function encontraMaiorMatriz(matriz){
    let maior = matriz[0][0];
    let maiorI = 0
    let maiorJ = 0
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] > maior){
                maior = matriz[i][j];
                maiorI = i
                maiorJ = j
            }
        }
    }
    return [maior, maiorI, maiorJ]
}

retorno = encontraMaiorMatriz(elementos);
console.log("O maior elementos é: ", retorno[0], 'em [',retorno[1],'][',retorno[2],']');