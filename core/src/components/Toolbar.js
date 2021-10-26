/*eslint-disable */

import React, { useState } from 'react';
import '../css/Toolbar.css'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp'
import Login_Success from './Login_Success';

//맨 상단바 (로그인, 회원가입)
const Toolbar_Link = props => {
    return (
        <div>
            <p className="text_style">
                <Link to={props.link} className="subject_text" > {props.title}</Link>
            </p>
        </div>
    );

}
//상단바 구성하고, 맨처음은 로그인 띄워주기
const Toolbar = props => {
    let data = props.data;
    let list = [];
    let route = [];
    list.push(<Toolbar_Link key={data[0].id} title={data[0].title} link='/' />);
    list.push(<Toolbar_Link key={data[1].id} title={data[1].title} link='/signup' />);


    route.push(<Route exact path='/' component={Login} key={data[0].title} />);
    route.push(<Route path='/signup' component={SignUp} key={data[1].title} />);

    return (
        <div>
            <div className="tool_bar">
                {list}
            </div>
            {/*실질적인 랜더링장소 */}
            {route}
        </div>
    );

}

export default Toolbar