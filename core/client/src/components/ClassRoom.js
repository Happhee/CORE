/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import CoreDialog from './CoreDialog';
import { useLocation, useHistory } from 'react-router-dom';


//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
import { useDispatch } from 'react-redux'
import { getUser } from '../_actions/user_action';
import { addClassroom, createClassroom } from '../_actions/teacher_action'

function ClassRoom({ match }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    const { mode } = match.params;
    const location = useLocation();
    const history = useHistory();
    console.log(location.state.login_id);

    let startpage = null;
    let add_button = null;
    let dialog = null;
    //서버로 부터 강의실 목록 가져오기 

    const dispatch = useDispatch();
    let [classrooms, setClassrooms] = useState([])
    useEffect(() => {
        let body = {
            id: location.state.login_id
        }
        //클래스룸 가져오기
        dispatch(getUser(body))
            .then(res => {
                if (res.payload.getSuccess) {
                    setClassrooms(res.payload.data.classroom)
                }
                else {
                    console.log(res.payload)
                }
            })

        // dispatch(getUsers())
        //     .then(res => {
        //         console.log(res);
        //     })

    }, [classrooms])

    function insertClassroom(value) {
        let body = {
            id: location.state.login_id,
            classroom: value
        }
        // 클래스룸 가져오기
        dispatch(addClassroom(body))
            .then(res => {
                if (res.payload.updateSuccess) {
                    console.log("업데이트 ")
                    console.log(res.payload.data.classroom);

                    // setClassrooms(res.payload.data.classroom)
                }
                else {
                    console.log(res.payload.message)
                }
            })
        let class_body = {
            name: value,
            classroom_master: location.state.login_id,
            class_id: location.state.login_id + Date.now()
        }

        dispatch(createClassroom(class_body))
            .then(res => {
                console.log(res.payload.createClassroom)
                if (res.payload.createClassroom) {

                    console.log(res.payload.message);
                }
                else {
                    console.log(res.payload.message)
                }
            }).catch((err) => {
                console.log(err);
            });
    }




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
                        insertClassroom(classroom[0].value);

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
            <span className="link" key={index}
                onClick={() => {
                    history.push({
                        pathname: "../../mainpage/" + mode + "/" + startpage,
                        state: {
                            classroom_title: classroom,
                            id: location.state.login_id
                        }
                    })
                }}
            >{classroom}</span>
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