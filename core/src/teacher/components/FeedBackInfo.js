/*eslint-disable */

import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import Button from '@mui/material/Button'
import * as ProblemServer from '../server/ProblemServer'


function FeedBackInfo(props) {
    let history = useHistory();

    return (
        <tr align="center" style={{ height: '60px' }}>
            <td key="no">{props.no}</td>
            <td key="id">{props.id}</td>
            <td key="name">{props.name}</td>
            <td key="unit">{props.unit}</td>
            <td key="quizNumber">{props.quizNumber}</td>
            <td key="set" style={{ paddingLeft: "4%", paddingRight: "4%", color: "white" }}>
                {
                    (() => {
                        if (props.set == "답변완료") {
                            return <div key="set" style={{ border: "12px solid #9A30AE", borderColor: "#9A30AE", backgroundColor: "#9A30AE", borderRadius: "20px" }}>
                                {props.set}
                            </div>;
                        }
                        else {
                            return <div key="set" style={{ border: "12px solid grey", borderColor: "grey", backgroundColor: "grey", borderRadius: "20px" }}>
                                {props.set}
                            </div>;
                        }
                    }
                    )()
                }
            </td>
            <td key="score">
                <button marginleft="300px" style={{ backgroundColor: "white", border: "0", fontFamily: 'esamanru', fontWeight: 'normal', height: '50px', cursor: "pointer", textDecorationLine: 'underline' }}
                    onClick={() => {
                        history.push({
                            pathname: "/mainpage/teacher/workbook/"
                                + props.userId + "/"
                                + props.classId + "/"
                                + props.title + "/"
                                + "quizlist/problemmain",
                            state: {
                                problem_bottom_title: "답변하기",
                                grid_data: ProblemServer.getGrid_data("feedback"),
                                input_data: ProblemServer.getInput_data("feedback"),
                                output_data: ProblemServer.getOutput_data("feedback"),
                                mainunit: props.unit,
                                subunit: props.quizNumber
                            }
                        })
                    }}>{props.score}</button>
            </td>
        </tr>
    )
}
export default withRouter(FeedBackInfo);


