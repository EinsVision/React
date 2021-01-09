import React from 'react';

/*
 아래 두개는 같은 것이다.
 props.fav
 { fav }
*/

function Food({name, picture}){
  // console.log(props);
  return(
    <div>
      <h3> I like {name}</h3>
      <img src={picture} />
    </div>
  ); 
}

const foodILike = [ 
  {
    name: 'Kimchi',
    image: 'https://admin.cjrecipe.com:9007/images/theKitchen/PHON/0000001651/0000006094/0000001651.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/6/2/3/3/6/4/fMusd/2884623364_B.jpg'
  },
  {
    name: 'ramen',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjZfNDMg/MDAxNTkwNDgxOTc1OTE1.rpezhYUxGHG0X6-dmVwuACnqm7AugH9CUjxEatcVNsAg.C27glH_kXPk5zTORLyjUbU_yjkGDEbmwZXjaq_xGltIg.JPEG.naverschool/%ED%98%B8%EB%A1%9C%EB%A1%9C%EB%A1%9D.jpg?type=w800'
  },
  {
    name: 'chicken',
    image: 'http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg'
  },
  {
    name: 'Yookgejang',
    image: 'http://image.gsshop.com/image/26/27/26278621_L1.jpg'
  },
  

];


function App(){
  return (
  <div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
  </div>
  );
}

export default App;
