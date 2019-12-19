import React from 'react';
import { Component } from 'react';


const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();


class Converter extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      inputText: '',
      result: '',
      count:  0

    };
    this.nbOfWords = this.nbOfWords.bind(this);
  }
  insertTextOne = (textToInsert) => {
    const cursorPosition = this.myRef.current.selectionStart;
    const currentText = this.state.inputText;
    const textBeforeCursorPosition = currentText.substring(0, cursorPosition);
    const textAfterCursorPosition = currentText.substring(cursorPosition, currentText.length);
    this.updateState(textBeforeCursorPosition + textToInsert + textAfterCursorPosition);
  };

  insertTextTwo = (textToInsert) => {
    const cursorPosition = this.myRef.current.selectionStart;
    const currentText = this.state.inputText;
    const textBeforeCursorPosition = currentText.substring(0, cursorPosition);
    const textAfterCursorPosition = currentText.substring(cursorPosition, currentText.length);
    this.updateState(textBeforeCursorPosition + textToInsert + textAfterCursorPosition + textToInsert);
  };

  updateState = (newText) => {
    const result = md.render(newText);
    this.setState({
      inputText: newText,
      result: result
    });
  };

  change = e => {
    this.updateState(e.target.value);
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
            ref={this.myRef}
            id="markdown"
            name="markdown"
            rows="15"
            cols="33"
            value={this.state.inputText}
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

        <button type="button" onClick={ () => this.insertTextOne('# ') }>T1</button>
        <button type="button" onClick={ () => this.insertTextOne('## ') }>T2</button>
        <button type="button" onClick={ () => this.insertTextTwo('**') }>B</button>
        <button type="button" onClick={ () => this.insertTextTwo('_') }>I</button>

        <button onClick={this.nbOfWords}>count</button>
        <p>{this.state.count}</p>

      </div>
    );
  }
}

export default Converter;
