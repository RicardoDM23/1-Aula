/*
Objetivo:

Desenvolver um formulário de registro de usuário que colete informações básicas, como nome, email, senha e confirmação de senha. O formulário deve validar os dados inseridos e exibir mensagens de erro apropriadas quando os dados não forem válidos.

Requisitos do Desafio:

    Estrutura do Formulário:
        Campo para Nome Completo (obrigatório)
        Campo para Email (obrigatório e deve ser um email válido)
        Campo para Senha (obrigatório e deve ter no mínimo 8 caracteres)
Campo para Confirmar Senha (obrigatório e deve ser igual ao campo Senha)
        Botão de Submissão

    Validações:
        Todos os campos são obrigatórios.
        O email deve ter um formato válido (exemplo: usuario@dominio.com).
        A senha deve ter no mínimo 8 caracteres.
        A confirmação da senha deve ser idêntica à senha.

    Comportamento do Formulário:
        Exibir mensagens de erro abaixo dos campos que não passam nas validações.
        Exibir uma mensagem de sucesso ao final do formulário quando todos os dados forem válidos e o formulário for submetido.
*/
import { useState } from "react";

function Desafio() {
    const [ dataForm, setDataForm ] = useState({
        nome: '', 
        email: '', 
        senha: '',
        confirmSenha: ''
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmiteeed] = useState(false)

    const handleChange = (e) => {
        dataForm.map(items => items.id = e.target.value)
        setDataForm(dataForm)
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        alert(`${dataForm.nome} \n`+
            `${dataForm.email} \n`+
            `${dataForm.senha} \n`
        )
    }

    return (
        <div>
            <h2>Registre-se</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Nome:
                    <input type="text" name="nome" value={dataForm.nome} onChange={handleChange} />
                </label>
                <br />
                <label htmlFor="">
                    Email:
                    <input type="text" name="email" value={dataForm.email} onChange={handleChange} />
                </label>
                <br />
                <label htmlFor="">
                    Senha:
                    <input type="password" name="senha" value={dataForm.senha} onChange={handleChange} />
                </label>
                <br />
                <label htmlFor="">
                    Confirmar Senha:
                    <input type="password" name="confirmSenha" value={dataForm.confirmSenha} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
        
    )
}

export default Desafio