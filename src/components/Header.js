import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div style={headerStyle}>
            <h2>Auto Home</h2>
            <Navbar/>
        </div>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

// const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
// }
export default Header