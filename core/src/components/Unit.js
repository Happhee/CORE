import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import CoreDialog from './CoreDialog';
const CssButton = styled(Button)({
    marginLeft: '10px'
});

class Customer extends React.Component {
    render() {

        let edit = null;
        let link = null;
        let listbox_datas = [
            { id: 1, value: "C프로그래밍 및 실습" },
            { id: 2, value: "자료구조 및 실습" },
            { id: 3, value: "컴퓨터구조" },
            { id: 4, value: "운영체제" }
        ]


        if (this.props.editType == "MainList" || this.props.editType == "QuizList") {
            console.log(this.props.editType);

            edit = [<TableCell align="center" key="edit">
                <CoreDialog key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                    dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={this.props.handleFormSubmit} />
                <CssButton key="modify" variant="contained" color="secondary">수정</CssButton>
                <CssButton key="delete" variant="contained" color="secondary">삭제</CssButton>
            </TableCell>];
            if (this.props.editType == "MainList") {
                link = [<Link key="link" to={`../../teacher/workbank_quizlist?mainunit=${this.props.id}`} >{this.props.name}</Link>]

            }
            else {
                link = [<p key="p" >{this.props.name}</p>]
            }


        } else {
            link = [<Link key="link" to={`../../mainpage/teacher/${this.props.startpage}/quizlist?mainunit=${this.props.id}`} >{this.props.name}</Link>]
        }
        return (
            <TableRow >
                <TableCell align="center" key="id">{this.props.id}</TableCell>
                <TableCell align="center" key="name">
                    {link}

                </TableCell>
                <TableCell align="center" key="count">{this.props.count}</TableCell>
                {edit}
            </TableRow>
        )
    }
}

export default Customer;


