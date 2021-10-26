/*eslint-disable */
import './App.css';
import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import Login_Success from './components/Login_Success';


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: [
        { id: 1, title: 'Login' },
        { id: 2, title: 'Sign Up' },
      ],
      mode: 'teacher',
      teacher_top: { feed: 'WorkBank' },
      student_top: { feed: 'FeedBank' },
    }
  }
  //state데이터, state데이터 변경 함수 
  render() {

    let _feed = null;
    let _subject = [];
    let route = [];

    if (this.state.mode == 'teacher') {
      _feed = this.state.teacher_top.feed;
    }
    else {
      _feed = this.state.student_top.feed;
    }


    return (
      <Router className="App">
        <div>
          <Toolbar data={this.state.init} />
          {/* <Login_Success mode={this.state.mode} /> */}

        </div>

      </Router>

    );
  }


}


export default App;
