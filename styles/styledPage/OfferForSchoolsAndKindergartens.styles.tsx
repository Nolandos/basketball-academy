import styled from 'styled-components';
import device from '@/styles/breakpoints';
import {ArrowForward} from '@mui/icons-material';
import Link from 'next/link';

const {mobileSmall, touch} = device;

export const OfferForSchoolsAndKindergartensPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 35px;

    @media ${touch} {
        h1 {
            font-size: 2.75rem;
        }
    }
`;

export const Wrapper = styled.div<{even: boolean}>`
    width: 100%;
    padding: 48px 0 80px 0;
    display: flex;
    justify-content: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen, backgroundColor},
            },
        },
        even,
    }) => (even ? backgroundColor : primaryGreen)};

    h2 {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {black, white},
                },
            },
            even,
        }) => (even ? black : white)};
        margin-left: ${({even}) => !even && 'calc(50% + 25px)'};

        @media ${touch} {
            margin: 15px 0 15px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }

    @media ${mobileSmall} {
        padding: 28px 15px 80px 15px;
    }
`;

export const SectionDescription = styled.p<{even: boolean}>`
    width: 50%;
    padding-left: ${({even}) => !even && '25px'};
    padding-right: ${({even}) => even && '25px'};
    font-size: ${({theme}) => theme.typography.fontSize * 1}px;
    line-height: 1.6em;
    margin-top: 0;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {black, white},
            },
        },
        even,
    }) => (even ? black : white)};
    font-weight: 400;

    &.cooperation-text {
        width: 100%;
    }

    @media ${touch} {
        width: 100%;
        text-align: center;
        padding: 0 5px;
        margin-top: 16px;
    }
`;

export const SectionContent = styled.div`
    display: flex;

    .cooperation-content {
        width: 50%;
    }

    .cooperation-container {
        margin-top: 55px;
        width: 100%;
        display: flex;
        justify-content: flex-start;

        img {
            margin: 0 30px;
        }
    }

    @media ${touch} {
        flex-direction: column;
        .cooperation-content {
            width: 100%;
        }

        .cooperation-container {
            justify-content: center;
            margin-bottom: 25px;

            img {
                margin: 25px 30px;
            }
        }
    }

    @media ${mobileSmall} {
        .cooperation-container {
            flex-direction: column;
            align-items: center;

            img {
                margin: 25px 0;

                &.pyra-poznan {
                    width: 158px;
                    height: 100px;
                }

                &.uks-siekierki {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
`;

export const ContentImage = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: auto;
    }

    @media ${touch} {
        width: 100%;
    }
`;

export const OfferForSchoolsAndKindergartensList = styled.ul`
    width: 50%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    margin: 0;

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

    @media ${touch} {
        width: 100%;
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

export const OfferForSchoolsAndKindergartensLink = styled(Link)<{
    color?: string;
}>`
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

    @media ${touch} {
        padding: 10px;

        > p {
            padding: 10px;
        }
    }
`;

export const InfoBoxWrapper = styled.div`
    width: 100%;
    margin: 25px 0;
    display: flex;
    justify-content: center;
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
