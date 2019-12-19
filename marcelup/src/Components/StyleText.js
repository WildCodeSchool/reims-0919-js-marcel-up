import React from 'react';
import { Component } from 'react';

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

class StyleText extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      inputText: '',
      result: '',
      textAreaSelectionStart: 0
    };
  }

  focusTextInput() {
    this.textInput.current.focus();
  }
  insertText = (text) => {
    this.updateState(this.state.inputText + text);
  };
  updateState = (newText, additionalState) => {
    const result = md.render(newText);
    this.setState({
      inputText: newText,
      result: result
    });
  };

  change = e => {
    this.updateState(e.target.value);
  };

  render() {
    return (
      <div>
        <input
        type = "text"
        ref={this.textInput}/>

        <input
        type ="button"
        value="Donner le focus au champ texte"
        onClick={this.focusTextInput}/>

        <form>
          <button type="button" onClick={ () => this.insertText('# Title1\n') }>T</button>
          <textarea
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
      </div>
    );
  }
}

export default StyleText;
