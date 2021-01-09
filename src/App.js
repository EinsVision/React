import React from 'react';

/*
 아래 두개는 같은 것이다.
 props.fav
 { fav }
*/

function Food({fav}){
  // console.log(props);
  return(
    <h3> I like {fav}</h3>
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
    image: 'https://www.newiki.net/wiki/%ED%8C%8C%EC%9D%BC:Instant_ramens_in_a_korean_supermarket.jpg'
  },
  {
    name: 'Kimchi',
    image: 'https://admin.cjrecipe.com:9007/images/theKitchen/PHON/0000001651/0000006094/0000001651.jpg'
  },
  {
    name: 'Kimchi',
    image: 'https://admin.cjrecipe.com:9007/images/theKitchen/PHON/0000001651/0000006094/0000001651.jpg'
  },
  

];


function App(){
  return (
  <div>
    <p>Hello potatos</p>
    <Food
      fav='kimchi'
      something={true}
      papapapa={['hello',1,2,3,4,true]} 
    />
    <Food
      fav='ramen'
      something={true}
      papapapa={['hello',1,2,3,4,true]} 
    />
    <Food
      fav='snack'
      something={true}
      papapapa={['hello',1,2,3,4,true]} 
    />
    <Food
      fav='rice'
      something={true}
      papapapa={['hello',1,2,3,4,true]} 
    />
  </div>
  );
}

export default App;
