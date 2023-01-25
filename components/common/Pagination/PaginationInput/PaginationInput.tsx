import React, {FC, useEffect, useRef, useState} from 'react';
import {TFunction} from 'next-i18next';
import {KeyboardCodesEnum} from '@/utils/commonEnums';
import {checkIsMobile} from '@/utils/utils';
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import * as Styled from './PaginationInput.styles';
import * as PaginationStyled from '../Pagination.styles';

type PaginationInputProps = {
    t: TFunction;
    pageNumber: number;
    totalPages: number;
    onChangePageHandler: (page: number) => void;
    isMobile?: boolean;
};

const defaultProps = {
    isMobile: undefined,
};

const PaginationInput: FC<PaginationInputProps> = ({
    t,
    pageNumber,
    totalPages,
    onChangePageHandler,
    isMobile,
}) => {
    const pageInputRef = useRef<HTMLInputElement>(null);
    const [paginationInputIsMobile, setPaginationInputIsMobile] =
        useState<boolean>(false);

    const validatePaginationInput = (page: number) => {
        if (page > totalPages) {
            if (pageInputRef.current)
                pageInputRef.current.value = `${totalPages}`;
            return totalPages;
        }
        if (page <= 0) {
            if (pageInputRef.current) pageInputRef.current.value = '1';
            return 1;
        }
        return page;
    };

    const handleCheckDisabled = (page: string | number, comparePage: number) =>
        parseInt(page as string, 10) === comparePage ||
        parseInt(page as string, 10) === 0;

    const handleSwitchOnNextPage = (page: string) => {
        const validatedPage = validatePaginationInput(parseInt(page, 10) + 1);
        onChangePageHandler(validatedPage);
    };

    const handleSwitchOnPreviousPage = (page: string) => {
        const validatedPage = validatePaginationInput(parseInt(page, 10) - 1);
        onChangePageHandler(validatedPage);
    };

    const handleOnChangePage = (page: string) => {
        const validatedPage = validatePaginationInput(parseInt(page, 10));
        onChangePageHandler(validatedPage);
    };

    const handleCheckIsMobile = () =>
        setPaginationInputIsMobile(checkIsMobile(1080));

    useEffect(() => {
        if (pageInputRef.current) {
            pageInputRef.current.value = `${pageNumber}`;
        }
        if (isMobile === undefined) {
            window.addEventListener('resize', handleCheckIsMobile);
        } else {
            setPaginationInputIsMobile(isMobile);
        }

        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, [pageNumber, isMobile]);

    return (
        <Styled.Container>
            <PaginationStyled.SwitchingButton
                onClick={() => {
                    if (pageInputRef?.current)
                        handleSwitchOnPreviousPage(pageInputRef.current.value);
                }}
                disabled={handleCheckDisabled(pageNumber, 1)}
            >
                {paginationInputIsMobile ? (
                    <ArrowLeft />
                ) : (
                    t<string>('pagination.previous')
                )}
            </PaginationStyled.SwitchingButton>
            <Styled.Input
                type="number"
                inputRef={pageInputRef}
                id="standard-basic"
                onChange={() => {
                    if (pageInputRef?.current)
                        validatePaginationInput(
                            parseInt(pageInputRef.current.value, 10)
                        );
                }}
                onKeyDown={({code}) =>
                    code === KeyboardCodesEnum.ENTER &&
                    pageInputRef?.current &&
                    handleOnChangePage(pageInputRef.current.value)
                }
                onBlur={() => {
                    if (pageInputRef?.current)
                        handleOnChangePage(pageInputRef.current.value);
                }}
            />
            <span>{t<string>(`pagination.from`)}</span>
            <PaginationStyled.NumberButton
                type="button"
                selected={false}
                onClick={() => onChangePageHandler(totalPages)}
            >
                {totalPages}
            </PaginationStyled.NumberButton>
            <PaginationStyled.SwitchingButton
                disabled={handleCheckDisabled(pageNumber, totalPages)}
                onClick={() => {
                    if (pageInputRef?.current)
                        handleSwitchOnNextPage(pageInputRef.current.value);
                }}
            >
                {paginationInputIsMobile ? (
                    <ArrowRight />
                ) : (
                    t<string>('pagination.next')
                )}
            </PaginationStyled.SwitchingButton>
        </Styled.Container>
    );
};

PaginationInput.defaultProps = defaultProps;

export default PaginationInput;
