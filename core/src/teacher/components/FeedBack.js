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
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
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
        width: '100%'
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
                <h2 style={{ width: '60%', margin: '20px auto', marginTop: '0px', float: "left", marginLeft: "7.5%" }}>FeedBack</h2>

                <div style={{
                    width: "18%", margin: '20px auto', marginRight: "7.5%", borderWidth: "content", borderWidth: "15%",
                    border: "2px solid #9A30AE", fontFamily: 'esamanru', fontWeight: 'normal', float: "right"
                }}>
                    <InputBase style={{ width: "200px",float: "left" }}
                        placeholder="학생 이름 검색"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                    <img style={{ width: "40px" ,float: "right"}} src={require('../../image/iconSearch.png').default} />

                </div>

                <div style={{ width: '85%', margin: '20px auto' }}>
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

