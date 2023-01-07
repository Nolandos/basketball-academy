import Slider from 'react-slick';
import * as StyledBars from '@/components/index/Bars/Bars.styles';
import Link from 'next/link';
import React, {FC} from 'react';
import {BarListItemType} from '@/utils/commonTypes';

type BarPropsType = {
    itemsList: Array<BarListItemType>;
    settings: {[k: string]: boolean | string | number | Array<object>};
};
const Bar: FC<BarPropsType> = ({itemsList, settings}) => (
    <StyledBars.Bar>
        <Slider {...settings}>
            {[...itemsList, ...itemsList, ...itemsList].map(
                ({id, src, height, width, url, urlExternal}) => (
                    <StyledBars.SlickItem key={id}>
                        {url && urlExternal && (
                            <a href={url} target="_blank" rel="noreferrer">
                                <StyledBars.SlickImage
                                    src={src}
                                    alt={id}
                                    height={height}
                                    width={width}
                                />
                            </a>
                        )}
                        {url && !urlExternal && (
                            <Link href={url} passHref>
                                <StyledBars.SlickImage
                                    src={src}
                                    alt={id}
                                    height={height}
                                    width={width}
                                />
                            </Link>
                        )}
                        {!url && (
                            <StyledBars.SlickImage
                                src={src}
                                alt={id}
                                height={height}
                                width={width}
                            />
                        )}
                    </StyledBars.SlickItem>
                )
            )}
        </Slider>
    </StyledBars.Bar>
);

export default Bar;
