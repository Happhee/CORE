/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/SignUp.css';
import Toolbar from './Toolbar';

function SignUp() {
    console.log('회원가입렌더');

    let [toolbar, setToolBar] = useState([{ id: 1, title: 'Login' }, { id: 2, title: 'Sign Up' }])
    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: "false" },
        { id: 2, value: "학생", checked: "false" }])



    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="signup_box">
                <Core_Logo />
                <div className="content">
                    {/* 회원가입 타이틀  */}
                    <div className="title_box">
                        <span>회원가입</span>
                    </div>

                    {/* 아이디 */}
                    <div className="input_box">
                        <span className="text"> ID </span>
                        <input />
                    </div>

                    {/* 비밀번호 */}
                    <div className="input_box">

                        <span className="text"> PW </span>
                        <input />
                    </div>

                    {/* 이름 */}
                    <div className="input_box">
                        <span className="text"> 이름 </span>
                        <input />
                    </div>

                    {/* 전화번호 */}
                    <div className="input_box">
                        <span className="text"> 전화번호 </span>
                        <input />
                    </div>

                    {/* 소속 */}
                    <div className="input_box">
                        <span className="text"> 소속 </span>
                        <input />
                    </div>

                    {/* 선생님/학생 */}
                    <div className="check_box">

                        <input type="checkbox" cheked={data[0].checked}
                            value={data[0].value} />
                        <span>{data[0].value}</span>

                        <input type="checkbox" cheked={data[1].checked}
                            value={data[1].value} />
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