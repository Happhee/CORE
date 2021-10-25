/*eslint-disable */
import './App.css';
import React, { Component } from 'react';
// import {Route, Switch, useHistory} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Subject from './components/Subject'

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

      teacher_subject: [
        { id: 1, title: 'Student' },
        { id: 2, title: 'WorkBook' },
        { id: 3, title: 'FeedBack' }
      ],

      student_subject: [
        { id: 1, title: 'WorkBook' }
      ],
    }
  }
  //state데이터, state데이터 변경 함수 
  render() {

    let _feed = null;
    let _subject = [];
    let route = [];

    if (this.state.mode == 'teacher') {
      _feed = this.state.teacher_top.feed;
      _subject = this.state.teacher_subject;
    }
    else {
      _feed = this.state.student_top.feed;
      _subject = this.state.student_subject;
    }

    return (
      <Router className="App">
        <div>
          <Toolbar data={this.state.init} />
          <Subject mode={this.state.mode} data={_subject} />

        </div>

      </Router>

    );
  }


}


export default App;
