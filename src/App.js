import React from 'react';

import Header from './components/Header';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

class App extends React.Component {
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
