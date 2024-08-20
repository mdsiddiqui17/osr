import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './About.css';
import aboutImage from '../Images/AboutSection.jpg'; // Adjust the path as per your project structure

const About = () => {
  return (
    <div className="container-fluid about-section" id="about">
      <Row>
        <Col md={6} className="about-image">
          <img src={aboutImage} alt="About Us" />
        </Col>
        <Col md={6} className="about-text">
          <h2>About Us</h2>
          <p>
            Ontario Structure Restorations, Inc. is based out of Milverton and has been working in the construction industry for many years providing service throughout Southern Ontario. When it comes to contracting needs we are your full-service provider—specializing in agricultural construction we also work with projects in residential and commercial construction. We work with our customers on a variety of projects ranging from concrete foundation grinding, roofing, wood and metal framing, to demolition and clean-up services.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
