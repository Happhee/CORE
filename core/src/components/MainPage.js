/*eslint-disable */
import React, { useState } from 'react';
import Subject from './Subject';
import Student from '../teacher/components/Student';
import WorkBook from '../teacher/components/WorkBook';
import FeedBack from '../teacher/components/FeedBack';
import { Route, Switch, useHistory } from 'react-router';

function Teacher_MainPage({ match, location }) {

    let [teacher_subject, setTeacher] = useState([{ id: 1, title: 'Student' },
    { id: 2, title: 'WorkBook' },
    { id: 3, title: 'FeedBack' }])

    let [student_subject, setStudent] = useState([
        { id: 1, title: 'WorkBook' }
    ])

    const { mode } = match.params;
    // const { page } = match.params.page;
    const { search } = location;
    // 강의실 선택후 상단바 제목 설정
    let subject = [];
    if (mode == 'teacher') {
        subject = [...teacher_subject];
    }
    else if (mode == 'student') {
        subject = [...student_subject];
    }

    console.log(mode);
    // console.log(search);
    console.log('메인 렌더링');

    return (
        <div>
            <div>
                <Subject data={subject} mode={mode} />

            </div>
            {/* <Switch>
                <Route exact path='/mainpage/teacher/' render={() => <Student />} />
                <Route exact path='/mainpage/teacher/workbook' render={() => <WorkBook />} />
                <Route exact path='/mainpage/teacher/feedBack' render={() => <FeedBack />} />
            </Switch> */}
        </div>
    );
}

export default Teacher_MainPage;
