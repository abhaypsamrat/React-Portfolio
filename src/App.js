import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skill />

      <div className="app-project">
        <h3>My Work</h3>

        <div className="project-list">
          <Project
            title="Choose Movie"
            description="This is simple react app by this you can choose some best movie avilable on ott platform"
            link="https://choosemovies.netlify.app/"
          />
          <Project
            title="ToDo"
            description="A simple ToDo develop using Typescript and ReactJS"
            link="https://fastest-todo.netlify.app/"
          />
          <Project
            title="Text Converter"
            description="A simple react aap convert sentences upper/lower case & count number of words on sentences"
            link="https://abhaypsamrat.github.io/Text-Converter/"
          />
        </div>
      </div>

      <Contact />
      <div className="footer">
        <h6>
          Made With <span>❤ </span>By Samrat
        </h6>
      </div>
    </div>
  );
}
export default App;
