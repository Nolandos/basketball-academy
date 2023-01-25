import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/News.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/pages/about-us-hero.jpg';
import * as CommonStyled from '@/styles/commonStyles';
import {fetchNews} from '@/lib/fetchStrapi';
import Pagination from '@/components/common/Pagination/Pagination';
import {checkIsMobile, cutText, removeTags} from '@/utils/utils';
import {useRouter} from 'next/router';
import {reverse} from 'named-urls';
import urls from '@/utils/urls';
import PaginationInput from '@/components/common/Pagination/PaginationInput/PaginationInput';
import {BackendPaginationMeta, NewsType} from '@/utils/commonTypes';
import Image from 'next/image';
import Link from 'next/link';

type NewsProps = {
    news: NewsType[];
    paginationInfo: BackendPaginationMeta;
};

const News: FC<NewsProps> = ({news, paginationInfo}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {news: newsUrl} = urls;
    const pageSizeValues = [
        {id: '1', value: 1, label: '1'},
        {id: '10', value: 10, label: '10'},
        {id: '25', value: 25, label: '25'},
        {id: '50', value: 50, label: '50'},
    ];
    const {
        pagination: {page, pageSize, pageCount},
    } = paginationInfo;
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const handleCheckIsMobile = () => setIsMobile(checkIsMobile(992));

    const handleChangePage = (selectedPge: string | number) => {
        router.push({
            pathname: newsUrl.base,
            query: {
                ...router.query,
                page: selectedPge,
            },
        });
    };

    const handleChangePageSize = (selectedPageSize: number | string) => {
        router.push({
            pathname: newsUrl.base,
            query: {
                ...router.query,
                page: 1,
                pageSize: selectedPageSize,
            },
        });
    };

    useEffect(() => {
        if (checkIsMobile(992)) setIsMobile(true);

        window.addEventListener('resize', handleCheckIsMobile);
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, [isMobile]);

    return (
        <div>
            <Head>
                <title>{t('common:news')}</title>
                <meta name="description" content={t('common:news')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.NewsPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:news')}
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
                    <Styled.NewsList>
                        {!news ||
                            (news.length === 0 && (
                                <Styled.NoNewsText>
                                    {t<string>('common:newsPage.noNewsText')}
                                </Styled.NoNewsText>
                            ))}
                        {news?.map(
                            ({
                                attributes: {
                                    mainPhoto,
                                    slug,
                                    title,
                                    description,
                                },
                            }) => (
                                <Styled.NewsListItem>
                                    <Styled.Content>
                                        <Styled.SingleNewsImage
                                            href={reverse(newsUrl.detail.show, {
                                                slug,
                                            })}
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
                                        </Styled.SingleNewsImage>
                                        <h2>
                                            <Link
                                                href={reverse(
                                                    newsUrl.detail.show,
                                                    {
                                                        slug,
                                                    }
                                                )}
                                            >
                                                {title}
                                            </Link>
                                        </h2>
                                        <p>
                                            {cutText(
                                                removeTags(description),
                                                120
                                            )}
                                        </p>
                                        <Styled.ButtonWrapper>
                                            <Link
                                                href={reverse(
                                                    newsUrl.detail.show,
                                                    {
                                                        slug,
                                                    }
                                                )}
                                            >
                                                {t('common:more')}
                                            </Link>
                                        </Styled.ButtonWrapper>
                                    </Styled.Content>
                                </Styled.NewsListItem>
                            )
                        )}
                    </Styled.NewsList>
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
            </Styled.NewsPage>
        </div>
    );
};

export default News;

export async function getServerSideProps({
    locale,
    query,
}: {
    locale: string;
    query: {page: string; pageSize: string};
}) {
    const {page, pageSize} = query;

    const {data, meta, errno} = await fetchNews(page, pageSize);

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            news: data,
            paginationInfo: meta,
            ...(await serverSideTranslations(locale, ['common', 'layout'])),
        },
    };
}
