import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : "## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n Shopping list:  \n* apples\n* oranges\n* pears \n\nNumbered list:\n 1. apples\n 2. oranges\n 3. pears\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
    this.clearText = this.clearText.bind(this);
  }
  
  clearText(){
    this.setState({
      text: ""
    });
  }
  
  getMarkdown(value){
    const markdown = marked(value);
    return {__html: markdown}
  }

  updateMarkdown(prevState){
    this.setState({
      text: prevState.target.value
    });
  }
  
  render() {
    return (
      <div className="app">
        <Header />           
        <div className="container row">
          <div className="col-md-6 text-div">
            <div className="section-container">
              <div className="subtitle-container">
                <span className="subtitle">Editor</span>
                <span className="clear" onClick={this.clearText}>Clear Text</span>
              </div>
              <textarea id="editor" value={this.state.text} onChange={this.updateMarkdown}>
              </textarea>
            </div>
          </div>
          <div id="preview" className="col-md-6">
            <div className="section-container">
              <div className="subtitle-container">
                <span className="subtitle">Preview</span>
              </div>
              <div className="content" dangerouslySetInnerHTML={this.getMarkdown(this.state.text)}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div className="header-div text-center">
      <h1>Github Markdown Previewer</h1>
    </div>
  );
}

export default App;
