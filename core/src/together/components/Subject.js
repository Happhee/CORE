import React, { Component } from 'react';
/*eslint-disable */

import '../css/Subject.css';
import core_logo from '../css/Core.svg'


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
                <a href="/" className="subject_text"> {this.props.title}</a>
            </div>
        );
    }
}
class Subject extends Component {

    render() {
        let span_list = [];
        let data = this.props.data;

        for (let index = 0; index < data.length; index++) {
            span_list.push(<Subject_Span key={data[index].id} title={data[index].title}></Subject_Span>)
        }
        return (
            <div className="subject">
                <Logo_Room class_room="C프로그래밍 및 실습" />
                {span_list}
            </div>
        );
    }
}

export default Subject;