/*eslint-disable */

import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KakaoShare from './KakaoShare';
import { Button, styled } from '@mui/material';
import '../css/Student.css'
import { RoundedCorner } from '@material-ui/icons';
import { color, fontWeight } from '@mui/system';
import DeleteModal from './DeleteModal';

import { useLocation, withRouter } from "react-router";
import { getStudentlist } from '../../_actions/teacher_action';
import { getUser } from '../../_actions/user_action';
import { useDispatch } from 'react-redux';

const AddStudent = styled(Button)({
    marginLeft: '87%',
    padding: '0.8%',
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: 'esamanruLight',
    fontWeight: 'normal',
    '&:hover': {
        background: "#E0BFE6",
        color: "#8154A0"
    }
});


function BoardItem(props) {
    console.log(props.row);

    return (
        <tr align="center" style={{ height: '60px' }}>
            <td>{props.row.brdno}</td>
            <td>{props.row.id}</td>
            <td>{props.row.name}</td>
            <td>{props.row.phone}</td>
            <td>{props.row.affiliation}</td>
            <td><DeleteModal></DeleteModal></td>
        </tr>
    );

}
function Student(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const [userlist, setUserlist] = useState([]);
    const [board, setBoard] = useState([]);
    const [boards, setBoards] = useState([]);

    const classroom_title = location.state.classroom_title;
    const class_id = location.state.class_id


    useEffect(() => {
        //강의실에서 아이디 가져오고
        dispatch(getStudentlist(class_id))
            .then(res => {
                if (res.payload.getUserSucess) {
                    setUserlist(res.payload.data);
                }
            })
    }, [])

    useEffect(() => {
        userlist.map((user, index) => {
            dispatch(getUser(user))
                .then(res => {
                    if (res.payload.getSuccess) {
                        board.push(
                            <tr align="center" style={{ height: '60px' }}>
                                <td>{index}</td>
                                <td>{res.payload.data[0].nick}</td>
                                <td>{res.payload.data[0].name}</td>
                                <td>{res.payload.data[0].phone}</td>
                                <td>{res.payload.data[0].affiliation}</td>
                                <td><DeleteModal></DeleteModal></td>
                            </tr>

                        )
                    }

                })

        })
        setBoards(board);

    }, [userlist])


    //학생 초대 카카오 API
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('d1a90c494e1cdb68196c4145544ffac1');
        }
        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '학생 초대',
                description: '여기 링크~!~!',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                    mobileWebUrl: 'https://cheonmro.github.io/',
                    webUrl: 'https://cheonmro.github.io/'
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: 'https://cheonmro.github.io/',
                        webUrl: 'https://cheonmro.github.io/'
                    }
                },
                {
                    title: '앱으로 보기',
                    link: {
                        mobileWebUrl: 'https://cheonmro.github.io/',
                        webUrl: 'https://cheonmro.github.io/'
                    }
                }
            ]
        });
    }, [boards])



    return (
        <div className="main_div">
            <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px' }}>Student</h2>
            <div style={{ width: '85%', margin: '20px auto' }}>
                <table border="1" >
                    <tbody>
                        <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
                            <td width="100">No</td>
                            <td width="200">아이디</td>
                            <td width="200">이름</td>
                            <td width="400">전화번호</td>
                            <td width="200">소속</td>
                            <td width="50">삭제</td>
                        </tr>
                        {
                            boards
                        }
                    </tbody>
                </table >

            </div>
            <div className="Kakao">
                <a id="kakao-link-btn" href="javascript:;" style={{ textDecoration: 'none' }}>
                    <AddStudent>학생 초대</AddStudent>
                </a>
            </div>
        </div >
    );

}


export default withRouter(Student);
