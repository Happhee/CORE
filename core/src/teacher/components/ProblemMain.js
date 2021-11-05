/*eslint-disable */

import '../css/ProblemAdd.css'
import React, { useEffect, useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';
import { useHistory, withRouter, useParams, useLocation } from 'react-router-dom';
import { Button, useThemeProps } from '@mui/material';
import Box from '@mui/material/Box'
import * as InputValidation from '../../components/InputValidation';
import CoreDialog from '../../components/CoreDialog';
import AlertDialog from '../../components/AlertDialog';
import queryString from 'query-string'
import ProblemServer from './ProblemServer';


function ProblemAdd() {

    const { search } = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit, subunit, type } = queryObj;

    console.log(type);

    let [textfield_state, setTextfield_state] = useState('');

    console.log


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

    let problem_bottom_title = null;
    let history = useHistory();

    let [grid_data, setGrid_data] = useState([
        { id: 0, value: "problemAdd" },
        { id: 1, title: "Problem - Chapter", value: "단원" },
        { id: 2, title: "Problem - Number", value: "소문제번호" },
        { id: 3, title: "Problem Title", input: "문제명", value: "" },
        { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
        { id: 5, title: "Answer Code", input: "정답 코드", value: "" }]);

    if (type === 'register') {
        problem_bottom_title = '문제등록'
        let [grid_data, setGrid_data] = useState([
            { id: 0, value: "problemAdd" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Answer Code", input: "정답 코드", value: "" }]);

    }
    else if (type === 'modify') {
        problem_bottom_title = '수정하기'
        let [grid_data, setGrid_data] = useState([
            { id: 0, value: "problemAdd" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Answer Code", input: "정답 코드", value: "" }]);
    }
    else {
        problem_bottom_title = '답변하기'
        let [grid_data, setGrid_data] = useState([
            { id: 0, value: "problemAdd" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Student - ID", input: "학생 아이디", value: "" },
            { id: 6, title: "Student - Name", input: "학생 이름", value: "" },
            { id: 7, title: "Student - Code", input: "학생 제출 코드", value: "" }])

        useEffect(() => {

            setGrid_data([
                { id: 0, value: "problemAdd" },
                { id: 1, title: "Problem - Chapter", value: "단원" },
                { id: 2, title: "Problem - Number", value: "소문제번호" },
                { id: 3, title: "Problem Title", input: "문제명", value: "" },
                { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
                { id: 5, title: "Student - ID", input: "학생 아이디", value: "" },
                { id: 6, title: "Student - Name", input: "학생 이름", value: "" },
                { id: 7, title: "Student - Code", input: "학생 제출 코드", value: "" }])
            console.log('답변')

        }, [])

    }

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
                    type={type}
                    grid_data={grid_data} input_data={input_data} output_data={output_data} />
                {/* <ProblemServer title_text_item="Problem" temporary_save_button="임시저장"
                    mainunit={mainunit} subunit={subunit}
                    type={type}
                    grid_data={grid_data} input_data={input_data} output_data={output_data} /> */}
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