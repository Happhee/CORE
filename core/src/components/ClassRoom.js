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
    let objectClassroom = []

    let [class_id, setClass_id] = useState([]);
    useEffect(() => {

        //클래스룸 가져오기
        dispatch(getUser(location.state.login_id))
            .then(res => {
                if (res.payload.getSuccess) {
                    res.payload.data[0].belonged_classes.map((data) => {
                        objectClassroom.push({ title: data.title, class_id: data.class_id })
                    })

                    setClassrooms(objectClassroom)
                }
                else {
                    console.log(res.payload)
                }
            })
    }, [])
    console.log(classrooms);

    function insertClassroom(value) {
        let class_id = location.state.login_id + Date.now();
        let body = {
            nick: location.state.login_id,
            belonged_classes: [{ title: value, class_id: class_id }]
        }

        dispatch(addClassroom(body))
            .then(res => {
                console.log("업데이트 ->")

                console.log(res.payload);
                if (res.payload.updateSuccess) {
                    setClassrooms(preClassrooms => [...preClassrooms, body.belonged_classes[0]]);
                }
                else {
                    alert(res.payload.message)
                }
            }).catch(err => {
                console.log(err)
            })

        let class_body = {
            name: value,
            classroom_master: location.state.login_id,
            class_id: class_id
        }

        dispatch(createClassroom(class_body))
            .then(res => {
                console.log("강의실 ->")
                console.log(res.payload);
                if (res.payload.createClassroom) {
                    setClass_id(class_body.class_id);
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
                            classroom_title: classroom.title,
                            id: location.state.login_id,
                            class_id: classroom.class_id
                        }
                    })
                }}
            >{classroom.title}</span>
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