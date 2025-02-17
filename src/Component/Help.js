import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bgImage from "../images/service.png";

const servicesData = [
  {
    title: "One-On-One Coaching",
    description: "Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.",
    price: "$100",
    duration: "1 hr",
  },
  {
    title: "Couple's Guidance",
    description: "Build stronger relationships with professional advice.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.",
    price: "$150",
    duration: "1.5 hrs",
  },
  {
    title: "Self-Improvement",
    description: "Work on yourself and unlock your true potential.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.Personalized guidance to help you achieve your goals.",
    price: "$200",
    duration: "2 hrs",
  },
];

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        
      }}
    >
      <Container>
        <h2 className="text-start text-uppercase mb-5">How I Can <br/> Help You</h2>
        <Row className="justify-content-center">
          {servicesData.map((service, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title className="mb-3">
                    <h4>{service.title}</h4>
                  </Card.Title>
                  <div className="text-muted mb-3">
                    <strong>{service.price}</strong> - {service.duration}
                  </div>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="dark">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
