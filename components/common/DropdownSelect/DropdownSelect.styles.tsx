import styled from 'styled-components';
import {MenuItem as MuiMenuItem} from '@mui/material';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

export const DropdownSelect = styled(MenuDropdown)`
    color: ${({theme}) => theme.palette.basketballAcademy.black};
    font-weight: 400;
    font-size: ${({theme}) => theme.typography.fontSize}px;
    padding-left: 0;
    padding-right: 0;

    &:hover {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};

        &::after {
            border-bottom: ${({theme}) =>
                `1px solid ${theme.palette.basketballAcademy.primaryGreen}`};
        }
    }

    .MuiButton-label {
        width: 100%;
        display: flex;
        justify-content: space-between;

        svg {
            margin-right: 0;
            color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        }
    }

    &::after {
        left: 0;
        right: 0;
        bottom: -2.5px;
        content: '\\00a0';
        position: absolute;
        border-bottom: ${({theme}) =>
            `1px solid ${theme.palette.basketballAcademy.black}`};
        pointer-events: none;
    }
`;

export const MenuItem = styled(MuiMenuItem)<{selected: boolean}>`
    min-width: 105px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${({theme, selected}) =>
        !selected && theme.palette.basketballAcademy.primaryGreen};

    svg {
        position: absolute;
        left: 15px;
        font-size: ${({theme}) => theme.typography.fontSize * 1.5}px;
        font-weight: 500;
    }
`;

export const Label = styled.p`
    width: 100%;
    padding-left: 45px;
    padding-right: 62px;
`;
