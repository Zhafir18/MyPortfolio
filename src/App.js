import React, { useState, useEffect } from 'react';
import './App.css';
import Navbars from './component/navbar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Playlist from './component/Playlist';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { RingLoader } from 'react-spinners';
// import { useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <RingLoader size={50} color={'#36d7b7'} loading={loading} className="loading" />
      ) : (
        <>
          <Navbars />
          <Home />
          <About />
          <Project />
          <Playlist />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
