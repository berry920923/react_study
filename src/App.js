import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '오늘의 저녁메뉴는!!'
  let [저녁메뉴 , 저녁메뉴변경] = useState(['김치찌개', '교촌치킨', '비빔면'])
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ post }</h4>
      </div>

      <button onClick={ () => {
        let copy = [...저녁메뉴];
        copy[0] = 'bbq';
        저녁메뉴변경(copy)
      }}>메뉴변경</button>

      <div className='list'>
        <h4>{ 저녁메뉴[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>{ post }</p>
      </div>

      <div className='list'>
      <h4>{ 저녁메뉴[1] }</h4>
        <p>{ post }</p>
      </div>

      <div className='list'>
      <h4>{ 저녁메뉴[2] }</h4>
        <p>{ post }</p>
      </div>
      
    </div>
  );
}

export default App;
