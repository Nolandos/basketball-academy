import {fetchPhotosCollection} from '@/lib/fetchStrapi';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {PhotoGalleryType, PhotosCollectionType} from '@/utils/commonTypes';
import {getFormatDate, preparePhotosFromBackendToGallery} from '@/utils/utils';
import Head from 'next/head';
import * as CommonStyled from '@/styles/commonStyles';
import * as Styled from '@/styles/styledPage/PhotoCollectionDetail.styles';
import PhotoGallery from '@/components/common/PhotoGallery/PhotoGallery';
import {ChevronLeft} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';

type PhotoCollectionDetailProps = {
    photosCollection: PhotosCollectionType;
};
const PhotoCollectionDetail: FC<PhotoCollectionDetailProps> = ({
    photosCollection,
}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {gallery} = urls;
    const [photosGallery, setPhotosGallery] = useState<PhotoGalleryType[] | []>(
        []
    );
    const {
        attributes: {
            mainPhoto,
            title,
            slug,
            date,
            photos: {data: photosData},
        },
    } = photosCollection;

    useEffect(() => {
        setPhotosGallery(preparePhotosFromBackendToGallery(photosData, 5, 8));
    }, [photosData]);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={slug} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.PhotoCollectionDetailPage>
                <CommonStyled.HeroImage
                    image={{
                        src:
                            `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${mainPhoto?.data?.attributes?.url}` ||
                            '',
                    }}
                    description
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>
                            {title} ({getFormatDate(date)})
                        </Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Button
                        iconStart={<ChevronLeft />}
                        onClickHandler={() => router.push(gallery.photos.all)}
                    >
                        {t('common:photosCollections.backToGalleryCollections')}
                    </Button>
                    <PhotoGallery photos={photosGallery} />
                </Styled.Container>
            </Styled.PhotoCollectionDetailPage>
        </div>
    );
};

export default PhotoCollectionDetail;

export async function getServerSideProps({
    locale,
    params,
}: {
    params: {slug: string};
    locale: string;
}) {
    const {slug} = params;
    const {data: photosCollection} = await fetchPhotosCollection(slug);

    if (photosCollection instanceof Error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            photosCollection,
            ...(await serverSideTranslations(locale, [
                'index',
                'common',
                'layout',
            ])),
        },
    };
}
