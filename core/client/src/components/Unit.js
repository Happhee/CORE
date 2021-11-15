/*eslint-disable */

import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button, styled } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import AlertDialog from './AlertDialog';

import CoreDialog from './CoreDialog';
import * as ProblemServer from '../teacher/server/ProblemServer';

const CssButton = styled(Button)({
    marginLeft: '10px',
    marginRight: '10px'
});
const RegisterBtn = styled(Button)({
    marginLeft: '0px',
    textAlign:'center',
    backgroundColor:'#E0BFE6',
    borderRadius:'30px',
    color:'#8154A0',
    fontWeight:'bold',
    '&:hover': {
        background: "#8154A0",
        color:"#FFF"
     }
});
const EditBtn = styled(Button)({
    marginLeft: '0px',
    textAlign:'center',
    backgroundColor:'#E0BFE6',
    borderRadius:'30px',
    color:'#8154A0',
    fontWeight:'bold',
    '&:hover': {
        background: "#8154A0",
        color:"#FFF"
     }
});
const BasicBtn = styled(Button)({
    marginLeft: '0px',
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
function Customer(props) {


    let edit = null;
    let link = null;
    let listbox_datas = [
        { id: 1, value: "C프로그래밍 및 실습" },
        { id: 2, value: "자료구조 및 실습" },
        { id: 3, value: "컴퓨터구조" },
        { id: 4, value: "운영체제" }
    ]
    let history = useHistory();



    let text_data = [
        { id: 1, label: "강의실명", name: "classroom", value: props.name }
    ]

    // 문제 삭제 하는 서버코드 필요!!!!
    let [textfield_state, setTextfield_state] = useState('');

    if (props.editType === "MainList") {

        edit = [<td width="300px" align="center" key="edit">
            <CoreDialog className="RegisterBtn" key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={props.handleFormSubmit} />

            <CoreDialog key="modify" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="수정"
                dialog_title="문제 수정하기" text_data={text_data} handleFormModify={props.handleFormModify}
                style={{ marginLeft: "10px", marginRight: "10px" }} />

            <AlertDialog key="delete" alertDialog_title="삭제" textfield_state={textfield_state} handleRemoveClose={props.handleRemoveClose}
                subunit={props.id} />
        </td>];

        link = [<Link style={{color:"#000"}} key="link" to={`../../teacher/workbank_quizlist?mainunit=${props.id}`} >{props.name}</Link>]
    }
    else if (props.editType === "QuizList") {
        edit = [
            <td align="center" key="edit">
                <CoreDialog key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                    dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={props.handleFormSubmit} />

                <EditBtn key="modify" variant="contained" color="secondary" onClick={
                    () => {
                        history.push({
                            pathname: "/teacher/workbank_quizlist/problemmodify?mainunit=" + props.mainunit + "&subunit=" + props.subunit,
                            state: {
                                problem_bottom_title: "수정하기",
                                grid_data: ProblemServer.getGrid_data("modify"),
                                input_data: ProblemServer.getInput_data("modify"),
                                output_data: ProblemServer.getOutput_data("modify")
                            }
                        })
                    }}>수정</EditBtn>

                <AlertDialog key="delete" alertDialog_title="삭제" textfield_state={textfield_state} handleRemoveClose={props.handleRemoveClose}
                    subunit={props.id} />
            </td>];
        link = [<p key="p" >{props.name}</p>]

    }
    else {
        link = [<Link key="link" to={`../../mainpage/teacher/${props.startpage}/quizlist?mainunit=${props.id}`} >{props.name}</Link>]
    }
    return (
        <tr style={{ color:"#000",fontFamily: 'esamanru', fontWeight: 'normal', height: '50px' }} align="center" >
            <td width="50px" align="center" key="id">{props.id}</td>
            <td width="450px" align="center" key="name">
                {link}
            </td>
            <td width="150px" align="center" key="count">{props.count}</td>
            {edit}
        </tr>
    )

}

export default Customer;


