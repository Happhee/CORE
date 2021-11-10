/*eslint-disable */
import React, { Component } from 'react';
import '../css/FeedBack.css'
import FeedBackInfo from './FeedBackInfo'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import UnitAdd from '../../components/UnitAdd';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
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
        'set': '대기중',
        'score': 100
    },
    {
        'no': 2,
        'id': 'apple123',
        'name': '김철수',
        'unit': '반복문 이용하기',
        'quizNumber': 1,
        'set': '답변완료',
        'score': 100
    },
    {
        'no': 3,
        'id': 'apple123',
        'name': '김철수',
        'unit': '반복문 이용하기',
        'quizNumber': 1,
        'set': '답변완료',
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
                <h2 style={{ width: '85%', margin: '20px auto', marginTop: '0px' }}>FeedBack</h2>
                <div style={{ width: '85%', margin: '20px auto' }}>
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

                <table border="1" >
                    <tbody>
                        <tr style={{ fontFamily: 'esamanru', fontWeight: 'bold', height: '50px' }} align="center" >
                            <td width="50">NO</td>
                            <td width="100">아이디</td>
                            <td width="100">이름</td>
                            <td width="600">단원명</td>
                            <td width="80">문항번호</td>
                            <td width="200">진행상황</td>
                            <td width="100">점수</td>
                        </tr>
                        {
                            feedBack.map(row =>
                                (<FeedBackInfo row={row} no={row.no} id={row.id} name={row.name} unit={row.unit} quizNumber={row.quizNumber} set={row.set} score={row.score} startpage="feedBack" key={row.id} />)
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FeedBack);

