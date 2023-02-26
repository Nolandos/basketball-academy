import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import DropdownSelect from '@/components/common/DropdownSelect/DropdownSelect';
import device from '@/styles/breakpoints';
import Link from 'next/link';
import Button from '@/components/common/Buttons/Button/Button';

const {touch, touchSec, widescreenOnly, mobileMicro, mobile, mobileSmall} =
    device;
export const ShopPage = styled(CommonStyled.Page)``;

export const Container = styled(CommonStyled.Container)`
    padding: 55px 0;
`;

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > p {
        margin: 6px 0;
    }

    @media ${touch} {
        flex-direction: column;
    }
`;

export const PageSizeWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    @media ${touch} {
        width: 100%;
        padding: 0 15px;
        justify-content: flex-start;
        margin-bottom: 35px;
        margin-right: 0;
    }
`;

export const PageSizeDropdownSelect = styled(DropdownSelect)`
    margin-left: 15px;
    @media ${touch} {
        max-width: 32px;
    }
`;

export const ShopList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${mobileMicro} {
        padding: 0 15px;
        justify-content: center;
    }
`;

export const NoShopText = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15%;
    font-size: 1.25rem;
    font-style: italic;
`;

export const ShopListItem = styled.li`
    width: 25%;
    margin: 20px 0;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${widescreenOnly} {
        width: 33%;
    }

    @media ${touchSec} {
        width: 50%;
    }

    @media ${mobile} {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > h5 {
        width: 100%;
        max-width: 300px;
        margin: 15px 0 0 0;
        font-size: 1.1875rem;
        font-weight: 400;

        &:hover {
            color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {primaryGreen},
                    },
                },
            }) => primaryGreen};
        }
    }

    .price {
        width: 100%;
        margin-top: 8px;
        max-width: 300px;
        font-size: 1.125rem;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {fontGraySecond},
                },
            },
        }) => fontGraySecond};
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: flex-start;

    > a {
        font-weight: 700;

        &:hover {
            color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {primaryGreen},
                    },
                },
            }) => primaryGreen};
        }
    }
`;

export const SingleShopImage = styled(Link)`
    position: relative;
    width: 300px;
    height: 300px;
    padding: 25px;
    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `1px solid ${primaryGreen}`};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        max-width: 200px;
        max-height: 200px;
    }

    &:after {
        content: '';
        width: 300px;
        height: 300px;
        background-color: rgba(34, 31, 27, 0.7);
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    &:hover {
        &:after {
            opacity: 1;
            transition: opacity 0.6s;
        }

        > button {
            display: inline-flex;
        }

        img {
            transform: scale(1.2);
            transition: transform 0.2s cubic-bezier(0.35, 0.7, 0.32, 0.9) 0.1s;
        }
    }
`;

export const ShopListItemButton = styled(Button)`
    display: none;
    position: absolute;
    border-color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    z-index: 2;
`;
