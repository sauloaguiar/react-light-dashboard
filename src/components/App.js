import React, { Component } from 'react';

import './App.css';
import Table from './Table';
import Header from './Header';
import Slider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
        <Slider />
      </div>
    );
  }
}

export default App;
