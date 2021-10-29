/*eslint-disable */
import './App.css';
import React, { useState } from 'react';

import Toolbar from './components/Toolbar';
import Login from './components/Login';
import SignUp from './components/SignUp'
import ClassRoom from './components/ClassRoom';
import MainPage from './components/MainPage';
import My from './components/My';
import WorkBank from './teacher/components/WorkBank';
import FeedBank from './student/components/FeedBank';
import Information from './components/Information';
import Subject from './components/Subject';


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';



function App(props) {
  //최상단 툴바 및 모드 설정 

  let toolbar = [
    { id: 1, title: 'Login', link: '/' },
    { id: 2, title: 'Sign Up', link: '/signup' }];
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
          <Route exact path='/mainpage/:mode/:page' render={(props) => <MainPage {...props} />} />
          <Route exact path='/:mode/my' render={(props) => <My {...props} />} />
          <Route exact path='/:mode/workbank' render={(props) => <WorkBank {...props} />} />
          <Route exact path='/:mode/feedbank' render={(props) => <FeedBank {...props} />} />
          <Route exact path='/:mode/my/information' render={(props) => <Information {...props} />} />
        </Switch>

        {/* 온니 시작 */}
        {/* <Subject data={teacher_subject} mode={mode} /> */}
      </div>
    </Router>


  );



}


export default App;
