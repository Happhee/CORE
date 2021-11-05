import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button, styled } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import AlertDialog from './AlertDialog';

import CoreDialog from './CoreDialog';
const CssButton = styled(Button)({
    marginLeft: '10px',
    marginRight: '10px'
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

    // 문제 삭제 하는 서버코드 필요!!!!
    let [textfield_state, setTextfield_state] = useState('');

    if (props.editType === "MainList") {
        console.log(props.editType);

        edit = [<TableCell align="center" key="edit">
            <CoreDialog key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={props.handleFormSubmit} />
            <CssButton key="modify" variant="contained" color="secondary">수정</CssButton>
            <AlertDialog key="delete" alertDialog_title="삭제" textfield_state={textfield_state} handleRemoveClose={props.handleRemoveClose}
                subunit={props.id} />
        </TableCell>];

        link = [<Link key="link" to={`../../teacher/workbank_quizlist?mainunit=${props.id}`} >{props.name}</Link>]
    }
    else if (props.editType === "QuizList") {
        edit = [
            <TableCell align="center" key="edit">
                <CoreDialog key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                    dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={props.handleFormSubmit} />

                <CssButton key="modify" variant="contained" color="secondary" onClick={() => {
                    history.push(`/teacher/workbank_quizlist/problemmodify?mainunit=${props.mainunit}&subunit=${props.id}`)
                }}>수정</CssButton>

                <AlertDialog key="delete" alertDialog_title="삭제" textfield_state={textfield_state} handleRemoveClose={props.handleRemoveClose}
                    subunit={props.id} />
            </TableCell>];
        link = [<p key="p" >{props.name}</p>]

    }
    else {
        link = [<Link key="link" to={`../../mainpage/teacher/${props.startpage}/quizlist?mainunit=${props.id}`} >{props.name}</Link>]
    }
    return (
        <TableRow >
            <TableCell align="center" key="id">{props.id}</TableCell>
            <TableCell align="center" key="name">
                {link}

            </TableCell>
            <TableCell align="center" key="count">{props.count}</TableCell>
            {edit}
        </TableRow>
    )

}

export default Customer;


