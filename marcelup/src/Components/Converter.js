import React from 'react';
import { Component } from 'react';
import './Converter.css';

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  change = e => {
    let text = e.target.value;
    let result = md.render(text);
    this.setState({
      result: result
    });
  };

  render() {
    return (
      <div>
        <form className="convert">
          <label for="markdown">Start writing in Markdown :</label>
          <textarea
            className="textMark"
            id="markdown"
            name="markdown"
            onChange={this.change}
          ></textarea>
          <label for="html">Converted in HTML :</label>
          <textarea
            className="textHtml"
            id="html"
            name="html"
            value={this.state.result}
            readOnly
          ></textarea>
        </form>
      </div>
    );
  }
}

export default Converter;
