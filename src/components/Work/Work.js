import React from "react";
import "./work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="work">
      <h3>My Work</h3>
      <p>
        I love to build and develop new applications. The best means to become
        better at programming is by developing applications.
        <br />
        <br /> Currently, I am working on web development skills using HTML,
        CSS, JavaScript, ReactJs, and NextJs.
      </p>
      <nav>
        <Link to="project">
          <button>View Work</button>
        </Link>
      </nav>
    </div>
  );
}

export default Work;
