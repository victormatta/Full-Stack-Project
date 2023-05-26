import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Icon">
        <ul className="listIcon">
          <li>
            <FaFacebook size={40} />
          </li>
          <li>
            <FaInstagram size={40} />
          </li>
          <li>
            <FaLinkedin size={40} />
          </li>
        </ul>
      </div>

      <div className="Footer_Text">
        <div className="FooterTitle">
          <p>Vits</p>
        </div>
        <div className="FooterCopy">
          <p>
            <div className="IconFooter">
              <RiCopyrightLine />
            </div>
          </p>
        </div>
        <p>2023</p>
      </div>
    </div>
  );
}

export default Footer;
