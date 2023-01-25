import styled from 'styled-components';

import device from '@/styles/breakpoints';
import {Button} from '@mui/material';

const {touch} = device;

export const Container = styled.div`
    button {
        font-family: 'Titillium Web', sans-serif;
        font-size: ${({theme}) => theme.typography.fontSize}px;
    }
`;
export const NumberButton = styled(Button)<{
    selected: boolean;
}>`
    min-width: auto;
    border: none;
    background-color: transparent;
    font-weight: ${({selected}) => (selected ? 600 : 400)};
    cursor: pointer;
    color: ${({selected, theme}) =>
        selected
            ? theme.palette.basketballAcademy.black
            : theme.palette.basketballAcademy.primaryGreen};
`;
export const SwitchingButton = styled(Button)`
    text-transform: none;
    margin: 0 15px;
    min-width: auto;
    border: none;
    background-color: transparent;
    font-weight: 400;
    cursor: pointer;
    color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};

    @media ${touch} {
        margin: 0;
        padding: 6px 4px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
`;
export const ListItem = styled.li`
    min-width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${touch} {
        min-width: auto;
    }
`;

export const LastListItem = styled.li`
    color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
    margin: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        margin: 0 18px 0 10px;
        color: ${({theme}) => theme.palette.basketballAcademy.black};
    }

    @media ${touch} {
        > span {
            margin: 0 8px 0 8px;
        }
    }
`;
