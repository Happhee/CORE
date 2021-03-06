/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function My({ match, history }) {
    const { mode, userId, classId, title } = match.params;

    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/' + userId + '/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/' + userId + '/workbank' }];



    let startpage = null;


    if (mode == 'teacher') {
        startpage = 'student';
    }
    // 툴바 모드 바꿔주기 
    else if (mode == 'student') {
        startpage = 'workbook';
        toolbar[1].title = 'FeedBank';
        toolbar[0].link = '/student/' + userId + '/my';
        toolbar[1].link = '/student/' + userId + '/feedbank';


    }
    console.log('내정보 렌더링 ');


    return (
        <div>
            <Toolbar data={toolbar} />
            <div className="classroom_box">
                <img style={{ width: "200px", marginTop: "3%", marginBottom: "-2px", float: "left" }} src={require('../image/icon_BigLogo.png').default} />
                <div className="content">
                    {/* 회원가입 타이틀  */}
                    <div className="title_box" style={{ fontWeight: "bold" }}>
                        MY
                    </div>
                    <div className="click_box">

                        <Link to={`../../${mode}/${userId}/my/information`} className="link">내 정보</Link>
                    </div>
                    <div className="click_box">

                        <Link to={`../../classroom/${mode}/${userId}`} className="link">내 강의실</Link>
                    </div>
                    <div className="click_box">

                        <Link to={`/`} className="link">로그아웃</Link>
                    </div>
                    <div className="click_last_box">

                        <Link to={`/`} className="link">탈퇴하기</Link>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default My;