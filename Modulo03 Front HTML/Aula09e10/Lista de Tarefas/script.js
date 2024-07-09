
class Task {
    constructor(livro, capitulo){
        // this.paginas referencia ao atributo e não ao parametro
        this.livro      = livro
        this.capitulo   = capitulo
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

class Database {

    constructor() {
        const id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    loadTasks(){
        const tasks = Array()
        const id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            const task = JSON.parse(localStorage.getItem(i))

            if(task === null) {
                continue
            }

            tasks.id = id
            tasks.push(task)
        }

        return tasks
    }

    createTask(task){ 
        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id)
    }

    removeTask(id){
        localStorage.removeItem(id)
    }

    searchTasks(task) {
        let filteredTask = Array()

        filteredTask = this.loadTasks()

        //repetir para cada opcao de pesquisa exemploo t.capitulo
        if(task.livro !== ''){
            filteredTask = filteredTask.filter( t => t.livro === task.livro)
        }

        return filteredTask
    }
}

const database = new Database()

//criar id
function getNextId() {
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1
}

function registerTask() {
    const livro     = document.getElementById('livro').value
    const capitulo  = document.getElementById('capitulo').value

    const task = new Task(livro, capitulo)

    if(task.validadeData() ){
        database.createTask(task)
    }
}

function loadTasks(tasks) { //tasks = Array()

    if(tasks === undefined) {
        tasks = database.loadTasks()
    }

    //const tasks = database.getTasks()

    const listTasks = document.getElementById('listTasks')
    listTasks.innerHTML = ''

    tasks.forEach((t) => {

        const row = listTasks.insertRow()
        
        row.insertCell(0).innerHTML = `${t.livro}`
        row.insertCell(1).innerHTML = `${t.capitulo}`

        const btn = document.createElement('button')
        btn.className = 'excluirBtn'
        btn.id = t.id
        btn.innerHTML = 'Apagar'
        btn.onclick = () => {
            const id = t.id
            database.removeTask(id)
            window.location.reload()
        }

        row.insertCell(2).append(btn)
    })
}


function searchTasks() {
    const livro     = document.getElementById('livro').value
    const capitulo  = document.getElementById('capitulo').value
    const task = new Task(livro, capitulo)

    const tasks = database.searchTasks()

    loadTasks(tasks)
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
})







// function deleteTask(id) {
//     //Apaga tudo
//     //localStorage.clear()

//     //remove o ultimo
//     //const id = localStorage.getItem('id')
//     localStorage.removeItem(id)
//     return
// }

// function loadTasks(tasks) {
//     if(tasks.length === 0){
//         tasks = database.getTasks()
//     }
// }