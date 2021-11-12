/*eslint-disable */

import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { autocompleteClasses, Button, styled } from '@mui/material';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

const AddBtn = styled(Button)({
    marginLeft: '87%',
    padding: '0.8%',
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: 'esamanruLight',
    fontWeight: 'normal',
    '&:hover': {
        background: "#E0BFE6",
        color: "#8154A0"
    }
});
const BasicBtn = styled(Button)({
    marginLeft: '0px',
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    border: "0px solid #692498",
    '&:hover': {
        background: "#E0BFE6",
        color: "#FFF",
        border: "0px solid #692498"
    }
});
class UnitAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userName: '',
            open: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            id: '',
            userName: '',
            open: false
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer() {
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
                <AddBtn variant="contained" onClick={this.handleClickOpen}>
                    단원 추가
                </AddBtn>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>단원 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <TextField label="단원명" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <BasicBtn variant="contained" onClick={this.handleFormSubmit}>확인</BasicBtn>
                        <BasicBtn variant="outlined" onClick={this.handleClose}>취소</BasicBtn>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(UnitAdd)
