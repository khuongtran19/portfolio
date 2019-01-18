import React from "react";
import "./css/Navbar.css";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
class Navbar extends React.Component {
  render() {
    return (
      <div className="sidenav" style={{ textShadow: "1px 1px 8px black" }}>
        <Link
          activeClass="active"
          className="sidenav1"
          to="Mainpage"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="sidenav2"
          to="Resume"
          spy={true}
          smooth={true}
          duration={500}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          className="sidenav3"
          to="Mywork"
          spy={true}
          smooth={true}
          duration={500}
        >
          My Work
        </Link>
        {/* <Link
          activeClass="active"
          className="sidenav4"
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link> */}
      </div>
    );
  }
}
export default Navbar;
