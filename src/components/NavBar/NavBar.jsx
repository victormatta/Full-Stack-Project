import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/hand.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Icon">
        <Link to="/">
          <img src={Logo} alt="Hand Icon" />
        </Link>
      </div>

      <div className="Links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
