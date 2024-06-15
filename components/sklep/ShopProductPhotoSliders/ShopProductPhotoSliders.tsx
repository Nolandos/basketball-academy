import Image from 'next/image';
import React, {FC, useRef} from 'react';
import {PhotoTypes} from '@/utils/commonTypes';
import Slider from '@/components/common/Slider/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {KeyboardArrowRight, KeyboardArrowLeft} from '@mui/icons-material';
import * as Styled from './ShopProductPhotoSliders.styles';

type ShopProductPhotoSlidersProps = {
    shopProductPhotos: PhotoTypes[];
};

interface ShopProductPhoto {
    src: string;
    id: string;
}

const customPaging =
    (shopProductPhotosList: ShopProductPhoto[]) => (i: number) =>
        (
            <Image
                width={80}
                height={80}
                src={shopProductPhotosList[i]?.src}
                alt={`photo-${shopProductPhotosList[i]?.id}`}
            />
        );

const ShopProductPhotoSliders: FC<ShopProductPhotoSlidersProps> = ({
    shopProductPhotos,
}) => {
    const prevArrow = useRef<HTMLButtonElement | null>(null);
    const nextArrow = useRef<HTMLButtonElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sizeOfImages = {width: 500, height: 500};

    const shopProductPhotosList = shopProductPhotos?.map(
        ({attributes, id}) => ({
            id: `${id}`,
            src:
                `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${attributes?.url}` ||
                '',
            width: sizeOfImages?.width,
            height: sizeOfImages?.height,
        })
    );

    const sliderSettings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb shop-product-photos-slider',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        customPaging: customPaging(shopProductPhotosList),
        prevArrow: (
            <Styled.SliderArrow
                ref={prevArrow}
                onMouseLeave={() => {
                    if (document.activeElement === prevArrow.current) {
                        if (prevArrow.current) prevArrow.current.blur();
                    }
                }}
            >
                <KeyboardArrowLeft />
            </Styled.SliderArrow>
        ),
        nextArrow: (
            <Styled.SliderArrow
                ref={nextArrow}
                onMouseLeave={() => {
                    if (document.activeElement === nextArrow.current) {
                        if (nextArrow.current) nextArrow.current.blur();
                    }
                }}
            >
                <KeyboardArrowRight />
            </Styled.SliderArrow>
        ),
        speed: 700,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Styled.ShopProductPhotosSlider
            ref={containerRef}
            containerWidth={containerRef.current?.clientWidth || 0}
            items={shopProductPhotosList.length}
        >
            {shopProductPhotos?.length === 1 && (
                <Image
                    width={sizeOfImages.width}
                    height={sizeOfImages.height}
                    src={
                        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${shopProductPhotos[0]?.attributes?.url}` ||
                        ''
                    }
                    alt="test"
                />
            )}
            {shopProductPhotos?.length > 1 && (
                <Slider
                    itemsList={shopProductPhotosList}
                    settings={sliderSettings}
                />
            )}
        </Styled.ShopProductPhotosSlider>
    );
};

export default ShopProductPhotoSliders;
