import { useContext } from 'react'
import { MyContext } from './Contexto'

const MyChildren = () => {
    const context = useContext(MyContext)

    return <div>Meu nome é {context.name} {context.lastname} {context.valueW} </div>
}

export default MyChildren