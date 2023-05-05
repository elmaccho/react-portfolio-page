import React from "react";
import './style.css'


function NavBar(){
    return(
        <div className="navBar-container">
            <button>
                Kontakt
            </button>

            <button>
                Umiejętności
            </button>

            <button>
                O mnie
            </button>

            <a href="#links" className="pageIcon">
                MC
            </a>
        </div>
    )
}

export default NavBar