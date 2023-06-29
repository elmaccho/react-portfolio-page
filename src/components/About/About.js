import React, { useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import CV from './CV_Maciej_Chojnacki.pdf'
import image from '../Header/profile.webp'

function About(){

    useEffect(()=>{
        Aos.init()
    }, [])


    return (
        <>
            <div id="AboutMe" className="aboutMe-container" data-aos="fade-up" data-aos-offset="300"  data-aos-once="true">
                <div className="aboutMe-img">
                    <img src={image}/>
                </div>
                <div className="aboutMe-text">
                    <h1 className="aboutMe-text-title">
                        O mnie
                    </h1>
                    <p className="aboutMe-info">
                    Jestem Maciej, 21-letni pasjonat programowania. 
                    Moja przygoda z Web Developmentem rozpoczęła się półtora roku temu. 
                    W tym czasie zdobyłem wiele umiejętności, a także rozwinąłem się w wielu językach i technologiach związanych z tworzeniem stron internetowych. 
                    Potrafię tworzyć responsywne projekty, które umożliwiają użytkownikom korzystanie ze strony na dowolnym urządzeniu.
                     Mimo braku doświadczenia komercyjnego, jestem w stanie samodzielnie pracować i rozwiązywać problemy.
                    </p>

                    <a href={CV} download="CV_Maciej_Chojnacki" target="_blank" className="cvBtn">Pobierz CV</a>
                </div>
            </div>
        </>
    )
}

export default About