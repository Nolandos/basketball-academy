import React, {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';
import * as Styled from './ShopCartButton.styles';

type ShopCartButtonProps = {
    shopCartCounter: number;
};

const ShopCartButton: FC<ShopCartButtonProps> = ({shopCartCounter}) => {
    const router = useRouter();
    const [testCounter, setTestCounter] = useState(shopCartCounter);
    const {
        shop: {summary},
    } = urls;

    useEffect(() => {
        const shopCart = sessionStorage.getItem('shop-cart');
        if (shopCart) {
            setTestCounter(
                JSON.parse(shopCart)?.reduce(
                    (accumulator: number, currentValue: {amount: string}) =>
                        accumulator + parseInt(currentValue.amount, 10),
                    0
                )
            );
        }
    }, [shopCartCounter]);

    return (
        <Styled.ShopCartButton onClickHandler={() => router.push(summary)}>
            <Styled.ShoppingCartIcon />
            {testCounter > 0 && (
                <Styled.ShopCartCounter>{testCounter}</Styled.ShopCartCounter>
            )}
        </Styled.ShopCartButton>
    );
};

export default ShopCartButton;
