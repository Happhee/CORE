/*eslint-disable */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';

//그리드 박스 스타일 속성 적용
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
    boxShadow: 'none'
}));


//텍스트 필드 속성 적용
const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#9A30AE',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

function ProblemGrid(props) {
    let [grid_data, setGrid_data] = useState(props.grid_data);



    return (



        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>


                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>

                    <Item>
                        <p>문제</p>
                        <CssTextField label="Custom CSS" variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>


    )
}

export default ProblemGrid;