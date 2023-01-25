import styled from 'styled-components';
import {Input as MuiInput} from '@mui/material';

export const Container = styled.div`
    display: flex;
    align-items: center;

    > span {
        margin: 0 15px 0 20px;
    }
`;

export const Input = styled(MuiInput)`
    width: 55px;
    padding: 0 8px;
    font-size: ${({theme}) => theme.typography.fontSize}px;

    input {
        text-align: right;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type='number'] {
            -moz-appearance: textfield;
        }
    }

    &.Mui-focused {
        &:after {
            bottom: -2px;
            border-color: ${({theme}) =>
                theme.palette.basketballAcademy.primaryGreen};
        }
    }

    &:before {
        bottom: -2px;
        border-color: ${({theme}) => theme.palette.basketballAcademy.black};
    }
`;
