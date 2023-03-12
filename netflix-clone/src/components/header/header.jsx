import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <Link to="/">
                <img src="./images/logo.png" alt="Logo Image" />
              </Link>
            </div>
            <ul
              className={mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Home</Link>
              <Link to="/genres">Genres</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
