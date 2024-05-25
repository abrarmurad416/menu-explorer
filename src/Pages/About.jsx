import React from "react";
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";

const About = () => {
  return (
    <main>
    <div style={{ paddingTop: '56px' }}>
      <strong><h1>Toronto Parks</h1></strong>
      <p className="text-center p-5">Welcome to Toronto Parks, your gateway to the lush green spaces and serene natural landscapes nestled within Canada's largest city. Immerse yourself in the vibrant tapestry of Toronto's parks, where urban sophistication meets the tranquility of nature.</p>
    </div>
    <Footer /> 
    </main>
  );
};

export default About
