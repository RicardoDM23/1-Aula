import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav style={{background:'rgba(0,0,0,0.4)', padding: '1rem 0'}}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem', listStyle: 'none' }}>
                <li><Link to='/'>BLUE</Link></li>
                <li><Link to='/green'>GREEN</Link></li>
                <li><Link to='/red'>RED</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation