import axios from 'axios'

function GetUser() {
    
    const handleClick = () => {
        axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log(`Dados do usuario:  ${response.data}`)
            alert(`Usuario recuperado: ${JSON.stringify(response.data.last_name)}`)
        }).catch(error => {
            console.log(`Error ao recuperar o usuario  ${error}`)
            alert(`Erro ao recuperar os dados do usuario`)
        })
    }

    return (
        <div>
            <h3>Buscar dados com Get</h3>
            <button onClick={handleClick}>Recuperar dados</button>
        </div>
 
    )
}

export default GetUser