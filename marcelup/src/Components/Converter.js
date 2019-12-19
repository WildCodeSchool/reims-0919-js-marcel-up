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
      result: ''
    };
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

  updateChange = e => {
    this.updateState(e.target.value);
  };

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
            onChange={this.updateChange}
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
      </div>
    );
  }
}

export default Converter;
