import "./Projects.css";
import { Link } from "react-router-dom";

function MainProjects() {
  return (
    <div className="MainProjects">
      <div className="BoxTitleProject">
        <div className="BoxTitle">
          <h1>My Projects</h1>
        </div>

        <div className="MainButtonnn">
          <Link to="/projects" className="ProjectLink">
            <button>Create Project</button>
          </Link>
        </div>
      </div>

      <h1>Hello, World!</h1>
    </div>
  );
}

export default MainProjects;
