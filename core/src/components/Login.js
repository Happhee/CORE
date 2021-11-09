/*eslint-disable */
import React, { useReducer, useState, useEffect } from 'react';
import '../css/Login.css';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Toolbar from './Toolbar';
import { Checkbox, styled } from '@mui/material';

import AlertDialog from './AlertDialog';
import CssTextField from '../css/CssTextField';
import CssButton from '../css/CssButton';
import * as InputVaildation from './InputValidation'
import * as User from '../server/User';


const CssCheckbox = styled(Checkbox)({
    marginLeft: '10px',
    marginRight: '10px'
});


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
    let [login_data, setLogin_data] = useState([
        { id: "1", title: "ID", value: "" },
        { id: "2", title: "PW", value: "" },
    ])

    let [login_state, setLogin_state] = useState();
    let [alertdialog_state, setAlertdialog_state] = useState(false);

    //모드에 따른 분류
    function handleLogin() {
        return InputVaildation.checkTextfieldValue(login_data) &&
            InputVaildation.checkBoxChecked(data);

    }
    function goClassroom() {
        console.log("여기")

        history.push(`/classroom/${mode}`);
    }
    //회원가입 
    function SignUp_Click() {
        history.push(`/signup`);
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setLogin_data(InputVaildation.newTextfieldValue(login_data, value, name));
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

    // let [user, setUser] = useState([])
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             setUser(response.data);
    //         })
    // }, [])

    // useEffect(() => {
    //     console.log(user);
    // }, [user])
    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="login_box">
                <Core_Logo />

                <div className="login_content">

                    <div className="content_sub_div">
                        <span className="login_text"> {login_data[0].title} </span>
                        <CssTextField className="login_input_box" size="small" variant="outlined" id="custom-css-outlined-input" maxRows={1}
                            name={login_data[0].id} value={login_data[0].value} onChange={handleInputChange} />

                    </div>

                    <div className="content_sub_div">
                        <span className="login_text">{login_data[1].title}  </span>
                        <CssTextField className="login_input_box" size="small" variant="outlined" id="custom-css-outlined-input" maxRows={1}
                            name={login_data[1].id} value={login_data[1].value} onChange={handleInputChange} />
                    </div>


                    <div className="check_box" >

                        <CssCheckbox type="checkbox" checked={data[0].checked}
                            value={data[0].value} onChange={onChange} />
                        <span>{data[0].value}</span>

                        <CssCheckbox type="checkbox" checked={data[1].checked}
                            value={data[1].value} onChange={onChange} />
                        <span>{data[1].value}</span>
                    </div>

                    <div className="link_box" >
                        <AlertDialog alertDialog_title="LOGIN" textfield_state={login_state} handleLogin={handleLogin} goClassroom={goClassroom} />
                        <CssButton variant="contained" color="secondary" onClick={SignUp_Click} >SIGN UP </CssButton>

                    </div>
                </div>
            </div>
        </div >
    );

}

export default Login;