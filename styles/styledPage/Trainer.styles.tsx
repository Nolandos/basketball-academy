import styled from 'styled-components';
import device from '@/styles/breakpoints';
import * as CommonStyled from '@/styles/commonStyles';

const {touch} = device;
export const TrainerPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({theme}) =>
        theme.palette.basketballAcademy.primaryGreen};
    color: white;
`;

export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        flex-direction: column-reverse;
    }
`;

export const TrainerContainer = styled.div`
    padding: 65px 0 35px 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > ul,
    p {
        width: 100%;
    }

    p {
        width: 100%;
        margin: 5px 0;

        &.club-positions {
            margin: 0 0 16px 0;
        }
    }

    ul {
        margin-top: 0;
    }

    @media ${touch} {
        width: 100%;
        padding: 20px;
    }
`;

export const TrainerImage = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TrainerName = styled.h1`
    width: 100%;
    margin: 0;
`;

export const ClubsList = styled.ul`
    width: 100%;
`;

export const Positions = styled.p`
    margin: 0;
    width: 100%;
    font-weight: 600;
`;

export const ClubsInfo = styled.p`
    font-weight: 700;
`;
