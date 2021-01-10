import { render } from '@testing-library/react';
import React from 'react';
// import PropTypes from 'prop-types';


/*
 아래 두개는 같은 것이다.
 props.fav
 { fav }
*/

/*
function Food({delicious, picture, rating}){
  // console.log(props);
  return(
    <div>
      <h3> I like {delicious}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={delicious}/>
    </div>
  ); 
}
*/
/*
Food.propTypes = {
  delicious: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
*/ 
/*
const foodILike = [ 
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://admin.cjrecipe.com:9007/images/theKitchen/PHON/0000001651/0000006094/0000001651.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/6/2/3/3/6/4/fMusd/2884623364_B.jpg',
    rating: 4.9,
  },
  {
    id:3,
    name: 'ramen',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfNDMg/MDAxNTkwNDgxOTc1OTE1.rpezhYUxGHG0X6-dmVwuACnqm7AugH9CUjxEatcVNsAg.C27glH_kXPk5zTORLyjUbU_yjkGDEbmwZXjaq_xGltIg.JPEG.naverschool/%ED%98%B8%EB%A1%9C%EB%A1%9C%EB%A1%9D.jpg?type=w800',
    rating: 4.8,
  },
  {
    id:4,
    name: 'chicken',
    image: 'http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg',
    rating: 4.7,
  },
  {
    id:5,
    name: 'Yookgejang',
    image: 'http://image.gsshop.com/image/26/27/26278621_L1.jpg',
    rating: 5.5,
  },
  
];

*/

// 방법 1
/*
function App(){
  return (
  <div>
    {foodILike.map(dish => <Food 
    key={dish.id} 
    delicious={dish.name} 
    picture={dish.image} 
    rating={dish.rating}/>)}
  </div>
  );
}
*/

// Function component는 뭔가를 return해 그리고 screen에 표시돼, class component는 class야 하지만 
// react component로 부터 확장되고 screen에 표시돼 그리고 render() method 안에 넣야야 한다.
// 즉, React는 자동적으로 너의 class component의 render method를 실행해! 자동으로!
// 방법 3 (State 는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다.)
class App extends React.Component{
  constructor(props){
    super(props);
    console.log('hello constructor function');
  }

  state={
    count: 0
  }

  add = () => {
    console.log('add');
    // this.state.count = 1;
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    console.log('minus');
    this.setState(current => ({count: current.count - 1}));
    // this.state.count = -1; // 이렇게하면 안되는 이유는 매번 state의 상태를 변경할 때 너는 react가 render function을 호출하지 않는다.
    //  Do not mutate state directly. Use setState() 이러한 error를 발생시킨다.
  };

  componentDidMount(){ // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    console.log('component rendered'); 
  }

  componentDidUpdate(){
    console.log('I just updated');
  }

  render(){
    console.log('render function');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}


export default App;

// 방법 2
// function renderFood(dish){
//   console.log(dish);
//   return (<Food delicious={dish.name} picture={dish.image}/>);
// }

// function App(){
//   return (
//     <div>
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }


