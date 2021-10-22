/*eslint-disable */
import './App.css';
import React, { useState } from 'react';
//내장 함수를 가져다 쓰겠습니다~

function App() {
  let [title, title_modify] = useState(['Student', 'WorkBook', 'FeedBack', 'My']); // [array , fun ]
  //state데이터, state데이터 변경 함수 

  return (
    <div className="App">
      <div className="black-nav">
        CORE
      </div>
      <div className="list" >
        <h2 onClick={() => { console.log(1) }}> {title[0]}  </h2>
        <hr />
      </div>
      <div className="list" >
        <h2> {title[1]}</h2>
        <hr />
      </div>
      <div className="list" >
        <h2> {title[2]}</h2>
        <hr />
      </div>
      <div className="list" >
        <h2> {title[3]}</h2>
        <hr />
      </div>
    </div>
  );
}

export default App;
