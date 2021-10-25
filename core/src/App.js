/*eslint-disable */
import './App.css';
import React, { Component } from 'react';

import Teacher_Toolbar from './components/Toolbar';
import logo from './logo.svg';


class Logo_Room extends Component {
  render() {
    return (
      <div>
        <img src={logo}></img>
        <p> 강의실 이름 </p>
      </div>
    );
  }
}
class Subject extends Component {
  render() {
    return (
      <div>
        <span className="sub_tool_bar_text"> {this.props.title}</span>
      </div>
    );
  }
}


class Sub_Toolbar extends Component {
  render() {
    return (
      <div className="sub_tool_bar">
        <Logo_Room />
        <Subject title="Student"></Subject>
        <Subject title="WorkBook"></Subject>
        <Subject title="FeedBack"></Subject>
      </div>
    )
  }
}



class App extends Component {
  //state데이터, state데이터 변경 함수 
  render() {

    return (
      <div className="App">

        <Teacher_Toolbar feed="FeedBank" />
        <Sub_Toolbar />

      </div>

    );
  }


}


export default App;
