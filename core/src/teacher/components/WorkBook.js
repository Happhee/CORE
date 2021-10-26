import '../css/WorkBook.css'
import React, { Component } from 'react';

class WorkBook extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
            },
            {
                brdno: 3,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
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
        const list = boards.map(function(row){ 
            return row.brdno + row.brdwriter ;
        });
        
        return (
            <div>
                <h1>
                    "WorkBook-Chapter List"
                </h1>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
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
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
            </tr>
        );
    }
}

export default WorkBook;