import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <h3 className="about-heading">About Me</h3>
      <p>
        My Name Is Abhay Pratap Samrat. I'm Computer Science Student Attending
        Kashi Institute Of Technology. I Want To Become A Skilled Web Devloper.
        I'm Interested In Populer Frontend Technologies, But My Major Focus Is
        On ReactJs. As Mentioned Above, I Like To Learn New Technologies. I'm
        Practiced Some Time Competitive Coding On{" "}
        <a href="https://www.hackerrank.com/abhaypsamrat" target="blank">
          HackerRank
        </a>
      </p>
      <br />
      <h3>Education</h3>
      <h6>Bachelor Of Technology In Computer Science & Engineering</h6>
      <p>
        Kashi Institute Of Technology, Varanasi <br />
        (2019-23)
      </p>
    </div>
  );
}
