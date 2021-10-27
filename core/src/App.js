/*eslint-disable */
import './App.css';
import React, { useState } from 'react';

import Toolbar from './components/Toolbar';
import Login from './components/Login';
import SignUp from './components/SignUp'
import ClassRoom from './components/ClassRoom';
import MainPage from './components/MainPage';


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';



function App(props) {
  //최상단 툴바 및 모드 설정 
  let [toolbar, setToolBar] = useState([{ id: 1, title: 'Login' }, { id: 2, title: 'Sign Up' }])
  let [mode, setMode] = useState('teacher');

  //state데이터, state데이터 변경 함수 

  let [teacher_subject, setTeacher] = useState([
    { id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])


  return (
    <Router>
      {/* 서히 시작 */}
      <div className="App">

        <Toolbar data={toolbar} />

        <Switch>
          <Route exact={true} path='/' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <SignUp {...props} />} />
          <Route exact path='/classroom/:mode' render={(props) => <ClassRoom {...props} />} />
          <Route exact path='/mainpage/:mode' render={(props) => <MainPage {...props} />} />
        </Switch>


        {/* 온니 시작 */}
        {/* <Subject data={teacher_subject} mode={mode} /> */}
      </div>
    </Router>




  );



}


export default App;
