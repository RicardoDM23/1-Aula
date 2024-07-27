import axios from "axios"

function DeleteUser() {

    const handleClick = () => {
        axios.delete('https://reqres.in/api/users/2')
        .then(response => {
            console.log(`Dados do usuario removidos`)
            alert(`Usuario Removido! Status: ${JSON.stringify(response.status)}`)
        }).catch(error => {
            console.log(`Error ao apagar o usuario  ${error}`)
            alert(`Erro ao apagar os dados do usuario`)
        })
    }
    return (
        <div>
            <h3>Deletar dados com Delete</h3>
            <button onClick={handleClick}>Deletar dados</button>
        </div>
    )
}

export default DeleteUser