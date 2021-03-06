/*eslint-disable */

import React, { useState } from 'react';
import '../css/ClassRoom.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


import { Button, styled } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import CoreListbox from './CoreListbox';

const styles = theme => ({
    root: {
        position: 'fixed',
        zIndex: '0 !important'

    }
});

const BasicBtn = styled(Button)({
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

const BasicBtn2 = styled(Button)({
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
const CoreDialog = props => {

    //다이얼로그 데이터 
    let [dialog_data, setDialog_data] = useState({
        file: null,
        fileName: '',
        open: false
    })
    //입력값 리스트
    let [text_datas, setText_datas] = useState(props.text_data);


    //강의실 리스트
    let select_listbox = null;
    let [listbox_datas, setListbox_datas] = useState(props.listbox_datas)
    let [select_class_id, setSelect_class_id] = useState('1');
    if (listbox_datas != null) {

        select_listbox = <CoreListbox listbox_datas={listbox_datas}
            handleClickListItem={function (id) {
                setSelect_class_id(id);
            }} />
    }

    let textfield_state = props.textfield_state;

    function handleClickOpen() {
        setDialog_data({ open: true });
    }

    function handleClose() {
        setDialog_data({ file: null, fileName: '', open: false });
        if (text_datas != null) {
            const newText_data = [...text_datas];

            for (let index = 0; index < text_datas.length; index++) {
                newText_data[index].value = '';

            }
            setText_datas(newText_data);
        }
    }

    const handleValueChange = (e) => {
        const { value, name } = e.target;
        const newText_data = [...text_datas];
        console.log(e.target);

        let index = 0
        for (index = 0; index < text_datas.length; index++) {
            if (text_datas[index].name == name)
                break;
        }
        newText_data[index].value = value;
        setText_datas(newText_data);
    }
    let textfield_list = null;
    if (text_datas != null) {
        textfield_list = text_datas.map((text_data, index) =>
            <div key={text_data.id}>
                <TextField key={index} label={text_data.label} type="text" name={text_data.name} value={text_data.value} onChange={handleValueChange} /><br />
            </div>

        )
    }



    return (
        <div className={props.button_box_div}>
            <div className={props.button_box}>
                <BasicBtn className={props.button_type} onClick={handleClickOpen}>{props.button_value}</BasicBtn>
            </div>
            <Dialog open={dialog_data.open} onClose={handleClose}>
                <DialogTitle >
                    {props.dialog_title}
                </DialogTitle>

                <DialogContent>
                    {select_listbox}
                    {textfield_list}
                    {textfield_state}
                </DialogContent>

                <DialogActions>
                    <BasicBtn2 onClick={function (e) {
                        if (props.button_value === '수정') {
                            props.handleFormModify(text_datas)
                        }
                        else if (props.button_value === '등록') {
                            props.handleFormSubmit(text_datas);
                        }
                        else if (props.dialog_title == '강의실 추가하기') {
                            props.handleFormSubmit(text_datas)
                        }
                        setDialog_data({ open: false })
                    }} >{props.button_value}</BasicBtn2>

                    <BasicBtn2 onClick={handleClose}>닫기</BasicBtn2>

                </DialogActions>

            </Dialog>
        </div>
    )


}

export default withStyles(styles)(CoreDialog);
