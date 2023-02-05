import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';

const {touch} = device;
export const SingUpRightSideArea = styled.div<{isOpen: boolean}>`
    min-height: 100vh;
    height: 100%;
    width: 970px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1299;
    background-color: white;
    transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition-property: transform;
    transition-duration: 0.5s;
    box-shadow: 0 0 9.8px 0.2px rgb(0 0 0 / 14%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 55px;
    @media ${touch} {
        width: 100%;
    }
`;

export const SingUpRightSideAreaButton = styled(Button)<{isOpen: boolean}>`
    width: ${({isOpen}) => (isOpen ? '42px' : '115px')};
    height: 42px;
    padding: 0;
    min-width: 0;
    min-height: 0;
    font-size: 0.625rem;
    position: absolute;
    left: ${({isOpen}) => (isOpen ? '-42px' : '-115px')};
    top: 65%;
    background-color: #474546;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    border: 2px solid #474546;

    &:hover {
        background-color: ${({theme}) => theme.palette.basketballAcademy.white};
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        border: ${({theme}) =>
            `2px solid ${theme.palette.basketballAcademy.primaryGreen}`};
    }

    span.icon-start {
        width: 15px;
        height: 15px;
        margin-right: 5px;

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;

export const SingUpRightSideAreaMobileButton = styled(Button)`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 52px;
    height: 52px;
    min-width: 0;
    min-height: 0;
    padding: 15px;
`;
