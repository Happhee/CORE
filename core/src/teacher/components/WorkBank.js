/*eslint-disable */

import '../css/WorkBank.css'
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { ReactComponent as Core_Logo } from '../../css/Core.svg'
import CoreTable from '../../components/CoreTable';

import '../../css/CoreListbox.css'

function WorkBank() {
    console.log('워크뱅크렌더');
    let toolbar = [
        { id: 1, title: 'My', link: '/teacher/my' },
        { id: 2, title: 'WorkBank', link: '/teacher/workbank' }];

    let table_cells = ['NO', '단원명', '문항수', '편집']
    let edit = true;

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
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!
    //서버로 과목 등록하는 코드 필요함!!!!!!!!!!!

    return (
        <div >
            <Toolbar data={toolbar} />
            <div className="workbank_box">
                <Core_Logo />
                <div className="workbank_content">
                    {/*  */}
                    <div className="title_workbank">
                        <span>WorkBank</span>
                    </div>
                    <div className="coretable_workbank">
                        <CoreTable table_cells={table_cells} unit={unit} edit={edit}
                            handleFormSubmit={function (register_data) {
                                setRegister_data(register_data);
                            }} />
                    </div>

                </div>
            </div>
        </div>
    );

}

export default WorkBank;