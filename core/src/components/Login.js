/*eslint-disable */

import React, { useReducer, useState, useEffect } from 'react';
import '../css/Login.css';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { BrowserRouter as useHistory, withRouter } from 'react-router-dom';
import Toolbar from './Toolbar';
import { Checkbox, Button, styled } from '@mui/material';

import CssAlert from '../css/CssAlert';
import CssTextField from '../css/CssTextField';
import CssButton from '../css/CssButton';

import { useAlert } from 'react-alert';
import * as InputVaildation from './InputValidation'

// 서버 통신

import { useDispatch } from 'react-redux'
import { loginUser } from '../_actions/user_action'


const CssCheckbox = styled(Checkbox)({
    marginLeft: '10px',
    marginRight: '10px'
});
const CssBtn = styled(Button)({
    width: "content",
    backgroundColor: '#fff',
    borderRadius: '5px',
    color: '#000',
    fontsize: "large",
    fontWeight: "bold",
    fontFamily: "esamanruLight",
    '&:hover': {
        background: "#8154A0",
        color: "#fff"
    }
});

function Login(props) {

    const dispatch = useDispatch();
    let toolbar = [
        { id: 1, title: 'Login', link: '/' },
        { id: 2, title: 'Sign Up', link: '/signup' }];

    console.log('로그인렌더');


    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);
    let [login_data, setLogin_data] = useState([
        { id: "1", title: "ID", value: "" },
        { id: "2", title: "PW", value: "" },
    ])

    let [mode, setMode] = useState('teacher');
    let [helperText_data, setHelperText_data] = useState([])
    function type() {
        if (data[0].checked === true)
            return 0;
        else
            return 1;
    }
    //모드에 따른 분류
    function handleLogin(event) {
        event.preventDefault();
        let partType = type();

        let body = {
            nick: login_data[0].value,
            password: login_data[1].value,
            role: partType
        }

        dispatch(loginUser(body))
            .then(res => {
                if (res.payload.loginSuccess) {
                    // props.history.push(`/classroom/${mode}`);
                    props.history.push({
                        pathname: "/classroom/" + mode + "?userId=" + login_data[0].value,
                    })
                } else {
                    alert(res.payload.message)
                }
            })
            .catch((err) => {
                console.log(err);
            });



    }

    //회원가입 
    function SignUp_Click() {
        props.history.push(`/signup`);
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
    useEffect(() => { }, []);
    useEffect(() => {

        setHelperText_data(InputVaildation.isRegex(login_data, helperText_data))




    }, [login_data], [])

    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="login_box">
                <img style={{ width: "200px", marginTop: "3%", marginBottom: "-2px", float: "left" }} src={require('../image/icon_BigLogo.png').default} />

                <div className="login_content" style={{ padding: "10px" }}>

                    <span className="login_text"> {login_data[0].title} </span>
                    <CssTextField className="login_input_box" size="small" variant="outlined" id="custom-css-outlined-input1" maxRows={1}
                        name={login_data[0].id} value={login_data[0].value} onChange={handleInputChange}
                        helperText={helperText_data[0]}
                        style={{ color: "black", marginLeft: "5%", width: "280px" }} />

                    <span className="login_text">{login_data[1].title}  </span>
                    <CssTextField className="login_input_box" type="password" size="small" variant="outlined" id="custom-css-outlined-input2" maxRows={1}
                        name={login_data[1].id} value={login_data[1].value} onChange={handleInputChange}
                        helperText={helperText_data[1]}
                        style={{ marginLeft: "5%", width: "280px" }} />

                    <div className="check_box" style={{ marginTop: "0px" }} >
                        <CssCheckbox type="checkbox" checked={data[0].checked}
                            value={data[0].value} onChange={onChange} />
                        <span>{data[0].value}</span>

                        <CssCheckbox type="checkbox" checked={data[1].checked}
                            value={data[1].value} onChange={onChange} />
                        <span>{data[1].value}</span>
                    </div>

                    <div className="link_box" style={{ marginTop: "0px", float: 'right', width: "100%" }}>
                        <CssBtn style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", borderRight: '2px solid #000' }} size="large" onClick={handleLogin} >LOGIN </CssBtn>
                        <CssBtn style={{ margintLeft: "1%", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} size="large" onClick={SignUp_Click} >SIGN UP </CssBtn>

                    </div>
                </div>
            </div>
        </div >
    );

}

export default withRouter(Login);




