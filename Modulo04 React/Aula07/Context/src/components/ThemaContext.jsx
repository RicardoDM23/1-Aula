import { useState, createContext, useContext} from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {}})

function ThemeC() {

    const [ theme, setTheme ] = useState('light')

    const toggleTheme = () => {
                                        //    se      retorna  seNão
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <div>
                <Toolbar/>
                <button onClick={toggleTheme}>Trocar o Tema</button>
            </div>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    const { theme } = useContext(ThemeContext)
  
    return (
        <div style = {{background: theme ==='dark' ? 'grey' : 'blue', color: theme === 'dark' ? 'white' : 'white'}}>
            Tema utilizado - {theme}
        </div>
    )
}

export default ThemeC