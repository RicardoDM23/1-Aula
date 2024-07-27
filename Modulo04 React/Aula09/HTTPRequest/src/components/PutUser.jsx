import axios from "axios"

function PutUser() {
    const userData = {
        name: 'Teste1',
        job: 'fafaf'
    }
    const handleClick = () => {
        axios.put('https://reqres.in/api/users/2', userData)
        .then(response => {
            console.log(`Dados do usuario atualizado:  ${response.data}`)
            alert(`Usuario atualizado: ${JSON.stringify(response.data)}`)
        }).catch(error => {
            console.log(`Error ao atualizar o usuario  ${error}`)
            alert(`Erro ao atualizar os dados do usuario`)
        })
    }
    
    return (
        <div>
            <h3>Atualizar dados com Put</h3>
            <button onClick={handleClick}>Atualiza dados</button>
        </div>
    )
}

export default PutUser