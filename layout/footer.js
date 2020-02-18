import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-madeby">
          <p className="small-title">
            <span className="smaller">
              Made by João Guimarães <span className="bluer">&copy;</span> 2020.
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
    </footer>
  );
};

export default Footer;
