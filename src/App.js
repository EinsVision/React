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
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World wide web!'},
      Welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is interactive'}
      ]
    }
  }
  render () {
    var _title, _desc = null;

    if(this.state.mode === 'Welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    console.log('render', this);

    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'Welcome'});
          }.bind(this)}
          >
        </Subject>
        
        <Navigation
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
          
          >
          </Navigation>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
