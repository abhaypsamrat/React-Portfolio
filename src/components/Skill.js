import React from "react";
import "./skill.css";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { FaGitSquare } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage1 = 65;
const percentage2 = 50;
const percentage3 = 40;
const percentage4 = 50;
const percentage5 = 60;
const percentage6 = 65;
const percentage7 = 60;

export default function Skill() {
  return (
    <div className="skill">
      <h3>Skills</h3>

      <div className="icon">
        <div className="i-html">
          <FaHtml5 className="html" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
            <i>HTML</i>
          </div>
        </div>
        <br />
        <div className="i-css">
          <SiCss3 className="css" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
            <i>CSS</i>
          </div>
        </div>
        <br />
        <div className="i-js">
          <DiJavascript1 className="js" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
            <i>JAVASCRIPT</i>
          </div>
        </div>
        <br />
        <div className="i-python">
          <FaPython className="python" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
            <i>PYTHON</i>
          </div>
        </div>
        <br />
        <div className="i-react">
          <GrReactjs className="react" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage5} text={`${percentage5}%`} />
            <i>REACTJS</i>
          </div>
        </div>
        <br />
        <div className="i-github">
          <FiGithub className="github" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage6} text={`${percentage6}%`} />
            <i>GITHUB</i>
          </div>
        </div>
        <br />
        <div className="i-git">
          <FaGitSquare className="git" />
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={percentage7} text={`${percentage7}%`} />
            <i>GIT</i>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
