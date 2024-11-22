import React , {useState} from 'react'

import './Header.css'
import search from '../../Assets/search.png'
import { Link } from "react-router-dom";

import  { FaBars } from 'react-icons/fa'; // Import arrow up icon from react-icons library
const Header = () => {
    
    const [navLeft, setNavLeft] = useState('-100%');
  
    const openToggle = () => {
      setNavLeft('0%');
    };
  
    const closeToggle = () => {
      setNavLeft('-100%');
    };

  return (    
    <div className='head'>    {/* Header div start */}
        {/* Header logo */}
        <div className="logo">
            <a href='/#'><h1>Rise Stox</h1></a>
        </div>
        <button className="open-btn" onClick={openToggle}> <FaBars /></button>
        {/* Navlinks */}
        <nav id='mainNav' style={{ left: navLeft }}>
            <div className="navlinks">
                <button className="close-btn" onClick={closeToggle}>X</button>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/compliance">Compliance</Link></li>
                <li><Link to="/incentives">Incentives</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/alerts">Alerts</Link></li>
                </ul> 
            </div>
            {/* Header search and button */}
            <div className="head-search-btn">
                <div className="search">
                    <img src={search} alt='search-icon'></img>
                    <input type='text' placeholder='Search any stock'></input>
                </div>
                <div className="btn-account-div">
                    <button className='btn-account'>Get A Demat Account</button>
                </div>
                <div className="sign-up-div">
                    <button className='btn-sign-up'>Sign Up</button>
                </div>   
            </div>
        </nav>
    </div>
  )
}

export default Header