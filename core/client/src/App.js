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
import Auth from '../src/hooks/auth'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App(props) {
  //최상단 툴바 및 모드 설정 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Auth(Login)} />
          <Route exact path='/signup' component={Auth(SignUp, null)} />
          <Route exact path='/classroom/:mode' component={Auth(ClassRoom, false)} />
          <Route exact={true} path='/' component={Auth(Login, null)} />

          <Route exact={true} path='/' render={(props) => <Login {...props} />} />
          <Route exact path='/signup' render={(props) => <SignUp {...props} />} />
          <Route exact path='/classroom/:mode' render={(props) => <ClassRoom {...props} />} />

          <Route path='/mainpage/:mode/:page' render={(props) => <MainPage {...props} />} />
          <Route exact path='/:mode/my' render={(props) => <My {...props} />} />
          <Route exact path={['/:mode/:workbank', '/:mode/workbank_quizlist/:problemmodify']} render={(props) => <WorkBank {...props} />} />
          <Route exact path='/:mode/feedbank' render={(props) => <FeedBank {...props} />} />
          <Route exact path='/:mode/my/information' render={(props) => <Information {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
