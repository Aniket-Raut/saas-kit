

import logo from '../assets/icons/saslogo.svg'
import './navbar.css'
import framer from '../assets/icons/framer_ico.svg'
import menu from '../assets/icons/Menu_w.svg'
import { useState } from 'react'


export const Navbar=()=>{
    const[showMenu,setShowMenu] = useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu);
    }
    return(
        <nav className='navbar-container'>
            <div className='navbar-logo-holder'>
                <img src={logo}></img>
                <div className='navbar-logo-content'>made by <img src={framer}></img></div>
                <div onClick={toggleMenu} className='navbar-menu'>
                    <img src={menu}></img>
                </div>
            </div>
            <div className={`navbar-items ${showMenu ? "active" : "hidden"}`}>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Customers</li>
                    <li>Updates</li>
                    <li>Help</li>
                </ul>
                <button>Get for free</button>
            </div>
        </nav>
    )
}