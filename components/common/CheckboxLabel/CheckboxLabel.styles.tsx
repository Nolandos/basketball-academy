import {Checkbox as MuiCheckbox, FormControlLabel} from '@mui/material';
import styled from 'styled-components';

export const CheckboxLabel = styled.div`
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Label = styled(FormControlLabel)`
    display: flex;
    align-items: flex-start;

    .MuiFormControlLabel-label {
        font-size: ${({theme}) => theme.typography.fontSize}px;
    }
`;

export const Checkbox = styled(MuiCheckbox)<{error: boolean | undefined}>`
    width: 22.75px;
    height: 22.75px;
    padding: 0 6px;
    margin-right: 11px;

    &.Mui-checked {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};

        .MuiSvgIcon-root {
            fill: ${({theme, error}) =>
                error
                    ? theme.palette.basketballAcademy.error
                    : theme.palette.basketballAcademy.primaryGreen};
        }
    }

    .MuiSvgIcon-root {
        width: 22.75px;
        height: 22.75px;
        fill: ${({theme, error}) =>
            error
                ? theme.palette.basketballAcademy.error
                : theme.palette.basketballAcademy.fontGraySecond};
    }
`;

export const Error = styled.p`
    width: 100%;
    color: ${({theme}) => theme.palette.basketballAcademy.error};
    font-size: ${({theme}) => theme.typography.fontSize * 0.8125}px;
    margin-left: 25px;
    margin-top: 5px;
`;
