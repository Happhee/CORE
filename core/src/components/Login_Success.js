/*eslint-disable */
import React, { Component } from 'react';
import '../css/Login_Success.css';

import Subject from './Subject';

//로그인 성공 후 페이지 -> 서버로부터 모드를 가져와야함 
class Login_Success extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
    render() {
        let subject = [];
        let route = [];
        //선생님 모드 일때, 
        if (this.props.mode == 'teacher') {
            subject = this.state.teacher_subject;
        }//학생모드 일때
        else {
            subject = this.state.student_subject;
        }
        return (
            <div>
                <Subject mode={this.props.mode} data={subject} />
            </div>
        );
    }
}

export default Login_Success;