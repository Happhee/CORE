/*eslint-disable */

import '../css/ProblemAdd.css'
import React, { useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';
import { useHistory, withRouter } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box'

function ProblemAdd() {

    let history = useHistory();

    function temporarySave() {

    }
    function goList() {
        history.push("/mainpage/teacher/workbook/quizlist");

    }
    function registerProblem() {
        console.log(output_data);

    }
    let [grid_data, setGrid_data] = useState([
        { id: 0, mode: "problemAdd" },
        { id: 1, title: "Problem - Chapter", input: "1단원", value: "" },
        { id: 2, title: "Problem - Number", input: "2번", value: "" },
        { id: 3, title: "Problem Title", input: "문제명", value: "" },
        { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
        { id: 5, title: "Answer Code", input: "정답 코드", value: "" },
        { id: 6, title: "Input", input: "입력값" },
        { id: 7, title: "Output", input: "결과값" }]
    )
    let [input_data, setInput_data] = useState([
        { id: "input1", value: '' },
        { id: "input2", value: '' },
        { id: "input3", value: '' },
        { id: "input4", value: '' },
        { id: "input5", value: '' },
        { id: "input6", value: '' },
        { id: "input7", value: '' },
        { id: "input8", value: '' },
        { id: "input9", value: '' },
        { id: "input10", value: '' },

    ])
    let [output_data, setOutput_data] = useState([
        { id: "output1", value: '' },
        { id: "output2", value: '' },
        { id: "output3", value: '' },
        { id: "output4", value: '' },
        { id: "output5", value: '' },
        { id: "output6", value: '' },
        { id: "output7", value: '' },
        { id: "output8", value: '' },
        { id: "output9", value: '' },
        { id: "output10", value: '' }

    ])
    return (
        <div className="main_div">
            <div className="sub_div">
                <div className="problem_top_div">
                    <span className="problem_title">Problem</span>
                    <Box sx={{ '& button': { m: 0.5 } }}>

                        <div>

                            <Button variant="contained" color="secondary" className="problem_button" onClick={temporarySave}>임시저장</Button>
                            <Button variant="contained" color="secondary" onClick={goList}>목록으로</Button>
                        </div>                    </Box>


                </div>
                <hr />
                <ProblemGrid title_text_item="Problem" temporary_save_button="임시저장"
                    grid_data={grid_data} input_data={input_data} output_data={output_data} />
                <hr />
                <div className="problem_bottom_div">
                    <Box sx={{ '& button': { m: 0.5 } }}>
                        <Button variant="contained" color="secondary" className="problem_button"
                            onClick={registerProblem}>문제등록</Button>
                    </Box>
                </div>

            </div>

        </div>
    );

}

export default withRouter(ProblemAdd);