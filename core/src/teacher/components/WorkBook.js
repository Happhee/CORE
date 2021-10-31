/*eslint-disable */
import React, { Component } from 'react';
import '../css/WorkBook.css'
import Unit from '../../components/Unit'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import UnitAdd from '../../components/UnitAdd';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 1080
    }
  });


  const unit = [
    {
      'id': 1,
      'name': '조건문 활용하기',
      'count': 10
    },
    {
      'id': 2,
      'name': '포인터와 구조체',
      'count': 15
    },
    {
      'id': 3,
      'name': '반복문 사용하기',
      'count': 20
    }
  ]

  class WorkBook extends Component {
    render() {
      const { classes } = this.props;
      return (
        
        <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
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
        <UnitAdd/>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(WorkBook);