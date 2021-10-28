/*eslint-disable */
import React, { useState } from 'react';
import '../css/Toolbar.css'
import { Link } from 'react-router-dom';


//상단바 구성하고, 맨처음은 로그인 띄워주기
const Toolbar = props => {
    let data = props.data;

    return (
        <div>
            <div className="tool_bar">
                <Link to={data[0].link} className="text_style"> {data[0].title}</Link>
                <Link to={data[1].link} className="text_style">{data[1].title}</Link>
            </div>
        </div>
    );

}

export default Toolbar