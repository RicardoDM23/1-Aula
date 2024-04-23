/*
* Criar um objeto que represente algo real
* Ricardo D. Muenchen 22/04/2024
*/

const livro = {
    titulo: 'Shibumi',
    autor: 'Trevanian',
    editora: 'Landscape',
    numPgs: 480,
    ano: 2006
}

const Ventilador = {
    marca: "X",
    tamanho: "grande",
    voltagem: 220,
    velocidade: 0,

    aumentar_velocidade: function(){
        this.velocidade += 1;
    },

    diminuir_velocidade: function(){
        if (this.velocidade > 0)
            this.velocidade -= 1;
    }
}