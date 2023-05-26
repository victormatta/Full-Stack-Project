import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/MainHome";
import Footer from "./components/Footer.jsx/Footer";
import Home from "./components/Home/Home";
import NewProject from "./components/NewProject/NewProject";
import Projects from "./components/Projects/Projects";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route
          path="/newproject"
          element={
            <div>
              <NewProject />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div>
              <Projects />
            </div>
          }
        />
        <Route
          path="/company"
          element={
            <div>
              <Company />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
