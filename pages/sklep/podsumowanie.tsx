import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/ShopCart.styles';
import {ShopCartContainer} from '@/styles/styledPage/ShopCart.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import shortUUID from 'short-uuid';
import {AppContext} from '@/context/AppContext';
import SummaryDesktopList from '@/components/sklep/shopCart/SummaryDesktopList/SummaryDesktopList';
import {checkIsMobile, formatPrice} from '@/utils/utils';
import SummaryMobileList from '@/components/sklep/shopCart/SummaryMobileList/SummaryMobileList';
import ShopCartForm from '@/components/sklep/ShopCartForm/ShopCartForm';
import constants from '@/utils/constants';
import {sendOrderEmail} from '@/lib/fetchStrapi';
import {AlertMessagesTypes} from '@/utils/commonEnums';
import {ChevronLeft} from '@mui/icons-material';
import CopyToClipboardButton from '@/components/common/Buttons/CopyToClipboardButton/CopyToClipboardButton';
import Button from '@/components/common/Buttons/Button/Button';

const ShopCart = () => {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const {defaultPriceCurrency} = constants;
    const {handleSetMessageBox} = useContext(AppContext);
    const [orderStatus, setOrderStatus] = useState<{
        orderCode: null | string;
        orderSuccessed: boolean;
    }>({
        orderCode: null,
        orderSuccessed: false,
    });

    const [shopCartProducts, setShopCartProducts] = useState<
        | {
              id: string;
              productName: string;
              amount: string;
              productPrice: number;
              productSize: string;
              additionalInfo: {name: string; nr: string}[];
          }[]
        | []
    >([]);

    const howToBuyList: {id: string; content: string | ReactNode}[] = [
        {
            id: '1',
            content: t('shopCart.howToBuyPointOne'),
        },
        {
            id: '2',
            content: t('shopCart.howToBuyPointTwo'),
        },
        {
            id: '3',
            content: t('shopCart.howToBuyPointThree'),
        },
        {
            id: '4',
            content: (
                <p>
                    <Trans i18nKey={t('shopCart.howToBuyPointFour')} />
                </p>
            ),
        },
        {
            id: '5',
            content: (
                <p>
                    <Trans i18nKey={t('shopCart.howToBuyPointFive')} />
                </p>
            ),
        },
        {
            id: '6',
            content: (
                <p>
                    <Trans i18nKey={t('shopCart.howToBuyPointSix')} />
                </p>
            ),
        },
    ];

    const {
        handleSetShopCartCounter,
        app: {shopCartCounter},
    } = useContext(AppContext);

    const handleDeleteProduct = (productId: string) => {
        const findItem = shopCartProducts?.find(({id}) => productId === id);
        if (findItem) {
            const shopCartUpdated = [...shopCartProducts]?.filter(
                ({id}) => productId !== id
            );
            setShopCartProducts(shopCartUpdated);
            sessionStorage.setItem(
                'shop-cart',
                JSON.stringify(shopCartUpdated)
            );
            handleSetShopCartCounter(
                shopCartCounter - parseInt(findItem.amount, 10)
            );
        }
    };

    const handleSendOrder = async ({
        email,
        phoneNumber,
        name,
        localization,
        trainingLocation,
    }: {
        email: string;
        phoneNumber: string;
        name: string;
        localization: string;
        trainingLocation: string;
    }) => {
        const generatedOrderCode = shortUUID.generate();

        const preparedData = {
            email,
            phoneNumber,
            name,
            localization,
            trainingLocation,
            generatedOrderCode,
            totalPrice: formatPrice(
                [...shopCartProducts]?.reduce(
                    (accumulator, currentValue) =>
                        accumulator +
                        parseInt(currentValue.amount, 10) *
                            currentValue.productPrice,
                    0
                ),
                defaultPriceCurrency
            ),
            shopCartProducts: shopCartProducts.map(
                ({
                    productName,
                    productSize,
                    amount,
                    productPrice,
                    additionalInfo,
                }) => {
                    let preparedAdditionalInfo = '';
                    additionalInfo?.forEach(
                        // eslint-disable-next-line no-return-assign
                        (item, index) =>
                            (preparedAdditionalInfo += `<li>
                            <b>${index + 1}.</b>
                            ${item.name ? item.name : t('none')}&nbsp;/&nbsp;
                            ${item.nr ? item.nr : t('none')}
                        </li>`)
                    );

                    return {
                        productName,
                        productSize: productSize || '-',
                        amount,
                        pricePerItem: formatPrice(
                            productPrice,
                            defaultPriceCurrency
                        ),
                        price: formatPrice(
                            parseInt(amount, 10) * productPrice,
                            defaultPriceCurrency
                        ),
                        additionalInfo: ` <ul>${preparedAdditionalInfo}</ul>`,
                    };
                }
            ),
        };

        const res = await sendOrderEmail(preparedData);
        if (res.ok || res.status === 200) {
            setOrderStatus({
                orderSuccessed: true,
                orderCode: generatedOrderCode,
            });
            setShopCartProducts([]);
            sessionStorage.setItem('shop-cart', JSON.stringify([]));
            handleSetShopCartCounter(0);
        } else {
            handleSetMessageBox({
                id: 'sentMail',
                text: t('alerts.sendEmailOrderError'),
                type: AlertMessagesTypes.ERROR,
            });
        }
    };

    const handleCheckIsMobile = () => setIsMobile(checkIsMobile(1080));

    useEffect(() => {
        const shopCart = sessionStorage.getItem('shop-cart');
        if (shopCart) setShopCartProducts(JSON.parse(shopCart));
        setIsMobile(checkIsMobile(1080));
        window.addEventListener('resize', handleCheckIsMobile);
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, []);

    return (
        <div>
            <Head>
                <title>{t('shopCart.siteTitle')}</title>
                <meta name="description" content={t('shopCart.siteTitle')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.ShopCartPage>
                <CommonStyled.HeroImage image={heroBackgroundImg}>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('shopCart.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                {orderStatus.orderSuccessed && orderStatus.orderCode ? (
                    <CommonStyled.Container>
                        <Styled.OrderSuccessedContainer>
                            <Styled.OrderSuccessedSubtitle>
                                {t('shopCart.orderSuccessed.subtitle')}
                            </Styled.OrderSuccessedSubtitle>
                            <p>{t('shopCart.orderSuccessed.content')}</p>
                            <Styled.OrderSuccessedCode>
                                {orderStatus.orderCode}
                                <CopyToClipboardButton
                                    onCopyHandler={() =>
                                        navigator.clipboard.writeText(
                                            orderStatus.orderCode || ''
                                        )
                                    }
                                    copyToClipboardText={t(
                                        'shopCart.orderSuccessed.copyToClipboardText'
                                    )}
                                />
                            </Styled.OrderSuccessedCode>
                        </Styled.OrderSuccessedContainer>
                        <Styled.OrderSuccessedButtonWrapper>
                            <Button
                                iconStart={<ChevronLeft />}
                                onClickHandler={() =>
                                    setOrderStatus({
                                        orderSuccessed: false,
                                        orderCode: null,
                                    })
                                }
                            >
                                {t('back')}
                            </Button>
                        </Styled.OrderSuccessedButtonWrapper>
                    </CommonStyled.Container>
                ) : (
                    <CommonStyled.Container>
                        <Styled.HowToBuyContainer>
                            <CommonStyled.SectionSubtitle belt={false}>
                                {t('shopCart.howToBuySubtitle')}
                            </CommonStyled.SectionSubtitle>
                            <Styled.HowToBuyList>
                                {howToBuyList.map(({id, content}) => (
                                    <Styled.HowToBuyListItem key={id} id={id}>
                                        {content}
                                    </Styled.HowToBuyListItem>
                                ))}
                            </Styled.HowToBuyList>
                        </Styled.HowToBuyContainer>
                        <ShopCartContainer>
                            {!isMobile && (
                                <SummaryDesktopList
                                    shopCartProducts={shopCartProducts}
                                    onDeleteProductHandler={handleDeleteProduct}
                                />
                            )}
                            {isMobile && (
                                <SummaryMobileList
                                    shopCartProducts={shopCartProducts}
                                    onDeleteProductHandler={handleDeleteProduct}
                                />
                            )}
                        </ShopCartContainer>
                        {shopCartProducts.length !== 0 && (
                            <Styled.ShopCartFormContainer>
                                <ShopCartForm
                                    shopCartFormDisabled={
                                        shopCartProducts.length === 0
                                    }
                                    onSendOrderHandler={handleSendOrder}
                                />
                            </Styled.ShopCartFormContainer>
                        )}
                    </CommonStyled.Container>
                )}
            </Styled.ShopCartPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default ShopCart;
