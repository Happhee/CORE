import React, { Component } from 'react';
/*eslint-disable */

import '../CSS/Subject.css';
import core_logo from '../CSS/Core.svg'


class Logo_Room extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <img src={core_logo} style={{ width: 100, height: 100 }} ></img>
                <p>{this.props.class_room}</p>
            </div>
        );
    }
}
class Subject_Span extends Component {
    render() {
        return (
            <div>
                <span className="subject_text"> {this.props.title}</span>
            </div>
        );
    }
}
class Subject extends Component {
    render() {
        return (
            <div className="subject">
                <Logo_Room class_room="C프로그래밍 및 실습" />
                <Subject_Span title="Student"></Subject_Span>
                <Subject_Span title="WorkBook"></Subject_Span>
                <Subject_Span title="FeedBack"></Subject_Span>
            </div>
        );
    }
}

export default Subject;