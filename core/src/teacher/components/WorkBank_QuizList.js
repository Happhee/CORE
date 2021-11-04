/*eslint-disable */

import '../css/WorkBank.css'
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { ReactComponent as Core_Logo } from '../../css/Core.svg'
import CoreTable from '../../components/CoreTable';
import { useLocation } from 'react-router';
import queryString from 'query-string'

function WorkBank_QuizList(props) {
    let { search } = useLocation();
    const queryObj = queryString.parse(search);
    const { mainunit } = queryObj;

    console.log("워크뱅크 퀴즈리스트 렌더");
    let table_cells = ['NO', '단원명', '정답률', '편집']

    let unit = [
        {
            'id': 1,
            'name': '별탑 쌓기',
            'count': '80'
        },
        {
            'id': 2,
            'name': '1부터 100더하기',
            'count': '30'
        },
        {
            'id': 3,
            'name': '모래시계 만들기',
            'count': '20'
        }
    ]
    let listbox_datas = [
        { id: 1, value: "C프로그래밍 및 실습" },
        { id: 2, value: "자료구조 및 실습" },
        { id: 3, value: "컴퓨터구조" },
        { id: 4, value: "운영체제" }
    ]
    //선택된 과목 아이디!!!!!!!!!!!!!!!1
    let [register_data, setRegister_data] = useState(listbox_datas[0].id);
    console.log("등록강의실  -> " + listbox_datas[register_data].value);
    return (
        <div className="coretable_workbank">
            <CoreTable table_cells={table_cells} unit={unit} editType="QuizList"
                handleFormSubmit={function (register_data) {
                    setRegister_data(register_data);
                }} />
        </div>

    )
}
export default WorkBank_QuizList;