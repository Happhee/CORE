import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { Button, styled } from '@mui/material';
import { border } from '@mui/system';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});
const DeleteBtn = styled(Button)({
    marginLeft: '0px',
    textAlign: 'center',
    backgroundColor: '#E0BFE6',
    borderRadius: '30px',
    color: '#8154A0',
    fontWeight: 'bold',
    '&:hover': {
        background: "#8154A0",
        color: "#FFF"
    }
});

const BasicBtn = styled(Button)({
    marginLeft: '0px',
    textAlign:'center',
    backgroundColor:'#692498',
    borderRadius:'30px',
    color:'#fff',
    fontWeight:'bold',
    '&:hover': {
        background: "#E0BFE6",
        color:"#FFF"
         }
});
class DeleteQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            open: false
        }
        this.handleForDelete = this.handleForDelete.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.deleteQuiz = this.deleteQuiz.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }

    handleForDelete(e) {
        e.preventDefault()
        this.deleteQuiz()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            id: '',
            open: false
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    deleteQuiz() { //삭제하는 함수!!! 수정 필요!!
        const url = '/api/units';
        const formData = new FormData();
        formData.append('id', this.state.id)
        formData.append('name', this.state.userName)
        formData.append('count', this.state.count)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            id: '',
            userName: '',
            count: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <DeleteBtn onClick={this.handleClickOpen} marginleft="300px" variant="contained" >삭제</DeleteBtn>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>문제 삭제</DialogTitle>
                    <DialogContent>
                        <p>정말 삭제하시겠습니까?</p>
                    </DialogContent>
                    <DialogActions>
                        <BasicBtn onClick={this.handleForDelete}>확인</BasicBtn>
                        <BasicBtn onClick={this.handleClose}>취소</BasicBtn>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(DeleteQuiz)
