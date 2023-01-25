import React, {FC, useEffect, useState} from 'react';

import {TFunction} from 'next-i18next';

import {checkIsMobile} from '@/utils/utils';
import usePagination from '@mui/material/usePagination';
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import {v4 as uuid} from 'uuid';
import * as Styled from './Pagination.styles';

type PaginationProps = {
    pageNumber: string | number;
    totalPages: string | number;
    t: TFunction;
    onChangePageHandler: (page: number | string) => void;
    isMobile?: boolean;
};

const defaultProps = {
    isMobile: undefined,
};

const Pagination: FC<PaginationProps> = ({
    pageNumber,
    totalPages,
    t,
    onChangePageHandler,
    isMobile,
}) => {
    const [paginationIsMobile, setPaginationIsMobile] =
        useState<boolean>(false);
    const {items} = usePagination({
        onChange: (e, page) => onChangePageHandler(page),
        page:
            typeof pageNumber === 'string'
                ? parseInt(pageNumber, 10)
                : pageNumber,
        defaultPage:
            typeof pageNumber === 'string'
                ? parseInt(pageNumber, 10)
                : pageNumber,
        count:
            typeof totalPages === 'string'
                ? parseInt(totalPages, 10)
                : totalPages,
    });

    const createPaginationChildren = (
        type: string,
        page: number,
        selected: boolean,
        item?: {onClick: React.ReactEventHandler; disabled: boolean}
    ) => {
        let children;
        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '...';
        } else if (type === 'page') {
            children = (
                <Styled.NumberButton
                    key={uuid()}
                    type="button"
                    selected={selected}
                    {...item}
                >
                    {page}
                </Styled.NumberButton>
            );
        } else {
            children = (
                <Styled.SwitchingButton key={uuid()} type="button" {...item}>
                    {paginationIsMobile &&
                        (type === 'next' ? (
                            <ArrowRight
                                color={item?.disabled ? 'disabled' : undefined}
                            />
                        ) : (
                            <ArrowLeft
                                color={item?.disabled ? 'disabled' : undefined}
                            />
                        ))}
                    {!paginationIsMobile && t<string>(`pagination.${type}`)}
                </Styled.SwitchingButton>
            );
        }

        return children;
    };

    const handleCheckIsMobile = () =>
        setPaginationIsMobile(checkIsMobile(1080));

    useEffect(() => {
        if (isMobile === undefined) {
            window.addEventListener('resize', handleCheckIsMobile);
        } else {
            setPaginationIsMobile(isMobile);
        }
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, [isMobile]);

    return (
        <Styled.Container>
            <nav>
                <Styled.List>
                    {items.map(({page, type, selected, ...item}, index) => {
                        const children = createPaginationChildren(
                            type,
                            page || 1,
                            selected,
                            item
                        );

                        return (
                            <>
                                {index === items.length - 1 && (
                                    <Styled.LastListItem key={uuid()}>
                                        <span>
                                            {t<string>(`pagination.from`)}
                                        </span>
                                        <Styled.NumberButton
                                            type="button"
                                            selected={false}
                                            onClick={() =>
                                                onChangePageHandler(totalPages)
                                            }
                                        >
                                            {totalPages}
                                        </Styled.NumberButton>
                                    </Styled.LastListItem>
                                )}
                                <Styled.ListItem key={uuid()}>
                                    {children}
                                </Styled.ListItem>
                            </>
                        );
                    })}
                </Styled.List>
            </nav>
        </Styled.Container>
    );
};

Pagination.defaultProps = defaultProps;

export default Pagination;
