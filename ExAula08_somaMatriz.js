/*
* Somar todos os elementos de uma matriz
*/

let base = [];
base[0] = [2,5,7,9];
base[1] = [6,1,7,4];
base[2] = [8,1,8,2];
base[3] = [9,7,2,2];
// ou
//let base = [[2,5,7,9],[6,1,7,4],[8,1,8,2],[9,7,2,2]];

function somaMatriz (matriz){
    let soma = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j ++){
            soma += matriz[i][j]
        }
    }
    return soma;
}

console.log("Soma dos elementos da Matriz: ", somaMatriz(base));