/*eslint-disable */

import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KakaoShare from './KakaoShare';
import { Button, styled } from '@mui/material';
import '../css/Student.css'
import { RoundedCorner } from '@material-ui/icons';
import { color, fontWeight } from '@mui/system';
import DeleteModal from './DeleteModal';

import { withRouter } from "react-router";
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

// class Student extends Component {
//     constructor(props) {
//         super(props);
//         this.child = React.createRef();

//     }
//     state = {
//         boards: [
//             {
//                 brdno: 1,
//                 id: 'aaa',
//                 name: '김기기',
//                 phone: '010-1111-1111',
//                 school: '세종초등학교'
//             },
//             {
//                 brdno: 2,
//                 id: 'bbb',
//                 name: '김니니',
//                 phone: '010-2222-2222',
//                 school: '세종초등학교'
//             },
//             {
//                 brdno: 3,
//                 id: 'ccc',
//                 name: '김디디',
//                 phone: '010-3333-3333',
//                 school: '세종초등학교'
//             }
//         ],
//         classroom_title: this.props.classroom_title,
//         class_id: this.props.class_id
//     }
//     componentDidMount() {

//     }
//     //학생 초대 카카오 API
//     componentDidMount() {
//         if (!window.Kakao.isInitialized()) {
//             window.Kakao.init('d1a90c494e1cdb68196c4145544ffac1');
//         }
//         window.Kakao.Link.createDefaultButton({
//             container: '#kakao-link-btn',
//             objectType: 'feed',
//             content: {
//                 title: '학생 초대',
//                 description: '여기 링크~!~!',
//                 imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//                 link: {
//                     mobileWebUrl: 'https://cheonmro.github.io/',
//                     webUrl: 'https://cheonmro.github.io/'
//                 }
//             },
//             social: {
//                 likeCount: 286,
//                 commentCount: 45,
//                 sharedCount: 845
//             },
//             buttons: [
//                 {
//                     title: '웹으로 보기',
//                     link: {
//                         mobileWebUrl: 'https://cheonmro.github.io/',
//                         webUrl: 'https://cheonmro.github.io/'
//                     }
//                 },
//                 {
//                     title: '앱으로 보기',
//                     link: {
//                         mobileWebUrl: 'https://cheonmro.github.io/',
//                         webUrl: 'https://cheonmro.github.io/'
//                     }
//                 }
//             ]
//         });
//     }
//     handleRemove = (brdno) => {
//         this.setState({
//             boards: this.state.boards.filter(row => row.brdno !== brdno)
//         })
//     }
//     handleEdit = (brdno) => {
//         this.setState({
//             boards: this.state.boards.filter(row => row.brdno !== brdno)
//         })
//     }
//     handleSaveData = (data) => {
//         let boards = this.state.boards;
//         if (data.brdno === null || data.brdno === '' || data.brdno === undefined) {    // new : Insert
//             this.setState({
//                 maxNo: this.state.maxNo + 1,
//                 boards: boards.concat({ brdno: this.state.maxNo, brdwriter: data.brdwriter, brdtitle: data.brdtitle })
//             });
//         } else {                                                        // Update
//             this.setState({
//                 boards: boards.map(row => data.brdno === row.brdno ? { ...data } : row)
//             })
//         }
//     }
//     handleSelectRow = (row) => {
//         this.child.current.handleSelectRow(row);
//     }
//     render() {
//         const { boards } = this.state;


//         return (
//             <div className="main_div">
//                 <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px' }}>Student</h2>
//                 <div style={{ width: '85%', margin: '20px auto' }}>
//                     <table border="1" >
//                         <tbody>
//                             <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
//                                 <td width="100">No</td>
//                                 <td width="200">아이디</td>
//                                 <td width="200">이름</td>
//                                 <td width="400">전화번호</td>
//                                 <td width="200">소속</td>
//                                 <td width="50">삭제</td>
//                             </tr>
//                             {
//                                 boards.map(row =>
//                                     (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
//                                 )
//                             }
//                         </tbody>
//                     </table >

//                 </div>
//                 <div className="Kakao">
//                     <a id="kakao-link-btn" href="javascript:;" style={{ textDecoration: 'none' }}>
//                         <AddStudent>학생 초대</AddStudent>
//                     </a>
//                 </div>
//             </div >
//         );
//     }
// }

// export default withRouter(Student);

// class BoardItem extends React.Component {
//     handleSelectRow = () => {
//         const { row, onSelectRow } = this.props;
//         onSelectRow(row);
//     }
//     render() {
//         return (
//             <tr align="center" style={{ height: '60px' }}>
//                 <td>{this.props.row.brdno}</td>
//                 <td>{this.props.row.id}</td>
//                 <td>{this.props.row.name}</td>
//                 <td>{this.props.row.phone}</td>
//                 <td>{this.props.row.school}</td>
//                 <td><DeleteModal></DeleteModal></td>
//             </tr>
//         );
//     }
// }



function Student(props) {
    const dispatch = useDispatch();
    const [boards, setBoards] = useState([
        {
            brdno: 1,
            id: 'aaa',
            name: '김기기',
            phone: '010-1111-1111',
            school: '세종초등학교'
        },
        {
            brdno: 2,
            id: 'bbb',
            name: '김니니',
            phone: '010-2222-2222',
            school: '세종초등학교'
        },
        {
            brdno: 3,
            id: 'ccc',
            name: '김디디',
            phone: '010-3333-3333',
            school: '세종초등학교'
        }
    ])
    classroom_title = props.classroom_title;
    class_id = props.class_id

    useEffect(() => {
        dispatch(getStudentlist(class_id))
            .then(res => {
                if (res.payload.getUserSucess) {
                    setBoards(res.payload.data);
                }
            })


    }, [boards])

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
    }, [])




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
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} onRemove={handleRemove} onSelectRow={handleSelectRow} />)
                            )
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

class BoardItem extends React.Component {
    handleSelectRow = () => {
        const { row, onSelectRow } = props;
        onSelectRow(row);
    }
    render() {
        return (
            <tr align="center" style={{ height: '60px' }}>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.phone}</td>
                <td>{this.props.row.school}</td>
                <td><DeleteModal></DeleteModal></td>
            </tr>
        );
    }
}