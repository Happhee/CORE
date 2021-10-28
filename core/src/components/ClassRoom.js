/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function ClassRoom({ match, history }) {
    let toolbar = [{ id: 1, title: 'My' }, { id: 2, title: 'WorkBank' }];

    const { mode } = match.params;
    let startpage = null;



    if (mode == 'teacher') {
        startpage = 'student';
    }
    // 툴바 모드 바꿔주기 
    else if (mode == 'student') {
        startpage = 'workbook';
        toolbar[1].title = 'FeedBank';

    }
    console.log('강의실렌더링');


    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="classroom_box">
                <Core_Logo />
                <div className="content">
                    {/* 회원가입 타이틀  */}
                    <div className="title_box">
                        <span>나의 강의실</span>
                    </div>
                    <div className="title_box">

                        <Link to={`../../mainpage/${mode}/${startpage}`}>C 프로그래밍 및 실습</Link>
                    </div>
                    <div className="title_box">

                        <Link to={`../../mainpage/${mode}/${startpage}`}>C 프로그래밍 및 실습</Link>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default ClassRoom;