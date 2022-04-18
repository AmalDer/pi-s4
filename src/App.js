import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Mashead from './components/Mashead';
import Quote from './components/Quote';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function App() {

  return (
    <div className="App">
          <Navigation/>
          <Mashead/>
          <Quote/>
          <Features/>
          <About/>
          <Footer/>
          <Feedback/>
    </div>
  );
}

export default App;
