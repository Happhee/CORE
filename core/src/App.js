/*eslint-disable */
import './App.css';
import React, { Component } from 'react';

import Toolbar from './together/components/Toolbar';
import Subject from './together/components/Subject'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'teacher',
      teacher_top: { feed: 'WorkBank' },
      student_top: { feed: 'FeedBank' },

      teacher_subject: [
        { id: 1, title: 'Student', link: '../../teacher/components/Student.js' },
        { id: 2, title: 'WorkBook', link: '../../teacher/components/WorkBook.js' },
        { id: 3, title: 'FeedBack', link: '../../teacher/components/FeedBack.js' }
      ],

      student_subject: [
        { id: 1, title: 'WorkBook', link: '../../student/components/WorkBook.js' }
      ],
    }
  }
  //state데이터, state데이터 변경 함수 
  render() {

    let _feed = null;
    let _subject = [];
    if (this.state.mode == 'teacher') {
      _feed = this.state.teacher_top.feed;
      _subject = this.state.teacher_subject;
    }
    else {
      _feed = this.state.student_top.feed;
      _subject = this.state.student_subject;
    }

    return (
      <div className="App">

        <Toolbar feed={_feed} />
        <Subject data={_subject} />

      </div>

    );
  }


}


export default App;
