import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className="home">
      <Container>
        <div className="row mt-5">
          <div className="col-8">
            <h1 className="hello">Hello, i'm Muhammad Zhafir Ghiffari</h1>
            <h1 className="hello">I'm a web developer</h1>
          </div>
          <div className="col-4">
            <Card style={{ width: '400px' }}>
              <Card.Img variant="top" src="/profil.jpg" />
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <Button variant="light" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
