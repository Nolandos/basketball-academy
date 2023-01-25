import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import {ArrowForward} from '@mui/icons-material';
import Link from 'next/link';
import device from '@/styles/breakpoints';

const {touch} = device;
export const IndividualWorkouts = styled(CommonStyled.Page)``;
export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const IndividualWorkoutsList = styled.ul`
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

        ul {
            padding-left: 0;

            > p {
                font-weight: 700;
                margin-top: 14px;
                font-size: 1.25rem;
            }

            li {
                margin: 10px 0 10px 40px;
                font-size: 1.0625rem;
            }
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

export const IndividualWorkoutsLink = styled(Link)`
    text-decoration: underline;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;
