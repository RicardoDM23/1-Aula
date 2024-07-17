/*
Crie um aplicativo que permita aos usuarios salvar suas preferencias 
de idioma e tema (claro/escuro), usando useContext.
*/

import { useState, createContext, useContext} from 'react'

const PreferencesContext = createContext()

function Desafio() {

    const [ preferences, setPreferences ] = useState({theme: 'light', language: 'en'})

    const toggleTheme = () => {
                                        //    se      retorna  seNão
        setPreferences(currentTheme => ({
            ...currentTheme,
            theme: currentTheme.theme === 'light' ? 'dark' : 'light'}))
    }

    const changeLanguage = (language) => {
        setPreferences(currentLanguage => ({
            ...currentLanguage,
            language: language
        }))
    }

    return (
        <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage}}>
            <div>
                <Toolbar/>
                <button onClick={toggleTheme}>Trocar o Tema</button>
                <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </PreferencesContext.Provider>
    )
}

function Toolbar() {
    const { preferences } = useContext(PreferencesContext)
  
    return (
        <div style = {{background: preferences.theme ==='dark' ? 'lightgrey' : 'lightblue', color: 'red'}}>
            <p>Tema utilizado - { preferences.theme }</p>
            <p>Idioma utilizado - <span style={{color: preferences.language === 'en' ? 'black' : 'blue'}}>{ preferences.language }</span></p>
        </div>
    )
}

export default Desafio