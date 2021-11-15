/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/Information.css'
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import CssTextField2 from '../css/CssTextField';
import { Button, styled } from '@mui/material';

const CssBtn = styled(Button)({
    marginLeft: '0px',
    marginTop:"-20px",
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
        background: "#E0BFE6",
        color: "#FFF"
    }
});
//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function My({ match }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    const { mode } = match.params;
    let startpage = null;
    let [data, setData] = useState([
        { id: 1, value: "선생님", checked: false },
        { id: 2, value: "학생", checked: false }]);


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

            <div className="top_box">
            <img style={{ width: "200px", marginTop: "3%", marginBottom: "-2px", float: "left" }} src={require('../image/icon_BigLogo.png').default} />
                <div className="information_content">
                    {/* 타이틀  */}
                    <div className="informaion_title_box">
                        내 정보
                    </div>

                    <div className="information_input_content">
                        {/* 왼쪽 블럭 */}
                        <div className="left_div">
                            {/* 아이디 */}
                            <div className="input_box">
                                <div className="text"> ID </div>
                                <CssTextField2  size="small" />
                            </div>
                            {/* 예전 비밀번호 */}
                            <div className="input_box">

                                <div className="text"> Old PW </div>
                                <CssTextField2  size="small" />
                            </div>
                            {/* 새로운 비밀번호 */}
                            <div className="input_box">

                                <div className="text">New PW </div>
                                <CssTextField2  size="small" />
                            </div>
                            {/* 새 비밀번호 확인 */}
                            <div className="input_box">

                                <div className="text">Confrim New PW </div>
                                <CssTextField2  size="small" />
                            </div>
                        </div>

                        <div className="right_div">
                            {/* 이름 */}
                            <div className="input_box">
                                <div className="text"> 이름 </div>
                                <CssTextField2  size="small" />
                            </div>

                            {/* 전화번호 */}
                            <div className="input_box">
                                <div className="text"> 전화번호 </div>
                                <CssTextField2  size="small" />
                            </div>

                            {/* 소속 */}
                            <div className="input_box">
                                <div className="text"> 소속 </div>
                                <CssTextField2  size="small" />
                            </div>

                            {/* 선생님/학생 */}
                            <div className="check_box">
                                <input type="checkbox" checked={data[0].checked}
                                    value={data[0].value} onChange={onChange} />
                                <span>{data[0].value}</span>

                                <input type="checkbox" checked={data[1].checked}
                                    value={data[1].value} onChange={onChange} />
                                <span>{data[1].value}</span>
                            </div>


                        </div>
                    </div>
                        <CssBtn type="submit" variant="contained" >수정하기</CssBtn>


                </div>
            </div>
        </div>
    );

};

export default My;