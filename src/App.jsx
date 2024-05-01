import React, { useState } from "react";
import Modal from "./Modal";
import MapComp from "./Map";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<MapComp onOpen={handleOpen} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Modal show={show} onClose={handleClose} />
      </div>
    </Router>
  );
}
