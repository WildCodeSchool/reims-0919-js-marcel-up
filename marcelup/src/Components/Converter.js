import React from 'react';
import convertToHTML from 'markdown-to-html-converter';
import { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stringMd : '',
      stringhtml: '',
  }
}

change = e => {
  this.setState({
    stringMd: e.target.value,
    stringhtml: convertToHTML(this.state.stringMd)
  })
}

  render(){
    return(
      <div>
        <form>
          <textarea  id="markdown" name="markdown" rows="15" cols="33"  onChange={this.change}></textarea>
          <textarea id="html" name="html" value={this.state.stringhtml} rows="15" cols="33"></textarea>
        </form>
      </div>
    )
  }
}


export default Converter;

