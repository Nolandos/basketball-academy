import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';
import constants from '@/utils/constants';
import React, {FC, useEffect, useState} from 'react';
import {BackendPaginationMeta, PhotosCollectionType} from '@/utils/commonTypes';
import {checkIsMobile, getFormatDate} from '@/utils/utils';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/Photos.styled';
import * as CommonStyled from '@/styles/commonStyles';
import PaginationInput from '@/components/common/Pagination/PaginationInput/PaginationInput';
import Pagination from '@/components/common/Pagination/Pagination';
import {fetchPhotosCollections} from '@/lib/fetchStrapi';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {reverse} from 'named-urls';
import Image from 'next/image';
import Link from 'next/link';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

type PhotosProps = {
    photosCollections: PhotosCollectionType[];
    paginationInfo: BackendPaginationMeta;
};

const PhotosCollections: FC<PhotosProps> = ({
    photosCollections,
    paginationInfo,
}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {
        gallery: {photos: photosUrl},
    } = urls;

    const {pageSizeValues} = constants;
    const {
        pagination: {page, pageSize, pageCount},
    } = paginationInfo;
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleChangePage = (selectedPge: string | number) => {
        router.push({
            pathname: photosUrl.base,
            query: {
                ...router.query,
                page: selectedPge,
            },
        });
    };

    const handleChangePageSize = (selectedPageSize: number | string) => {
        router.push({
            pathname: photosUrl.base,
            query: {
                ...router.query,
                page: 1,
                pageSize: selectedPageSize,
            },
        });
    };

    const handleCheckIsMobile = () => setIsMobile(checkIsMobile(1080));
    useEffect(() => {
        if (checkIsMobile(1080)) setIsMobile(true);

        window.addEventListener('resize', handleCheckIsMobile);
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, [isMobile]);

    return (
        <div>
            <Head>
                <title>{t('common:photosCollections.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:photosCollections.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.PhotosPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:photosCollections.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.PaginationWrapper>
                        <Styled.PageSizeWrapper>
                            <p>
                                {t<string>('common:pagination.pageSizeSelect')}:
                            </p>
                            <Styled.PageSizeDropdownSelect
                                defaultValue={pageSize}
                                dropdownSelectOptions={pageSizeValues}
                                onChangeHandler={handleChangePageSize}
                            />
                        </Styled.PageSizeWrapper>
                        <PaginationInput
                            t={t}
                            isMobile={isMobile}
                            pageNumber={page}
                            totalPages={pageCount}
                            onChangePageHandler={handleChangePage}
                        />
                    </Styled.PaginationWrapper>
                    <Styled.PhotosList>
                        {!photosCollections ||
                            (photosCollections.length === 0 && (
                                <Styled.NoPhotosText>
                                    {t<string>(
                                        'common:photosCollections.noPhotosText'
                                    )}
                                </Styled.NoPhotosText>
                            ))}
                        {photosCollections?.map(
                            ({attributes: {slug, title, date, mainPhoto}}) => (
                                <Styled.PhotosListItem>
                                    <Styled.Content>
                                        <Styled.SinglePhotosImage
                                            href={reverse(
                                                photosUrl.detail.show,
                                                {
                                                    slug,
                                                }
                                            )}
                                        >
                                            <Image
                                                width={350}
                                                height={215}
                                                src={
                                                    `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${mainPhoto?.data?.attributes?.url}` ||
                                                    ''
                                                }
                                                alt={slug}
                                            />
                                        </Styled.SinglePhotosImage>
                                        <h2>
                                            <Link
                                                href={reverse(
                                                    photosUrl.detail.show,
                                                    {
                                                        slug,
                                                    }
                                                )}
                                            >
                                                {title} ({getFormatDate(date)})
                                            </Link>
                                        </h2>
                                    </Styled.Content>
                                </Styled.PhotosListItem>
                            )
                        )}
                    </Styled.PhotosList>
                    <Styled.PaginationWrapper>
                        <Pagination
                            isMobile={isMobile}
                            totalPages={pageCount}
                            pageNumber={page}
                            onChangePageHandler={handleChangePage}
                            t={t}
                        />
                    </Styled.PaginationWrapper>
                </Styled.Container>
            </Styled.PhotosPage>
        </div>
    );
};

export default PhotosCollections;

export async function getServerSideProps({
    locale,
    query,
}: {
    locale: string;
    query: {page: string; pageSize: string};
}) {
    const {page, pageSize} = query;

    const {data, meta, errno} = await fetchPhotosCollections(page, pageSize);

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            photosCollections: data,
            paginationInfo: meta,
            ...(await serverSideTranslations(locale, ['common', 'layout'])),
        },
    };
}
