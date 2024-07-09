/*
* Revisão da aula 09 For EACH e questões de concurso
* Ricardo D. Muenchen 24/04/2024
*/

const filmes = [
    {titulo: 'Tropa de Elire', genero: 'Ação'},
    {titulo: 'Capitão Fantástico', genero: 'Ação'},
    {titulo: 'O Poderoso Chefão', genero: 'Drama'},
    {titulo: 'Clube da Luta', genero: 'Drama'},
    {titulo: 'Oppenheimer', genero: 'Biografia'},
    {titulo: 'High School Musical', genero: 'Musical'},
    {titulo: 'Barbie', genero: 'Comédia'}
]

/*
    For EACH para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
    para cada filme no array, verifique se o genero ja existe no objeto contagem
    se existir, incremente a contagem, se não, adicione o genero ao objeto com contagem inicial de 1
    apos loop, imprima cada genero e o numero de filmes
*/

let contaG = {}

filmes.forEach(filmes => {
    //verifica se ja existe em contaG  caso exita incrementa o valor de contagem
    //se não cria um novo valor para op genero e contagem
    if (contaG[filmes.genero]){
        contaG[filmes.genero]++
    }else{
        contaG[filmes.genero] = 1
    }
})

for (let genero in contaG){
    console.log(`${contaG[genero]} filmes do genero ${genero}.`)
}