import '../styles/home.css'
import parrotImage from '../images/logo.png';
import React from 'react';
import arrowDown from '../images/arrow-down.png';
import menu from '../images/menu.png';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        y: "-100vh"
    },
    animate: {
        y: 0,
        transition: {
            type: "tween",
            delay: .5,
            duration: 1
        }
    }
}


const imgVariants = {
    initial: {
        x: "-100vw"
    },
    animate: {
        x: 0,
        transition: {
            type: "tween",
            delay: .5,
            
            duration: 1
        }
    }
}

export const Navbar = (props) =>{
    return(
        <>
            <div className="navbar">   

                <div className="logo-section">
                    <motion.img src={parrotImage} alt=""
                    variants={imgVariants}
                    initial="initial"
                    animate="animate"
                    />
                    <motion.h1
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    >MovieParrot</motion.h1>
                </div> 

                <ul className='navbar-nav'>
                    {props.children}
                    <li className="nav-item" onClick={props.show}>
                        <a href="#">categories</a>
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
