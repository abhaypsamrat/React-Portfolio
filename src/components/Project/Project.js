import React from "react";
import "./project.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="project">
      <h3>My Project</h3>
      <div className="plist">
        {/* first project */}

        <div className="project-list">
          <h5>Keep Items</h5>
          <p>
            This application keep save your item on list. It work as progressive
            web appication (PWA).
          </p>
          <b>Technology Used</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
          </ul>
          <a
            href="https://keep-item.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>View Live</button>
          </a>
          <a
            href="https://github.com/abhaypsamrat/Keep-Item"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </a>
        </div>

        {/* second project */}

        <div className="project-list">
          <h5>Notes On Cloud</h5>
          <p>
            This application save your notes on cloud. Before use this
            applicaton you can Login/Signup with Email id & password and save
            your Notes.
          </p>
          <b>Technology Used</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>MangoDB</li>
          </ul>

          <button>View Live</button>

          <a
            href="https://github.com/abhaypsamrat/NotesOnCloud"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </a>
        </div>

        {/* third project */}

        <div className="project-list">
          <h5>Word Counter/Converter</h5>
          <p>
            This appication is used to convert uppercase and lowercase of any
            text or sentence. Appication count number of characters and number
            of words in your sentence.
          </p>
          <b>Technology Used</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Bootstrap</li>
          </ul>
          <a
            href="https://word-converter.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>View Live</button>
          </a>
          <a
            href="https://github.com/abhaypsamrat/Text-Counter"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </a>
        </div>

        {/* 4th project */}

        <div className="project-list">
          <h5>Choose Movies</h5>
          <p>
            This application suggest some best movies available on OTT
            plateform.
          </p>
          <b>Technology Used</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
          </ul>
          <a
            href="https://choosemovies.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>View Live</button>
          </a>
          <a
            href="https://github.com/abhaypsamrat/Choose-Movie"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </a>
        </div>

        {/* 5th project */}

        <div className="project-list">
          <h5>ToDo Using TypeScript</h5>
          <p>This is a simple Todo application. </p>
          <b>Technology Used</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
          <a
            href="https://fastest-todo.netlify.app/"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>View Live</button>
          </a>
          <a
            href="https://github.com/abhaypsamrat/ToDo-React-TypeScript"
            passHref
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </a>
        </div>
        <div className="backhome">
          <Link to="/">
            <button>Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
