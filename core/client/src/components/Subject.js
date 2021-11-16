/*eslint-disable */

import React, { useState } from 'react';

import '../css/Subject.css';
import { ReactComponent as Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

import Student from '../teacher/components/Student';
import Teacher_WorkBook from '../teacher/components/WorkBook';
import QuizList from '../teacher/components/QuizList';
import ProblemMain from '../teacher/components/ProblemMain'
import FeedBack from '../teacher/components/FeedBack';
import Student_WorkBook from '../student/components/WorkBook';
import Student_QuizList from '../student/components/QuizList';
import { SpaTwoTone } from '@material-ui/icons';

const Logo_Room = props => {

    return (
        <div style={{ textAlign: "center" }}>
            <Logo width="100" />
        </div>
    );

}
const Subject_Link = props => {
    const history = useHistory();
    return (
        <div>
            <span className="subject_text"
            style={{  cursor: "pointer",fontWeight:"bold"}}
                onClick={() => {
                    history.push({
                        pathname: props.link,
                        state: {
                            classroom_title: props.classroom_title,
                            teacher_id: props.teacher_id
                        }
                    })
                }} > {props.title}</span>
        </div>
    );

}
const Subject = props => {
    console.log('서브젝트렌더');

    let data = props.data;
    let mode = props.mode;

    let list = [];
    let route = []

    if (data.length == 3) {

        list.push(<Subject_Link key={data[0].id} title={data[0].title } style={{  cursor: "pointer"}}
            link='/mainpage/teacher/student'
            classroom_title={props.classroom_title}
            teacher_id={props.id}
        />);
        list.push(<Subject_Link key={data[1].id} title={data[1].title} style={{  cursor: "pointer"}}
            link='/mainpage/teacher/workbook'
            classroom_title={props.classroom_title}
            teacher_id={props.id}
        />);
        list.push(<Subject_Link key={data[2].id} title={data[2].title} style={{  cursor: "pointer"}}
            link='/mainpage/teacher/feedback'
            classroom_title={props.classroom_title}
            teacher_id={props.id}
        />);


        //상단 라우트
        route.push(<Route exact path='/mainpage/teacher/student' render={() => <Student />} key={data[0].id} />)
        route.push(<Route exact path='/mainpage/teacher/workbook' render={() => <Teacher_WorkBook />} key={data[1].id} />)
        route.push(<Route exact path='/mainpage/teacher/feedback' render={() => <FeedBack />} key={data[2].id} />);

        //워크북 상세 라우트
        route.push(<Route exact path='/mainpage/teacher/workbook/quizlist' render={() => <QuizList />} key="quizlist" />);
        route.push(<Route path={['/mainpage/teacher/workbook/quizlist/:problemmain', '/mainpage/teacher/feedback/quizlist/:problemmain']} render={() => <ProblemMain />} key="problemadd" />);
    
    }
    else {
        list.push(<Subject_Link key={data[0].id} title={data[0].title}
            link='/mainpage/student/workbook'
            classroom_title={props.classroom_title}
            />);
        route.push(<Route path='/mainpage/student/workbook' component={Student_WorkBook} exact={true} key={data[0].id} />)

        //워크북 상세 라우트
        route.push(<Route exact path='/mainpage/student/workbook/quizlist' render={() => <Student_QuizList />} key="quizlist" />);
        route.push(<Route path={['/mainpage/student/workbook/quizlist/:problemmain', '/mainpage/student/feedback/quizlist/:problemmain']} render={() => <ProblemMain />} key="problemadd" />);
    

    }




    return (
        <div>
            <div className={mode + "_subject"}>
                <div style={{  textAlign: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <img style={{ marginTop: '5px', width: '80px' }} src={require('../image/iconBiglogo.png').default} />
                    <p style={{ marginTop: 0, marginBottom: '5px', textAlign: 'center', fontFamily: 'esamanruLight' }}>{props.classroom_title}</p>
                </div>
                {list}
            </div>
            {route}
        </div >
    );

}

export default Subject;