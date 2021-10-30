import React, { useState } from 'react';
import '../css/ClassRoom.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CoreDialog = props => {

    //다이얼로그 데이터 
    let [dialog_data, setDialog_data] = useState({
        file: null,
        fileName: '',
        open: false
    })
    let [text_datas, setText_datas] = useState(props.text_data);

    function handleClickOpen() {
        setDialog_data({ open: true });
    }

    function handleClose() {
        setDialog_data({ file: null, fileName: '', open: false });
        const newText_data = [...text_datas];

        for (let index = 0; index < text_datas.length; index++) {
            newText_data[index].value = '';

        }
        setText_datas(newText_data);
    }

    const handleValueChange = (e) => {
        const { value, name } = e.target;
        const newText_data = [...text_datas];
        let index = 0
        for (index = 0; index < text_datas.length; index++) {
            if (text_datas[index].name == name)
                break;
        }
        newText_data[index].value = value;
        setText_datas(newText_data);
    }
    const textfield_list = text_datas.map((text_data, index) =>
        <div key={text_data.id}>
            <TextField key={index} label={text_data.label} type="text" name={text_data.name} value={text_data.value} onChange={handleValueChange} /><br />
        </div>

    )
    return (
        <div>
            <div className={props.button_box}>
                <button className={props.button_type} onClick={handleClickOpen}>{props.button_value}</button>
            </div>
            <Dialog open={dialog_data.open} onClose={handleClose}>

                <DialogTitle >{props.dialog_title}</DialogTitle>

                <DialogContent>
                    {textfield_list}
                </DialogContent>

                <DialogActions>

                    <Button variant="contained" color="primary" onClick={function (e) {

                        props.handleFormSubmit(text_datas);
                        setDialog_data({ open: false })
                    }} >추가</Button>

                    <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>

                </DialogActions>

            </Dialog>
        </div>
    )


}

export default CoreDialog;