import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div className="about" id="About">
      <Container>
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="judul">About</h1>

            <p>
              Born in Jakarta on October 18, 2001, Undergraduate student majoring in Computer Science at Binus University. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="justify-content-center">
              <h1>Certificate</h1>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="sertifikat1.jpg" alt="First slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">Internship at DPR RI</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="Sertifikat2.jpg" alt="Second slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">DuniaCoding Workshop</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 h-50" src="Sertifikat3.jpg" alt="third slide" />
                  <Carousel.Caption>
                    <h5 className="text-dark">MySkill UI/UX Introduction</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-6">
            <div className="justify-content-center">
              <h1>Curriculum Vitae</h1>
              <Button className="cv w-100" variant="outline-dark">
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h1>Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;