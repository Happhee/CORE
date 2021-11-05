import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';

class FeedBackInfo extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell key="no">{this.props.no}</TableCell>
                <TableCell key="id">{this.props.id}</TableCell>
                <TableCell key="name">{this.props.name}</TableCell>
                <TableCell key="unit">{this.props.unit}</TableCell>
                <TableCell key="quizNumber">{this.props.quizNumber}</TableCell>
                <TableCell key="set">{this.props.set}</TableCell>
                <TableCell key="score">
                    <Link key="link" to={`../../mainpage/teacher/${this.props.startpage}/quizlist/problemmain?mainunit=${this.props.unit}&subunit=${this.props.quizNumber}&type=feedback`} >{this.props.score}</Link>
                </TableCell>
            </TableRow>
        )
    }
}

export default FeedBackInfo;


