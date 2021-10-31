import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Unit extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><button>{this.props.name}</button></TableCell>
                <TableCell>{this.props.count}</TableCell>
            </TableRow>
        )
    }
}

export default Unit;


