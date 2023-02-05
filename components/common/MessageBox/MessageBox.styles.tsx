import styled from 'styled-components';
import {InfoBox} from '@/styles/commonStyles';
import {AlertMessagesTypes} from '@/utils/commonEnums';
import {Close} from '@mui/icons-material';

export const ActionInfoBox = styled(InfoBox)<{messageType: AlertMessagesTypes}>`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
    top: 120px;
    border: none;
    border-radius: 0;
    box-shadow: 2px 2px 12px #00000040;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen, error},
            },
        },
        messageType,
    }) => {
        if (messageType === AlertMessagesTypes.SUCCESS) return primaryGreen;
        if (messageType === AlertMessagesTypes.ERROR) return error;
        return primaryGreen;
    }};

    color: ${({theme}) => theme.palette.basketballAcademy.white};

    > svg {
        margin-right: 10px;
    }

    > button {
        margin-left: auto;
    }
`;

export const ActionClose = styled(Close)`
    position: absolute;
    right: 0;
    cursor: pointer;
`;
