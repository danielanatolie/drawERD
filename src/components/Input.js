import React, { Component } from 'react';
import Tokenizer from '../parser/Tokenizer';
import Output from './Output';
const PROGRAM = require('../ast/PROGRAM');
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', output: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Tokenize
    Tokenizer.makeTokenizer(this.state.value);
    console.log('Tokenizing done');
    // Parse
    let program = new PROGRAM();
    program.parse();
    console.log('Parsing done');
    // Evaluate;
    program.evaluate();
    console.log('Evaluation done');
  }
  render() {
    return (
      <div>
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
        <div id="output"></div>
      </div>
    );
  }
}
