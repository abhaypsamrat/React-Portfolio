import "./App.css";
import "./css/bootstrap.min.css";
import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
// import Project from "./components/Project";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Skill">
        <Skill />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      {/* <Route exact path="/Project">
        <Project />
      </Route> */}
    </Router>
  );
}

export default App;
