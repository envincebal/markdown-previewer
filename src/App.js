import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : "## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```// this is multi-line code:function anotherExample(firstLine, lastLine) {if (firstLine == '```' && lastLine == '```') {return multiLineCode; }}```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here.| Okay. | I think we get it.\n\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels. \n- That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
    }
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
            <textarea id="editor" defaultValue={this.state.text}>
              
            </textarea>
          </div>
          <div id="preview" className="col-md-6">
            <div className="content">
            
            </div>
          </div>
        </div>
        <Footer />
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

const Footer = (props) => {
  return (
    <div className="footer-div text-center">
      <h3>By Vincent Yan</h3>
    </div>
  );
}

export default App;
