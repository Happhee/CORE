/*eslint-disable */

import React, { Component } from 'react';
import '../css/QuizList.css'

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, styled } from '@mui/material';
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';


class QuizList extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    state = {
        boards: [
            {
                brdno: 1,
                submitCount: 1,
                brdtitle: '별탑 쌓기',
                score: '100',
                set: '첨삭대기중',
                startDate: '2021.10.20',
                endDate: '2021.10.22'
            },
            {
                brdno: 2,
                submitCount: 1,
                brdtitle: '별탑 쌓기',
                score: '70',
                set: '첨삭완료',
                startDate: '2021.10.20',
                endDate: '2021.10.22'
            },
            {
                brdno: 3,
                submitCount: 1,
                brdtitle: '별탑 쌓기',
                submitCount: 17,
                score: '20',
                set: '첨삭완료',
                startDate: '2021.10.20',
                endDate: '2021.10.22'
            }
        ]
    }

    render() {
        const { boards } = this.state;
        console.log('퀴즈렌더링');

        return (
            <div className="main_div">
                <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px',marginBottom:'0px' }}>WorkBook - QuizList</h2>
                <div >
                    <h1 style={{ width: '65%',  marginTop: '0px',float:"left",margin: '20px auto',marginLeft:"7.5%" }}>Chap1)반복문 이용하기</h1>
                    <h2 style={{ width: '15%', float:"right", marginTop: '0px',fontWeight:"lighter" }}>별탑 쌓기</h2>
                </div>
                <div style={{ width: '85%', margin: '20px auto' }}>
                    <table border="1" >
                        <tbody>
                            <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
                                <td width="50">제출ID</td>
                                <td width="100">문항번호</td>
                                <td width="400">문제명</td>
                                <td width="80">점수</td>
                                <td width="200">진행현황</td>
                                <td width="200">기간</td>

                            </tr>
                            {
                                boards.map(row =>
                                (<BoardItem key={row.brdno} row={row}
                                    mainunit="1" />)
                                )
                            }
                        </tbody>
                    </table>

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
            <td>{props.row.submitCount}</td>
            <td className="goToUnit" onClick={() => {
                history.push(`/mainpage/student/workbook/quizlist?mainunit=${props.row.brdno}`)
            }}
                style={{ cursor: "pointer", textDecorationLine: 'underline' }}>{props.row.brdtitle}</td>
            <td>{props.row.score}</td>
            <td key="set" style={{ paddingLeft: "4%", paddingRight: "4%", color: "white" }}>
                {
                    (() => {
                        if (props.row.set == "첨삭완료") {
                            return <div key="set" style={{ cursor: "pointer", border: "12px solid #9A30AE", borderColor: "#9A30AE", backgroundColor: "#9A30AE", borderRadius: "20px" }}
                                onClick={() => {
                                    history.push({
                                        pathname: "/mainpage/teacher/workbook/quizlist/problemmain?mainunit=" + props.unit + "&subunit=" + props.quizNumber,
                                        state: {
                                            problem_bottom_title: "답변하기",
                                            grid_data: ProblemServer.getGrid_data("feedback"),
                                            input_data: ProblemServer.getInput_data("feedback"),
                                            output_data: ProblemServer.getOutput_data("feedback")
                                        }
                                    })
                                }}>
                                {props.row.set}
                            </div>;
                        }
                        else if (props.row.set == "첨삭대기중") {
                            return <div key="set" style={{ border: "12px solid grey", borderColor: "gray", backgroundColor: "gray", borderRadius: "20px" }}>
                                {props.row.set}
                            </div>;
                        }
                    }
                    )()
                }
            </td>
            <td>{props.row.startDate} - {props.row.endDate}</td>
        </tr>
    );

}

