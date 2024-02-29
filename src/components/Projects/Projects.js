import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tour_and_travel_website from "../../Assets/Projects/Tour_and_travel_website.png";
import Quiz_app from "../../Assets/Projects/Quiz_app.png";
import Virtual_assitant from "../../Assets/Projects/Virtual_assitant.png";
import Credit_card_fraud from "../../Assets/Projects/Credit_card_fraud.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tour_and_travel_website}
              isBlog={false}
              title="Tour_and_travel_website"
              description="Build a responsive tour and travel website where users can easily get to know about the famous places in a city and book a place he/she wants to
              visit.Firebase is used to create a dummy menu which is fetched through an API.A simple sign-up signing page is created for user authentication.Tools we used in this project includes Skills and Tools Used - HTML, CSS, JavaScript, ReactJs, firebase, mysql."
              ghLink="https://github.com/shubham9182/tour-and-travel-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz_app}
              isBlog={false}
              title="Quiz_app"
              description="Build a quiz app through which students can take their test and its result is shown in the form of pie chart to student after submission
              *Python programming language and Sqllite is used to manage and get data of the users."
              ghLink="https://github.com/shubham9182/Quizapp.Shubham"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virtual_assitant}
              isBlog={false}
              title="Virtual Assitant"
              description="Established a real-time audio-responsive connection between the user and system .Help user to access and do activities using its voice commands.
              Motive behind building this project to help users and blind people to use system in a very convenient way through their voice.
              "
              ghLink="https://github.com/shubham9182/Ai-virtual-Assitant"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Credit_card_fraud}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="Using Machine learning data analtytical and data visualization tools design a machine model which identifies credit card fraud for the detection of credit card fraud and thus helping in credit card fraud prevention."
              ghLink="https://github.com/shubham9182/Credit-card-fraud-detection-"
             />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
