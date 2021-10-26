/*eslint-disable */
import './App.css';
import React, { useState } from 'react';

import Toolbar from './components/Toolbar';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function App() {
  let [init, setInit] = useState([{ id: 1, title: 'Login' }, { id: 2, title: 'Sign Up' }])
  let [mode, setMode] = useState('teacher');
  let [top, setTop] = useState([{ feed: 'WorkBank' }, { feed: 'FeedBank' }])

  //state데이터, state데이터 변경 함수 

  let _feed = null;
  let _subject = [];
  let route = [];

  if (mode == 'teacher') {
    _feed = top[0].feed;
  }
  else {
    _feed = top[1].feed;
  }


  return (
    <Router className="App">
      <div className="App">
        <Toolbar data={init} />
      </div>

    </Router>

  );



}


export default App;
