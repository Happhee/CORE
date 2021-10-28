/*eslint-disable */
import React, { useState } from 'react';
import Subject from './Subject';

function MainPage({ match }) {

    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    const { mode } = match.params;
    // 강의실 선택후 상단바 제목 설정
    let subject = [];
    if (mode == 'teacher') {
        subject = [...teacher_subject];
    }
    else if (mode == 'student') {
        subject = [...student_subject];
    }

    console.log(mode);

    console.log('메인 렌더링');

    return (
        <div>
            <div>
                <Subject data={subject} mode={mode} />
            </div>
        </div>
    );
}

export default MainPage;
