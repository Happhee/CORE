/*eslint-disable */

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog(props) {
    const [open, setOpen] = useState(false);
    const [textfield_state, setTextfield_state] = useState(props.textfield_state);

    const [button, setButton] = useState();
    const handleClickOpen = () => {
        if (props.alertDialog_title === '문제등록') {
            if (props.checkRegisterProblem()) {
                setButton(
                    <div>
                        <Button onClick={handleClose}>취소</Button>
                        <Button onClick={handleClose} autoFocus>등록</Button>
                    </div>
                )
                setTextfield_state("문제를 등록하시겠습니까??");
            }
            else {
                setButton(
                    <div>
                        <Button onClick={handleClose}>취소</Button>
                    </div>
                )
                setTextfield_state('입력되지 않은 정보가 있습니다!!! 모든 정보를 입력해주세요');
            }
        }
        else if (props.alertDialog_title === '삭제') {
            setButton(
                <div>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleClose} autoFocus>삭제</Button>
                </div>
            )
            setTextfield_state("문제를 정말로 삭제하시겠습니까??");
        }

        setOpen(true);
    };

    const handleClose = (event) => {
        if (event.target.innerText === '등록') {
            props.handleRegisterClose();
        }
        else if (event.target.innerText === '삭제') {
            props.handleRemoveClose(props.subunit);
        }
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="secondary" className="problem_button" onClick={handleClickOpen}>
                {props.alertDialog_title}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.alertDialog_title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {textfield_state}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {button}
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AlertDialog;
