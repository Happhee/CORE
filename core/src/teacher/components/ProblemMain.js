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

//로그인 성공 후 페이지 -> 서버로부터 강의실리스트를 가져와야함 
import { useDispatch } from 'react-redux'
import { addProblem } from '../../_actions/teacher_action'
const Back = styled(Button)({
    marginLeft: '87%',
    height: '40px',
    paddingBottom: "3%",
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '30px',
    color: '#fff',
    fontFamily: 'esamanruLight',
    fontWeight: 'normal',
    '&:hover': {
        background: "#E0BFE6",
        color: "#8154A0"
    }
});

function ProblemAdd({ match }) {

    const { userId } = match.params
    const dispatch = useDispatch();

    const location = useLocation();

    let history = useHistory();

    let mainunit = location.state.mainunit;
    let subunit = location.state.subunit;
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


    function handleRegisterClose(grid_data, input_data, output_data) {
        if (problem_bottom_title === "문제등록") {
            console.log(grid_data);
            console.log(input_data);
            console.log(output_data);
            let input_data_value = []
            let output_data_value = []

            input_data.map(input => {
                input_data_value.push(input.value);
            })

            output_data.map(output => {
                output_data_value.push(output.value)
            })
            let body = {
                name: grid_data[3].value,
                owner: userId,
                problem_description: grid_data[4].value,
                sample_input: input_data[0].value,
                sample_output: output_data[0].value,
                input_description: "정수",
                output_description: "정수",
                input_list: input_data_value,
                output_list: output_data_value,
                solution: grid_data[5].value,
                difficulty: 2,
                memory_limit: 12345678,
                time_limit: 12345678
            }

            dispatch(addProblem(body))
                .then(res => {
                    if (res.payload.addSuceess) {
                        alert('등록이완료되었습니다!!')

                        goList();
                    } else {
                        alert(res.payload.message)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });


        }
        console.log("등록해주세요")
        // 서버로 값 보내줘야함!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
                    grid_data={grid_data} input_data={input_data} output_data={output_data}
                    alertDialog_title={problem_bottom_title} textfield_state={textfield_state} checkRegisterProblem={checkRegisterProblem}
                    handleRegisterClose={handleRegisterClose} />

                {/* <div className="problem_bottom_div">
                    <Box sx={{ '& button': { m: 0.5 } }}>
                        <AlertDialog alertDialog_title={problem_bottom_title} textfield_state={textfield_state} checkRegisterProblem={checkRegisterProblem}
                            handleRegisterClose={handleRegisterClose} />
                    </Box>

                </div> */}

            </div>

        </div>
    );

}

export default withRouter(ProblemAdd);