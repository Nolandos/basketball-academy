import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import {ArrowForward, Place} from '@mui/icons-material';
import Link from 'next/link';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;
export const RecreationalDayCamps = styled(CommonStyled.Page)``;
export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
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

    @media ${touch} {
        padding: 24px 0 40px 0;
    }

    @media ${mobileSmall} {
        padding: 28px 15px 80px 15px;
    }
`;

export const SectionSubtitle = styled.h2<{belt: boolean}>`
    font-size: ${({theme}) => theme.typography.fontSize * 2.25}px;
    font-weight: 700;
    display: inline-flex;
    position: relative;

    &:after {
        content: '';
        display: ${({belt}) => (belt ? 'flex' : 'none')};
        position: absolute;
        width: 40px;
        height: 5px;
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
        bottom: -17px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    @media ${touch} {
        text-align: center;
    }
`;

export const SectionContent = styled.div`
    display: flex;
    width: 100%;

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

export const SectionDescription = styled.div<{even: boolean}>`
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
        margin-bottom: 16px;
    }
`;

export const InfoBox = styled.div<{even: boolean; small: boolean}>`
    width: 100%;
    max-width: 780px;
    border: ${({theme, even}) =>
        `2px solid ${
            even
                ? theme.palette.basketballAcademy.primaryGreen
                : theme.palette.basketballAcademy.white
        }`};
    padding: ${({small}) => (small ? '15px' : '25px')};
    min-height: ${({small}) => (small ? '75px' : '150px')};
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

export const RecreationalDayCampsList = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

    > li {
        display: flex;

        > svg {
            //margin-top: 16px;
        }

        > p {
            margin: 0 0 24px 0;
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

    @media ${touch} {
        align-items: center;
    }
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    > button {
        margin: 0 10px;
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

export const RecreationalDayCampsPlaceIcon = styled(Place)`
    margin-right: 5px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
`;

export const RecreationalDayCampsLink = styled(Link)<{color?: string}>`
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

export const CampBenefitsWrapper = styled.div`
    margin-top: 25px;
    width: 100%;
    padding: 48px 0 80px 0;
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

export const CampBenefitsContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CampBenefitsTile = styled.div`
    width: 27%;
    min-height: 150px;
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
