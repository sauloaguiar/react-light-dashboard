import React, { Component } from 'react';
import Header from './features/common/components/Header';
import LightingManager from './features/lights/components/LightingManager';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LightingManager />
      </div>
    );
  }
}

