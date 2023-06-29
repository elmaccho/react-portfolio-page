import React, {useEffect} from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-scroll";
import image from './profile.webp'

function Header(){
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

    return(
        <div className="header-container" data-aos="fade-right" data-aos-once="true">
        <div className="header-text">
            <span className="header-text__description-top">Hej!</span>
            <h1 className="header-text__title">Jestem Maciej</h1>
            <span className="header-text__description-bottom">Junior FrontEnd Developer</span>
            <Link
            className="contact-me-button"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            >
            Współpraca
            </Link>
        </div>
        <div className="header-img">
            <img className="header-img__image" src={image} alt="Maciej Chojnacki" />
        </div>
        </div>
    )
}

export default Header
