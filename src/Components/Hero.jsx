import React from 'react';
import '../index.css';

const Hero = () => {
    return (
        <div className="text-center custom-padding">
            <strong><h1><b>menu explorer</b></h1></strong>
            <div className="container">
                <p className="text-center mx-5 py-2">A collection of multiple restaurants I've been to and my opinions on them.</p>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-warning bg-opacity-10 border border-danger rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-geo-alt h1"></i>
                        </div>
                        <p>Click on the location pin scattered through the map to learn more about each restaurant, the button links to the modal.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-warning bg-opacity-10 border border-danger rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-map h1"></i>
                        </div>
                        <p>Customize the map to your choice with three different styles. Furthermore, use the zoom feature to focus or capture a wider area.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 bg-warning bg-opacity-10 border border-danger rounded p-3 m-2 colheight">
                        <div className='pb-2'>
                            <i class="bi bi-layout-text-window h1"></i>
                        </div>
                        <p>Access the modal to find out information regarding the shop, including a description, served dishes, and specialities section. Access the external link that leads to the official website of the restaurant.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
