import React, {useEffect} from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-scroll";

function Header(){
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

    return(
        <div className="header-container"  data-AOS="fade-right"  data-aos-once="true">
            <div className="header-text">
                <span>Hej!</span>
                <h1>Jestem Maciej</h1>
                <span>Junior FrontEnd Developer</span>
                <Link
                    className="contactMe-button"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Współpraca?</Link>
            </div>
                
            <div className="header-img">
                <img alt="Maciej Chojnacki"></img>
            </div>
        </div>
    )
}

export default Header
