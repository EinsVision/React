import React from 'react';
import PropTypes from 'prop-types';

/*
 아래 두개는 같은 것이다.
 props.fav
 { fav }
*/

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

Food.propTypes = {
  delicious: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

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

// 방법 1
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

export default App;
