import React from "react";
import Logo from '../assets/logo.svg';
import {Link} from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  // window.onscroll = function () { scrollFunction() };

  // function scrollFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("header").classList.add("sticky");
  //   } else {
  //     document.getElementById("header").classList.remove("sticky");
  //   }
  // }


  return (
    <>
      <Navbar expand="lg" id="header" className="fixed-top" >
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="Tech Chhen" className='img-fluid' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
            <Link to="home" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >Home</Link>
            <Link to="about" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >About</Link>
            <Link to="service" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >Service</Link>
            <Link to="product" activeClass="active" className="nav-link"  spy={true} offset={-90} duration={500}  smooth={true} >Products</Link>
            <Link to="team" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >Team</Link>
            <Link to="partner" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >Partner</Link>
            <Link to="contact" activeClass="active" className="nav-link" spy={true} offset={-90} duration={500}  smooth={true} >Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
 
export default Header