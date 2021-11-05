/*eslint-disable */
import React, { Component } from 'react';
import '../css/FeedBack.css'
import FeedBackInfo from './FeedBackInfo'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import UnitAdd from '../../components/UnitAdd';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },


    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    }
});




const feedBack = [
    {
        'no': 1,
        'id': 'apple123',
        'name': '김철수',
        'unit': '반복문 이용하기',
        'quizNumber': 1,
        'set': '임시저장',
        'score': 100
    },
    {
        'no': 2,
        'id': 'apple123',
        'name': '김철수',
        'unit': '반복문 이용하기',
        'quizNumber': 1,
        'set': '임시저장',
        'score': 100
    },
    {
        'no': 3,
        'id': 'apple123',
        'name': '김철수',
        'unit': '반복문 이용하기',
        'quizNumber': 1,
        'set': '임시저장',
        'score': 100
    }
]

//function FeedBack(){

//     return(

//     )
// }
class FeedBack extends Component {
    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="main_div">
                <h1>FeedBack</h1>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="검색하기"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}

                    />
                </div>


                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>NO</TableCell>
                                <TableCell>아이디</TableCell>
                                <TableCell>이름</TableCell>
                                <TableCell>단원명</TableCell>
                                <TableCell>문항번호</TableCell>
                                <TableCell>진행상황</TableCell>
                                <TableCell>점수</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedBack.map(c => {
                                return <FeedBackInfo no={c.no} id={c.id} name={c.name} unit={c.unit} quizNumber={c.quizNumber} set={c.set} score={c.score} startpage="feedBack" key={c.id} />
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(FeedBack);