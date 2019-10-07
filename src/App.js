import React, { Component } from 'react';
import Input from './components/Input';
import { Description } from './components/Description';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p className="title">drawERD</p>
        </header>

        <body>
          <div className="container">
            <Description />
            <Input />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
