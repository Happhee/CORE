/*eslint-disable */

import '../css/ProblemAdd.css'
import React, { useEffect, useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';
import { useHistory, withRouter, useParams, useLocation } from 'react-router-dom';
import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box'
import * as InputValidation from '../../components/InputValidation';
import AlertDialog from '../../components/AlertDialog';
import queryString from 'query-string'

const Back = styled(Button)({
    marginLeft: '87%',
    height: '40px',
    paddingBottom:"3%",
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
                    <h5 className="problem_top_div">{grid_data[0].title}</h5>
                    <Box sx={{ '& button': { m: 0.5 } }}>
                        <div>
                            <Back onClick={goList}><h4>목록으로</h4></Back>
                        </div>                    
                    </Box>


                </div>
                <hr />
                <ProblemGrid
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