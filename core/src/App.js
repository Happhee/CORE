/*eslint-disable */
import './App.css';
import React, { Component } from 'react';

import Teacher_Toolbar from './components/Toolbar';
import Teacher_Subject from './components/Subject'



class App extends Component {
  //state데이터, state데이터 변경 함수 
  render() {

    return (
      <div className="App">

        <Teacher_Toolbar feed="FeedBank" />
        <Teacher_Subject />

      </div>

    );
  }


}


export default App;
