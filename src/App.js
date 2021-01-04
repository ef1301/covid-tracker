import './App.css';
import React from 'react';
import USStateStats from './components/containers/states.js';
import CountryStats from './components/containers/countries.js';

function App() {
  return (
    <div className="App">
      <USStateStats />
      <CountryStats />
    </div>
  );
}

export default App;
