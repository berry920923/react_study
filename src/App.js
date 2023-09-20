import './App.css';
import { useState } from 'react';

function App() {

  let post = '오늘의 메뉴는?';
  let [메뉴추천, b] = useState(['오늘의 저녁 메뉴 추천', '내일의 저녁 메뉴 추천', '모레의 저녁 메뉴 추천']);
  let [like, likeSet] = useState(0);
  let [menu, menuSet] = useState('안먹어!!');

  return (
    <div className="App">

      <div className="black-nav">
        <h4>오늘의 저녁 메뉴</h4>
      </div>

      <button onClick={() => {
        let copy2 = [...메뉴추천];
        copy2 = copy2.sort();
        b(copy2);
      }}>정렬</button>

      <button onClick={() => {
        let copy = [...메뉴추천];
        copy[0] = '새벽 메뉴 추천';
        b(copy);
      }}>마음이 바꼇어!!</button>

      <div className='list'>
        <h4>{ post } <span onClick={ () => { likeSet(like+1)}}>👍</span> {like} </h4>
        <p>{메뉴추천[0]}</p>
      </div>

      <div className='list'>
        <h4>{ menu }</h4>
        <p>{메뉴추천[1]}</p>
      </div>

      <div className='list'>
        <h4>{ post }</h4>
        <p>{메뉴추천[2]}</p>
      </div>

      <Modal/>
      
    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
