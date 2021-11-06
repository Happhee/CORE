/*eslint-disable */

import '../css/ProblemAdd.css'
import React, { useEffect, useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';
import { useHistory, withRouter, useParams, useLocation } from 'react-router-dom';
import { Button, useThemeProps } from '@mui/material';
import Box from '@mui/material/Box'
import * as InputValidation from '../../components/InputValidation';
import AlertDialog from '../../components/AlertDialog';
import queryString from 'query-string'


function ProblemAdd() {

    const { search } = useLocation();
    const location = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit, subunit } = queryObj;
    let history = useHistory();

    let problem_bottom_title = location.state.problem_bottom_title;
    let [grid_data, setGrid_data] = useState(location.state.grid_data);

    let [textfield_state, setTextfield_state] = useState('');




    let [input_data, setInput_data] = useState([
        { id: "input1", value: '', title: "Input", input: "입력값" },
        { id: "input2", value: '', title: "Input", input: "입력값" },
        { id: "input3", value: '', title: "Input", input: "입력값" },
        { id: "input4", value: '', title: "Input", input: "입력값" },
        { id: "input5", value: '', title: "Input", input: "입력값" },
        { id: "input6", value: '', title: "Input", input: "입력값" },
        { id: "input7", value: '', title: "Input", input: "입력값" },
        { id: "input8", value: '', title: "Input", input: "입력값" },
        { id: "input9", value: '', title: "Input", input: "입력값" },
        { id: "input10", value: '', title: "Input", input: "입력값" },

    ])
    let [output_data, setOutput_data] = useState([
        { id: "output1", value: '', title: "Output", input: "결과값" },
        { id: "output2", value: '', title: "Output", input: "결과값" },
        { id: "output3", value: '', title: "Output", input: "결과값" },
        { id: "output4", value: '', title: "Output", input: "결과값" },
        { id: "output5", value: '', title: "Output", input: "결과값" },
        { id: "output6", value: '', title: "Output", input: "결과값" },
        { id: "output7", value: '', title: "Output", input: "결과값" },
        { id: "output8", value: '', title: "Output", input: "결과값" },
        { id: "output9", value: '', title: "Output", input: "결과값" },
        { id: "output10", value: '', title: "Output", input: "결과값" }
    ])







    function temporarySave() {

    }
    function goList() {

        history.goBack()

    }

    function checkRegisterProblem() {

        return (InputValidation.checkTextfieldValue(input_data) &&
            InputValidation.checkTextfieldValue(output_data) && InputValidation.checkTextfieldValue(grid_data))
    }
    function handleRegisterClose() {
        console.log("등록해주세요")
        // 서버로 값 보내줘야함!!!!!!!!!!!!!!!!!!!!!!!!!!!
        goList();

    }
    console.log("문제추가렌더링")
    console.log(grid_data);

    return (
        <div className="main_problem_div">
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
                    mainunit={mainunit} subunit={subunit}
                    grid_data={grid_data} input_data={input_data} output_data={output_data} />
                <hr />
                <div className="problem_bottom_div">
                    <Box sx={{ '& button': { m: 0.5 } }}>
                        <AlertDialog alertDialog_title={problem_bottom_title} textfield_state={textfield_state} checkRegisterProblem={checkRegisterProblem}
                            handleRegisterClose={handleRegisterClose} />
                    </Box>

                </div>

            </div>

        </div>
    );

}

export default withRouter(ProblemAdd);