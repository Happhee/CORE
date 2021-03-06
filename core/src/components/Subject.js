/*eslint-disable */

import React, { useState } from 'react';

import '../css/Subject.css';
import { ReactComponent as Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link, useLocation, useHistory } from 'react-router-dom';
import MainPage from './MainPage';
import Student from '../teacher/components/Student';
import Teacher_WorkBook from '../teacher/components/WorkBook';
import QuizList from '../teacher/components/QuizList';
import ProblemMain from '../teacher/components/ProblemMain'
import FeedBack from '../teacher/components/FeedBack';
import Student_WorkBook from '../student/components/WorkBook';
import Student_QuizList from '../student/components/QuizList';
import SubmitMain from '../student/components/SubmitMain'
import { SpaTwoTone } from '@material-ui/icons';
import queryString from 'query-string'


const Logo_Room = props => {

    return (
        <div style={{ textAlign: "center" }}>
            <Logo width="100" />
        </div>
    );

}

const Subject_Link = props => {
    const history = useHistory();
    console.log(props.classroom_title);
    return (
        <div>
            <span className="subject_text"
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => {
                    history.push({
                        pathname: props.link
                            + "/" + props.userId
                            + "/" + props.classId
                            + "/" + props.classroom_title
                    })
                }} > {props.title}</span>
        </div>
    );

}

function Subject(props) {
    console.log('서브젝트렌더');
    console.log(props.userId + props.classId + props.title);

    let data = props.data;
    let mode = props.mode;

    let list = [];
    let route = []

    if (data.length == 3) {

        list.push(<Subject_Link key={data[0].id} title={data[0].title} style={{ cursor: "pointer" }}
            link='/mainpage/teacher/student'
            classroom_title={props.title}
            userId={props.userId}
            classId={props.classId}
        />);
        list.push(<Subject_Link key={data[1].id} title={data[1].title} style={{ cursor: "pointer" }}
            link='/mainpage/teacher/workbook'
            classroom_title={props.title}
            userId={props.userId}
            classId={props.classId}

        />);
        list.push(<Subject_Link key={data[2].id} title={data[2].title} style={{ cursor: "pointer" }}
            link='/mainpage/teacher/feedback'
            classroom_title={props.title}
            userId={props.userId}
            classId={props.classId}

        />);


        //상단 라우트
        route.push(<Route exact path='/mainpage/teacher/student/:userId/:classId/:title' render={() => <Student />} key={data[0].id} />)
        route.push(<Route exact path='/mainpage/teacher/workbook/:userId/:classId/:title' render={() => <Teacher_WorkBook />} key={data[1].id} />)
        route.push(<Route exact path='/mainpage/teacher/feedback/:userId/:classId/:title' render={() => <FeedBack />} key={data[2].id} />);

        //워크북 상세 라우트
        route.push(<Route exact path='/mainpage/teacher/workbook/:userId/:classId/:title/:quizlist' render={() => <QuizList />} key="quizlist" />);
        route.push(<Route path={['/mainpage/teacher/workbook/:userId/:classId/:title/quizlist/:problemmain', '/mainpage/teacher/feedback/:userId/:classId/:title/quizlist/problemmain']} render={() => <ProblemMain />} key="problemadd" />);

    }
    else {
        list.push(<Subject_Link key={data[0].id} title={data[0].title}
            link='/mainpage/student/workbook'
            classroom_title={props.title}
            userId={props.userId}
            classId={props.classId}
        />);
        route.push(<Route path='/mainpage/student/workbook/:userId/:classId/:title' component={Student_WorkBook} exact={true} key={data[0].id}
        />)

        //워크북 상세 라우트
        route.push(<Route exact path='/mainpage/student/workbook/:userId/:classId/:title/quizlist' render={() => <Student_QuizList />} key="quizlist" />);
        route.push(<Route path={['/mainpage/student/workbook/:userId/:classId/:title/quizlist/:submitmain', '/mainpage/student/feedback/:userId/:classId/:title/quizlist/:submitmain']} render={() => <SubmitMain />} key="problem_newsubmit" />);


    }




    return (
        <div>

            <div className={mode + "_subject"}>
                <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <img style={{ marginTop: '5px', width: '80px' }} src={require('../image/iconBiglogo.png').default} />
                    <p style={{ marginTop: 0, marginBottom: '5px', textAlign: 'center', fontFamily: 'esamanruLight' }}>{props.title}</p>
                </div>
                {list}
            </div>
            {route}
        </div >
    );

}

export default Subject;