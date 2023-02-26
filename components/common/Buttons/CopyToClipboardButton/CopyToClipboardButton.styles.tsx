import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';

export const CopyToClipboardButton = styled(Button)`
    min-width: 0;
    min-height: 0;
    padding: 0;
    background-color: ${({theme}) =>
        theme.palette.basketballAcademy.transparent};
    color: ${({theme}) => theme.palette.basketballAcademy.black};
    border: none;
    margin-left: 10px;
`;
