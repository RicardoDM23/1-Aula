
//Estruturas condicionais

//condicional simples IF ELSE / SE SENÃO
const nota = 60;

if(nota >= 60){ // SE
    console.log("Aprovado, não fez mais que a obrigação."); // ENTÃO/FAÇA
}else{ // SE NÃO
    console.log("Reprovado, precisa estudar mais!"); // ENTÃO/FAÇA
}

/*
* Se nota >= 60 aprovado
* Se nota >= 40 e nota < 60 recuperação
* Se nota < 40 reprovado
*/
if(nota >= 60){ // SE
    console.log("Aprovado, não fez mais que a obrigação."); // ENTÃO/FAÇA
}else if(nota >= 40){ //SE NÃO SE  condição intermediaria
    console.log("Recuperação, estude!"); // ENTÃO/FAÇA
}else{ // SE NÃO
    console.log("Reprovado, precisa estudar mais!"); // ENTÃO/FAÇA
}

//NOTA NÃO USAR VARIOS IFs 
//UTILIZAR ELSE IF

//Operador ternario
/*
* Estrutura de dacisão semelhante a IF ELSE mas com sintaxe mais enxuta
*
* = Condição ? <verdadeiro> : <falso>
*/

let resultadoTernario = (10>100) ? true:false;
console.log("Resultado Ternario:", resultadoTernario);

let resultadoNota = (nota>=60) ? 'Aprovado':'Reprovado';
console.log("Resultado Ternario Nota:", resultadoNota);