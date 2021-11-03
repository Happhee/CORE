/*eslint-disable */

import React, { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import '../css/ProblemGrid.css';
import { FormControl, FormHelperText, useFormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { Controller } from 'react-hook-form'

//그리드 박스 스타일 속성 적용
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
    boxShadow: 'none'
}));

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
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
    let textfield = useRef(null);

    const [dense, setDense] = useState(false);

    // 입력값, 출력값 초기세팅
    let [input_data, setInput_data] = useState([
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
        { id: 9, value: '' },
        { id: 10, value: '' },
    ])
    let [output_data, setOutput_data] = useState([
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
        { id: 9, value: '' },
        { id: 10, value: '' },
    ])


    const handleChange = (event) => {


        setName(event.target.value);
    }


    return (
        <Box component="form"
            noValidate
            autoComplete="off" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                {/* 상단 문제 챕터 및 단원 */}
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[0].title}</p>
                        <p className="grid_data">{grid_data[0].input}</p>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[1].title}</p>
                        <p className="grid_data">{grid_data[1].input}</p>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} >
                    <Item>
                        <p className="grid_data_title">{grid_data[2].title}</p>
                        <CssTextField fullWidth label={grid_data[2].input} variant="outlined" id="custom-css-outlined-input" maxRows={1} />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <p className="grid_data_title">{grid_data[3].title}</p>
                        <CssTextField fullWidth label={grid_data[3].input} variant="outlined" id="custom-css-outlined-input" multiline rows={5} />
                    </Item>

                </Grid>
                <Grid item xs={12}>

                    <Item>
                        <p className="grid_data_title">{grid_data[4].title}</p>
                        <CssTextField fullWidth label={grid_data[4].input} variant="outlined" id="custom-css-outlined-input" multiline rows={10} />
                    </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{grid_data[5].title}</p>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <CssTextField fullWidth label={grid_data[5].input} variant="outlined" id="custom-css-outlined-input" maxRows={1} />
                                </ListItem>,
                            )}
                        </List>
                    </Item>

                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{grid_data[6].title}</p>
                        <List dense={dense}>
                            {generate(
                                <ListItem>

                                    <CssTextField fullWidth label={grid_data[6].input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                                        type="text" value={name} onChange={handleChange} />


                                </ListItem>
                            )}
                        </List>
                    </Item>

                </Grid>

            </Grid>

        </Box>


    )
}

export default ProblemGrid;