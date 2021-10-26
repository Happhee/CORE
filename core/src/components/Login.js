/*eslint-disable */
import React, { useState } from 'react';
import '../css/Login.css';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login_Success from './Login_Success';
import SignUp from './SignUp';



function Login() {
    function Login_Click() {
        <Route path='/login_success' component={Login_Success} />
    }

    function SignUp_Click() {
        <Route path='/login_success' component={Login_Success} />
    }

    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: "false" },
        { id: 2, value: "학생", checked: "false" }])


    return (
        <div>
            <div className="login_box">
                <Core_Logo />

                <div className="content">
                    <div className="input_box" style={{ gridColumn: "1 / 4" }}>
                        <span className="text"> ID </span>
                        <input />
                    </div>

                    <div className="input_box" style={{ gridColumn: "1 / 4" }}>
                        <span> PW </span>
                        <input />
                    </div>

                    <div className="check_box" style={{ gridColumn: "2 / 4" }}>
                        {/* <Change_Data data={this.state.check_data} onChangeBox={function () {

                            }.bind(this)} /> */}

                        <input type="checkbox" cheked={data[0].checked}
                            value={data[0].value} />
                        <span>{data[0].value}</span>

                        <input type="checkbox" cheked={data[1].checked}
                            value={data[1].value} />
                        <span>{data[1].value}</span>
                    </div>

                    <div className="link_box" style={{ gridColumn: "3 / 4" }}>
                        <Link to="/login_success" onClick={Login_Click()} >LOGIN </Link>
                        <Link to="/signup" onClick={SignUp_Click()} >SIGN UP </Link>
                        {/* <span> LOGIN </span>
                        <span> SIGN UP </span> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login;