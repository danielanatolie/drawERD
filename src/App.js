import React, { Component } from 'react';

import Input from './components/Input';
import './App.css';
import Output from './components/Output';

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
            <Output />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
