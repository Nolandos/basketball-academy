import styled from 'styled-components';
import {Paper as MuiPaper} from '@mui/material';
import device from '@/styles/breakpoints';

const {touch} = device;

export const PopperButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: ${({theme}) => theme.typography.fontSize}px;

    > svg {
        fill: ${({theme}) => theme.palette.basketballAcademy.white};
    }
`;

export const Paper = styled(MuiPaper)<{
    tooltipPlacement: 'right' | 'top' | 'left' | 'bottom';
}>`
    min-width: 100px;
    max-width: 270px;
    padding: 25px;
    margin-left: 15px;
    position: relative;
    border-radius: 0;

    &:after {
        content: '';
        position: absolute;
        background-color: white;
        width: 15px;
        height: 15px;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        border-width: 0 0 1px 1px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.14);
    }

    @media ${touch} {
        width: 95%;
        &:after {
            display: none;
        }
    }
`;
