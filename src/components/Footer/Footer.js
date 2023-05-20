import React, { useEffect } from "react";
import './style.css'

import Aos from "aos";
import 'aos/dist/aos.css'

function Footer(){

    useEffect(()=>{
        Aos.init()
    })

    return(
        <div 
            className="footer-container" 
            data-aos="fade-up"
            data-aos-offset="-50"
        >
            Copyright © Maciej Chojnacki
        </div>
    )
}

export default Footer