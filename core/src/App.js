/*eslint-disable */
import './App.css';
import React, { useState } from 'react';

import Login from './components/Login';
import SignUp from './components/SignUp'
import ClassRoom from './components/ClassRoom';
import MainPage from './components/MainPage';
import My from './components/My';
import WorkBank from './teacher/components/WorkBank';
import WorkBank_QuizList from './teacher/components/WorkBank_QuizList'
import FeedBank from './student/components/FeedBank';
import Information from './components/Information';


import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';



function App(props) {
  //최상단 툴바 및 모드 설정 


  return (
    <Router>
      {/* 서히 시작 */}
      <div className="App">
        <Switch>
          <Route exact={true} path='/' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <SignUp {...props} />} />
          <Route exact path='/classroom/:mode' render={(props) => <ClassRoom {...props} />} />
          <Route path='/mainpage/:mode/:page' render={(props) => <MainPage {...props} />} />
          <Route exact path='/:mode/my' render={(props) => <My {...props} />} />
          <Route exact path='/:mode/:workbank' render={(props) => <WorkBank {...props} />} />
          <Route exact path='/:mode/feedbank' render={(props) => <FeedBank {...props} />} />
          <Route exact path='/:mode/my/information' render={(props) => <Information {...props} />} />

        </Switch>


      </div>
    </Router>
  );
}


export default App;
