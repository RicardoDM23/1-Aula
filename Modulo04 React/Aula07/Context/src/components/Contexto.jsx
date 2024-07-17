import {createContext} from 'react'

export const MyContext = createContext()

export const MyProvider = (props) => {
    //v1 provedor do contexto

    return (
        <MyContext.Provider value={{ name: 'João', lastname: 'Teste'}}>
            {props.children}
        </MyContext.Provider>
    )
}

export const MyProviderDois = (props) => {
    //v1 provedor do contexto

    return (
        <MyContext.Provider value={{ name: 'Pedro', valueW: 1000}}>
            {props.children}
        </MyContext.Provider>
    )
}