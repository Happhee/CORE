/*eslint-disable */

import React, { useState } from 'react';

import '../css/Subject.css';
import { ReactComponent as Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Student from '../teacher/components/Student';
import Teacher_WorkBook from '../teacher/components/WorkBook';
import FeedBack from '../teacher/components/FeedBack';
import Student_WorkBook from '../student/components/WorkBook';

const Logo_Room = props => {

    return (
        <div style={{ textAlign: "center" }}>
            <Logo width="100" height="200" />
            <p>{props.class_room}</p>
        </div>
    );

}
const Subject_Link = props => {

    return (
        <div>
            <Link to={props.link} className="subject_text" > {props.title}</Link>
        </div>
    );

}
const Subject = props => {


    let data = props.data;
    let mode = props.mode;
    let class_room = props.class_room;

    let list = [];
    let route = []

    if (data.length == 3) {

        list.push(<Subject_Link key={data[0].id} title={data[0].title}
            link='/' />);
        list.push(<Subject_Link key={data[1].id} title={data[1].title}
            link='/teacher/workbook' />);
        list.push(<Subject_Link key={data[2].id} title={data[2].title}
            link='/teacher/feedback' />);


        route.push(<Route path='/' component={Student} exact={true} key={data[0].id} />)
        route.push(<Route path='/teacher/workbook' component={Teacher_WorkBook} key={data[1].id} />)
        route.push(<Route path='/teacher/feedback' component={FeedBack} key={data[2].id} />)
    }
    else {
        list.push(<Subject_Link key={data[0].id} title={data[0].title}
            link='/' />);
        route.push(<Route path='/' component={Student_WorkBook} exact={true} key={data[0].id} />)

    }


    return (
        <div>
            <div className={mode + "_subject"}>
                <Logo_Room class_room={class_room} />
                {list}
            </div>
            {route}
        </div >
    );

}

export default Subject;