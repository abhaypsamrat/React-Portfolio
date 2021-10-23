import React from "react";
import About from "./About";
import "./Home.css";
import Skill from "./Skill";
import Contact from "./Contact";
import Project from "./Project";

export default function Home() {
  return (
    <div className="home">
      <img
        className="image"
        src={require("./image/mypic.png").default}
        alt=""
      />
      <h3>
        <i>
          <br />
          Hi, I'm Abhay
        </i>
      </h3>
      <p>A Beginner Web Developer</p>
      {/* <button>
        <a href="https://abhaypsamrat.github.io/Text-Converter/" target="blank">
          Download CV
        </a>
      </button> */}
      <About />
      <Skill />
      <Project />
      <Contact />

      <div className="footer">
        <h6>Made With ❤ By Samrat</h6>
      </div>
    </div>
  );
}
