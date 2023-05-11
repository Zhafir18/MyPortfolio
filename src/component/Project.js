import React from 'react';
import { Container } from 'react-bootstrap';
// import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
  return (
    <div className="Project mt-5" id="Project">
      <Container>
        <div className="d-flex justify-content-end mt-5">
          <h1 className="judul">Project</h1>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="col-6">
            <Card>
              <Card.Img variant="top" src="perbara.jpg" />
              <Card.Body>
                <Card.Title>Perbara</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-6">
            <Card>
              <Card.Img variant="top" src="Mydietkitchen.jpg" />
              <Card.Body>
                <Card.Title>My Diet Kitchen</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div className="col-6">
            <Card>
              <Card.Img variant="top" src="Sipenarik.jpg" />
              <Card.Body>
                <Card.Title>Si Penarik</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
