import React from "react";
import { Button, Container } from "react-bootstrap";
import bgImage from "../images/home.png"; // Adjust the path to your image file
const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Container className="text-center text-white">
        <p className="text-dark " style={{ letterSpacing: '5px', fontSize: '2rem' }}>Ambition is the First Step Towards</p>
        <h1 className="fw-bold text-dark bg-light" style={{ letterSpacing: '19px' }}>SUCCESS</h1>
        <Button variant="dark" className="mt-3">
          Book Now
        </Button>
      </Container>
    </div>
  );
};

export default Home;
