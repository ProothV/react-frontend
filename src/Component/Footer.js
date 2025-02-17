import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaGoogle } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section py-5 bg-info" id="contact">
      <Container>
        <h3 className="text-start text-uppercase mb-4">Contact</h3>
        <Row>
          <Col md={6}>
            <p>500 Terry Francois Street, San Francisco, CA 94158</p>
            <p className="mt-2">Phone: 123-456-7890 <br/> Tel: 123-456-7890</p>
            <p className="mt-5">Email: info@example.com</p>
          <p>Follow Me</p>
          <div className="d-flex  gap-3 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="#4267B2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#E1306C" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </div>
          </Col>
          <Col md={6}>
            <Form>
                
              <Form.Group className="mb-3" controlId="formName">
                
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={4} placeholder="Message" />
              </Form.Group>
              <Button variant="dark" type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
        <div className="mt-4">
          <p style={{ fontSize: "14px", color: "#666" }}>
            &copy; 2024 professional Coaching Website. All Rights Reserved Made by PJ.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
