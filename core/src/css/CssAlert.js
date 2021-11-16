/*eslint-disable */
import React, { useReducer, useState, useEffect } from 'react';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


function AlertDialog(props) {
    const [open, setOpen] = useState(props.open);

    const handleClose = (event) => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>{props.title}</AlertTitle>
                        <strong>{props.content}</strong>
                    </Alert>
                </Stack>
                <DialogActions>
                    <div>
                        <Button onClick={handleClose}>확인</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AlertDialog;
