import React from 'react';
import '../index.css'; // Import your custom CSS if needed

const Hero = () => {
    return (
        <div className="text-center custom-padding">
            <br />
            <br />
            <br />
            <strong><h1>Toronto Parks</h1></strong>
            <div className="container">
                <p className="text-center">Welcome to Toronto Parks, your gateway to the lush green spaces and serene natural landscapes nestled within Canada's largest city. Immerse yourself in the vibrant tapestry of Toronto's parks, where urban sophistication meets the tranquility of nature.</p>
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 mx-2">
                        One of three columns
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 mx-2">
                        One of three columns
                    </div>
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 mx-2">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

