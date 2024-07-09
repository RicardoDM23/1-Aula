/*
* Revisão da aula 09 For OF e questões de concurso
* Ricardo D. Muenchen 24/04/2024
*/

const biblioteca = [
    {titulo:"12 Regras para Vida", autor:"Jordan Peterson", ano: 1995},
    {titulo:"O Hobbit", autor:"J.R.R Tolkien", ano: 1937},
    {titulo:"Senhora do Jogo", autor:"Sidney Sheldon", ano: 2009},
    {titulo:"Zé Carioca", autor:"Disney", ano: 1940},
    {titulo:"Nação Dopamina", autor:"Anna Lembke", ano: 2021}
]

/*
    For OF para iterar sobre o array biblioteca
    Para cada livro, verifique se foi publicado antes de 2000
    Imprimir o livro e o ano dos livros que atendem a condição
*/

for (let livro of biblioteca){
    if (livro.ano < 2000) {
        console.log(`Livro ${livro.titulo}, publicado em ${livro.ano} pelo autor ${livro.autor}`)    
    }
}