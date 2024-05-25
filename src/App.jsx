// imports
import React, { useState } from "react";
import Modal from "./MapElements/Modal"
import MapComp from "./MapElements/Map";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";

// react router for linking across multiple web pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  // state management, visibility of modal
  const [show, setShow] = useState(false);

  // event handler sets show state to false and true, hiding and showing the modal
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    // React router wrapper
    <Router>
      <div>
        <Navigation />
        {/* routes path shows the link to the page */}
        <Routes>
          {/* onOpen prop is passed to MapComp, which can call handleOpen to display the modal */}
          <Route path="/" element={<MapComp onOpen={handleOpen} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* modal equipped with handleclose so it can close on itself */}
        <Modal show={show} onClose={handleClose} />
      </div>
    </Router>
  );
}
