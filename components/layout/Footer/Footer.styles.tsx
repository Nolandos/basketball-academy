import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';
import Loader from '@/components/common/Loader/Loader';

const {hd, widescreenOnly, touchSec, touch, mobile, mobileSmall, mobileMicro} =
    device;
export const Footer = styled.footer`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
`;
export const FooterUpper = styled.div`
    min-height: 430px;
    width: 100%;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 75px 0;
`;
export const FooterBottom = styled.div`
    height: 80px;
    width: 100%;
    background-color: #131313;
    display: flex;
    justify-content: center;

    @media ${mobileMicro} {
        height: 120px;
        align-items: center;
    }
`;
export const UpperColumn = styled.div`
    height: 100%;
    width: 30%;
    color: #ffffff;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    &.call-us-upper {
        width: 40%;
    }

    > h5 {
        font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
        font-weight: 700;
        margin-bottom: 27px;
    }

    .about-academy {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {fontGrayThird},
                },
            },
        }) => fontGrayThird};
        font-size: ${({theme}) => theme.typography.fontSize * 0.9375}px;
        margin-top: 0;
        margin-bottom: 14px;
    }

    @media ${touch} {
        width: 100%;
        margin-bottom: 40px;
        &.call-us-upper {
            width: 100%;
        }
    }
`;

export const LinksList = styled(CommonStyled.List)``;
export const LinksListItem = styled.li`
    padding-bottom: 26px;
    color: #bdbcbc;
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    .MuiSvgIcon-root {
        position: absolute;
        left: -20px;
    }

    &:hover {
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};

        .MuiSvgIcon-root {
            left: -7px;
            transition: left 0.3s;
        }

        span {
            padding-left: 15px;
            transition: padding-left 0.3s;
        }
    }
`;
export const FollowUsList = styled(CommonStyled.List)`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const FollowUsItem = styled.li`
    width: 33%;
    max-width: 94px;
    height: 94px;
    margin: 0 4px 8px 4px;
    cursor: pointer;
    position: relative;
    display: flex;

    > a {
        height: 94px;
        width: 94px;
        z-index: 2;
        cursor: pointer;

        &:after {
            content: '';
            width: 94px;
            height: 94px;
            position: absolute;
            background-color: rgba(34, 31, 27, 0.4);
            left: 0;
            top: 0;
            opacity: 0;
        }

        &:hover {
            &:after {
                opacity: 1;
                transition: opacity 0.6s;
            }
        }
    }

    @media ${hd} {
        max-width: 94px;
        height: 94px;

        > a,
        > a:after,
        img {
            width: 94px;
            height: 94px;
        }
    }
    @media ${widescreenOnly} {
        max-width: 78px;
        height: 78px;
        > a,
        > a:after,
        img {
            width: 78px;
            height: 78px;
        }
    }
    @media ${touchSec} {
        max-width: 67px;
        height: 67px;
        > a,
        > a:after,
        img {
            width: 67px;
            height: 67px;
        }
    }

    @media ${touch} {
        max-width: 230px;
        height: 230px;
        > a,
        > a:after,
        img {
            width: 230px;
            height: 230px;
        }
    }

    @media ${mobile} {
        max-width: 194px;
        height: 194px;
        > a,
        > a:after,
        img {
            width: 194px;
            height: 194px;
        }
    }

    @media ${mobileSmall} {
        max-width: 134px;
        width: 33%;
        height: 134px;
        > a,
        > a:after,
        img {
            width: 100%;
            height: 100%;
        }
    }

    @media ${mobileMicro} {
        max-width: 85px;
        height: 85px;
        > a,
        > a:after,
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const BottomWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({theme}) => theme.typography.fontSize * 0.875}px;
    padding: 0 15px;

    @media ${mobileMicro} {
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        max-height: 120px;
    }
`;

export const Copyright = styled.p`
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    margin: 0;
`;

export const FollowUsBottom = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.palette.basketballAcademy.white};

    > p {
        margin-right: 16px;
    }

    .MuiSvgIcon-root {
        margin: 0 8px;
    }

    > a {
        cursor: pointer;

        &:hover {
            color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        }
    }
`;

export const LastNewsLoader = styled(Loader)`
    align-items: flex-start;
    padding-left: 25px;

    .MuiCircularProgress-root {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }
`;

export const NoNewsInfo = styled.p`
    margin: 0;
    font-style: italic;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGrayThird},
            },
        },
    }) => fontGrayThird};
`;

export const ListItemTitle = styled.p`
    margin: 0;
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ContactWrapper = styled.div`
    padding: 0;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};

    .call-us,
    .email,
    .account-number {
        display: flex;
        align-items: flex-end;
        margin: 15px 0 13px 0;
        font-size: 15px;

        .MuiSvgIcon-root {
            margin-right: 7px;
        }
    }

    .email,
    .account-number {
        margin: 13px 0;
    }

    @media ${touch} {
        display: flex;
        flex-direction: column;
    }

    @media ${mobileMicro} {
        &.mobile {
            width: 100%;
            align-items: center;
        }

        .call-us,
        .email,
        .account-number {
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;

            .MuiSvgIcon-root {
                margin-right: 0;
                margin-bottom: 5px;
            }
        }
    }
`;
