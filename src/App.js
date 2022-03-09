import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import PlayAudio from './PlayAudio';
import Home from './Home';

import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenarios" element={<PlayAudio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
