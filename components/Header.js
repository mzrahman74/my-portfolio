import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/images/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-mainbg">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-logo" to="/">
            <img className="logo" height="30" src={`${logo}`} alt="my_logo" /> <strong>My Portfolio</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="far fa-copy"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="far fa-copy"></i>About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="far fa-calendar-alt"></i>Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://drive.google.com/file/d/16QZKiI_-_atvQqWqhpwz4a8iLY56rwHu/view?usp=sharing" target="_blank">
                  <i className="far fa-copy"></i>Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
