/*eslint-disable */

import React, { Component } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, styled } from '@mui/material';
import queryString from 'query-string'
import '../css/ProblemAdd.css'
class QuizList extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();

    }

    state = {
        boards: [
            {
                brdno: 1,
                brdtitle: '별탑 쌓기',
                brdwriter: '80'
            },
            {
                brdno: 2,
                brdtitle: '1부터 100더하기',
                brdwriter: '30'
            },
            {
                brdno: 3,
                brdtitle: '모래시계 만들기',
                brdwriter: '20'
            }
        ]
    }

    handleSaveData = (data) => {
        let boards = this.state.boards;
        if (data.brdno === null || data.brdno === '' || data.brdno === undefined) {    // new : Insert
            this.setState({
                maxNo: this.state.maxNo + 1,
                boards: boards.concat({ brdno: this.state.maxNo, brdwriter: data.brdwriter, brdtitle: data.brdtitle })
            });
        } else {                                                        // Update
            this.setState({
                boards: boards.map(row => data.brdno === row.brdno ? { ...data } : row)
            })
        }
    }
    handleSelectRow = (row) => {
        this.child.current.handleSelectRow(row);
    }

    render() {
        const { boards } = this.state;
        console.log('퀴즈렌더링');

        return (
            <div className="main_div">

                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No</td>
                            <td width="300">문제명</td>
                            <td width="100">정답률</td>
                            <td width="100">편집</td>
                        </tr>
                        {
                            boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}
                                mainunit="1" />)
                            )
                        }
                    </tbody>
                </table>
                <ProblemAdd_Button mainunit="1" subunit={boards.length + 1} />
            </div>
        );
    }
}
export default QuizList;

const CssButton = styled(Button)({
    marginLeft: '10px'
});

function BoardItem(props) {
    let history = useHistory();
    let { search } = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit } = queryObj;

    return (
        <tr align="center">
            <td>{props.row.brdno}</td>
            <td>{props.row.brdtitle}</td>
            <td>{props.row.brdwriter}</td>
            <td >
                <CssButton variant="contained" color="secondary" onClick={
                    () => {
                        history.push(`/mainpage/teacher/workbook/quizlist/problemadd?mainunit=${mainunit}&subunit=${props.row.brdno}`)
                    }}>수정</CssButton>
                <CssButton variant="contained" color="secondary" >삭제</CssButton></td>
        </tr>
    );

}

function ProblemAdd_Button(props) {
    let history = useHistory();
    let { search } = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit } = queryObj;
    return (
        <div className="problem_bottom_div">
            <Button marginleft="300px" variant="contained" color="secondary" onClick={() => { history.push(`/mainpage/teacher/workbook/problemadd?mainunit=${mainunit}&subunit=${props.subunit}`) }} id="problem_add">문제등록</Button>
        </div>
    )
}