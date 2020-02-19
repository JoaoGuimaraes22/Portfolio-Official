import { FaGithub, FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Fade>
        <div className="footer-content">
          <div className="footer-madeby">
            <p className="small-title">
              <span className="smaller">
                Made by João Guimarães <span className="bluer">&copy;</span>{" "}
                2020.
              </span>
            </p>
          </div>
          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaCodepen />
            </a>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
