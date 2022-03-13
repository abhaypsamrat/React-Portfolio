import React from "react";
import "./Contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Connect With Me</h3>

      <div className="contact-icon">
        <a
          href="https://www.linkedin.com/in/abhaypsamrat"
          target="blank"
          className="linkedin-social"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://www.github.com/abhaypsamrat"
          target="blank"
          className="github-social"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://www.twitter.com/abhaypsamrat"
          target="blank"
          className="twitter-social"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}
