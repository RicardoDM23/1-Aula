import { useEffect, useState } from "react";

function UserProfile() {
    const [ user, setUser] = useState()

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const userData = await response.json()
            setUser(userData)
        }

        fetchUserData()

        return () => setUser(null)
    }, [])

    return (
        <div>
            {user ? 
                user.map((user, index) =>
                <div>
                    <h1 key={index}>{user.name}</h1>
                    <h1 key={index}>{user.email}</h1>
                </div>
            ) : (
                <p>Carregando Perfil de Usuário</p>
            )}
        </div>
    )
}

export default UserProfile