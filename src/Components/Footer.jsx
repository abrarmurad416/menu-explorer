import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";

const Footer = () => {
    return (
        <div className='d-flex flex-column'>
            <svg id="visual" viewBox="0 0 900 160" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="layer spacer">
            </svg>
            <div className="navbar-fixed-bottom">
                <footer className="text-center text-lg-start">
                    <div className="text-center p-4 bg-dark text-white">
                        <p>torontoparks | Built with 🧰 by @abrarmurad416</p>
                    </div>
                </footer>
            </div>
            <div className='p-4' style={{ background: '#212529' }}>
            </div>
        </div>
    );
}


export default Footer;
