import styled from 'styled-components';
import {TextField} from '@mui/material';

export const Input = styled(TextField)`
    .MuiInputBase-input {
        font-size: ${({theme}) => theme.typography.fontSize}px;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            -webkit-box-shadow: ${({theme}) =>
                `0 0 0 30px ${theme.palette.basketballAcademy.backgroundColor} inset !important`};
        }
    }

    .MuiInputLabel-root.Mui-focused,
    .MuiInputLabel-root.Mui-error.Mui-focused {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
    }

    .MuiInput-underline:after {
        border-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
    }

    .MuiInput-underline.Mui-error:after {
        border-color: ${({theme}) => theme.palette.basketballAcademy.error};
    }

    .MuiFormHelperText-root.Mui-error {
        color: ${({theme}) => theme.palette.basketballAcademy.error};
        font-size: 13px;
        margin-left: 2px;
    }

    .MuiInputLabel-root.Mui-error {
        color: ${({theme}) => theme.palette.basketballAcademy.borderGray};
    }
`;
