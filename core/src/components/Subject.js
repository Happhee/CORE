/*eslint-disable */

import React, { Component } from 'react';

import '../css/Subject.css';
import { ReactComponent as Logo } from '../css/Core.svg';

import core_logo from '../css/Core.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Student from '../teacher/components/Student';
import Teacher_WorkBook from '../teacher/components/WorkBook';
import FeedBack from '../teacher/components/FeedBack';
import Student_WorkBook from '../student/components/WorkBook';

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
class Subject_Link extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.link} className="subject_text" > {this.props.title}</Link>
            </div>
        );
    }
}
class Subject extends Component {

    render() {
        let data = this.props.data;
        let mode = this.props.mode;
        let class_room = this.props.class_room;

        let list = [];
        let route = []

        if (data.length == 3) {

            list.push(<Subject_Link key={data[0].id} title={data[0].title}
                link='/' />);
            list.push(<Subject_Link key={data[1].id} title={data[1].title}
                link='/teacher/workbook' />);
            list.push(<Subject_Link key={data[2].id} title={data[2].title}
                link='/teacher/feedback' />);


            route.push(<Route path='/' component={Student} exact={true} />)
            route.push(<Route path='/teacher/workbook' component={Teacher_WorkBook} />)
            route.push(<Route path='/teacher/feedback' component={FeedBack} />)
        }
        else {
            list.push(<Subject_Link key={data[0].id} title={data[0].title}
                link='/' />);
            route.push(<Route path='/' component={Student_WorkBook} exact={true} />)

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
}

export default Subject;