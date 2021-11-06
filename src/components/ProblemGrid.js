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
    // 입력값, 출력값 초기세팅 
    let input_textfield = [];
    let output_textfield = [];
    let [input_data, setInput_data] = useState(props.input_data)
    let [output_data, setOutput_data] = useState(props.output_data)
    //피드백 세팅
    let feedback_textfield = [];

    // 텍스트 필드 값 바꾸기 
    const handleGridChange = (event) => {
        const { value, name } = event.target;
        const newGrid_data = [...grid_data];

        let index = 0
        for (index = 0; index < grid_data.length; index++) {
            if (grid_data[index].title == name)
                break;
        }
        newGrid_data[index].value = value;
        setGrid_data(newGrid_data);
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        const newInput_data = [...input_data];

        let index = 0
        for (index = 0; index < input_data.length; index++) {
            if (input_data[index].id == name)
                break;
        }
        newInput_data[index].value = value;
        setInput_data(newInput_data);
    }
    const handleOutputChange = (event) => {
        const { value, name } = event.target;
        const newOutput_data = [...output_data];

        let index = 0
        for (index = 0; index < output_data.length; index++) {
            if (output_data[index].id == name)
                break;
        }
        newOutput_data[index].value = value;
        setOutput_data(newOutput_data);
    }
    //문제추가되는 곳이라면 담아줘야함!
    if (grid_data[0].value == "problemAdd") {

        for (let index = 0; index < input_data.length; index++) {
            input_textfield.push(
                <Item key={index}>
                    <CssTextField key={input_data[6].input} fullWidth label={input_data[6].input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                        name={input_data[index].id} value={input_data[index].value} onChange={handleInputChange} />
                </Item>
            )
        }
        for (let index = 0; index < input_data.length; index++) {
            output_textfield.push(
                <Item key={index}>
                    <CssTextField key={output_data[7].input} fullWidth label={output_data[7].input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                        name={output_data[index].id} value={output_data[index].value} onChange={handleOutputChange} />
                </Item>
            )
        }
    }
    if (props.type === 'feedback') {

    }


    return (
        <Box component="form"
            noValidate
            autoComplete="off" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                {/* 상단 문제 챕터 및 단원 */}
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[1].title}</p>
                        <p className="grid_data">{props.mainunit}단원</p>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[2].title}</p>
                        <p className="grid_data">{props.subunit}번</p>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} >
                    <Item>
                        <p className="grid_data_title">{grid_data[3].title}</p>
                        <CssTextField fullWidth label={grid_data[3].input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                            name={grid_data[3].title} value={grid_data[3].value} onChange={handleGridChange} />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <p className="grid_data_title">{grid_data[4].title}</p>
                        <CssTextField fullWidth label={grid_data[4].input} variant="outlined" id="custom-css-outlined-input" multiline rows={5}
                            name={grid_data[4].title} value={grid_data[4].value} onChange={handleGridChange} />
                    </Item>

                </Grid>
                <Grid item xs={12}>

                    <Item>
                        <p className="grid_data_title">{grid_data[5].title}</p>
                        <CssTextField fullWidth label={grid_data[5].input} variant="outlined" id="custom-css-outlined-input" multiline rows={10}
                            name={grid_data[5].title} value={grid_data[5].value} onChange={handleGridChange} />
                    </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{input_data[0].title}</p>

                    </Item>

                    {input_textfield}


                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{output_data[0].title}</p>
                    </Item>
                    {output_textfield}
                </Grid>

            </Grid>

        </Box>


    )
}

export default ProblemGrid;