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
    let [input_data, setInput_data] = useState(location.state.input_data);
    let [output_data, setOutput_data] = useState(location.state.output_data);

    let [textfield_state, setTextfield_state] = useState('');

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

    return (
        <div className="main_problem_div">
            <div className="sub_div">
                <div className="problem_top_div">
                    <span className="problem_title">Problem</span>
                    <Box sx={{ '& button': { m: 0.5 } }}>

                        <div>
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