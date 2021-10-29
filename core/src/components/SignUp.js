/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/SignUp.css';
import Toolbar from './Toolbar';

function SignUp() {
    console.log('회원가입렌더');

    let toolbar = [
        { id: 1, title: 'Login', link: '/' },
        { id: 2, title: 'Sign Up', link: '/signup' }];
    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);

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
                    <div className="title_box">
                        <span>회원가입</span>
                    </div>

                    {/* 아이디 */}

                    <span className="signup_text"> ID </span>
                    <input className="signup_input_box" />




                    {/* 비밀번호 */}

                    <span className="signup_text"> PW </span>
                    <input className="signup_input_box" />

                    {/* 이름 */}
                    <span className="signup_text"> 이름 </span>
                    <input className="signup_input_box" />

                    {/* 전화번호 */}
                    <span className="signup_text"> 전화번호 </span>
                    <input className="signup_input_box" />

                    {/* 소속 */}
                    <span className="signup_text"> 소속 </span>
                    <input className="signup_input_box" />

                    {/* 선생님/학생 */}
                    <div className="check_box">

                        <input type="checkbox" checked={data[0].checked}
                            value={data[0].value} onChange={onChange} />
                        <span>{data[0].value}</span>

                        <input type="checkbox" checked={data[1].checked}
                            value={data[1].value} onChange={onChange} />
                        <span>{data[1].value}</span>
                    </div>

                    <div className="signup_success_box">
                        <input type="submit" value="SIGN UP" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;