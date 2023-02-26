import Tooltip from '@/components/common/Tooltip/Tooltip';
import {formatPrice} from '@/utils/utils';
import {DeleteForever, Info} from '@mui/icons-material';
import React, {FC} from 'react';
import {useTranslation} from 'next-i18next';
import constants from '@/utils/constants';
import * as Styled from './SummaryDesktopList.styles';

type SummaryDesktopListProps = {
    shopCartProducts: {
        id: string;
        productName: string;
        amount: string;
        productPrice: number;
        productSize: string;
        additionalInfo: {name: string; nr: string}[];
    }[];
    onDeleteProductHandler: (productId: string) => void;
};

const SummaryDesktopList: FC<SummaryDesktopListProps> = ({
    shopCartProducts,
    onDeleteProductHandler,
}) => {
    const {t} = useTranslation();
    const {defaultPriceCurrency} = constants;
    return (
        <>
            <Styled.ProductList>
                <Styled.Head>
                    <Styled.HeadItem className="name">
                        {t('shopCart.name')}
                    </Styled.HeadItem>
                    <Styled.HeadItem className="size">
                        {t('shopCart.size')}
                    </Styled.HeadItem>
                    <Styled.HeadItem className="price-per-item">
                        {t('shopCart.pricePerItem')}
                    </Styled.HeadItem>
                    <Styled.HeadItem className="amount">
                        {t('shopCart.amount')}
                    </Styled.HeadItem>
                    <Styled.HeadItem className="additional-info">
                        {t('shopCart.additionalInfo')}
                        <Tooltip
                            content={t('shopCart.additionalInfoTooltipContent')}
                            tooltipPlacement="right"
                        />
                    </Styled.HeadItem>
                    <Styled.HeadItem className="price">
                        {t('shopCart.price')}
                    </Styled.HeadItem>
                </Styled.Head>
                {shopCartProducts.length === 0 && (
                    <Styled.NoProductsInfo>
                        <Info />
                        {t('shopCart.noProductsInCart')}
                    </Styled.NoProductsInfo>
                )}
                {shopCartProducts?.map(
                    ({
                        id: productId,
                        productName,
                        amount,
                        productPrice,
                        productSize,
                        additionalInfo,
                    }) => (
                        <Styled.ProductItem key={productId}>
                            <Styled.BodyItem className="name">
                                {productName}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="size">
                                {productSize || '-'}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="price-per-item">
                                {formatPrice(
                                    productPrice,
                                    defaultPriceCurrency
                                )}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="amount">
                                {amount}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="additional-info">
                                {additionalInfo?.map((item, index) => (
                                    <p className="additional-info-row">
                                        <b>{index + 1}.</b>{' '}
                                        {item.name || <i>{t('none')}</i>} /{' '}
                                        {item.nr || <i>{t('none')}</i>}{' '}
                                    </p>
                                )) || (
                                    <p>
                                        <i>{t('none')}</i>
                                    </p>
                                )}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="price">
                                {formatPrice(
                                    parseInt(amount, 10) * productPrice,
                                    defaultPriceCurrency
                                )}
                            </Styled.BodyItem>
                            <Styled.BodyItem className="action">
                                <Styled.RemoveButton
                                    onClickHandler={() =>
                                        onDeleteProductHandler(productId)
                                    }
                                >
                                    <DeleteForever />
                                </Styled.RemoveButton>
                            </Styled.BodyItem>
                        </Styled.ProductItem>
                    )
                )}
            </Styled.ProductList>
            <Styled.Summary>
                <Styled.SummaryItem className="price-label">
                    {t('shopCart.total')}:
                </Styled.SummaryItem>
                <Styled.SummaryItem className="price">
                    {shopCartProducts.length > 0
                        ? formatPrice(
                              shopCartProducts?.reduce(
                                  (accumulator, currentValue) =>
                                      accumulator +
                                      parseInt(currentValue.amount, 10) *
                                          currentValue.productPrice,
                                  0
                              ),
                              defaultPriceCurrency
                          )
                        : `0 ${defaultPriceCurrency}`}
                </Styled.SummaryItem>
            </Styled.Summary>
        </>
    );
};

export default SummaryDesktopList;
