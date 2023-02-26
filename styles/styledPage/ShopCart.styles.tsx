import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, mobileMicro} = device;

export const ShopCartPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ShopCartContainer = styled.div`
    width: 100%;
    min-height: 450px;
    margin-top: 55px;
    @media ${touch} {
        margin-top: 25px;
    }
`;

export const HowToBuyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const HowToBuyList = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    @media ${touch} {
        padding: 0;
    }
`;

export const HowToBuyListItem = styled.li<{id: string}>`
    position: relative;
    min-height: 30px;
    padding-left: 40px;
    margin: 7px 0;
    display: flex;
    align-items: center;

    > p {
        margin: 0;
    }

    &:before {
        content: '${({id}) => id}';
        position: absolute;
        left: 0;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }

    @media ${mobileMicro} {
        padding: 40px 0 15px 0;
        text-align: center;
        &:before {
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
        }

        > p {
            width: 100%;
            text-align: center;
        }
    }
`;

export const ShopCartFormContainer = styled.div`
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: flex-start;
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const OrderSuccessedContainer = styled.div`
    width: 100%;
    min-height: 250px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    > p {
        text-align: center;
    }
`;

export const OrderSuccessedSubtitle = styled.h2`
    width: 100%;
    text-align: center;
`;

export const OrderSuccessedCode = styled.div`
    font-size: 1.125rem;
    font-weight: 700;
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        cursor: pointer;
        margin-left: 10px;
    }
`;

export const OrderSuccessedButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;
