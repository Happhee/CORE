import '../css/ProblemAdd.css'
import React, { useState } from 'react';
import ProblemGrid from '../../components/ProblemGrid';

function ProblemAdd() {

    let [grid_data, setGrid_data] = useState([
        { id: 1, title: "Problem - Chapter", input: "1단원" },
        { id: 2, title: "Problem - Number", input: "2번" },
        { id: 3, title: "Problem Title", input: "문제명" },
        { id: 4, title: "Problem Description", input: "문제 상세 설명" },
        { id: 5, title: "Answer Code", input: "정답 코드" },
        { id: 6, title: "Input", input: "입력값" },
        { id: 7, title: "Output", input: "결과값" }]
    )
    return (
        <div className="main_div">
            <div className="sub_div">
                <div className="problem_top_div">
                    <span className="problem_title">Problem</span>
                    <div>
                        <button className="problem_button">임시저장</button>
                        <button className="problem_button">목록으로</button>
                    </div>

                </div>
                <hr />
                <ProblemGrid title_text_item="Problem" temporary_save_button="임시저장"
                    grid_data={grid_data} />
                <hr />
                <div className="problem_bottom_div">
                    <button className="problem_button">문제등록</button>

                </div>

            </div>

        </div>
    );

}

export default ProblemAdd;