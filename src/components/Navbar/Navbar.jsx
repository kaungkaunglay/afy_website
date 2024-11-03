import React from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.svg'
const Navbar =() =>{
    return(
        <nav className='container'>
            <img className='logo' src={logo} alt='logo'/>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Services</a></li>
                <li><a href=''>Jobs</a></li>
                <li><a href=''>About</a></li>
                <li>  <button className='contact_button'>Contact</button></li>
            </ul>
        </nav>
    )
}
export default Navbar