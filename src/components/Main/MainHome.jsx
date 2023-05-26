import "./MainHome.css";
import Coin from "../../assets/coin.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <div className="MainTitle">
        <div className="Slogan">
          <h1>Welcome to</h1>
        </div>

        <div className="CompanyTitle">
          <h1>Vits</h1>
        </div>
      </div>

      <div className="MainParagraph">
        <p>Start managing your projects now!</p>
      </div>

      <div className="MainButton">
        <Link to="/newproject" className="ProjectLink">
          <button>Create Project</button>
        </Link>
      </div>

      <div className="MainIcon">
        <img src={Coin} alt="Coin Wallet" />
      </div>
    </div>
  );
}

export default Main;
