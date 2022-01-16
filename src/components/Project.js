import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div>
      <div className="card">
        <div className="card_info">
          <h4 className="card_title">{props.title}</h4>
          <p className="card_description">{props.description}</p>
          <a href={props.link} target="blank">
            <button className="button">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
