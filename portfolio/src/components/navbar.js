import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
         <div className="personalMenuInfo">
         <div className="face"></div> 
            <h2>Anthony Greb</h2>
            </div>
        <div className="nav-content">
            <div className="centerLinks">
              <Link
              className="first"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
 
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
 
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link> 
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
              </div>
         
        </div>
      </nav>
    );
  }
}