import { useEffect, useState } from "react";
import "./NewProject.css";
// import { Link } from "react-router-dom";

function MainNP({ handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    const myApi = async () => {
      const url = "http://localhost:5000/categories";
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    };
    myApi();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // console.log(project)
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <div className="MainNP">
      <form onSubmit={submit}>
        <div className="TitleNP">
          <h1>Create Project</h1>
        </div>

        <div className="SubTitleNP">
          <p> Create your projects here!</p>
        </div>

        <div className="BoxNameProject">
          <div className="ProjectName">
            <p>Project Name:</p>
          </div>

          <div className="InputProjectName">
            <input
              type="text"
              name="ProjectName"
              id="ProjectName"
              placeholder="Project Name"
              onChange={handleChange}
              value={project.ProjectName || ""}
            />
          </div>
        </div>

        <div className="BoxProjectBudget">
          <div className="ProjectBudget">
            <p>Project Budget</p>
          </div>

          <div className="InputProjectBudget">
            <input
              type="number"
              name="BudgetProject"
              id="BudgetProject"
              placeholder="Project Budget"
              onChange={handleChange}
              value={project.BudgetProject || ""}
            />
          </div>
        </div>

        <div className="BoxProjectCategory">
          <div className="ProjectCategory">
            <p>Select the category</p>
          </div>

          <div className="InputProjectCategory">
            <select
              name="ProjectCategory"
              id="ProjectCategory"
              onChange={handleSelect}
              value={project.category ? project.category.id : ""}
            >
              <option disabled value="">
                Select Option
              </option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="MainButtonn">
          <button onClick={handleSubmit}>Create Project</button>
        </div>
      </form>
    </div>
  );
}

export default MainNP;

// fetch("http://localhost:5000/categories", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((err) => console.log(err));
