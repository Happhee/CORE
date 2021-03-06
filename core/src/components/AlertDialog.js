/*eslint-disable */

import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, styled } from '@mui/material';

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
const LoginBtn = styled(Button)({
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
    textAlign: 'center',
    backgroundColor: '#692498',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
        background: "#E0BFE6",
        color: "#FFF"
    }
});
const BasicBtn2 = styled(Button)({
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

function AlertDialog(props) {
    const [open, setOpen] = useState(false);
    const [textfield_state, setTextfield_state] = useState(props.textfield_state);

    const [button, setButton] = useState();
    const handleClickOpen = () => {
        if (props.alertDialog_title === '문제등록') {
            if (props.checkRegisterProblem()) {
                setButton(
                    <div>
                        <BasicBtn onClick={handleClose}>취소</BasicBtn>
                        <BasicBtn onClick={handleClose} autoFocus>등록</BasicBtn>
                    </div>
                )
                setTextfield_state("문제를 등록하시겠습니까??");
            }
            else {
                setButton(
                    <div>
                        <BasicBtn onClick={handleClose}>취소</BasicBtn>
                    </div>
                )
                setTextfield_state('입력되지 않은 정보가 있습니다!!! 모든 정보를 입력해주세요');
            }
            setOpen(true);

        }
        else if (props.alertDialog_title === '삭제') {
            setButton(
                <div>
                    <BasicBtn onClick={handleClose}>취소</BasicBtn>
                    <BasicBtn onClick={handleClose} autoFocus>삭제</BasicBtn>
                </div>
            )
            setTextfield_state("문제를 정말로 삭제하시겠습니까??");
            setOpen(true);

        }
        else if (props.alertDialog_title === 'LOGIN') {

            if (!props.handleLogin()) {
                setButton(
                    <div>
                        <BasicBtn onClick={handleClose}>확인</BasicBtn>
                    </div>
                )
                setTextfield_state('입력되지 않은 정보가 있습니다!!! 모든 정보를 입력해주세요');
            } else {
                props.goClassroom();
            }

            setOpen(!props.handleLogin());
        }
        else if (props.alertDialog_title === 'SIGN UP') {
            if (!props.handleSignup()) {
                setButton(
                    <div>
                        <BasicBtn onClick={handleClose}>확인</BasicBtn>
                    </div>
                )
                setTextfield_state('입력되지 않은 정보가 있습니다!!! 모든 정보를 입력해주세요');
            } else {
                setButton(
                    <div>
                        <BasicBtn onClick={handleClose}>로그인하기</BasicBtn>
                    </div>
                )
                setTextfield_state('회원가입이 완료되었습니다❤️ 로그인을 해주세요❤️');

            }

            setOpen(true);
        }
    };

    const handleClose = (event) => {
        if (event.target.innerText === '등록') {
            props.handleRegisterClose();
        }
        else if (event.target.innerText === '삭제') {
            props.handleRemoveClose(props.subunit);
        }
        else if (event.target.innerText === '로그인하기') {
            props.goLogin();
        }
        setOpen(false);
    };

    return (
        < >
            {
                (() => {

                    if (props.alertDialog_title == 'LOGIN') {
                        return <button style={{
                            background: "white", marginBottom: "0px", border: "0px", fontFamily: 'esamanruLight', fontSize: "30px"
                            , marginLeft: "110px"
                        }} onClick={handleClickOpen} key="set">
                            {props.alertDialog_title}
                        </button>;
                    }
                    else if (props.alertDialog_title === '삭제') {
                        return <DeleteBtn onClick={handleClickOpen} key="set">
                            {props.alertDialog_title}
                        </DeleteBtn>;
                    }
                    else if (props.alertDialog_title === '답변하기') {
                        return <BasicBtn onClick={handleClickOpen} key="set">
                            {props.alertDialog_title}
                        </BasicBtn>;
                    }
                    else if (props.alertDialog_title === '문제등록' || props.alertDialog_title === '수정하기') {
                        return <BasicBtn onClick={handleClickOpen} key="set">
                            {props.alertDialog_title}
                        </BasicBtn>;
                    }
                    else {
                        return <button>
                            {props.alertDialog_title}
                        </button>
                    }
                }
                )()
            }
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
