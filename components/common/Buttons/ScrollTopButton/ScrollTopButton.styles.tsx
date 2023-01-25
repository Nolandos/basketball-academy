import styled from 'styled-components';
import {Button} from '@mui/material';

export const ScrollTopButton = styled(Button)`
    @keyframes toTop {
        from {
            transform: translateY(15px);
        }

        to {
            transform: translateY(0);
        }
    }

    &.MuiButtonBase-root {
        position: fixed;
        z-index: 1199;
        bottom: 64px;
        right: 32px;
        height: 64px;
        width: 64px;
        background-color: #474546;
        border-radius: 0;
        color: transparent;

        &:hover {
            background-color: ${({theme}) =>
                theme.palette.basketballAcademy.white};
            border: ${({theme}) =>
                `3px solid ${theme.palette.basketballAcademy.primaryGreen}`}; // 3px solid #474546;

            .MuiSvgIcon-root {
                animation-name: toTop;
                animation-duration: 0.55s;
                color: ${({theme}) =>
                    theme.palette.basketballAcademy.primaryGreen};
            }
        }

        .MuiSvgIcon-root {
            color: ${({theme}) => theme.palette.basketballAcademy.white};
        }
    }
`;
