/*eslint-disable */
import React, { useState } from 'react';
import '../css/WorkBook.css'
import Unit from '../../components/Unit'
import { withStyles } from '@material-ui/core/styles';
import UnitAdd from '../../components/UnitAdd';
import { Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { withRouter } from "react-router";



function WorkBook({ match }) {

  const { mode, userId, classId, title } = match.params;


  let [boards, setBoards] = useState([{
    no: 1,
    name: '조건문 활용하기',
    count: 10
  },
  {
    no: 2,
    name: '포인터와 구조체',
    count: 15
  },
  {
    no: 3,
    name: '반복문 사용하기',
    count: 20
  }])
  // state = {
  //   boards: [

  //   ]
  // }



  return (
    <div className="main_div">
      <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px' }}>WorkBook - Chapter List</h2>
      <div style={{ width: '85%', margin: '20px auto' }}>
        <table border="1" >
          <tbody>
            <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
              <td width="100">No</td>
              <td width="700">단원명</td>
              <td width="150">문항수</td>
            </tr>
            {
              boards.map(row =>
              (<UnitItem row={row} no={row.no} name={row.name} count={row.count} startpage="workbook" key={row.no}
                teacher_id={userId} classId={classId} classroom_title={title} />)
              )
            }
          </tbody>
        </table >
      </div>
      <UnitAdd />
    </div>
  );

}
export default withRouter(WorkBook);

function UnitItem(props) {


  let { location } = useLocation();

  let history = useHistory();


  return (
    <tr align="center" style={{ height: '60px' }}>
      <td>{props.no}</td>
      <td className="goToUnit"
        onClick={() => {
          history.push({
            pathname: "/mainpage/teacher/workbook/" + props.teacher_id + "/" + props.classId +
              "/" + props.classroom_title + "/quizlist?mainunit=" + props.no

          })
        }}

        style={{ cursor: "pointer", textDecorationLine: 'underline' }}>{props.name}</td>
      <td>{props.count}</td>
    </tr>
  );

}