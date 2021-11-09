/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/SignUp.css';
import Toolbar from './Toolbar';
import CssTextField from '../css/CssTextField';
import Checkbox from '@mui/material/Checkbox';
import AlertDialog from './AlertDialog';
import *as InputVaildation from './InputValidation'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SignUp() {
    console.log('회원가입렌더');

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
    //모드에 따른 분류
    function handleSignup() {
        return InputVaildation.checkTextfieldValue(signup_data) &&
            InputVaildation.checkBoxChecked(data);

    }
    function goLogin() {
        console.log("여기")
        history.back();
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setLogin_data(InputVaildation.newTextfieldValue(login_data, value, name));
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
                    {
                        signup_data.map((data, index) => {
                            return (
                                <>
                                    <span key={index} className="signup_text"> {data.title} </span>
                                    <CssTextField key={data.value} className="signup_input_box" size="small" variant="outlined" id="custom-css-outlined-input" maxRows={1}
                                        name={data.id} value={data.value} onChange={handleInputChange} />
                                </>)
                        })
                    }
                    {/* 선생님/학생 */}
                    <div className="check_box">
                        {
                            data.map((data) => {
                                return (
                                    <>
                                        <Checkbox {...label} key={data.id} checked={data.checked}
                                            value={data.value} onChange={onChange} />
                                        <span key={data.value} className="check_box_span">{data.value}</span>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="signup_success_box">
                        <AlertDialog alertDialog_title="SIGN UP" textfield_state={signup_state} handleSignup={handleSignup} goLogin={goLogin} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;