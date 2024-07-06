import { useState } from "react";

function ToDoList() {
    const [toDos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        //... spread operator / desestruturação 
        // vai adicionar o inputValue nos todos preservando o que ja existe
        setToDos([... toDos, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input type="text" onChange={ (e) => setInputValue(e.target.value)}/>
            <button onClick={addTodo}>Adicionar Tarefa</button>

            <ul>
                {toDos.map((toDo, index) =>(
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList