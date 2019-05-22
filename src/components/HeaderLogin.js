import React from 'react'

function Header() {
    return (
        <div style={headerStyle}>
            <h4>Home Automation System</h4><br />
            <p>Better home for better tommarrow</p>
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