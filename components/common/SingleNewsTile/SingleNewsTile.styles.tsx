import styled from 'styled-components';
import Link from 'next/link';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const SingleNewsTile = styled.div`
    margin: 20px 0;
    min-height: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 350px;

    > h2 {
        max-width: 350px;
        margin: 14px 0 3px 0;
        font-size: 1.3rem;

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

    > p {
        margin-top: 12px;
    }

    @media ${touch} {
        max-width: 550px;
        width: 100%;

        > h2 {
            max-width: 550px;
            width: 100%;
        }
    }

    @media ${mobileSmall} {
        max-width: 366px;
        height: 225px;
    }
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

    @media ${touch} {
        max-width: 550px;
        width: 100%;
    }
    @media ${mobileSmall} {
        max-width: 366px;
        height: 225px;
    }
`;

export const SingleNewsTileImage = styled(Link)`
    position: relative;
    width: 100%;
    height: 215px;
    max-width: 350px;

    img {
        width: 100%;
        max-width: 350px;
        height: 100%;
        max-height: 215px;
    }

    &:after {
        content: '';
        width: 100%;
        max-width: 350px;
        height: 215px;
        position: absolute;
        background: rgba(0, 0, 0, 0.25);
        left: 0;
        top: 0;
        opacity: 0;
    }

    &:hover {
        &:after {
            opacity: 1;
            transition: opacity 0.6s;
        }
    }

    @media ${touch} {
        max-width: 550px;
        height: 335px;
        &:after {
            max-width: inherit;
            height: inherit;
        }

        img {
            max-width: inherit;
            max-height: inherit;
        }
    }

    @media ${mobileSmall} {
        max-width: 366px;
        height: 225px;
    }
`;
