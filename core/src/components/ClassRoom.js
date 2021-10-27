/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';

import Subject from './Subject';

//로그인 성공 후 페이지 -> 서버로부터 모드를 가져와야함 
function ClassRoom({ match }) {
    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    const { mode } = match.params;
    console.log(mode);


    // let subject = [];
    // let route = [];
    // //선생님 모드 일때, 
    // if (props.mode == 'teacher') {

    //     subject = teacher_subject;
    // }//학생모드 일때
    // else {
    //     subject = student_subject;
    //     console.log(props.mode);

    // }
    return (

        <div>
            <div className="signup_box">
                <Core_Logo />
                <div className="content">

                </div>
            </div>
        </div>
    );

};

export default ClassRoom;