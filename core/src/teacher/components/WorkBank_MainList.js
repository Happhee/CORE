/*eslint-disable */

import '../css/WorkBank.css'
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { ReactComponent as Core_Logo } from '../../css/Core.svg'
import CoreTable from '../../components/CoreTable';
import * as Server from './Server';

import '../../css/CoreListbox.css'

function WorkBank_MainList() {
    console.log('워크뱅크렌더');

    let table_cells = ['NO', '단원명', '문항수', '편집']

    let unit = [
        {
            'id': 1,
            'name': '조건문 활용하기',
            'count': 10
        },
        {
            'id': 2,
            'name': '포인터와 구조체',
            'count': 15
        },
        {
            'id': 3,
            'name': '반복문 사용하기',
            'count': 20
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
            <CoreTable table_cells={table_cells} unit={unit} editType="MainList"
                handleFormSubmit={Server.handleFormSubmit} handleRemoveClose={Server.handleRemoveClose} />
        </div>


    );

}

export default WorkBank_MainList;