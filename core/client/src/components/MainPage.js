/*eslint-disable */
import React, { useState } from 'react';
import Subject from './Subject';
import Toolbar from './Toolbar';
import { useLocation } from 'react-router-dom';

function MainPage({ match }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    const { mode } = match.params;
    const location = useLocation();


    // 강의실 선택후 상단바 제목 설정
    let subject = [];
    if (mode == 'teacher') {
        subject = [...teacher_subject];
    }
    else if (mode == 'student') {
        subject = [...student_subject];
        toolbar[1].title = 'FeedBank';
        toolbar[0].link = '/student/my';
        toolbar[1].link = '/student/feedbank';

    }

    console.log(mode);

    console.log('메인 렌더링');

    return (
        <div>
            <Toolbar data={toolbar} />
            <div>
                <Subject data={subject} mode={mode} classroom_title={location.state.classroom_title} />
            </div>
        </div>
    );
}

export default MainPage;
