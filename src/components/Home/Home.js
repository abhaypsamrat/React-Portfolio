import React from "react";
import "./Home.css";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <>
      <div className="home">
        <img
          className="image"
          src={require("../image/mypic.jpeg").default}
          alt=""
        />
        <h3>
          <i className="home-i">
            <br />
            Hi, I'm Abhay
          </i>
        </h3>
        <p className="home-p">A Beginner Web Developer</p>
      </div>
      <About />
      <Work />
      <Skill />
      <Contact />
    </>
  );
}
