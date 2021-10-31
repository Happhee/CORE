import React, { Component } from 'react';

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    state = {
        boards: [
            {
                brdno: 1,
                id:'aaa',
                name:'김기기',
                phone:'010-1111-1111',
                school: '세종초등학교'
            },
            {
                brdno: 2,
                id:'bbb',
                name:'김니니',
                phone:'010-2222-2222',
                school: '세종초등학교'
            },
            {
                brdno: 3,
                id:'ccc',
                name:'김디디',
                phone:'010-3333-3333',
                school: '세종초등학교'
            }
        ]
    }
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    handleEdit = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    handleSaveData = (data) => {
        let boards = this.state.boards;
        if (data.brdno === null || data.brdno === '' || data.brdno === undefined) {    // new : Insert
            this.setState({
                maxNo: this.state.maxNo + 1,
                boards: boards.concat({ brdno: this.state.maxNo, brdwriter: data.brdwriter, brdtitle: data.brdtitle })
            });
        } else {                                                        // Update
            this.setState({
                boards: boards.map(row => data.brdno === row.brdno ? { ...data } : row)
            })
        }
    }
    handleSelectRow = (row) => {
        this.child.current.handleSelectRow(row);
    }

    render() {
        const { boards } = this.state;

        return (
            <div>
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="100">No</td>
                            <td width="200">아이디</td>
                            <td width="200">이름</td>
                            <td width="400">전화번호</td>
                            <td width="200">소속</td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}  />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default QuizList;

class BoardItem extends React.Component {
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.phone}</td>
                <td>{this.props.row.school}</td>
                <td><button onClick={this.handleRemove}>삭제</button></td>
            </tr>
        );
    }
}