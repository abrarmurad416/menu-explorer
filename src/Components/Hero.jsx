import React from 'react';
import '../index.css';

const Hero = () => {
    return (
        <div className="text-center custom-padding">
            <strong><h1><b>Toronto Parks</b></h1></strong>
            <div className="container">
                <p className="text-center mx-5 py-2">Welcome to Toronto Parks, your gateway to the lush green spaces and serene natural landscapes nestled within Canada's largest city. Immerse yourself in the vibrant tapestry of Toronto's parks, where urban sophistication meets the tranquility of nature.</p>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-geo-alt h1"></i>
                        </div>
                        <p>Click on the location pin scattered through the map to learn more about each park, the button links to the modal.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-map h1"></i>
                        </div>
                        <p>Customize the map to your choice with three different styles. Furthermore, use the zoom feature to focus or capture a wider area.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-info bg-opacity-10 border border-success rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-layout-text-window h1"></i>
                        </div>
                        <p>Access the modal to find out information regarding the park, including a description, nature, and activities section. Access the external link that leads to the official park website.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
