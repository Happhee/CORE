/*eslint-disable */
import React, { Component } from 'react';
import '../css/WorkBook.css'
import Unit from '../../components/Unit'
import { withStyles } from '@material-ui/core/styles';
import UnitAdd from '../../components/UnitAdd';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';



class WorkBook extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  state = {
    boards: [
      {
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
      }
    ]
  }

  render() {
    const { boards } = this.state;
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
                  (<UnitItem row={row} no={row.no} name={row.name} count={row.count} startpage="workbook" key={row.no} />)
                )
              }
            </tbody>
          </table >
        </div>
        <UnitAdd />
      </div>
    );
  }
}
export default WorkBook;

function UnitItem(props) {


  let history = useHistory();


  return (
    <tr align="center" style={{ height: '60px' }}>
      <td>{props.no}</td>
      <td className="goToUnit" onClick={() => {
        history.push(`/mainpage/teacher/workbook/quizlist?mainunit=${props.no}`)
      }}
        style={{ cursor: "pointer", textDecorationLine: 'underline' }}>{props.name}</td>
      <td>{props.count}</td>
    </tr>
  );

}