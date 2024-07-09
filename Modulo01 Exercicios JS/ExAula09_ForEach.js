/*
* Construa um array de números e calcule a soma total dos números 
* e também imprima cada número multiplicado por dois.
* Ricardo D. Muenchen 22/04/2024
*/

let numeros = [4, 5, 2, 7]
let multDois = []
let total = 0
//numeros.forEach((value, index)=>{ total += numeros[index]});

numeros.forEach((value, index)=>{ 
    //console.log(numeros[index]*2)
    total += value //numeros[index]
    multDois.push(value*2) //numeros[index]*2
});

console.log('Array original:', numeros)
console.log('Soma Total:', total);
console.log('Array multiplicado por DOIS:', multDois)
