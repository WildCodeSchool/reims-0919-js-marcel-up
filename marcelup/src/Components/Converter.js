import React from 'react';
import { Component } from 'react';


const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();


class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      count:  0
    };
    this.nbOfWords = this.nbOfWords.bind(this);
  }

  change = e => {
    let text = e.target.value;
    let result = md.render(text);
    this.setState({
      result
    });
  };
  
   nbOfWords() {
    let table = this.state.result.split(/[.|,|?|!|;|#|*|-|' ']/g)
    let count = table.length 
    this.setState({
      count
    })  
  }
  
  render() {
    return (
      <div>
        <form>
          <textarea
            id="markdown"
            name="markdown"
            rows="15"
            cols="33"
            onChange={this.change}
          ></textarea>
          <textarea
            id="html"
            name="html"
            value={this.state.result}
            readOnly
            rows="15"
            cols="33"
          ></textarea>
        </form>
        <button onClick={this.nbOfWords}>count</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Converter;
