/*
* Revisão da aula 09 For IN e questões de concurso
* Ricardo D. Muenchen 24/04/2024
*/

const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas:{
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

/*
    For in para iterar sobre as propriedades dentro das notas, calcule a média
    e imprima da turma. Caso a media esteja acima de 3.0
    indique se a turma esta ou não acima da média de aprovação
*/

let soma = 0
let cont = 0

for( let chave in professor.notas){
    soma += professor.notas[chave]
    cont++
}
let media = soma/cont;
console.log(`Média da turma: ${media.toFixed(2)}`)
//if ternario
console.log(media >= 3.0 ? `A tuma do ${professor.nome} está acima da média`:`A turma está abaixo da média` )
