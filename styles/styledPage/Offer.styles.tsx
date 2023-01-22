import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';
import {ArrowForward} from '@mui/icons-material';

const {touch, mobileSmall} = device;
export const OfferPage = styled(CommonStyled.Page)``;

export const HowWorksWrapper = styled.div`
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

export const HowWorksContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const HowWorksTile = styled.div`
    width: 25%;
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
        margin-top: 10px;
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

export const OffersContent = styled.div`
    width: 100%;
    max-width: 820px;
    margin: 35px 0 65px 0;
    position: relative;

    &:after {
        content: '';
        height: 100%;
        width: 2px;
        background-color: #e2e3e3;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    @media ${touch} {
        padding: 0 20px;

        &:after {
            left: 20px;
        }
    }
`;
export const Segment = styled.div`
    width: 100%;
    min-height: 100px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 25px;

    &:first-child {
        margin-top: 0;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        z-index: 2;
    }

    &:before {
        height: 24px;
        width: 24px;
        border: 1px solid #e2e3e3;
        background-color: #ffffff;
        left: -12px;
    }

    &:after {
        height: 8px;
        width: 8px;
        top: 8px;
        left: -4px;
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }

    > h3 {
        margin: 0;
        font-size: 1.375rem;

        > a {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    p {
        display: flex;
        align-items: center;

        b {
            margin-right: 5px;
        }
    }

    @media ${touch} {
        > h3 {
            text-align: center;
        }

        p {
            flex-direction: column;
            text-align: center;
        }

        p.icon-text {
            flex-direction: row;
            text-align: center;
            justify-content: center;
        }
    }
`;

export const OfferTile = styled.div`
    height: 100%;
    width: 320px;
`;

export const OfferArrowForward = styled(ArrowForward)`
    width: 22px;
    height: 22px;
    margin-right: 5px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;
