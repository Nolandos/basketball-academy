import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import {ArrowForward} from '@mui/icons-material';
import device from '@/styles/breakpoints';

const {touch} = device;

export const MultiWorkouts = styled(CommonStyled.Page)``;

export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const MultiWorkoutsList = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;

    > li {
        display: flex;

        > svg {
            margin-top: 16px;
        }
    }
`;

export const LeagueWorkoutsArrowForward = styled(ArrowForward)`
    margin-right: 5px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
`;

export const Photos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    padding-top: 48px;
`;

export const ContentImage = styled.div`
    width: calc(25% - 4px);
    margin: 2px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    @media ${touch} {
        width: 100%;
    }
`;
