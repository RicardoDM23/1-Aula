/*
* Exemplo: Design Patterns
* Ricardo D. Muenchen 22/04/2024
*/

//Por convenção é utilizado a 1 letra maiuscula para Factorys
let BicicletaFactory = function(id, cor, tipo, marca){
    return{ //retorna como objeto
        id,
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory(1, 'Azul', 'Speed', 'Caloi');
let bicicleta2 = BicicletaFactory(2 ,'Preta', 'Mountain', 'BMX');

console.log(bicicleta1)
console.log(bicicleta2)