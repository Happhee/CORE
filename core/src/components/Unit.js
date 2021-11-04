import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';

import CoreDialog from './CoreDialog';
class Customer extends React.Component {
    render() {

        let edit = null;
        let listbox_datas = [
            { id: 1, value: "C프로그래밍 및 실습" },
            { id: 2, value: "자료구조 및 실습" },
            { id: 3, value: "컴퓨터구조" },
            { id: 4, value: "운영체제" }
        ]



        if (this.props.edit) {
            console.log(this.props.edit);

            edit = [<TableCell key="edit">
                <CoreDialog key="add" button_box_div="add_problem_class_box" button_box="add_problem_class_box" button_value="등록"
                    dialog_title="문제 등록하기" listbox_datas={listbox_datas} handleFormSubmit={this.props.handleFormSubmit} />
                <button key="modify">수정</button>
                <button key="delete">삭제</button>
            </TableCell>];


        }
        return (
            <TableRow>
                <TableCell key="id">{this.props.id}</TableCell>
                <TableCell key="name">
                    <Link key="link" to={`../../mainpage/teacher/${this.props.startpage}/quizlist?mainunit=${this.props.id}`} >{this.props.name}</Link>
                </TableCell>
                <TableCell key="count">{this.props.count}</TableCell>
                {edit}
            </TableRow>
        )
    }
}

export default Customer;


