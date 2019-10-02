import React, { Component } from 'react';

import './style.scss';

import Header from './components/Header';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    document.title = 'Beautiful Countdown';
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Countdown/>
        <Footer/>
      </div>
    );
  }
}

export default App;
