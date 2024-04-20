/*
* Fazer: encontra a quantidade de milisegundos entre duas datas
* Ricardo D. Muenchen 20/04/2024
*/

let dataInicial = new Date();
let dataFinal = new Date();
dataInicial.getDate();
dataFinal.setDate(dataFinal.getDate() + 500);

console.log(dataInicial.toString(), '-Qtd milisegundos-' , dataInicial.getTime());
console.log(dataFinal.toString(), '-Qtd milisegundos-', dataFinal.getTime());

let milisegundosEntreDatas = Math.abs(dataInicial.getTime() - dataFinal.getTime());
console.log('Quantidade de milisegundos entre as duas datas: ', milisegundosEntreDatas);