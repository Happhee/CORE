/*eslint-disable */

import React, { useState } from 'react';
import '../css/Toolbar.css'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp'
//맨 상단바 
const Toolbar_Link = props => {
    return (
        <div>
            <p className="text_style">
                <Link to={props.link} className="subject_text" > {props.title}</Link>
            </p>
        </div>
    );

}
const Toolbar = props => {
    let data = props.data;
    let list = [];
    let route = [];
    list.push(<Toolbar_Link key={data[0].id} title={data[0].title} link='/login' />);
    list.push(<Toolbar_Link key={data[1].id} title={data[1].title} link='/signup' />);

    route.push(<Route exact path='/login' component={Login} key={data[0].title} />);
    route.push(<Route path='/signup' component={SignUp} key={data[1].title} />);
    return (
        <div>
            <div className="tool_bar">
                {list}
            </div>
            {route}
        </div>
    );

}

export default Toolbar