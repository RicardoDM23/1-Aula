/*
* Funçoes avançadas: Datas
* Ricardo D. Muenchen 20/04/24
*/

let data = new Date();

console.log(data.getDate()); //retorna o dia atual
console.log(data.getMonth() +  1); // sempre começa pelo 0
console.log(data.getFullYear()); //retorna o ano atual no formato YYYY

if(data.getMonth()<9){
    console.log(`${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`);
} else {
    console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
}

console.log(data.toString());
data.setDate(data.getDate() + 720);
console.log(data.toString());

let dataNova = new Date().toLocaleDateString('pt-BR');
console.log(dataNova);


