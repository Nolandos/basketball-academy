import React, {FC, useEffect, useState} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {fetchSingleNews} from '@/lib/fetchStrapi';
import {NewsType, PhotoGalleryType} from '@/utils/commonTypes';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/NewsDetail.styles';
import * as CommonStyled from '@/styles/commonStyles';
import HtmlBox from '@/components/common/HtmlBox/HtmlBox';
import PhotoGallery from '@/components/common/PhotoGallery/PhotoGallery';
import {getFormatDate, preparePhotosFromBackendToGallery} from '@/utils/utils';
import {useTranslation} from 'next-i18next';
import {CalendarMonth} from '@mui/icons-material';

type NewsDetailProps = {
    singleNewsInfo: NewsType;
};

const NewsDetail: FC<NewsDetailProps> = ({singleNewsInfo}) => {
    const {t} = useTranslation();
    const [photosGallery, setPhotosGallery] = useState<PhotoGalleryType[] | []>(
        []
    );

    const {
        attributes: {
            mainPhoto,
            title,
            slug,
            description,
            date,
            photos: {data: photosData},
        },
    } = singleNewsInfo;

    useEffect(() => {
        setPhotosGallery(preparePhotosFromBackendToGallery(photosData, 4, 3));
    }, [photosData]);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={slug} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.NewsDetailPage>
                <CommonStyled.HeroImage
                    image={{
                        src:
                            `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${mainPhoto?.data?.attributes?.url}` ||
                            '',
                    }}
                    description
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>{title}</Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.Content>
                        <Styled.Date>
                            <CalendarMonth /> <p>{getFormatDate(date)}</p>
                        </Styled.Date>
                        <HtmlBox>{description}</HtmlBox>
                    </Styled.Content>
                    {photosGallery && photosGallery.length > 0 && (
                        <Styled.PhotoGalleryContainer>
                            <CommonStyled.SectionSubtitle belt>
                                {t<string>('common:singleNewsDetails.gallery')}
                            </CommonStyled.SectionSubtitle>
                            <PhotoGallery photos={photosGallery} />
                        </Styled.PhotoGalleryContainer>
                    )}
                </Styled.Container>
            </Styled.NewsDetailPage>
        </div>
    );
};

export async function getServerSideProps({
    locale,
    params,
}: {
    params: {slug: string};
    locale: string;
}) {
    const {slug} = params;
    const {data: singleNewsInfo} = await fetchSingleNews(slug);

    if (singleNewsInfo instanceof Error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            singleNewsInfo,
            ...(await serverSideTranslations(locale, [
                'index',
                'common',
                'layout',
            ])),
        },
    };
}

export default NewsDetail;
