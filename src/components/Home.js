import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <img
        className="image"
        src={require("./image/mypic.png").default}
        alt=""
      />
      <h3>
        <i className="home-i">
          <br />
          Hi, I'm Abhay
        </i>
      </h3>
      <p className="home-p">A Beginner web Developer</p>
    </div>
  );
}
