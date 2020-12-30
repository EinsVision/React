import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        <div>world wide web!</div>
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
        <h2>HTML</h2>
        <div>HTML is HyperText Markup Language.</div>
      </article>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Subject></Subject>
        <Navigation></Navigation>
        <Article></Article>
      </div>
    );
  }
}

export default App;
