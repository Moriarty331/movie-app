import '../styles/home.css'
import {Navbar, NavbarItem, Dropdown} from '../components/Navbar.js'
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import poster1 from '../images/poster1.jpg'
import poster2 from '../images/poster2.jpg'
import poster3 from '../images/poster3.jpg'
import poster4 from '../images/poster4.jpg'
import poster5 from '../images/poster5.jpg'
import poster6 from '../images/poster6.jpg'
import poster7 from '../images/poster7.jpg'
import poster8 from '../images/poster8.jpg'
import poster9 from '../images/poster9.jpg'
import poster10 from '../images/poster10.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Home = () =>
{
    
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const [showDropdown, setshowDropdown] = useState(false);
    const [showMenu, setshowMenu] = useState(false);

    return (
        <div className="home" >
            <header style={showMenu ? {animation: "slideBottom 0.5s ease"}: null}>
                {showMenu && <MenuOptions></MenuOptions>}

                <Navbar show={() => {setshowDropdown(!showDropdown)}} showMenu={() => {setshowMenu(!showMenu)}}>
                    <NavbarItem name="movies"></NavbarItem>
                    <NavbarItem name="Home"></NavbarItem>
                    <NavbarItem name="tv shows"></NavbarItem>
                </Navbar>
            </header>
            
            <div className="main" style={showMenu ? {animation: "slideBottom2 0.5s ease", marginTop: "144px", height: "66%"}:null}>
                {showDropdown && <Dropdown></Dropdown>}
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={poster10} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={poster2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster8} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={poster9} alt="" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                    </div>
                </Swiper>
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