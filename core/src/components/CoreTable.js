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
import UnitAdd from '../components/UnitAdd';



const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
});
function CoreTable(props) {
    let [unit, setUnit] = useState(props.unit);


    return (
        <div >
            <Paper className={styles.root}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>NO</TableCell>
                            <TableCell>단원명</TableCell>
                            <TableCell>문항수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {unit.map(c => {
                            return <Unit id={c.id} name={c.name} count={c.count} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );

}

export default withStyles(styles)(CoreTable);