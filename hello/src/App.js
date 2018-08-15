import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SandBox } from './SandBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React練習スタート</h1>
        </header>
        <p className="App-intro">
          下の箱にReact関係の処理を書いていこう<code>src/SandBox.js</code>.
        </p>
        <div className="sand-box-frame">
          <SandBox></SandBox>
        </div>
      </div>
    );
  }
}

export default App;
