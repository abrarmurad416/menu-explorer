import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import svgpattern from "../Components/svgpattern.svg";

const Footer = () => {
    return (
        <div className='d-flex flex-column'>
            <div classname="spacer">
                <img src={svgpattern} alt="Your SVG" className="img-fluid" />
            </div>
            <div className="navbar-fixed-bottom">
                <footer className="text-center text-lg-start">
                    <div className="text-center p-4 bg-dark text-white">
                        <p>torontoparks | Built with 🧰 by @abrarmurad416</p>
                    </div>
                </footer>
            </div>
            <div className='p-4' style={{background: '#212529'}}>
            </div>
        </div>
    );
}

export default Footer;
