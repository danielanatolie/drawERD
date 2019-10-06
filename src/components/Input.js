import React, { Component } from 'react';
import mermaid from 'mermaid';
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
    alert('A name was submitted: ' + this.state.value);
    mermaid.parse(this.state.value);
    mermaid.render('theGraph', this.state.value, function (svgCode) {
      console.log(svgCode);
    })
    event.preventDefault();
  }
  render() {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
