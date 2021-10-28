/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';

import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function My({ match }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    const { mode } = match.params;
    let startpage = null;



    if (mode == 'teacher') {
        startpage = 'student';
    }
    // 툴바 모드 바꿔주기 
    else if (mode == 'student') {
        startpage = 'workbook';
        toolbar[1].title = 'FeedBank';
        toolbar[0].link = '/student/my';
        toolbar[1].link = '/student/feedbank';

    }
    console.log('내정보 렌더링 ');


    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="top_box">
                <Core_Logo />
                <div className="information_content">
                    {/* 타이틀  */}
                    <div className="informaion_box">
                        <span>내 정보</span>
                    </div>
                    {/* 왼쪽 블럭 */}
                    <div className="left_div">
                        {/* 아이디 */}
                        <div className="input_box">
                            <div className="text"> ID </div>
                            <input />
                        </div>
                        {/* 예전 비밀번호 */}
                        <div className="input_box">

                            <div className="text"> Old PW </div>
                            <input />
                        </div>
                        {/* 새로운 비밀번호 */}
                        <div className="input_box">

                            <div className="text">New PW </div>
                            <input />
                        </div>
                        {/* 새 비밀번호 확인 */}
                        <div className="input_box">

                            <div className="text">Confrim New PW </div>
                            <input />
                        </div>
                    </div>

                    <div className="right_div">
                        {/* 이름 */}
                        <div className="input_box">
                            <div className="text"> 이름 </div>
                            <input />
                            {/* 전화번호 */}
                            <div className="input_box">
                                <div className="text"> 전화번호 </div>
                                <input />
                            </div>

                            {/* 소속 */}
                            <div className="input_box">
                                <div className="text"> 소속 </div>
                                <input />
                            </div>

                            {/* 선생님/학생 */}
                            <div className="check_box">


                            </div>

                        </div>

                    </div>

                    <div className="modify_success_box">
                        <input type="submit" value="수정하기" />
                    </div>


                </div>
            </div>
        </div>
    );

};

export default My;