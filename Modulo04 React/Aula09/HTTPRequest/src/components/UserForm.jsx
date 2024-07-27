import axios from 'axios'
import { useState } from 'react'

function UserForm() {

    const [ user, setUser] = useState({
        name: '',
        job: ''
    })

    const handleChange = (event) => {
        const { name, value} = event.target

        setUser({
            ... user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post('https://reqres.in/api/users', user)

            alert(`Usuario criado com sucesso! ID ${response.data.id} Nome ${response.data.name} Job ${response.data.job}`)
        } catch (error) {
            console.log(error)
            alert(`Erro ao criar o usuario!`)
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <h3>Registrar Usuario com Post</h3>
            <label>
                Nome:    
                <input type="text" name='name' value={user.name} onChange={handleChange}/>
            </label>
            <br />       
            <label>
                Job:
                <input type="text" name='job' value={user.job} onChange={handleChange}/>
            </label>
            <br /> 
            <button>Enviar</button>
        </form>
    )
}

export default UserForm