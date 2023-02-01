import {reverse} from 'named-urls';
import Image from 'next/image';
import Link from 'next/link';
import {cutText, removeTags} from '@/utils/utils';
import React, {FC} from 'react';
import {PhotoTypes} from '@/utils/commonTypes';
import {TFunction} from 'next-i18next';
import * as Styled from './SingleNewsTile.styles';

type SingleNewsTileProps = {
    mainPhoto: {
        data: PhotoTypes;
    };
    slug: string;
    title: string;
    description: string;
    url: string;
    t: TFunction;
};

const SingleNewsTile: FC<SingleNewsTileProps> = ({
    t,
    mainPhoto,
    slug,
    title,
    description,
    url,
}) => (
    <Styled.SingleNewsTile>
        <Styled.Content>
            <Styled.SingleNewsTileImage
                href={reverse(url, {
                    slug,
                })}
            >
                <Image
                    width={550}
                    height={335}
                    src={
                        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${mainPhoto?.data?.attributes?.url}` ||
                        ''
                    }
                    alt={slug}
                />
            </Styled.SingleNewsTileImage>
            <h2>
                <Link
                    href={reverse(url, {
                        slug,
                    })}
                >
                    {title}
                </Link>
            </h2>
            <p>{cutText(removeTags(description), 120)}</p>
            <Styled.ButtonWrapper>
                <Link
                    href={reverse(url, {
                        slug,
                    })}
                >
                    {t<string>('common:more')}
                </Link>
            </Styled.ButtonWrapper>
        </Styled.Content>
    </Styled.SingleNewsTile>
);

export default SingleNewsTile;
