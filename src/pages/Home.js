import '../styles/home.css'
import {Navbar, NavbarItem, Dropdown} from '../components/Navbar.js'
import {Slider} from '../components/Slider.js';
import { useState } from 'react';

export const Home = () =>

{
    
    const [showDropdown, setshowDropdown] = useState(false);
    const [showMenu, setshowMenu] = useState(false);
    return (
        <div className="home">
            <header>
                {showMenu && <MenuOptions></MenuOptions>}

                <Navbar show={() => {setshowDropdown(!showDropdown)}} showMenu={() => setshowMenu(!showMenu)} animate={showMenu && "slideBottom"}>
                    <NavbarItem name="movies"></NavbarItem>
                    <NavbarItem name="Home"></NavbarItem>
                    <NavbarItem name="tv shows"></NavbarItem>
                </Navbar>
            </header>

            {showDropdown && <Dropdown></Dropdown>}
            
            <div className="main" style={showMenu ? {animationName: "slideBottom"}: null}>
                <div className="main">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    )
}

const MenuOptions = () =>
{
    return(
        <div className="menu-options">
                <p>Movies</p>
                <p>Home</p>
                <p>Tv Shows</p>
        </div>
    )
}