import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import Button from '@/components/common/Buttons/Button/Button';
import {
    TableContainer as MuiTableContainer,
    TableHead as MuiTableHead,
    TableRow as MuiTableRow,
    TableBody as MuiTableBody,
    TableCell,
} from '@mui/material';
import device from '@/styles/breakpoints';

const {touch, mobileSmall, desktop} = device;

export const ProductDetailsPage = styled(CommonStyled.Page)`
    padding-bottom: 55px;
    padding-top: 80px;
`;

export const ProductDetails = styled.div`
    width: 100%;
    min-height: 450px;
    display: flex;
    justify-content: center;

    @media ${touch} {
        flex-direction: column;
    }
`;

export const ProductDetailsWrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 0 17px;
    overflow-y: auto;
    @media ${touch} {
        width: 100%;
        height: auto;
        min-height: 350px;
    }
`;

export const ImageContent = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${touch} {
        width: 100%;
        height: 350px;

        img {
            width: 100%;
            height: 100%;
            max-width: 300px;
            max-height: 300px;
        }
    }
`;

export const ProductName = styled.h2`
    margin: 15px 0 0 0;
    font-size: 2.25rem;
`;

export const ProductPrice = styled.p`
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 29px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGraySecond},
            },
        },
    }) => fontGraySecond};
`;

export const ProductCounter = styled.div`
    height: 44px;
    width: 130px;
    margin-right: 17px;
    display: flex;
    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
`;

export const ProductCounterButton = styled(Button)`
    height: 100%;
    width: 32px;
    min-height: 0;
    min-width: 0;
    padding: 0;
    border: none;
`;

export const ProductCounterInput = styled.input`
    width: 67px;
    border-top: none;
    border-bottom: none;
    border-left: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
    border-right: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => `2px solid ${primaryGreen}`};
    display: flex;
    justify-content: center;
    text-align: center;
    outline: none;
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    font-weight: 700;
`;

export const AddToCart = styled.div`
    height: 60px;
    margin: 15px 0;
    width: 100%;
    display: flex;
    align-items: center;
    @media ${touch} {
        justify-content: center;
        flex-wrap: wrap;
        min-height: 60px;
        height: auto;
    }
`;

export const AddToCartButton = styled(Button)`
    min-height: 0;
    height: 44px;
    margin-left: 17px;
    @media ${mobileSmall} {
        margin-right: 17px;
    }
`;

export const SizesWrapper = styled.div`
    width: 100%;
    padding: 0 10px;
`;

export const TableContainer = styled(MuiTableContainer)`
    width: 100%;
`;
export const TableHead = styled(MuiTableHead)`
    background-color: ${({theme}) =>
        theme.palette.basketballAcademy.fontGraySecond};
    height: 40px;
`;
export const HeadTableRow = styled(MuiTableRow)``;
export const HeadTableCell = styled(TableCell)`
    min-width: 40px;
    padding: 15px 20px;
    font-weight: 500;
    text-align: center;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
`;
export const TableBody = styled(MuiTableBody)``;
export const BodyTableRow = styled(MuiTableRow)``;
export const BodyTableCell = styled(TableCell)`
    text-align: center;

    &:first-child {
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.fontGraySecond};
        color: ${({theme}) => theme.palette.basketballAcademy.white};
    }

    @media ${mobileSmall} {
        min-width: 100px;
    }
`;

export const FormInput = styled(CommonStyled.FormInput)`
    max-height: 44px;
    max-width: 130px;
    padding-left: 0;

    &.MuiFormControl-root {
        max-height: 44px;
        max-width: 130px;
    }

    .MuiInputBase-root {
        max-height: 44px;
        max-width: 130px;
    }

    .MuiFormControl-root {
        min-width: 0;
    }
`;

export const AdditionalInfoWrapper = styled.li`
    display: flex;
    margin-bottom: 15px;

    > div {
        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            max-width: 120px;
        }
    }
`;

export const AdditionalInfoList = styled.ul`
    padding: 15px 0;
    list-style-type: none;
    max-height: 350px;
    overflow-y: auto;
`;

export const AdditionalInfoNumber = styled.p`
    font-weight: 700;
`;

export const NoneContentTableCell = styled(TableCell)`
    @media ${desktop} {
        .MuiSvgIcon-root {
            display: none;
        }
    }
    @media ${touch} {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.palette.basketballAcademy.white};
    }
`;

export const ProductUnavailableInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: ${({theme}) => theme.palette.basketballAcademy.error};

    > svg {
        margin-right: 5px;
    }
`;
