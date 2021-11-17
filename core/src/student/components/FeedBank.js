

/*eslint-disable */

import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { ReactComponent as Core_Logo } from '../../css/Core.svg'
import FeedBank_MainList from './FeedBank_MainList';

import '../../css/CoreListbox.css'
import { Route, Switch } from 'react-router-dom';

function FeedBank() {
    console.log('워크뱅크렌더');
    let toolbar = [
        { id: 1, title: 'My', link: '/student/my' },
        { id: 2, title: 'FeedBank', link: '/student/FeedBank' }];


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
                <img style={{ width: "200px", marginTop: "3%", marginBottom: "-25px", float: "left" }} src={require('../../image/icon_BigLogo.png').default} />
                <div className="workbank_content" style={{ width: '85%', margin: '20px auto' }}>
                    {/*  */}
                    <div className="title_workbank">
                        <img style={{ float: "left", marginLeft: "1%", marginBottom: "0px" }} src={require('../../image/iconWorkBook.png').default} />
                        <div style={{ width: "150px", float: "left", marginLeft: "0px", marginTop: "10px" }}>FeedBank</div>
                    </div>
                    <Switch>
                        <Route exact path='/:mode/feedbank' render={() => <FeedBank_MainList />} />
                    </Switch>
                </div>
            </div>
        </div>
    );

}

export default FeedBank;