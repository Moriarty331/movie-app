import '../styles/home.css'
import parrotImage from '../images/logo.png';
import React from 'react';
import arrowDown from '../images/arrow-down.png';
import menu from '../images/menu.png';

export const Navbar = (props) =>{
    return(
        <>
            <div className="navbar" style={{animationName: props.animate}}>   

                <div className="logo-section">
                    <img src={parrotImage} alt="" />
                    <h1>MovieParrot</h1>
                </div> 

                <ul className='navbar-nav'>
                    {props.children}
                    <li className="nav-item" onClick={props.show}>
                        <a href="">categories</a>
                        <img src={arrowDown} alt="" className='arrowDown'/>
                    </li>
                </ul>

                <div className="menuButton" onClick={props.showMenu}>
                    <img src={menu} alt="" className='' />
                </div>
            </div>

        </>
    )
}

export const NavbarItem = (props) =>
{
    return(
        <li className="nav-item">
            <a href="#">
                {props.name}
            </a>
        </li>
    )
}


export const Dropdown = () =>
{
    return(
        <ul className="dropdown">
            <li>Comedy</li>
            <li>Animation</li>
            <li>Adventure</li>
            <li>Drama</li>
            <li>Sci-fi</li>
        </ul>    
    )
}
