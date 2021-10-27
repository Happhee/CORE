/*eslint-disable */

import '../css/WorkBook.css'
import React, { Component } from 'react';

class WorkBook extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdtitle: '조건문 이용하기',
                brdnum: '20',
            },
            {
                brdno: 2,
                brdtitle: '포인터와 구조체',
                brdnum: '12',
            },
            {
                brdno: 3,
                brdtitle: '반복문 활용하기',
                brdnum: '8',
            }
        ]
    }
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }

    render() {
        const { boards } = this.state;
        const list = boards.map(function (row) {
            return row.brdno + row.brdtitle;
        });

        return (
            <div>
                <h1>
                    WorkBook-Chapter List
                </h1>
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="200">NO</td>
                            <td width="800">단원</td>
                            <td width="400">문항수</td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );

    }
}

class BoardItem extends React.Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }
    render() {
        console.log(this.props.row.brdno);
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdnum}</td>
            </tr>
        );
    }
}

export default WorkBook;