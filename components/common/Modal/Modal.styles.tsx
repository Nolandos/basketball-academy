import styled from 'styled-components';
import {Dialog} from '@mui/material';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const Modal = styled(Dialog)`
    .MuiDialog-paper {
        min-width: 800px;
        min-height: 150px;
        padding: 40px;
    }

    @media ${touch} {
        .MuiDialog-paper {
            min-width: 300px;
            width: 100%;
        }
    }

    @media ${mobileSmall} {
        .MuiDialog-paper {
            padding: 40px 25px;
            text-align: center;
        }
    }
`;
