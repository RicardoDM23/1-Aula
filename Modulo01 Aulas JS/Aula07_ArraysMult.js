/*
* Array Multidimencional ou Matriz
* Array de arrays
* Ricardo D. Muenchen 17/04/24
*/

let listaCoisas = Array();
listaCoisas['Frutas'] = Array();
listaCoisas['Frutas'][0] = 'Morango';
listaCoisas['Frutas'][1] = 'Uva';
listaCoisas['Frutas'][2] = 'Laranja';
listaCoisas['Frutas'][3] = 'Bergamota';

listaCoisas['Viagens'] = Array();
listaCoisas['Viagens'][0] = 'Passagens';
listaCoisas['Viagens'][1] = 'Malas';

console.log(listaCoisas);

//inserção de elementos no final do array
listaCoisas['Frutas'].push('Banana'); //aloca no 1 indice livre (?)
console.log(listaCoisas);

//inserção de elementos no começo do array
listaCoisas['Frutas'].unshift('Limão', 'Amora'); //não recomendado pois recarrega todos os valores para realocar eles
console.log(listaCoisas);

//Exclusão de elementos no final do array
listaCoisas['Frutas'].pop(); //ultimo elemento do vetor/array
console.log(listaCoisas);

//Exclusão de elementos no começo do array
listaCoisas['Frutas'].shift(); //primeiro elemento do  vetor/array
console.log(listaCoisas);

