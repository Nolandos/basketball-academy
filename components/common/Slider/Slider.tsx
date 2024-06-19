import SlickSlider from 'react-slick';
import * as StyledSlider from '@/components/common/Slider/Slider.styles';
import Link from 'next/link';
import React, {FC, ReactNode} from 'react';
import {SliderListItemType} from '@/utils/commonTypes';

type SliderPropsType = {
    itemsList: Array<SliderListItemType>;
    settings: {
        [k: string]:
            | boolean
            | string
            | number
            | Array<object>
            | ReactNode
            | object[]
            | ((i: number) => JSX.Element);
    };
};
const Slider: FC<SliderPropsType> = ({itemsList, settings}) => (
    <StyledSlider.Slider>
        <SlickSlider {...settings}>
            {[...itemsList].map(
                ({id, src, height, width, url, urlExternal}) => (
                    <StyledSlider.SlickItem key={id}>
                        {url && urlExternal && (
                            <a href={url} target="_blank" rel="noreferrer">
                                <StyledSlider.SlickImage
                                    src={src}
                                    alt={id}
                                    height={height}
                                    width={width}
                                />
                            </a>
                        )}
                        {url && !urlExternal && (
                            <Link href={url} passHref>
                                <StyledSlider.SlickImage
                                    src={src}
                                    alt={id}
                                    height={height}
                                    width={width}
                                />
                            </Link>
                        )}
                        {!url && (
                            <StyledSlider.SlickImage
                                src={src}
                                alt={id}
                                height={height}
                                width={width}
                            />
                        )}
                    </StyledSlider.SlickItem>
                )
            )}
        </SlickSlider>
    </StyledSlider.Slider>
);

export default Slider;
