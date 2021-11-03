/*eslint-disable */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


//그리드 박스 스타일 속성 적용
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
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
            borderColor: 'pink',
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

                {/* 상단 문제 챕터 및 단원 */}
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[0].title}</p>
                        <CssTextField label={grid_data[0].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[1].title}</p>
                        <CssTextField label={grid_data[1].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <p className="grid_data_title">{grid_data[2].title}</p>
                        <CssTextField label={grid_data[2].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <p className="grid_data_title">{grid_data[3].title}</p>
                        <CssTextField label={grid_data[3].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>

                </Grid>
                <Grid item xs={12}>

                    <Item>
                        <p className="grid_data_title">{grid_data[4].title}</p>
                        <CssTextField label={grid_data[4].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
                <Grid item xs={6}>

                    <Item>
                        <p className="grid_data_title">{grid_data[5].title}</p>
                        <CssTextField label={grid_data[5].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
                <Grid item xs={6}>

                    <Item>
                        <p className="grid_data_title">{grid_data[6].title}</p>
                        <CssTextField label={grid_data[6].input} variant="outlined" id="custom-css-outlined-input" />
                    </Item>
                </Grid>
            </Grid>
        </Box>


    )
}

export default ProblemGrid;