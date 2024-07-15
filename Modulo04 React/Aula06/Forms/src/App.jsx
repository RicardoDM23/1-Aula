import Desafio from "./components/Desafio"
import Form2 from "./components/Form2"
import StdFrom from "./components/Forms"
import UserCard from "./components/UserCard"
import { useState } from "react"
//para userCard


const  [user, setUser] = useState({name: 'Gandalf', age:1000})

function App() {

  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser} />
      </div>
      
    </>
  )
}

export default App
