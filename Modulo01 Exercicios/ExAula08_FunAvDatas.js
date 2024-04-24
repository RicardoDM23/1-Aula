/*
* Fazer: encontra a quantidade de milissegundos entre duas datas
* Ricardo D. Muenchen 20/04/2024
*/

let dataInicial = new Date();
let dataFinal = new Date();
dataInicial.getDate(); // dia atual
dataFinal.setDate(dataFinal.getDate() + 500); // dia atual + 500 dias

console.log(dataInicial.toString(), '-Qtd milissegundos-' , dataInicial.getTime());
console.log(dataFinal.toString(), '-Qtd milissegundos-', dataFinal.getTime());

let milissegundosEntreDatas = Math.abs(dataInicial.getTime() - dataFinal.getTime());
console.log('Quantidade de ms entre as duas datas: ', milissegundosEntreDatas);