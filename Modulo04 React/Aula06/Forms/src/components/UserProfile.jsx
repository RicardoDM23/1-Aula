

const UserProfile = ({user, setUser}) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age} anos</h2>
            <button onClick={() => setUser({ ... useFormState, age: user.age + 1})}>Aumentar idade</button>
        </div>
    )
}

export default UserProfile