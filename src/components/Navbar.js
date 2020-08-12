import React from 'react'
import {Link} from 'react-router-dom';

function Navbar({basketNumber}) {
    return (        
        <nav>
            <h2>Sample React App Nav</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><a>No:&nbsp;<span>{basketNumber}</span></a></li>
            </ul>
        </nav>
    )
}

export default Navbar
