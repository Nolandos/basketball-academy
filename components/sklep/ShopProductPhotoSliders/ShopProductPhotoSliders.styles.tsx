import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, totalMicro} = device;

const calculateSliderRows = (items: number, containerWidth: number) => {
    if (items === 1) {
        return 0;
    }
    const slickDots = 90;
    const itemsPerRows = Math.floor(containerWidth / slickDots);
    return Math.ceil(items / itemsPerRows);
};

export const ShopProductPhotosSlider = styled.div<{
    items: number;
    containerWidth: number;
}>`
    width: 100%;
    height: 100%;
    min-height: ${({items, containerWidth}) =>
        `${510 + calculateSliderRows(items, containerWidth) * 90}px`};
    display: ${({items}) => (items === 1 ? 'flex' : 'block')};
    justify-content: center;
    align-content: center;

    ul.slick-dots.slick-thumb.shop-product-photos-slider {
        bottom: ${({items, containerWidth}) =>
            `${-10 + calculateSliderRows(items, containerWidth) * -85}px`};
        display: flex !important;
        flex-wrap: wrap;
        justify-content: center;

        li {
            width: 80px;
            height: 80px;
            margin: 5px;
            box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
    }

    @media ${touch} {
        min-height: ${({items, containerWidth}) =>
            `${300 + calculateSliderRows(items, containerWidth) * 90}px`};
    }
`;

export const SliderArrow = styled.button`
    height: 40px;
    width: 40px;
    background-color: #474546;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    border: 2px solid #474546;

    &:hover {
        background-color: ${({theme}) => theme.palette.basketballAcademy.white};
        color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        border: ${({theme}) =>
            `2px solid ${theme.palette.basketballAcademy.primaryGreen}`};

        .MuiSvgIcon-root {
            color: #474546;
        }
    }

    &:focus {
        .MuiSvgIcon-root {
            color: #474546;
        }
    }

    &:before {
        display: none;
    }

    &.slick-next {
        right: 0;
        z-index: 1;
    }

    &.slick-prev {
        left: 0;
        z-index: 1;
    }

    .MuiSvgIcon-root {
        color: #ffffff;
    }

    @media ${totalMicro} {
        display: none !important;
    }
`;
