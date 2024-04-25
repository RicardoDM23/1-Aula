/*
* spread = espalhar
* rest = juntar
* Ricardo D. Muenchen 24/04/2024
*/

//SPREAD

let tituloArtigo = 'Movimento agil';
console.log(tituloArtigo);
console.log(...tituloArtigo); //separa a string
console.log([...tituloArtigo]); // retorna um array com cada caracter em 1 posição

let listaTimes = ['Internacional', 'Gremio'];
let listaTimes2 = ['São jose', 'Pelotas'];
let listasTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2];
console.log(listasTimesCompletos);

//REST
            //junta os parametros em um array
            //posibilita usar o for each    
function soma(...param){
    let resultado = 0
    console.log(param)
    param.forEach(elemento=> resultado += elemento)
    return resultado
}

console.log(soma(3,8,5,7))

function multiplicacao(m,...p){
    console.log(m)
    console.log(p)

    let resultado = 0
    p.forEach(elemento => resultado += m *elemento)
    return resultado
}
console.log(multiplicacao(5,7,12,3,50))