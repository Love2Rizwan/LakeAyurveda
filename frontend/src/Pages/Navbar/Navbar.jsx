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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/react-blog" className="navbar-brand">
          WriteUp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isHidden ? "" : "show"}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs/add" className="nav-link">
                New Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/react-blog" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
