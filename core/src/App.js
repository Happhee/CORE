/*eslint-disable */
import './App.css';
import React, { useState } from 'react';

import Login from './components/Login';

import SignUp from './components/SignUp'
import ClassRoom from './components/ClassRoom';
import MainPage from './components/MainPage';
import My from './components/My';
import WorkBank from './teacher/components/WorkBank';
import FeedBank from './student/components/FeedBank';
import Information from './components/Information';
import Auth from './hooks/auth'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App(props) {
  //최상단 툴바 및 모드 설정 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Auth(Login)} />
          <Route exact path='/signup' component={Auth(SignUp, null)} />

          <Route exact path='/classroom/:mode/:userId' render={(props) => <ClassRoom {...props} />} />

          <Route path='/mainpage/:mode/:page/:userId/:classId/:title' render={(props) => <MainPage {...props} />} />
          <Route exact path='/:mode/:userId/my' render={(props) => <My {...props} />} />
          <Route path={['/:mode/:userId/workbank', '/:mode/:userId/workbank_quizlist/:problemmodify']} render={(props) => <WorkBank {...props} />} />
          <Route exact path='/:mode/:userId/feedbank' render={(props) => <FeedBank {...props} />} />
          <Route exact path='/:mode/:userId/my/information' render={(props) => <Information {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
