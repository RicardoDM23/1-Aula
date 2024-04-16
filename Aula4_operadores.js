//Operadores
let num1 = 10;
let num2 = 5;

console.log("Soma +", num1 + num2);
console.log("Subt -", num1 - num2);
console.log("Mult *", num1 * num2);
console.log("Div /", num1 / num2);
console.log("Potencia **", num1 ** num2); // potencia

let numTeste = "5"
let numTeste2 = parseInt(numTeste) // força um valor string para int
console.log(numTeste + num1); //concatena
console.log(numTeste2 + num1); //soma
console.log(numTeste - num1); // apenas o + concatena

//se não for um numero inteiro
let numTeste3 = "5.5"
let numTeste4 = Number(numTeste3) 
console.log(numTeste3 + num1); 
console.log(numTeste4 + num1); 

//incremento decremento
let contador = 1;
console.log("Inicial: ",contador);
contador++;// é igual a contador = contador +1
console.log("Apos incremento", contador);
contador--;// é igual a contador = contador -1
console.log("Apos decremento", contador);

//pre incremento e pre decremento
--contador;
console.log("pre decremento", contador);
++contador;
console.log("pre incremento", contador);

console.log(contador++); //incrementa apos a instrução (exibe e incrementa)
console.log(--contador); //decremento antes da instrução (decrementa e exibe)

//
let contador2 = 0;
console.log(contador2);
let passo = 2;
contador2 += passo; // contador = contador + passo
console.log(contador2);

//Ordem
// ()
// **
// * / %
// + -
//Da esquerda para a direita

//Operadores
// < menor que
console.log(10 < 5);
// <= menor ou igual
console.log(5 <= 5);
// > maior que
console.log(5 > 5);
// >= maior ou igual
console.log(10 >= 5);
// == igual a
console.log(10 == 5);
console.log(10 == '10');//so compara valor, interpreta string como numero
// === identico a
console.log(10 === '10');//verifica valor e tipo
// != diferente de
console.log(10 != '10');//so compara valor, interpreta string como numero
// !== diferente estrito
console.log(10 !== '10');//verifica valor e tipo