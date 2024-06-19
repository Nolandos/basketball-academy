import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import {ArrowForward} from '@mui/icons-material';
import Link from 'next/link';
import device from '@/styles/breakpoints';
import Accordion from '@/components/common/Accordion/Accordion';
import Button from '@/components/common/Buttons/Button/Button';

const {touch, mobileSmall, mobile} = device;
export const Timetable = styled(CommonStyled.Page)``;
export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
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
export const InfoBox = styled.div`
    width: 100%;
    max-width: 780px;
    border: ${({theme}) =>
        `2px solid ${theme.palette.basketballAcademy.primaryGreen}`};
    padding: 25px;
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

export const TimetableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 35px 0;
`;

export const TimetableHours = styled.div`
    height: 100%;
    min-width: 150px;
    width: 10%;
`;

export const TimetableDays = styled.div`
    width: 100%;
    height: 100%;
`;

export const DaysLabels = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
`;

export const DaysLabel = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.125rem;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border-right: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => `2px solid ${white}`};

    &:last-child {
        border-right: none;
    }

    span {
        font-size: 14px;
    }
`;

export const DaysContent = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
`;

export const HoursSlashDays = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.125rem;
    width: 100%;
    height: 60px;
    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
`;

export const HoursValues = styled.div`
    width: 100%;
    height: calc(100% - 60px);
`;

export const HoursLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    min-height: 30px;
    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
    border-top: none;
`;

export const ContentPerDay = styled.div`
    width: 20%;
    height: 100%;

    border-top: none;
`;

export const CardTrainingPerDay = styled.div<{
    timeDuration: string;
    backgroundColor: string | null;
    textColor: string | null;
}>`
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
    //border-left: none;
    border-top: none;
    padding: 7px;
    text-align: center;
    position: relative;
    background-color: ${({backgroundColor}) =>
        backgroundColor ? `${backgroundColor}` : ''};
    color: ${({textColor}) => textColor};

    &:hover {
        cursor: pointer;

        &::before {
            content: '${({timeDuration}) => timeDuration}';
            display: flex;
            //align-items: center;
            justify-content: center;
            color: white;
            width: 100%;
            height: 100%;
            background-color: rgba(51, 106, 83, 0.85);
            position: absolute;
            top: 0;
            left: 0;
            font-size: 24px;
            font-weight: 600;
        }

        &::after {
            content: '(więcej informacji...)';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 14px;
            color: white;
            font-weight: 500;
        }
    }
`;
export const AccordionWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 15px;
    display: flex;
    justify-content: center;
`;

export const SponsorshipAccordion = styled(Accordion)`
    max-width: 920px;
`;

export const MobileContentPerDay = styled.div`
    width: 100%;
`;

export const MobileCardTrainingPerDay = styled.div`
    width: 100%;
    text-align: center;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid black;
`;

export const MobileMoreButton = styled(Button)`
    min-height: 0;
    min-width: 0;
    padding: 10px 15px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const MobileCardTimeLabel = styled.span`
    margin: 0 5px 10px 0;
    height: 25px;
    display: flex;
`;

export const MoreInfoText = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 35px 0 15px 0;
    font-size: 1.1875rem;

    > p {
        margin: 0 0 0 5px;
    }

    svg {
        width: 36px;
        height: 36px;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }

    @media ${mobile} {
        flex-direction: column;

        > p {
            margin: 8px 0 0 0;
        }
    }
`;

export const OtherInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
    padding: 15px;

    > h2 {
        width: 100%;
        max-width: 920px;
    }

    @media ${mobileSmall} {
        > h2 {
            display: flex;
            justify-content: center;
        }
    }
`;

export const OtherInfo = styled.p`
    width: 100%;
    max-width: 920px;
    font-size: 1.0625rem;

    @media ${mobileSmall} {
        text-align: center;
    }
`;
