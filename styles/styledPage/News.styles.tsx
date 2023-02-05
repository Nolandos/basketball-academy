import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import DropdownSelect from '@/components/common/DropdownSelect/DropdownSelect';
import device from '@/styles/breakpoints';
import Link from 'next/link';

const {touch, desktopOnly} = device;
export const NewsPage = styled(CommonStyled.Page)``;

export const NewsList = styled.ul`
    min-height: 350px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: flex-start;
    list-style-type: none;

    > li {
        margin: 0 15px;
    }

    @media ${desktopOnly} {
        width: 760px;
    }

    @media ${touch} {
        width: 100%;
        padding: 0 15px;
        justify-content: center;
        > li {
            margin: 15px 0;
        }
    }
`;

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > p {
        margin: 6px 0;
    }

    @media ${touch} {
        flex-direction: column;
    }
`;

export const PageSizeWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    @media ${touch} {
        width: 100%;
        padding: 0 15px;
        justify-content: flex-start;
        margin-bottom: 35px;
        margin-right: 0;
    }
`;

export const PageSizeDropdownSelect = styled(DropdownSelect)`
    margin-left: 15px;
    @media ${touch} {
        max-width: 32px;
    }
`;

export const Container = styled(CommonStyled.Container)`
    padding: 55px 0;
    justify-content: center;
`;

export const NoNewsText = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15%;
    font-size: 1.25rem;
    font-style: italic;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: flex-start;

    > a {
        font-weight: 700;

        &:hover {
            color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {primaryGreen},
                    },
                },
            }) => primaryGreen};
        }
    }
`;
