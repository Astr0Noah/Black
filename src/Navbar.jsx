import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return <nav className = "nav">

    
    <ul>
        <li>
            <Link to = "/Black/"class = "site-title">Home</Link>
        </li>
    
        <li>
            <Link to='/about' >About</Link>
            
        </li>
        <li>
            <Link to='/pricing'>Pricing</Link>
        </li>

        <li>
            <Link to='/map'>Map</Link>
        </li>

        <li>
            <Link to='/ranks'>Ranks</Link>
        </li>
    </ul>
  </nav>

}