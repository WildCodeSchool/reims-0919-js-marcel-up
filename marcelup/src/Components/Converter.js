import React from 'react';
import { Component } from 'react';
import './Converter.css';

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

class Converter extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      inputText: '',
      result: '',
      count: 0
    };
    this.nbOfWords = this.nbOfWords.bind(this);
  }
  insertTextOne = textToInsert => {
    const cursorPosition = this.myRef.current.selectionStart;
    const currentText = this.state.inputText;
    const textBeforeCursorPosition = currentText.substring(0, cursorPosition);
    const textAfterCursorPosition = currentText.substring(
      cursorPosition,
      currentText.length
    );
    this.updateState(
      textBeforeCursorPosition + textToInsert + textAfterCursorPosition
    );
  };

  insertTextTwo = textToInsert => {
    const cursorPosition = this.myRef.current.selectionStart;
    const currentText = this.state.inputText;
    const textBeforeCursorPosition = currentText.substring(0, cursorPosition);
    const textAfterCursorPosition = currentText.substring(
      cursorPosition,
      currentText.length
    );
    this.updateState(
      textBeforeCursorPosition +
        textToInsert +
        textAfterCursorPosition +
        textToInsert
    );
  };

  updateState = newText => {
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
    let table = this.state.result.split(/[.|,|?|!|;|#|*|-|' ']/g);
    let count = table.length;
    this.setState({
      count
    });
  }

  render() {
    return (
      <div>
        <form className="convert">
          <label htmlFor="markdown">Start writing in Markdown :</label>
          <div className="divButton">
            <button type="button" onClick={() => this.insertTextOne('# ')}>
              T1
            </button>
            <button type="button" onClick={() => this.insertTextOne('## ')}>
              T2
            </button>
            <button type="button" onClick={() => this.insertTextTwo('**')}>
              B
            </button>
            <button type="button" onClick={() => this.insertTextTwo('_')}>
              I
            </button>
          </div>
          <textarea
            className="textMark"
            ref={this.myRef}
            id="markdown"
            name="markdown"
            rows="15"
            cols="33"
            value={this.state.inputText}
            onChange={this.change}
          ></textarea>
          <label htmlFor="html">Converted in HTML :</label>
          <textarea
            className="textHtml"
            id="html"
            name="html"
            value={this.state.result}
            readOnly
          ></textarea>
        </form>
        <div className="buttonCount">
          <button onClick={this.nbOfWords}>count</button>
          <p>{this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default Converter;
