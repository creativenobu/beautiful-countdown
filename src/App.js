import React from 'react';
import './App.css';

import Header from './components/Header';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Countdown/>
      <Footer/>
    </div>
  );
}

export default App;
