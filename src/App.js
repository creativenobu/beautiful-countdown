import React from 'react';
import './App.css';

import Header from './components/Header/index';
import Countdown from './components/Countdown/index';
import Footer from './components/Footer/index';

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
