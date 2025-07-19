import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState("");

  const handleActive = (name) => {
    setActive(name);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            className={`navbar-link${active === "about" ? " active" : ""}`}
            data-nav-link
            to="/about"
            onClick={() => handleActive("about")}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link${active === "resume" ? " active" : ""}`}
            data-nav-link
            to="/resume"
            onClick={() => handleActive("resume")}
          >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link${active === "portfolio" ? " active" : ""}`}
            data-nav-link
            to="/portfolio"
            onClick={() => handleActive("portfolio")}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link${active === "contact" ? " active" : ""}`}
            data-nav-link
            to="/contact"
            onClick={() => handleActive("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;