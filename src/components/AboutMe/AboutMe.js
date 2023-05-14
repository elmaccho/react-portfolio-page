import React, { useState, useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function AboutMe(){

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect(()=>{
        Aos.init()
    }, [])


    return (
        <>
            <div id="AboutMe" className="aboutMe-container" data-Aos="fade-up" data-aos-offset="300">
                <div className="aboutMe-img">
                    <img alt="zdjecia nie ma jeszcze"></img>
                </div>
                <div className="aboutMe-text">
                    <h1 className="aboutMe-text-title">
                        O mnie
                    </h1>
                    <p className="aboutMe-info">
                    Jestem Maciej, 21-letni pasjonat programowania. 
                    Moja przygoda z Web Developmentem rozpoczęła się półtora roku temu. 
                    W tym czasie zdobyłem wiele <span className={isHovered ? "skills" : 'skills'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>umiejętności</span>, a także rozwinąłem się w wielu językach i technologiach związanych z tworzeniem stron internetowych. 
                    Potrafię tworzyć responsywne projekty, które umożliwiają użytkownikom korzystanie ze strony na dowolnym urządzeniu.
                     Mimo braku doświadczenia komercyjnego, jestem w stanie samodzielnie pracować i rozwiązywać problemy.
                    </p>
                    <div className={isHovered ? "skill-container openBox" : "skill-container closeBox"}>

                        <div className="skillBar-container">

                            <div className="skillBar-bar">
                                <span className="skillBar-bar-title">HTML</span>
                                <div className="skillBar-length html"></div>
                            </div>
                            <div className="skillBar-counter">95%</div>

                        </div>

                        <div className="skillBar-container">

                            <div className="skillBar-bar">
                                <span className="skillBar-bar-title">CSS/SCSS</span>
                                <div className="skillBar-length css"></div>
                            </div>
                            <div className="skillBar-counter">95%</div>

                        </div>

                        <div className="skillBar-container">

                            <div className="skillBar-bar">
                                <span className="skillBar-bar-title">JavaScript</span>
                                <div className="skillBar-length js"></div>
                            </div>
                            <div className="skillBar-counter">75%</div>

                        </div>

                        <div className="skillBar-container">

                            <div className="skillBar-bar">
                                <span className="skillBar-bar-title">React</span>
                                <div className="skillBar-length react"></div>
                            </div>
                            <div className="skillBar-counter">15%</div>

                        </div>

                    </div>

                    <button className="cvBtn">Pobierz CV</button>
                </div>
            </div>
        </>
    )
}

export default AboutMe