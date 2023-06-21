import {fetchProductDetails} from '@/lib/fetchStrapi';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {FC, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ProductsDetailsType} from '@/utils/commonTypes';
import * as CommonStyled from '@/styles/commonStyles';
import * as Styled from '@/styles/styledPage/ProductDetails.styles';
import Image from 'next/image';
import {formatPrice} from '@/utils/utils';
import constants from '@/utils/constants';
import {Add, Remove, Swipe, WarningAmber} from '@mui/icons-material';
import {Table} from '@mui/material';
import Select from '@/components/common/Select/Select';
import Input from '@/components/common/Input/Input';
import {v4 as uuid} from 'uuid';
import {AppContext} from '@/context/AppContext';
import PurchaseSummaryModal from '@/components/sklep/PurchaseSummaryModal/PurchaseSummaryModal';
import urls from '@/utils/urls';
import {Controller, useFieldArray, useForm} from 'react-hook-form';

type ProductDetailsProps = {
    productDetails: ProductsDetailsType;
};

type FormValues = {
    additionalInfo: {
        name: string;
        nr: string;
    }[];
};
const ProductDetails: FC<ProductDetailsProps> = ({productDetails}) => {
    const {t} = useTranslation();
    const router = useRouter();
    const {
        handleSetShopCartCounter,
        app: {shopCartCounter},
    } = useContext(AppContext);
    const [openSummaryModal, setOpenSummaryModal] = useState<boolean>(false);
    const {
        shop: {summary},
    } = urls;

    const {control, reset, getValues} = useForm<FormValues>({
        defaultValues: {
            additionalInfo: [{name: '', nr: ''}],
        },
        mode: 'onBlur',
    });
    const {fields, append, remove} = useFieldArray({
        name: 'additionalInfo',
        control,
    });

    const {
        attributes: {
            name,
            slug,
            price,
            additionalInfo,
            photo: {data: photosData},
            isUnavailable,
        },
    } = productDetails;
    const {defaultPriceCurrency} = constants;
    const [productCounterValue, setProductCounterValue] = useState<string>('1');
    const [sizesTableData, setSizesTableData] = useState<{
        tableHeadData: {id: string; label: string}[];
        tableBodyData: {[key: string]: string | number}[];
    } | null>(null);
    const [productSizesOptions, setProductSizesOptions] = useState<
        {id: string; label: string; value: string}[] | []
    >([]);
    const [selectedSizesOptions, setSelectedSizesOptions] = useState<{
        value: string | null;
        error: boolean;
    }>({
        value: null,
        error: false,
    });

    const handleChangeProductCount = (
        e: React.ChangeEvent<HTMLInputElement>,
        blur?: boolean
    ) => {
        const re = /^[0-9\b]+$/;
        const inputValue: string = e.target.value;

        if (inputValue === '' || re.test(inputValue)) {
            const parsedNewProductCounterValue = parseInt(e.target.value, 10);
            setProductCounterValue(e.target.value);

            if (blur && fields.length < parsedNewProductCounterValue) {
                const difference = parsedNewProductCounterValue - fields.length;
                for (let i = 0; i < difference; i += 1) {
                    append({
                        name: '',
                        nr: '',
                    });
                }
            } else if (blur && fields.length > parsedNewProductCounterValue) {
                const difference = fields.length - parsedNewProductCounterValue;
                for (let i = difference; i > 0; i -= 1) remove(i);
            }
        }
        if (blur && inputValue === '') {
            if (productCounterValue !== '1') {
                const difference = fields.length - 1;
                for (let i = difference; i > 0; i -= 1) remove(i);
            }
            setProductCounterValue('1');
        }
    };

    const handleAddToCart = () => {
        setProductCounterValue('1');
        const shopCart = sessionStorage.getItem('shop-cart');
        if (shopCart) {
            const shopCartObj = [
                ...JSON.parse(shopCart),
                {
                    id: uuid(),
                    productName: name,
                    amount: productCounterValue,
                    productSize: selectedSizesOptions?.value,
                    productPrice: price,
                    additionalInfo: additionalInfo
                        ? getValues('additionalInfo')
                        : null,
                },
            ];
            sessionStorage.setItem('shop-cart', JSON.stringify(shopCartObj));
        } else {
            const shopCartObj = [
                {
                    id: uuid(),
                    productName: name,
                    amount: productCounterValue,
                    productSize: selectedSizesOptions?.value,
                    productPrice: price,
                    additionalInfo: additionalInfo
                        ? getValues('additionalInfo')
                        : null,
                },
            ];
            sessionStorage.setItem('shop-cart', JSON.stringify(shopCartObj));
        }

        handleSetShopCartCounter(
            shopCartCounter + parseInt(productCounterValue, 10)
        );
        reset();
        setOpenSummaryModal(true);
    };

    const handlePrepareSizesTableData = (details: ProductsDetailsType) => {
        const compareLabels = (a: {length: number}, b: {length: number}) => {
            if (a.length < b.length) {
                return -1;
            }
            if (a.length > b.length) {
                return 1;
            }
            return 0;
        };
        const {
            attributes: {
                sizes: {data: productSizes},
            },
        } = details;

        const sizesTableBodyData = productSizes
            .map(({attributes}) => ({
                id: attributes.label,
                length: attributes.length,
                width: attributes.width,
                thirdSize: attributes.thirdSize,
                humanHeight: attributes.humanHeight,
            }))
            .sort(compareLabels);

        let tableBodyData: {[key: string]: string | number}[] = [];

        if (sizesTableBodyData.find((item) => item.humanHeight)) {
            let sizesTypes: {[key: string]: string | number} = {
                kindOfSize: t('shop.heightLabel'),
            };

            sizesTableBodyData.forEach((size) => {
                sizesTypes = {
                    ...sizesTypes,
                    [`${size.id}`]: size.humanHeight || '',
                };
            });

            tableBodyData = [...tableBodyData, sizesTypes];
        }

        if (sizesTableBodyData.find((item) => item.length)) {
            let sizesTypes: {[key: string]: string | number} = {
                kindOfSize: t('shop.lengthLabel'),
            };

            sizesTableBodyData.forEach((size) => {
                sizesTypes = {...sizesTypes, [`${size.id}`]: size.length || ''};
            });

            tableBodyData = [...tableBodyData, sizesTypes];
        }

        if (sizesTableBodyData.find((item) => item.width)) {
            let sizesTypes: {[key: string]: string | number} = {
                kindOfSize: t('shop.widthLabel'),
            };

            sizesTableBodyData.forEach((size) => {
                sizesTypes = {...sizesTypes, [`${size.id}`]: size.width || ''};
            });

            tableBodyData = [...tableBodyData, sizesTypes];
        }
        if (sizesTableBodyData.find((item) => item.thirdSize)) {
            let sizesTypes: {[key: string]: string | number} = {
                kindOfSize: t('shop.thirdValueLabel'),
            };

            sizesTableBodyData.forEach((size) => {
                sizesTypes = {
                    ...sizesTypes,
                    [`${size.id}`]: size.thirdSize || '',
                };
            });

            tableBodyData = [...tableBodyData, sizesTypes];
        }

        setProductSizesOptions(
            sizesTableBodyData.map(({id}) => ({
                id,
                label: id,
                value: id,
            }))
        );

        setSelectedSizesOptions({
            ...selectedSizesOptions,
            value: sizesTableBodyData[0]?.id || null,
        });

        setSizesTableData({
            tableHeadData: sizesTableBodyData.map((item) => ({
                id: item.id,
                label: item.id,
            })),
            tableBodyData,
        });
    };

    useEffect(() => {
        handlePrepareSizesTableData(productDetails);
    }, []);

    return (
        <div>
            <Head>
                <title>{name}</title>
                <meta name="description" content={slug} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.ProductDetailsPage>
                <PurchaseSummaryModal
                    isOpen={openSummaryModal}
                    onGoToSummaryHandler={() => router.push(summary)}
                    t={t}
                    toggleModalHandler={() => setOpenSummaryModal(false)}
                />
                <CommonStyled.Container>
                    <Styled.ProductDetails>
                        <Styled.ProductDetailsWrapper>
                            <Styled.ImageContent>
                                <Image
                                    width={500}
                                    height={500}
                                    src={
                                        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${photosData?.attributes?.url}` ||
                                        ''
                                    }
                                    alt={slug}
                                />
                            </Styled.ImageContent>
                        </Styled.ProductDetailsWrapper>
                        <Styled.ProductDetailsWrapper>
                            <Styled.ProductName>{name}</Styled.ProductName>
                            {isUnavailable && (
                                <Styled.ProductUnavailableInfo>
                                    <WarningAmber fontSize="small" />
                                    {t('shop.productUnavailableInfo')}
                                </Styled.ProductUnavailableInfo>
                            )}
                            <Styled.ProductPrice>
                                {formatPrice(price, defaultPriceCurrency)}
                            </Styled.ProductPrice>
                            <Styled.AddToCart>
                                <Styled.ProductCounter>
                                    <Styled.ProductCounterButton
                                        onClickHandler={() => {
                                            const number = parseInt(
                                                productCounterValue || '1',
                                                10
                                            );
                                            if (number > 1) {
                                                setProductCounterValue(
                                                    `${number - 1}`
                                                );
                                                remove(number - 1);
                                            }
                                        }}
                                        variant="OUTLINED"
                                    >
                                        <Remove />
                                    </Styled.ProductCounterButton>
                                    <Styled.ProductCounterInput
                                        onChange={handleChangeProductCount}
                                        onBlur={(e) =>
                                            handleChangeProductCount(e, true)
                                        }
                                        value={productCounterValue}
                                    />
                                    <Styled.ProductCounterButton
                                        variant="OUTLINED"
                                        onClickHandler={() => {
                                            append({
                                                name: '',
                                                nr: '',
                                            });
                                            setProductCounterValue(
                                                `${
                                                    parseInt(
                                                        productCounterValue ||
                                                            '1',
                                                        10
                                                    ) + 1
                                                }`
                                            );
                                        }}
                                    >
                                        <Add />
                                    </Styled.ProductCounterButton>
                                </Styled.ProductCounter>
                                {productSizesOptions.length > 0 && (
                                    <Styled.FormInput>
                                        <Select
                                            labelId="sizeSelect"
                                            id="sizeSelect"
                                            selectLabel={`${t(
                                                'shop.sizeSelectLabel'
                                            )}*`}
                                            inputLabel={`${t(
                                                'shop.sizeSelectLabel'
                                            )}*`}
                                            options={productSizesOptions}
                                            value={
                                                selectedSizesOptions?.value ||
                                                ''
                                            }
                                            onChangeHandler={(e) =>
                                                setSelectedSizesOptions({
                                                    ...selectedSizesOptions,
                                                    value: e || null,
                                                })
                                            }
                                        />
                                    </Styled.FormInput>
                                )}
                                <Styled.AddToCartButton
                                    disabled={!!isUnavailable}
                                    onClickHandler={handleAddToCart}
                                >
                                    {t('shop.addToCartButton')}
                                </Styled.AddToCartButton>
                            </Styled.AddToCart>
                            <Styled.AdditionalInfoList>
                                {additionalInfo &&
                                    fields.map((field, index) => (
                                        <Styled.AdditionalInfoWrapper
                                            key={field.id}
                                        >
                                            <Styled.AdditionalInfoNumber>
                                                {index + 1}.
                                            </Styled.AdditionalInfoNumber>
                                            <CommonStyled.FormInput>
                                                <Controller
                                                    name={`additionalInfo.${index}.name`}
                                                    control={control}
                                                    defaultValue={field.name}
                                                    render={({
                                                        field: controllerField,
                                                    }) => (
                                                        <Input
                                                            id={`additionalInfo.${index}.name`}
                                                            type="text"
                                                            label={`${t(
                                                                'shop.name'
                                                            )}`}
                                                            {...controllerField}
                                                        />
                                                    )}
                                                />
                                            </CommonStyled.FormInput>
                                            <CommonStyled.FormInput>
                                                <Controller
                                                    name={`additionalInfo.${index}.nr`}
                                                    control={control}
                                                    defaultValue={field.nr}
                                                    render={({
                                                        field: controllerField,
                                                    }) => (
                                                        <Input
                                                            id={`additionalInfo.${index}.nr`}
                                                            type="text"
                                                            label={`${t(
                                                                'shop.nr'
                                                            )}`}
                                                            {...controllerField}
                                                        />
                                                    )}
                                                />
                                            </CommonStyled.FormInput>
                                        </Styled.AdditionalInfoWrapper>
                                    ))}
                            </Styled.AdditionalInfoList>
                        </Styled.ProductDetailsWrapper>
                    </Styled.ProductDetails>
                    {productSizesOptions.length > 0 && (
                        <Styled.SizesWrapper>
                            <Styled.TableContainer>
                                <Table aria-label="sizes of product table">
                                    <Styled.TableHead>
                                        <Styled.HeadTableRow>
                                            <Styled.NoneContentTableCell>
                                                <Swipe />
                                            </Styled.NoneContentTableCell>
                                            {sizesTableData?.tableHeadData.map(
                                                ({
                                                    id: tableCellId,
                                                    label: tableCellLabel,
                                                }) => (
                                                    <Styled.HeadTableCell
                                                        key={tableCellId}
                                                        align="right"
                                                    >
                                                        {tableCellLabel}
                                                    </Styled.HeadTableCell>
                                                )
                                            )}
                                        </Styled.HeadTableRow>
                                    </Styled.TableHead>
                                    <Styled.TableBody>
                                        {sizesTableData?.tableBodyData?.map(
                                            (row) => (
                                                <Styled.BodyTableRow
                                                    key={row.kindOfSize}
                                                >
                                                    <Styled.BodyTableCell
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        {row.kindOfSize}
                                                    </Styled.BodyTableCell>
                                                    {Object.entries(row)
                                                        .filter(
                                                            ([key]) =>
                                                                key !==
                                                                'kindOfSize'
                                                        )
                                                        .map(([key, value]) => (
                                                            <Styled.BodyTableCell
                                                                component="th"
                                                                scope="row"
                                                                key={key}
                                                            >
                                                                {value}
                                                            </Styled.BodyTableCell>
                                                        ))}
                                                </Styled.BodyTableRow>
                                            )
                                        )}
                                    </Styled.TableBody>
                                </Table>
                            </Styled.TableContainer>
                        </Styled.SizesWrapper>
                    )}
                </CommonStyled.Container>
            </Styled.ProductDetailsPage>
        </div>
    );
};

export default ProductDetails;

export async function getServerSideProps({
    locale,
    params,
}: {
    params: {slug: string};
    locale: string;
}) {
    const {slug} = params;
    const {data: productDetails} = await fetchProductDetails(slug);

    if (productDetails instanceof Error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            productDetails,
            ...(await serverSideTranslations(locale, [
                'index',
                'common',
                'layout',
            ])),
        },
    };
}
