/*eslint-disable */
import React, { useState } from 'react';
import '../css/Login.css';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SignUp from './SignUp';
import Login_Success from './Login_Success';



function Login() {
    let [mode, setMode] = useState('teacher');
    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);

    let route = [];

    function Login_Click() {
        var current_mode = [...data];

        //    회원인지 검증하는 서버 필요!!!

        if (current_mode[0].checked == true) {
            setMode('teacher');
        }
        else if (current_mode[1].checked == true) {
            setMode('student');
        }
        console.log(1);

        route.push(<Route path="/loginSuccess" component={Login_Success} />);
        console.log(2);

    }

    function SignUp_Click() {
        route.push(<Route path='/signup' component={SignUp} />);
    }


    //체크박스 하나만 선택할수 있게 만들기
    function onChange(e) {
        console.log(data);

        var newData = [...data];
        if (e.target.value == '선생님') {


            newData[0].checked = true;
            newData[1].checked = false;
            setData(newData);

        } else {
            newData[0].checked = false;
            newData[1].checked = true;
            setData(newData);

        }
    }


    return (
        <div>
            <div className="login_box">
                <Core_Logo />

                <div className="input_content">
                    <div className="input_box" >
                        <span className="text"> ID </span>
                        <input />
                    </div>

                    <div className="input_box" >
                        <span> PW </span>
                        <input />
                    </div>

                    <div className="check_box" >

                        <input type="checkbox" checked={data[0].checked}
                            value={data[0].value} onChange={onChange} />
                        <span>{data[0].value}</span>

                        <input type="checkbox" checked={data[1].checked}
                            value={data[1].value} onChange={onChange} />
                        <span>{data[1].value}</span>
                    </div>

                    <div className="link_box" >
                        <Link to="/loginSuccess" onClick={Login_Click} >LOGIN </Link>
                        <Link to="/signup" onClick={SignUp_Click} >SIGN UP </Link>
                    </div>
                    {route}
                </div>
            </div>
        </div >
    );

}

export default Login;