import React, { Component } from 'react';
import Subject from "./components/Subject"
import Navigation from "./components/Navigation"
import Article from "./components/Article"
import './App.css';

class App extends Component {
  // component가 실행될 때 redner 함수보다 먼저 실행이 되면서
  // 그 component를 초기화해주는 code는 constructor안에 쓴다. 
  constructor(props){ // constructor 초기화를 담당한다.
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is interactive'}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Navigation data={this.state.contents}></Navigation>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

export default App;
