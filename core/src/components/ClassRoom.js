/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import CoreDialog from './CoreDialog';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function ClassRoom({ match, history }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    const { mode } = match.params;
    let startpage = null;
    let add_button = null;
    let dialog = null;
    let [classroom, setClassroom] = useState('');

    //서버로 부터 강의실 목록 가져오기 
    let [classrooms, setClassrooms] = useState(
        ['C프로그래밍 및 실습',
            '자료구조 및 실습',
            '컴퓨터구조',
            '운영체제']
    )

    let text_data = [
        { id: 1, label: "강의실명", name: "classroom", value: '' }
    ]
    if (mode == 'teacher') {
        startpage = 'student';
        add_button = [
            <div className="add_class_box" key="add">
                <CoreDialog key="add" button_box="add_class_box" button_value="+"
                    dialog_title="강의실 추가하기" text_data={text_data} handleFormSubmit={function (classroom) {
                        console.log(classroom[0].value)
                        setClassrooms([...classrooms, classroom[0].value]);

                    }} />

            </div>

        ]
    }
    // 툴바 모드 바꿔주기 
    else if (mode == 'student') {
        startpage = 'workbook';
        toolbar[1].title = 'FeedBank';
        toolbar[0].link = '/student/my';
        toolbar[1].link = '/student/feedbank';

    }

    const class_list = classrooms.map((classroom, index) =>
        <div className="click_box" key={index}>
            <Link to={`../../mainpage/${mode}/${startpage}`} className="link" key={index}>{classroom}</Link>
        </div>);


    console.log('강의실렌더링');

    return (
        <div>
            <Toolbar data={toolbar} />

            <div className="classroom_box">
                <Core_Logo />
                <div className="content">

                    <div className="title_box">
                        <span>나의 강의실</span>
                    </div>
                    {class_list}
                    {add_button}
                </div>
            </div>
        </div>
    );

};

export default ClassRoom;