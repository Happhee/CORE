import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button'
import * as ProblemServer from '../server/ProblemServer'


function FeedBackInfo(props) {
    let history = useHistory();
    return (
        <TableRow>
            <TableCell key="no">{props.no}</TableCell>
            <TableCell key="id">{props.id}</TableCell>
            <TableCell key="name">{props.name}</TableCell>
            <TableCell key="unit">{props.unit}</TableCell>
            <TableCell key="quizNumber">{props.quizNumber}</TableCell>
            <TableCell key="set">{props.set}</TableCell>
            <TableCell key="score">
                <Button marginleft="300px" variant="contained" color="secondary" id="problem_add"
                    onClick={() => {
                        history.push({
                            pathname: "/mainpage/teacher/workbook/quizlist/problemmain?mainunit=" + props.unit + "&subunit=" + props.quizNumber,
                            state: {
                                problem_bottom_title: "답변하기",
                                grid_data: ProblemServer.getGrid_data("feedback")
                            }
                        })
                    }}>{props.score}</Button>
            </TableCell>
        </TableRow>
    )

}

export default FeedBackInfo;


