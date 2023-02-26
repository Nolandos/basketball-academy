import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';
import {ShoppingCart} from '@mui/icons-material';

export const ShopCartButton = styled(Button)`
    border-color: transparent;
    background-color: transparent;
    color: black;
    padding: 0;
    width: 80px;
    height: 100px;
    min-width: 0;
    position: relative;

    > svg {
        width: 28px;
        height: 28px;
    }
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;

export const ShopCartCounter = styled.div`
    padding: 0 4px;
    height: 18px;
    min-width: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 54%;
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
`;
