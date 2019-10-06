import React, { Component } from 'react';
// import mermaid from 'mermaid';
import Input from './components/Input';
import { Description } from './components/Description';

import './App.css';

class App extends Component {
  render() {
    // TOKENIZE HERE

    return (
      <div className="App">
        <header>
          <p className="title">drawERD coming soon...</p>
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
