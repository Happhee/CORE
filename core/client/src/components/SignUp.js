/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/SignUp.css';
import Toolbar from './Toolbar';
import CssTextField from '../css/CssTextField';
import Checkbox from '@mui/material/Checkbox';
import AlertDialog from './AlertDialog';
import CssButton from '../css/CssButton';

import { BrowserRouter as useHistory, withRouter } from 'react-router-dom';


import *as InputVaildation from './InputValidation'

import { useDispatch } from 'react-redux'
import { registerUser } from '../_actions/user_action'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function SignUp(props) {
    console.log('회원가입렌더');
    const dispatch = useDispatch();
    let toolbar = [
        { id: 1, title: 'Login', link: '/' },
        { id: 2, title: 'Sign Up', link: '/signup' }];
    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);
    let [signup_state, setSignup_state] = useState();
    let [signup_data, setSignup_data] = useState([
        { id: "1", title: "ID", value: "" },
        { id: "2", title: "PW", value: "" },
        { id: "3", title: "이름", value: "" },
        { id: "4", title: "전화번호", value: "" },
        { id: "5", title: "소속", value: "" }
    ])

    function mode() {
        if (data[0].value.checked === true)
            return true;
        else
            return false;
    }
    function handleSignup(event) {
        console.log("여기")
        let partType = mode();

        let body = {
            id: signup_data[0].value,
            pw: signup_data[1].value,
            name: signup_data[2].value,
            phone: signup_data[3].value,
            affiliation: signup_data[4].value,
            part: partType
        }

        dispatch(registerUser(body))
            .then(res => {
                if (res.payload.success) {
                    alert('회원가입이 완료되었습니다!')
                    props.history.goBack();
                } else {
                    console.log(res.payload);
                    alert(res.payload)
                }
            })
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setSignup_data(InputVaildation.newTextfieldValue(signup_data, value, name));
    }
    //체크박스 하나만 선택할수 있게 만들기
    function onChange(e) {
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
            <Toolbar data={toolbar} />

            <div className="signup_box">
                <Core_Logo />
                <div className="signup_content">
                    {/* 회원가입 타이틀  */}
                    {/* <div className="signup_sub_div">

                    </div> */}
                    <div className="title_box">
                        <span>회원가입</span>
                    </div>

                    <span className="signup_text"> {signup_data[0].title} </span>
                    <CssTextField className="signup_input_box" size="small" variant="outlined" id="custom-css-outlined-input1" maxRows={1}
                        name={signup_data[0].id} value={signup_data[0].value} onChange={handleInputChange} />

                    <span className="signup_text"> {signup_data[1].title} </span>
                    <CssTextField className="signup_input_box" type="password" size="small" variant="outlined" id="custom-css-outlined-input2" maxRows={1}
                        name={signup_data[1].id} value={signup_data[1].value} onChange={handleInputChange} />

                    <span className="signup_text"> {signup_data[2].title} </span>
                    <CssTextField className="signup_input_box" size="small" variant="outlined" id="custom-css-outlined-input3" maxRows={1}
                        name={signup_data[2].id} value={signup_data[2].value} onChange={handleInputChange} />

                    <span className="signup_text"> {signup_data[3].title} </span>
                    <CssTextField className="signup_input_box" size="small" variant="outlined" id="custom-css-outlined-input4" maxRows={1}
                        name={signup_data[3].id} value={signup_data[3].value} onChange={handleInputChange} />

                    <span className="signup_text"> {signup_data[4].title} </span>
                    <CssTextField className="signup_input_box" size="small" variant="outlined" id="custom-css-outlined-input5" maxRows={1}
                        name={signup_data[4].id} value={signup_data[4].value} onChange={handleInputChange} />

                    {/* 선생님/학생 */}
                    <div className="check_box">

                        <Checkbox {...label} checked={data[0].checked}
                            value={data[0].value} onChange={onChange} />
                        <span className="check_box_span">{data[0].value}</span>

                        <Checkbox {...label} checked={data[1].checked}
                            value={data[1].value} onChange={onChange} />
                        <span className="check_box_span">{data[1].value}</span>

                    </div>

                    <div className="signup_success_box">
                        {/* <AlertDialog alertDialog_title="SIGN UP" textfield_state={signup_state} handleSignup={handleSignup} goLogin={goLogin} /> */}
                        <CssButton variant="contained" color="secondary" onClick={handleSignup} >SIGN UP</CssButton>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default withRouter(SignUp);