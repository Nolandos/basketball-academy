import React, {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {formatPrice} from '@/utils/utils';
import constants from '@/utils/constants';
import {Info} from '@mui/icons-material';
import * as Styled from './SummaryMobileList.styles';

type SummaryMobileListProps = {
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
const SummaryMobileList: FC<SummaryMobileListProps> = ({
    shopCartProducts,
    onDeleteProductHandler,
}) => {
    const {t} = useTranslation();
    const {defaultPriceCurrency} = constants;

    return (
        <Styled.MobileProductsList>
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
                    <Styled.MobileProductsListItem key={productId}>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.name')}</b> {productName}{' '}
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.size')}</b> {productSize || '-'}{' '}
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.pricePerItem')}</b>
                            {formatPrice(
                                productPrice,
                                defaultPriceCurrency
                            )}{' '}
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.amount')}</b> {amount}{' '}
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.additionalInfo')}</b>{' '}
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
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <b>{t('shopCart.price')}</b>{' '}
                            {formatPrice(
                                parseInt(amount, 10) * productPrice,
                                defaultPriceCurrency
                            )}
                        </Styled.ListItemRow>
                        <Styled.ListItemRow>
                            <Styled.DeleteButton
                                onClickHandler={() =>
                                    onDeleteProductHandler(productId)
                                }
                            >
                                {t('shopCart.deleteProduct')}
                            </Styled.DeleteButton>
                        </Styled.ListItemRow>
                    </Styled.MobileProductsListItem>
                )
            )}
            <Styled.MobileProductsListItem>
                <Styled.ListItemRow className="total-row">
                    <b>{t('shopCart.total')}</b>{' '}
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
                </Styled.ListItemRow>
            </Styled.MobileProductsListItem>
        </Styled.MobileProductsList>
    );
};

export default SummaryMobileList;
