/*eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as Core_Logo } from '../css/Core.svg';
import '../css/ClassRoom.css';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
function ClassRoom({ match, history }) {
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    const { mode } = match.params;
    let startpage = null;
    let add_button = null;
    let dialog = null;

    //서버로 부터 강의실 목록 가져오기 
    let [classrooms, setClassrooms] = useState(
        ['C프로그래밍 및 실습',
            '자료구조 및 실습',
            '알고리즘 및 실습',
            '고급 C프로그래밍 및 실습',
            '컴퓨터구조',
            '운영체제']
    )
    let [classroom, setClassroom] = useState('');

    const class_list = classrooms.map((classroom, index) =>
        <div className="click_box" key={index}>
            <Link to={`../../mainpage/${mode}/${startpage}`} className="link" key={index}>{classroom}</Link>
        </div>);

    if (mode == 'teacher') {
        startpage = 'student';
        add_button = [
            <div className="add_class_box" key="add">
                <button className="add_button" key="add" onClick={handleClickOpen} >+</button>
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




    let [dialog_data, setDialog_data] = useState({

        file: null,
        fileName: '',
        open: false

    })

    function handleClickOpen() {
        setDialog_data({ open: true });
    }
    function handleClose() {
        setDialog_data({ file: null, fileName: '', open: false });
    }

    function handleFormSubmit() {

        setClassrooms([...classrooms, classroom])
        setDialog_data({ open: false })
    }

    const handleValueChange = (e) => {
        const { value } = e.target;
        console.log(value);

        setClassroom(value);
    }

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
                    <Dialog open={dialog_data.open} onClose={handleClose}>

                        <DialogTitle >강의실 추가하기</DialogTitle>

                        <DialogContent>
                            <TextField label="강의실명" type="text" name="classroom" value={classroom} onChange={handleValueChange} /><br />
                        </DialogContent>

                        <DialogActions>

                            <Button variant="contained" color="primary" onClick={handleFormSubmit} >추가</Button>

                            <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>

                        </DialogActions>

                    </Dialog>
                </div>
            </div>
        </div>
    );

};

export default ClassRoom;