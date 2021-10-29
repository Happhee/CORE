import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { TextField } from '@material-ui/core';


const Custom_Dialog = props => {
    let dialog_title = props.dialog_title;
    let [textfields, setTextfields] = useState(props.textfields);
    let [dialog_data, setDialog_data] = useState(props.dialog_data);
    let textfield_list = [];
    for (let index = 0; index < textfields.length; index++) {
        textfield_list.push(<span key={index}>
            <TextField label={textfields[index].label} type="text" name={textfields[index].name} key={textfields[index].label} />
            <br key={index} />
        </span>)
    }

    function handleClickOpen() {

        setDialog_data({

            open: true

        });

    }

    function handleClose() {

        setDialog_data({ file: null, fileName: '', open: false });


    }
    console.log('다이얼')
    return (
        <div className="add_class_box">
            {/* <Button className="add_button" variant="contained" color="primary" onClick={handleClickOpen}>
                +
            </Button> */}
            <Dialog open={dialog_data.open} onClose={handleClose}>

                <DialogTitle >{dialog_title}</DialogTitle>

                <DialogContent>
                    {textfield_list}
                </DialogContent>

                <DialogActions>

                    <Button variant="contained" color="primary" >추가</Button>

                    <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>

                </DialogActions>

            </Dialog>
        </div>
    )
};

export default Custom_Dialog;