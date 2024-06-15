import styled from 'styled-components';
import Image from 'next/image';

export const Slider = styled.div`
    width: 100%;

    .slick-slider.slick-initialized,
    .slick-list,
    .slick-track {
        height: 100%;
    }

    .slick-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const SlickItem = styled.div`
    display: flex !important;
    justify-content: center;
    max-width: 100%;
`;

export const SlickImage = styled(Image)`
    display: inline-flex;
`;
