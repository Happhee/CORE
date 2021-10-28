/*eslint-disable */
import React, { useReducer, useState } from 'react';
import '../css/Login.css';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Toolbar from './Toolbar';

function Login() {
    let history = useHistory();
    let toolbar = [
        { id: 1, title: 'Login', link: '/' },
        { id: 2, title: 'Sign Up', link: '/signup' }];

    console.log('로그인렌더');

    let [mode, setMode] = useState('teacher');

    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);



    //모드에 따른 분류
    function ClassRoom_Click() {
        history.push(`/classroom/${mode}`);
    }

    //회원가입 
    function SignUp_Click() {
        history.push(`/signup`);
    }


    //체크박스 하나만 선택할수 있게 만들기
    function onChange(e) {
        var newData = [...data];
        if (e.target.value == '선생님') {
            setMode('teacher');

            newData[0].checked = true;
            newData[1].checked = false;
            setData(newData);

        } else {
            setMode('student');

            newData[0].checked = false;
            newData[1].checked = true;
            setData(newData);

        }
    }


    return (
        <div>
            <Toolbar data={toolbar} />

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
                        <button onClick={ClassRoom_Click} >LOGIN </button>
                        <button onClick={SignUp_Click} >SIGN UP </button>
                    </div>


                </div>
            </div>
        </div >
    );

}

export default Login;