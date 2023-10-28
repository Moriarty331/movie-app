
import '../styles/movies.css'
import arrowDown from '../images/arrow-down.png'
import {useState, useEffect} from 'react';
import { BackToHome } from '../components/BackToHome';
import { motion } from 'framer-motion';
import exit from '../images/logout.png'

// Import Swiper styles

export const Movies = () =>{
    const [showDropdown, setshowDropdown] = useState(null);
    const [displayData, setDisplayData] = useState([]);
    const [showExit, setshowExit] = useState(false);
    const [showAnimation, setshowAnimation] = useState(false);
    const [displayImage, setdisplayImage] = useState("");
    const [click, setClick] = useState(false);
    const imgVariants = {
        initial: {
            x: "-100vw"
        },
        animate: {
            x: 0,
            transition: {
                type: "tween",
                delay: .5,
                duration: 0.5
            }
        }
    }

    const handeDropdown = (dropdownName) =>
    {
        showDropdown === dropdownName ? setshowDropdown(null) : setshowDropdown(dropdownName);
    }

    const base_URL = "https://api.themoviedb.org/3/discover/movie?"
    const API_KEY = "api_key=3e6885027458ae090a8b1860da032e89";
    const base_IMAGEURL = "https://image.tmdb.org/t/p/w500/";

    const fetchData = () =>
    {
        fetch(base_URL + API_KEY)
        .then(response => response.json())
        .then(data => data.results)
        .then(data => setDisplayData(data))
    }

    fetchData();

    const handlePop = (e) =>
    {     
        e.target.id = 'movie-active'
        setshowAnimation(true)
        setdisplayImage(e.target.style.backgroundImage);
        setClick(!click)
        setshowExit(true)
    }

    
    const handleExit = (e) =>
    {
        setshowAnimation(false)
        e.target.parentNode.parentNode.id = "lists"

    }
    
    return(
        <div className="movies">
            <header>
                   <BackToHome name="Movies"></BackToHome>

                    <div className="navbar-container">
                        <ul className='movies-navbar' >
                            <MoviesNavItem name="Categories" show={() => handeDropdown('categories')}>
                                {showDropdown === 'categories' &&
                                    <MoviesDropdown class="categories">
                                        <MoviesDropdownItem name="Movies"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="Tv shows"></MoviesDropdownItem>
                                    </MoviesDropdown>
                                }
                            </MoviesNavItem>

                            <MoviesNavItem name="Choose Type" show={() => handeDropdown('genre')}>
                                {showDropdown === 'genre' && 
                                    <MoviesDropdown class="genre">
                                        <MoviesDropdownItem name="Comedy"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="Action"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="Sci-fi"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="Romance"></MoviesDropdownItem>
                                    </MoviesDropdown>
                                }
                            </MoviesNavItem>

                            <MoviesNavItem name="Choose Year" show={() => handeDropdown('year')}>
                                {showDropdown === 'year' && 
                                    <MoviesDropdown class="genre">
                                        <MoviesDropdownItem name="2023"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2022"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2021"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2020"></MoviesDropdownItem>
                                    </MoviesDropdown>
                                }
                            </MoviesNavItem>

                            <MoviesNavItem name="Quality" show={() => handeDropdown('quality')}>
                                {showDropdown === 'quality' && 
                                    <MoviesDropdown class="genre">
                                        <MoviesDropdownItem name="2023"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2022"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2021"></MoviesDropdownItem>
                                        <MoviesDropdownItem name="2020"></MoviesDropdownItem>
                                    </MoviesDropdown>
                                }
                            </MoviesNavItem>
                        </ul>
                    </div>

                   
            </header>
                                
            {click && <div className="click">               
                <div className="pop-up" style={{backgroundImage: displayImage}}>
                    <div className="top">
                       <img src={exit} alt="" onClick={() => {setClick(!click); setdisplayImage("")}}/>
                    </div>
                </div>
            </div>}

            <div className="movies-main">
                <div className="movie-list">
                    <ul className="list">
                       {displayData.map((data, key) => {
                            return(
                                <motion.li onClick={handlePop} 
                                style={{backgroundImage : `url(${base_IMAGEURL + data.poster_path})`, animationName: showAnimation ? "slide" : null}} 
                                key={key} 
                                id="lists"
                                variants={showAnimation ? imgVariants : {}}
                                initial="initial"
                                animate="animate"
                                >
                                    <span className='vote'>{data.vote_average}</span>
                                    <h2 className='movie-title'>{data.title}</h2>
                                </motion.li>
                            )
                       })}
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const MoviesNavItem = (props) =>
{
    return(
        <div className='test'>
            <li className='movies-nav-item' onClick={props.show}>
                <p>{props.name}</p>
                <img src={arrowDown} alt="" className='arrowDown'/>
            </li>
            {props.children}
        </div>

    )
}

const MoviesDropdown = (props) =>
{
    return(
        <ul className={props.class} id="movies-dropdown">
            {props.children}
        </ul>
    )
}

const MoviesDropdownItem = (props) =>
{
    return(
        <li>{props.name}</li>
    )
}