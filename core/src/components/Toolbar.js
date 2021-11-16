/*eslint-disable */
import React, { useState } from 'react';
import '../css/Toolbar.css'
import { Link } from 'react-router-dom';
import { margin, width } from '@mui/system';


//상단바 구성하고, 맨처음은 로그인 띄워주기
const Toolbar = props => {
    let data = props.data;

    return (
        <div>
            <div className="tool_bar">
                <Link to={data[1].link} className="text_style">{data[1].title}</Link>
                <img style={{ width: '30px',height:'28px',marginRight:'10px'}} src={require('../image/iconWorkbank.png').default} />
                <Link to={data[0].link} className="text_style"> {data[0].title}</Link>
                <img style={{ width: '30px',height:'28px',marginRight:'10px'}} src={require('../image/iconMy.png').default} />
            </div>
        </div>
    );

}

export default Toolbar