import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';

const {widescreenOnly, touchSec} = device;

export const ProductList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
`;

export const Head = styled.div`
    width: 100%;
    display: flex;
`;

export const Item = styled.p`
    width: 200px;
    padding-left: 15px;
    margin: 0;
    min-height: 60px;
    display: flex;
    align-items: center;

    &.name {
        width: 350px;
    }

    &.additional-info {
        width: 350px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .additional-info-row {
            margin: 4px 0;
            width: 100%;
            text-align: left;

            &:first-child {
                margin-top: 15px;
            }
        }
    }

    &.price {
        width: 200px;
    }

    &.price-per-item,
    &.size {
        width: 150px;
    }

    &.amount {
        width: 100px;
    }

    &.action {
        width: 20px;
    }
`;

export const HeadItem = styled(Item)`
    font-size: 1.125rem;
    font-weight: 700;
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
`;

export const BodyItem = styled(Item)`
    font-size: 1.0625rem;
`;

export const ProductItem = styled.li`
    width: 100%;
    display: flex;
`;

export const Summary = styled.div`
    width: 100%;
    display: flex;
    padding-left: 1000px;

    @media ${widescreenOnly} {
        padding-left: 900px;
    }

    @media ${touchSec} {
        padding-left: 785px;
    }
`;

export const SummaryItem = styled.p`
    height: 60px;
    display: flex;
    padding-left: 15px;
    align-items: center;
    font-size: 1.1875rem;
    font-weight: 700;
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

    &.price-label {
        width: 100px;
    }

    &.price {
        width: 200px;
        padding-left: 25px;
    }
`;

export const RemoveButton = styled(Button)`
    min-width: 0;
    min-height: 0;
    padding: 15px 20px;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {transparent},
            },
        },
    }) => transparent};
    border-color: ${({
        theme: {
            palette: {
                basketballAcademy: {transparent},
            },
        },
    }) => transparent};
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    > svg {
        width: 32px;
        height: 32px;
    }

    &:hover {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {error},
                },
            },
        }) => error};
    }
`;

export const NoProductsInfo = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;

    > svg {
        margin-right: 10px;
    }
`;
