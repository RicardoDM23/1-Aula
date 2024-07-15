import { useState } from "react";

function Form2() {
    const [ address, setAddress ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        address.map(items => items.id = event.target.value)
        setAddress(address)

        const {name, value } = event.target

        // setAddress({...address, [name]: value})

        // setAddress(prevState => ({
        //     ...prevState,
        //     [name]: value
        //     // [event.target.id]: event.target.value
        //  }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!address.street || !address.city || !address.postalCode){
            alert('Preencha todos os campos!') 
        } else {
            alert(  `Endereço submetido!\n`+
                    `Rua: ${address.street} \n`+
                    `CIdade: ${address.city} \n`+
                    `CEP: ${address.postalCode} `
                    )
        }

        // if (!address.street) {
        //     alert(`Informe a Rua`)
        // } else if (!address.city) {
        //     alert(`Informe a cidade`)
        // } else if (!address.postalCode) {
        //     alert(`Informe o CEP`)
        // } else {
        //     alert(`Rua: ${address.street} \n`+
        //         `CIdade: ${address.city} \n`+
        //         `CEP: ${address.postalCode} `
        //     )
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="postalCode" onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Form2