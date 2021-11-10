import React from 'react';
import { useHistory } from 'react-router-dom';
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
            <td key="set">{props.set}</td>
            <td key="score">
                <Button marginleft="300px" variant="contained" color="secondary" id="problem_add"
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
                    }}>{props.score}</Button>
            </td>
        </tr>
    )
}
export default FeedBackInfo;


