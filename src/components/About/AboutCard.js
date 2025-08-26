import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreyas Raj </span>
            from <span className="purple"> Vijayawada,Andhra Pradesh, India.</span>
            <br />
            I'm currently pursuing Computer Science Engineering & Honours Through Innovation at KL University.
            <br />
            I'm having a strong passion for technology, seeking a challenging and an engaging 
            position where I can apply my academic knowledge and to contribute to 
            and projects
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Global Awareness
            </li>
            <li className="about-activity">
              <ImPointRight /> Fi
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shreyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
