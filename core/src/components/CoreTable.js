/*eslint-disable */
import React, { useState } from 'react';

import Unit from '../components/Unit'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(4),
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
});
function CoreTable(props) {
    let [unit, setUnit] = useState(props.unit);
    let table_cells = props.table_cells;
    let edit = props.edit;
    let handleFormSubmit = props.handleFormSubmit;
    return (
        <div >
            <Paper className={styles.root}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            {table_cells.map((cell, index) => {
                                return <TableCell key={index}>{cell}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {unit.map(c => {
                            return <Unit key={c.id} id={c.id} name={c.name} count={c.count} edit={edit}
                                handleFormSubmit={handleFormSubmit} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );

}

export default withStyles(styles)(CoreTable);