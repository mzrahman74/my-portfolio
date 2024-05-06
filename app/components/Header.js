import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/images/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-mainbg">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-logo" to="/">
            <img className="logo" src={`${logo}`} alt="my_logo" /> <strong>My Portfolio</strong>
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
                <Link className="nav-link" to="https://www.dropbox.com/scl/fi/x6qopk9zp2zp3vfeu8qyc/Software_Development_Engineer_In_Test.pdf?rlkey=p82ymah6dafwrruxzblaffn1o&st=4dfsnafr&dl=0" target="_blank">
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
