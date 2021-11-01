import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    state = {
        boards: [
            {
                brdno: 1,
                brdtitle: '별탑 쌓기',
                brdwriter: '80'
            },
            {
                brdno: 2,
                brdtitle: '1부터 100더하기',
                brdwriter: '30'
            },
            {
                brdno: 3,
                brdtitle: '모래시계 만들기',
                brdwriter: '20'
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
            <div className="main_div">

                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No</td>
                            <td width="300">문제명</td>
                            <td width="100">정답률</td>
                            <td width="100">편집</td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table>
                <Button variant="contained" color="primary">단원 삭제</Button>
                <Button variant="contained" color="primary">문제 추가</Button>
            </div>
        );
    }
}
export default FeedBack;

class BoardItem extends React.Component {
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td><button onClick={this.handleEdit}>수정</button>
                    <button onClick={this.handleRemove}>삭제</button></td>
            </tr>
        );
    }
}