import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        <div>{this.props.sub}</div>
      </header>
    );
  }
}

class Navigation extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li ><a href="1.html">HTML</a></li>
            <li ><a href="2.html">CSS</a></li>
            <li ><a href="3.html">JS</a></li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <div>{this.props.desc}</div>
      </article>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="world best React!"></Subject>
        <Navigation></Navigation>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

export default App;
