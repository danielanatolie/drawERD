import React, { Component } from 'react';
import Tokenizer from '../parser/Tokenizer';
import mermaid from 'mermaid';
const PROGRAM = require('../ast/PROGRAM');
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', svg: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    mermaid.initialize({ startOnLoad: true });
  }

  handleChange(event) {
    let output = document.getElementById('output');
    output.innerHTML = '';
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value) {
      try {
        // Tokenize
        Tokenizer.makeTokenizer(this.state.value);
        // console.log('Tokenizing done');
        // Parse
        let program = new PROGRAM();
        program.parse();
        // console.log('Parsing done');
        // Evaluate;
        program.evaluate();
        // console.log('Evaluation done');

        //mermaid
        let mermaidInput = Tokenizer.getTokenizer().convertMermaidInputToString();
        // console.log('mermaid input', mermaidInput)
        let output = document.getElementById('output');

        mermaid.render('theGraph', mermaidInput, function(svgCode) {
          output.innerHTML = svgCode;
        });
      } catch (err) {
        alert('Failed to parse or evaluate. Please check your syntax.');
      }
    } else {
      alert('Input is empty');
    }
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
