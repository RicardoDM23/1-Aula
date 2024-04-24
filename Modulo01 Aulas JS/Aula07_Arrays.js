/*
* Array ou Vetor
* é um objeto, possui metodos e atributos proprios
* possui indices de [0][1][2]...[n]
* pode ter informações de diferentes tipos (não fazer isto de acordo com as boas praticas)
* Ricardo D. Muenchen 17/04/24
*/

//Formas de declaração
// 1
let listaCompras = Array();
listaCompras[0] = 'Shampoo';
listaCompras[1] = 'Condicionador';
listaCompras['x'] = 100; //mais usado como 'categoria'
console.log(listaCompras);
// 2
let listaFrutas = ['Banana', 'Morango'];
console.log(listaFrutas);
// 3
let listaViagem = Array('Passagens', 'Malas');
console.log(listaViagem);
// 4
let testeArrayA = Array();
let testeArrayB = Array('1','2','3');
let testeArrayC = Array('4','5','6');
testeArrayA[0] = testeArrayB;
testeArrayA[1] = testeArrayC
console.log(testeArrayA);