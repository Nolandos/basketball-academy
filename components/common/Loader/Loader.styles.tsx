import styled from 'styled-components';
import {CircularProgress} from '@mui/material';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const Loader = styled(CircularProgress)`
    &.MuiCircularProgress-root {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }
`;
export const LoadingText = styled.span`
    margin-top: 10px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGray},
            },
        },
    }) => fontGray};
`;
