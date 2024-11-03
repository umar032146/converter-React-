import React from 'react';
import './App.css';
import Converter from './components/Converter';

function App() {
  const beams = Array.from({ length: 50 }); // Generate 50 beams

  return (
    <div className="app">
      {/* Falling Beams Background */}
      {beams.map((_, index) => (
        <div
          className="beam"
          key={index}
          style={{
            left: `${Math.random() * 100}vw`, // Randomize beam position horizontally
            '--i': Math.random(), // Randomize animation delay
          }}
        ></div>
      ))}

      {/* Centered Converter */}
      <div id="converter-container">
        <h2>Unit Converter</h2>
        <Converter />
      </div>
    </div>
  );
}

export default App;
