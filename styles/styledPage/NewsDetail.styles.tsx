import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch, mobile, mobileSmall} = device;
export const NewsDetailPage = styled(CommonStyled.Page)``;

export const Title = styled(CommonStyled.Title)`
    @media ${touch} {
        font-size: 2.8rem;
    }
    @media ${mobile} {
        font-size: 2.5rem;
    }

    @media ${mobileSmall} {
        font-size: 2.2rem;
    }
`;

export const Container = styled(CommonStyled.Container)`
    padding-top: 20px;
    justify-content: center;
    padding-bottom: 80px;
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const PhotoGalleryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px 0;
`;

export const Content = styled.div`
    width: 960px;

    img {
        width: 100%;
    }

    blockquote {
        position: relative;

        &:before {
            font-family: 'Material Icons';
            content: 'format_quote';
            position: absolute;
            font-size: 3.5rem;
            left: -55px;
            top: -23px;
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

export const Date = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGraySecond},
            },
        },
    }) => fontGraySecond};
    font-weight: 700;

    > p {
        margin-left: 5px;
    }

    > svg {
        width: 20px;
        height: 20px;
    }
`;
