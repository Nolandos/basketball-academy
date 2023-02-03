import styled from 'styled-components';
import Image from 'next/image';

export const Bar = styled.div`
    width: 100%;
    height: 170px;

    .slick-slider.slick-initialized,
    .slick-list,
    .slick-track {
        height: 100%;
        max-height: 170px;
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
    max-height: 100px;
    max-width: 100%;
`;

export const SlickImage = styled(Image)`
    display: inline-flex;
    //max-height: 100px;
    //max-width: 150px;
`;
