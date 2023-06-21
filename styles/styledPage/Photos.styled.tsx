import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import DropdownSelect from '@/components/common/DropdownSelect/DropdownSelect';
import device from '@/styles/breakpoints';
import Link from 'next/link';

const {touch, touchSec, mobileMicro, mobile} = device;
export const PhotosPage = styled(CommonStyled.Page)``;

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

export const PhotosList = styled.ul`
    width: 100%;
    min-height: 350px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: flex-start;
    @media ${touchSec} {
        justify-content: center;
    }

    @media ${touch} {
        justify-content: center;
    }
    @media ${mobileMicro} {
        padding: 0 15px;
        justify-content: center;
    }
`;

export const NoPhotosText = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15%;
    font-size: 1.25rem;
    font-style: italic;
`;

export const PhotosListItem = styled.div`
    width: 33%;
    margin: 20px 0;
    min-height: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${touchSec} {
        width: 37%;
    }

    @media ${touch} {
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
    max-width: 350px;

    > h2 {
        max-width: 350px;
        margin: 3px 0;
        font-size: 1.2rem;

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

    > p {
        margin-top: 12px;
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

export const SinglePhotosImage = styled(Link)`
    position: relative;
    width: 100%;
    height: 215px;
    max-width: 350px;

    img {
        width: 100%;
        max-width: 350px;
        height: 100%;
        max-height: 215px;
    }

    &:after {
        font-family: 'Material Icons';
        content: 'photo_size_select_actual';
        font-size: 3.5rem;
        width: 100%;
        max-width: 350px;
        height: 215px;
        position: absolute;
        background: rgba(0, 0, 0, 0.25);
        left: 0;
        top: 0;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }

    &:hover {
        &:after {
            opacity: 1;
            transition: opacity 0.6s;
        }
    }
`;
