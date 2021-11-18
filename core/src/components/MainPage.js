/*eslint-disable */
import React, { useState } from 'react';
import Subject from './Subject';
import Toolbar from './Toolbar';


function MainPage({ match }) {
    const { mode, userId, classId, title } = match.params;

    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/' + userId + '/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/' + userId + '/workbank' }];

    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    // 강의실 선택후 상단바 제목 설정
    let subject = [];
    if (mode == 'teacher') {
        subject = [...teacher_subject];
    }
    else if (mode == 'student') {
        subject = [...student_subject];
        toolbar[1].title = 'FeedBank';
        toolbar[0].link = '/student/' + userId + '/my';
        toolbar[1].link = '/student/' + userId + '/feedbank';

    }

    console.log(mode);
    console.log("메인페이지 로딩-> " + userId + "/ " + classId + "/ " + title)

    return (
        <div>
            <Toolbar data={toolbar} />
            <div>
                <Subject data={subject} mode={mode}
                    title={title}
                    userId={userId}
                    classId={classId}
                />
            </div>
        </div>
    );
}

export default MainPage;
