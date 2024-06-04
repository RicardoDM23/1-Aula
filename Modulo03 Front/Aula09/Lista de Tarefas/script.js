class Task {
    constructor(tituloLivro, paginas){
        // this.paginas referencia ao atributo e não ao parametro
        this.tituloLivro = tituloLivro
        this.paginas = paginas
    }

    validadeData(){
        // referenciando ao this anterior
        for(let i in this){
            // exp: this.paginas
            if(this[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

function registerTask() {
    const livro     = document.getElementById('livro').value
    const capitulo  = document.getElementById('capitulo').value

    const task = new Task(livro, capitulo)
    if(task.validadeData() ){
        Database.createTask(task)
    }
}

class Database {
    createTask(task){
        // localStorage.setItem(id, JSON!stringfy(task))
    }
}