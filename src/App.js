import React from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Mashead from './components/mashead/Mashead';
import Footer from './components/footer/Footer';
import Features from './components/features/Features';
import About from './components/about/About';
import './components/chatbot/Chatbot.css';
import ChatRoom from './components/chatbot/ChatRoom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation/>
        <Routes>
          <Route path="/" element={
            <>
              <Mashead/>
              <li>
                <Link to="/chatbot">Chatbot</Link>
              </li>
              <Footer/>
            </>
          }/>
          <Route path="/chatbot" element={
          <div className="chatbot">
            <ChatRoom/>
          </div>}
            />
          <Route path="/features" element={
            <Features/>
          }/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
