import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav style={{background:'rgba(0,0,0,0.4)', padding: '1rem 0'}}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem', listStyle: 'none' }}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation