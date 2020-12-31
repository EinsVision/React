import React, { Component } from 'react';
import Subject from "./components/Subject"
import Navigation from "./components/Navigation"
import Article from "./components/Article"
import './App.css';

class App extends Component {
  // component가 실행될 때 redner 함수보다 먼저 실행이 되면서
  // 그 component를 초기화해주는 code는 constructor안에 쓴다. 
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World wide web!'}
    }
  }
  render () {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="world best React!"></Subject>
        <Navigation></Navigation>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

export default App;
