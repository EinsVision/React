import React, { Component } from 'react';
import Subject from "./components/Subject"
import Navigation from "./components/Navigation"
import Article from "./components/Article"
import './App.css';

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
