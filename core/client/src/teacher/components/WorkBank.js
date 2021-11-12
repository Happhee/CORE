/*eslint-disable */

import '../css/WorkBank.css'
import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { ReactComponent as Core_Logo } from '../../css/Core.svg'
import WorkBank_MainList from './WorkBank_MainList';
import WorkBank_QuizList from './WorkBank_QuizList';
import ProblemMain from './ProblemMain';
import '../../css/CoreListbox.css'
import { Route, Switch } from 'react-router-dom';

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
    console.log("등록강의실  -> " + listbox_datas[register_data].value);

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
                <img style={{ width: "200px", marginTop: "3%", marginBottom: "-25px" }} src={require('../../image/icon_BigLogo.png').default} />
                <div className="workbank_content" style={{ width: '85%', margin: '20px auto' }}>
                    {/*  */}
                    <div className="title_workbank" >
                        <img src={require('../../image/iconWorkBook.png').default} style={{float:"left"}} />
                        <div style={{float:"right"}}>WorkBank</div>
                    </div>
                    <Switch>
                        <Route exact path='/:mode/workbank' render={() => <WorkBank_MainList />} />
                        <Route exact path='/:mode/workbank_quizlist' render={() => <WorkBank_QuizList />} />
                        <Route exact path="/:mode/workbank_quizlist/:problemmodify" render={() => <ProblemMain />} />
                    </Switch>

                </div>
            </div>
        </div>
    );

}

export default WorkBank;