import {Button, Menu} from '@mui/material';
import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, touchSec} = device;

export const DropdownButton = styled(Button)`
    padding: 6px 16px;
    border-radius: 0;
    color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
    line-height: 1.25rem;
    text-transform: none;
    font-weight: 500;
    font-size: ${({theme}) => theme.typography.fontSize * 1.0625}px;

    svg {
        font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
        margin: 0 0.2em;
    }

    @media ${touchSec} {
        font-size: ${({theme}) => theme.typography.fontSize}px;
        svg {
            font-size: ${({theme}) => theme.typography.fontSize}px;
            margin: 0 0.2em;
        }
    }
    @media ${touch} {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        color: #000000;
        > span {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const DropdownMenu = styled(Menu)`
    margin-top: 8px;

    li {
        padding: 0;
        font-size: ${({theme}) => theme.typography.fontSize}px;

        a {
            color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
            width: 100%;
            padding: 8px 35px;
        }
    }
`;
