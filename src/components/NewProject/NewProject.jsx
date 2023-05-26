import Footer from "../Footer.jsx/Footer";
import NavBar from "../NavBar/NavBar";
import MainNP from "./MainNP";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        history("/projects", { message: "Successfull Create Project!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar />
      <MainNP handleSubmit={createPost} />
      <Footer />
    </>
  );
}

export default NewProject;
