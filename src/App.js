import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />

      <div className="app-project">
        <h3>My Work</h3>

        <div className="project-list">
          <Project
            title="Text Converter"
            description="A simple react aap convert sentences upper/lower case & count number of words on sentences"
            link="https://word-converter.netlify.app/"
          />
          <Project
            title="ToDo"
            description="A simple ToDo save your items, develop using ReactJS"
            link="https://keep-item.netlify.app/"
          />
          <Project
            title="Choose Movie"
            description="This is simple react app by this you can choose some best movie avilable on ott platform"
            link="https://choosemovies.netlify.app/"
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
