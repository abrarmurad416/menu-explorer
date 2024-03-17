import React from "react";
// import { Button, Modal } from "react-bootstrap";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <Navbar className="py-2" color="dark" dark fixed="top">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/Assets/logo.png"
            style={{
              height: 40,
              width: 40,
            }}
            className="mx-2"
          />
          <b>torontoParks</b>
        </NavbarBrand>
        <div>
          <Button color="primary" tag={Link} to="/about">About</Button>{" "}
          <a href="https://a8d.vercel.app/" target="_blank" rel="noreferrer">
            <Button color="success">Blog</Button>
          </a>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
