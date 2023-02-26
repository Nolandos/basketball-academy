import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';
import constants from '@/utils/constants';
import React, {FC, useEffect, useState} from 'react';
import {BackendPaginationMeta, ProductsDetailsType} from '@/utils/commonTypes';
import {checkIsMobile, formatPrice} from '@/utils/utils';
import Head from 'next/head';
import * as CommonStyled from '@/styles/commonStyles';
import PaginationInput from '@/components/common/Pagination/PaginationInput/PaginationInput';
import Pagination from '@/components/common/Pagination/Pagination';
import {fetchProducts} from '@/lib/fetchStrapi';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {reverse} from 'named-urls';
import Image from 'next/image';
import Link from 'next/link';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/Shop.styles';

type ShopProps = {
    products: ProductsDetailsType[];
    paginationInfo: BackendPaginationMeta;
};

const Shop: FC<ShopProps> = ({products, paginationInfo}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {
        shop: {
            base: shopBaseUrl,
            detail: {show: shopDetailsShow},
        },
    } = urls;

    const {pageSizeValues, defaultPriceCurrency} = constants;
    const {
        pagination: {page, pageSize, pageCount},
    } = paginationInfo;
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleChangePage = (selectedPge: string | number) => {
        router.push({
            pathname: shopBaseUrl,
            query: {
                ...router.query,
                page: selectedPge,
            },
        });
    };

    const handleChangePageSize = (selectedPageSize: number | string) => {
        router.push({
            pathname: shopBaseUrl,
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
                <title>{t('common:shop.siteTitle')}</title>
                <meta name="description" content={t('common:shop.siteTitle')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.ShopPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:shop.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.PaginationWrapper>
                        <Styled.PageSizeWrapper>
                            <p>
                                {t<string>(
                                    'common:pagination.pageSizeSelect.productsPerPage'
                                )}
                                :
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
                    <Styled.ShopList>
                        {!products ||
                            (products.length === 0 && (
                                <Styled.NoShopText>
                                    {t<string>('common:shop.noShopText')}
                                </Styled.NoShopText>
                            ))}
                        {products?.map(
                            ({attributes: {name, price, photo, slug}}) => (
                                <Styled.ShopListItem>
                                    <Styled.Content>
                                        <Styled.SingleShopImage
                                            href={reverse(shopDetailsShow, {
                                                slug,
                                            })}
                                        >
                                            <Image
                                                width={200}
                                                height={200}
                                                src={
                                                    `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${photo?.data?.attributes?.url}` ||
                                                    ''
                                                }
                                                alt={slug}
                                            />
                                            <Styled.ShopListItemButton variant="OUTLINED">
                                                Przejdź
                                            </Styled.ShopListItemButton>
                                        </Styled.SingleShopImage>
                                        <h5>
                                            <Link
                                                href={reverse(shopDetailsShow, {
                                                    slug,
                                                })}
                                            >
                                                {name}
                                            </Link>
                                        </h5>
                                        <p className="price">
                                            {formatPrice(
                                                price,
                                                defaultPriceCurrency
                                            )}
                                        </p>
                                    </Styled.Content>
                                </Styled.ShopListItem>
                            )
                        )}
                    </Styled.ShopList>
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
            </Styled.ShopPage>
        </div>
    );
};

export default Shop;

export async function getServerSideProps({
    locale,
    query,
}: {
    locale: string;
    query: {page: string; pageSize: string};
}) {
    const {page, pageSize} = query;

    const {data, meta, errno} = await fetchProducts(page, pageSize);

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: data,
            paginationInfo: meta,
            ...(await serverSideTranslations(locale, ['common', 'layout'])),
        },
    };
}
