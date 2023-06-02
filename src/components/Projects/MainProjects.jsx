import "./Projects.css";
import { Link } from "react-router-dom";
import Message from "../Layout/Message";
// import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../CardProject/Card";

function MainProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardDelete = (id) => {
    fetch("http://localhost:5000/projects/${id}", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="MainProjects">
      <div className="BoxTitleProject">
        <div className="BoxTitle">
          <h1>My Projects</h1>
        </div>

        <div className="MainButtonnn">
          <Link to="/newproject" className="ProjectLink">
            <button>Create Project</button>
          </Link>
        </div>
      </div>
      <div className="Message">
        <Message msg={"Any message"} type={"sucess"} />
      </div>

      <div className="Card">
        {projects.map((project) => (
          <Card
            key={project.id}
            name={project.ProjectName}
            budget={project.BudgetProject}
            category={
              project.category ? project.category.name : "Categoria Indefinida"
            }
            onRemove={() => handleCardDelete(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainProjects;
