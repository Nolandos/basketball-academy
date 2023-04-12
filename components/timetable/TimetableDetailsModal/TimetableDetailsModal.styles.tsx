import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';
import Modal from '@/components/common/Modal/Modal';

const {touch} = device;

export const Header = styled.header<{divider?: boolean}>`
    height: 50px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    border-bottom: ${({theme, divider}) =>
        divider && `1px solid ${theme.palette.basketballAcademy.borderGray}`};
`;
export const Title = styled.h2`
    font-weight: 500;
    font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
`;

export const CloseButton = styled(Button)`
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
    padding: 15px;
    margin-left: auto;
    @media ${touch} {
        display: none;
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 150px;
    margin: 15px 0;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;

    > button {
        margin: 7px;

        &:last-child {
            margin-right: 0;
        }
    }

    @media ${touch} {
        flex-direction: column-reverse;
        > button {
            margin: 15px 0;
        }
    }
`;

export const InfoLabel = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0;

    > p {
        margin: 0 4px 0 0;
        font-weight: 700;
        font-size: 18px;
    }
`;
