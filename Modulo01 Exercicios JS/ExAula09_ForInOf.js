/*
* Você tem uma lista de objetos que representam diferentes
* tipos de veiculos. Seu objetivo é primeiro usar o FOR IN
* para listar todas as propriedades e valores de cada veiculo.
* Despois, utilizar o FOR OF para listar apenas os modelos dos veiculos.
*
* Ricardo D. Muenchen 22/04/2024
*/

const veiculos = [  {   modelo: 'A',    tipo: 'at',    ano: 2023},
                    {   modelo: 'B',    tipo: 'bt',    ano: 2015}]

for(let veiculo in veiculos){
    console.log(veiculos[veiculo])
}
let listaModelos = []
for(let veiculoModelo of veiculos){
    listaModelos.push(veiculoModelo.modelo)
}
console.log('Modelos dos veículos: '+ listaModelos)

//forma complicada
/*
const veiculoUm = {
    modelo: 'A',
    tipo: 'aa',
    ano: 2023
}

const veiculoDois = {
    modelo: 'B',
    tipo: 'ab',
    ano: 2015
}

const veiculoTres = {
    modelo: 'C',
    tipo: 'ac',
    ano: 2024
}

for(let veiculo in veiculoUm){
    console.log(veiculo+ ': '+veiculoUm[veiculo])
}
for(let veiculo in veiculoDois){
    console.log(veiculo+ ': '+veiculoDois[veiculo])
}
for(let veiculo in veiculoTres){
    console.log(veiculo+ ': '+veiculoTres[veiculo])
}
let modelos = [veiculoUm.modelo,veiculoDois.modelo,veiculoTres.modelo]

for(let modelo of modelos){
    console.log('modelo: ' + modelo)
}
*/