// Navbar.js

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isHidden, setHidden] = useState(true);

  const handleMenu = () => {
    setHidden(!isHidden);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light">
      <div className="container-fluid">
        <Link to="/react-blog" className="navbar-brand">
          <img src="/images/lakeLogo.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isHidden ? "" : "show"} `}>
          <ul className="navbar-nav position-absolute end-0 m-3"> {/* ml-auto aligns items to the right */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
