/*eslint-disable */

import React, { Component } from 'react';
import '../css/Toolbar.css'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp'
//맨 상단바 
class Toolbar_Link extends Component {
    render() {
        return (
            <div>
                <p className="text_style">
                    <img src={this.props.img_src} style={{ width: 40, height: 40 }} />
                    <Link to={this.props.link} className="subject_text" > {this.props.title}</Link>
                </p>
            </div>
        );
    }
}
class Toolbar extends Component {
    render() {
        let data = this.props.data;
        let list = [];
        let route = [];

        list.push(<Toolbar_Link key={data[0].id} title={data[0].title} link='/login' />);
        list.push(<Toolbar_Link key={data[1].id} title={data[1].title} link='/signup' />);

        route.push(<Route exact path='/login' component={Login} />);
        route.push(<Route exact path='/signup' component={SignUp} />);
        return (
            <div>
                <div className="tool_bar">
                    {list}
                    {route}
                </div>
            </div>
        );
    }
}

export default Toolbar