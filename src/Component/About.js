import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bgImage from "../images/about.png";

const About = () => {
  return (
    <>
    <Container className="about " id="about">
      <Row>
        <Col md={6}>
          <h1 className="text-start text-uppercase">About <br/> Me</h1>
          <p className="text-justify mt-5">
            I’m a personal life coach helping people achieve their goals. 
            Let's talk about how I can help you unlock your potential.
            I’m a personal life coach helping people achieve their goals. This
              is a great space to write a longer text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your name and what services
              you provide. <br/><br/>
              I’m a personal life coach helping people achieve their goals. This
              is a great space to write a longer text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your name and what services
              you provide.
          </p>
          <Button variant="dark" className="mt-5">Read More</Button>
        </Col>
        <Col md={6}>
        <img
              src={bgImage}
              alt="About"
              className="img-fluid"
              style={{ width: "100%", height: "100%"}}
            />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;
