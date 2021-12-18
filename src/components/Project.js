import React from "react";
import "./project.css";

export default function Project() {
  return (
    <div className="project">
      <h3>Project</h3>

      <span className="span">Text Converter</span>
      <br />
      <button className="button">
        <a href="https://abhaypsamrat.github.io/Text-Converter/" target="blank">
          View Project
        </a>
      </button>
      
      <p className="span1">Varanasi Blog</p>
      <br />
      <button className="button">
        <a href="http://varanasivlog.herokuapp.com/" target="blank">
          View Project
        </a>
      </button>
    </div>
  );
}
