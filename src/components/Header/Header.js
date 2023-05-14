import React, {useEffect} from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function Header(){
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

    return(
        <div className="header-container"  data-AOS="fade-right">
            <div className="header-text">
                <span>Hej!</span>
                <h1>Jestem Maciej</h1>
                <span>Junior FrontEnd Developer</span>
                <button className="contactMe-button">Współpraca?</button>
            </div>
                
            <div className="header-img">
                <img alt="zdjecia nie ma jeszcze"></img>
            </div>
        </div>
    )
}

export default Header
