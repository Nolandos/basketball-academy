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
        z-index: 9999;
        bottom: 64px;
        right: 32px;
        height: 64px;
        width: 64px;
        background-color: #474546;
        border-radius: 0;

        &:hover {
            background-color: ${({theme}) =>
                theme.palette.basketballAcademy.primaryGreen};

            .MuiSvgIcon-root {
                animation-name: toTop;
                animation-duration: 0.55s;
            }
        }

        .MuiSvgIcon-root {
            color: ${({theme}) => theme.palette.basketballAcademy.white};
        }
    }
`;
