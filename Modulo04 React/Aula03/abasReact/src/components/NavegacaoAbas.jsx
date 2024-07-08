import { useState } from "react"
import "./NavegacaoAbas.module.css"

const conteudos = [
    [
        'Conteudo 0-0',
        'Conteudo 0-1',
        'Conteudo 0-2'
    ],
    [
        'Conteudo 1-0',
        'Conteudo 1-1',
        'Conteudo 1-2'
    ],
    [
        'Conteudo 2-0',
        'Conteudo 2-1',
        'Conteudo 2-2'
    ]
]

function NavegacaoAbas() {
    const [estadoAtual, setEstado] = useState(0)


    return (
        <>
            <div>
                <header>
                    <img src="" alt="" />
                    <h1>Abas com React</h1>
                    <p>Exercicio para trinar o useState</p>
                </header>
            </div>
            <div id="abas">
                <nav>
                    <button onClick={() => setEstado(0)}>Why React</button>
                    <button onClick={() => setEstado(1)}>Core Features</button>
                    <button onClick={() => setEstado(2)}>Related Resources</button>
                </nav>
            </div>

            <div id="conteudo">
                <ul>
                    {conteudos[estadoAtual].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                    {conteudos[estadoAtual].map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavegacaoAbas