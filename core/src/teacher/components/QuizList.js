/*eslint-disable */

import React, { Component } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, styled } from '@mui/material';
import queryString from 'query-string'
import '../css/ProblemAdd.css'
import * as ProblemServer from '../server/ProblemServer'
import DeleteModal from './DeleteModal';
import { makeStyles } from '@material-ui/core/styles';



const AddQuiz = styled(Button)({
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
                <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px' }}>WorkBook - QuizList</h2>
                <div style={{ width: '85%', margin: '20px auto' }}>
                    <table border="1" >
                        <tbody>
                            <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
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
            </div>
        );
    }
}
export default QuizList;
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
                <EditBtn onClick={
                    () => {
                        history.push({
                            pathname: "/mainpage/teacher/workbook/quizlist/problemmain?mainunit=" + mainunit + "&subunit=" + props.subunit,
                            state: {
                                problem_bottom_title: "수정하기",
                                grid_data: ProblemServer.getGrid_data("modify"),
                                input_data: ProblemServer.getInput_data("modify"),
                                output_data: ProblemServer.getOutput_data("modify")
                            }
                        })
                    }}>수정</EditBtn>
                <EditBtn>삭제</EditBtn></td>
        </tr>
    );

}

function ProblemAdd_Button(props) {
    let history = useHistory();
    let { search } = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit } = queryObj;
    return (
        <div>
            <AddQuiz
                onClick={() => {
                    history.push({
                        pathname: "/mainpage/teacher/workbook/quizlist/problemmain?mainunit=" + mainunit + "&subunit=" + props.subunit,
                        state: {
                            problem_bottom_title: "문제등록",
                            grid_data: ProblemServer.getGrid_data("register"),
                            input_data: ProblemServer.getInput_data("register"),
                            output_data: ProblemServer.getOutput_data("register")
                        }
                    })
                }}>문제등록</AddQuiz>
        </div >
    )
}