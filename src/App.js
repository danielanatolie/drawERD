import React, { Component } from 'react';
// import mermaid from 'mermaid';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p className="title">drawERD coming soon...</p>
        </header>

        <body>
          <div className="container">
            <Input />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
