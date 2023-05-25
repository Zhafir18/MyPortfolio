import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Muhammad Zhafir Ghiffari'],
      startDelay: 300,
      typeSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  });

  return (
    <div className="home">
      <Container>
        <div className="row mt-5">
          <div className="col-8">
            <h2 className="hello">
              Hello, i'm <span ref={el}></span>
            </h2>
            <h2 className="hello">I'm a web developer</h2>
          </div>
          <div className="col-4">
            <Card style={{ width: '400px' }}>
              <Card.Img variant="top" src="/profil.jpg" />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
