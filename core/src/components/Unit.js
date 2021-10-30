import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CoreDialog from './CoreDialog';
class Customer extends React.Component {
    render() {
        let edit = null;
        if (this.props.edit) {
            console.log(this.props.edit);
        }

        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.count}</TableCell>
                {edit}
            </TableRow>
        )
    }
}

export default Customer;


