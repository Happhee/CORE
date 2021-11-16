
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


//텍스트 필드 속성 적용
const CssTextField = styled(TextField)({
    marginTop: '10px',

    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#000',
        },
        '&:hover fieldset': {
            borderColor: 'pink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

export default CssTextField;