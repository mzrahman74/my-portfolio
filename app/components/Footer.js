import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../public/images/logo-linkedin.svg";
import github from "../public/images/logo-github.svg";

function Footer() {
  return (
    <footer id="id-footer">
      <ul className="social_icon" id="social-media">
        <li>
          <Link id="icon-id" to="https://github.com/mzrahman74" target="_blank">
            <ion-icon src={`${github}`}></ion-icon>
          </Link>
        </li>
        <li>
          <Link id="icon-id" to="https://www.linkedin.com/in/mohammad-rahman/" target="_blank">
            <ion-icon src={`${linkedin}`}></ion-icon>
          </Link>
        </li>
      </ul>
      <p>Copyright © {new Date().getFullYear()} Mohammad Rahman. All right reserved.</p>
    </footer>
  );
}

export default Footer;
