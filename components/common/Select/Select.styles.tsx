import styled from 'styled-components';
import {FormControl} from '@mui/material';

export const Container = styled(FormControl)`
    &.MuiFormControl-root {
        min-width: 250px;
    }

    .MuiInputBase-input {
        font-size: ${({theme}) => theme.typography.fontSize}px;
    }

    .MuiInputLabel-root.Mui-focused {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
    }

    .MuiInput-underline:after {
        border-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
    }

    .MuiInput-underline.Mui-error:after {
        border-color: ${({theme}) => theme.palette.basketballAcademy.error};
    }

    .MuiFormHelperText-root.Mui-error,
    .MuiInputLabel-root.Mui-error,
    .MuiFormHelperText-root {
        color: ${({theme}) => theme.palette.basketballAcademy.error};
        font-size: 13px;
        margin-left: 2px;
    }
`;
