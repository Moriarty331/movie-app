import imageMenu from '../images/menu.png';
import parrotImage from '../images/menu.png';
import '../styles/home.css'
import {Navbar, NavbarItem, Dropdown} from '../components/Navbar.js'
import {Slider} from '../components/Slider.js';
import { useState } from 'react';

export const Home = () =>
{
    const [showDropdown, setshowDropdown] = useState(false);
    return (
        <div className="home">
            <header>
                <Navbar show={() => {setshowDropdown(!showDropdown)}}>
                    <NavbarItem name="movies"></NavbarItem>
                    <NavbarItem name="Home"></NavbarItem>
                    <NavbarItem name="tv shows"></NavbarItem>
                </Navbar>
            </header>

            {showDropdown && <Dropdown></Dropdown>}
           <div className="main">
                <Slider></Slider>
           </div>
        </div>
    )
}