import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Mashead from './components/Mashead';
import Quote from './components/Quote';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

import './components/chatbot/Chatbot.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ChatRoom from './components/chatbot/ChatRoom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/">
            {/* <Mashead/>
            <Quote/>
            <Features/>
            <About/>
            <Footer/>
            <Feedback/> */}
          </Route>
          <Route path="/chatbot" element={
          <div className="chatbot">
            <ChatRoom/>
          
          </div>}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
