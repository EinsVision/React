import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// component는 HTML을 반환하는 함수이다.
// React는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
// javascript와 HTML 사이의 이러한 조합을 jsx라고 부른다.

// react application은 한 번에 하나의 component만 rendering 할 수 있다는 점이야.
// react가 멋진 이유는 재사용 가능한 component를 만들 수 있다는 점이다. 
// 또한 component에서 component로 정보를 보낼 수 있다.