import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import {ArrowForward, ChevronRight} from '@mui/icons-material';
import Link from 'next/link';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;
export const NewLocation = styled(CommonStyled.Page)``;
export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const NewLocationList = styled.ul`
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

export const NewLocationStepsTileIcon = styled(ChevronRight)``;

export const InfoBox = styled.div`
    width: 100%;
    max-width: 780px;
    border: ${({theme}) =>
        `2px solid ${theme.palette.basketballAcademy.primaryGreen}`};
    padding: 25px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.0625rem;
`;

export const InfoBoxWrapper = styled.div`
    width: 100%;
    margin: 25px 0;
    display: flex;
    justify-content: center;
`;

export const NewLocationStepsContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const NewLocationStepsTile = styled.div`
    width: 25%;
    min-height: 120px;
    padding: 15px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .index-counter {
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.25rem;
    }

    > p {
        margin-top: 0;
    }

    > svg {
        width: 46px;
        height: 46px;
    }

    @media ${touch} {
        width: 50%;
    }
    @media ${mobileSmall} {
        width: 100%;
    }
`;

export const NewLocationStepsWrapper = styled.div`
    margin-top: 25px;
    width: 100%;
    padding: 48px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    font-size: 1.25rem;
    padding: 38px 15px;

    > p {
        text-align: center;
    }
`;

export const NewLocationLink = styled(Link)<{color?: string}>`
    text-decoration: underline;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
        color,
    }) => color || primaryGreen};
`;
