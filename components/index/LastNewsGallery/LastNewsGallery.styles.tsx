import styled from 'styled-components';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';
import Loader from '@/components/common/Loader/Loader';

const {touch, mobile, mobileSmall} = device;
export const Container = styled.div`
    width: 100%;
    height: 100%;

    .slick-slider.slick-initialized {
        width: 100%;
        height: 100%;
    }

    .slick-list {
        height: 100%;

        .slick-track {
            height: 100%;

            .slick-slide {
                height: 100%;

                > div {
                    height: 100%;
                }
            }
        }
    }
`;

const ArrowButton = styled.button`
    width: 65px;
    height: 65px;
    z-index: 2;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};

    &:before {
        display: none;
    }

    svg {
        transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);
        font-size: 3rem;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {black},
                },
            },
        }) => black};
    }

    &:hover,
    &:focus {
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }

    &:hover {
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};

        svg {
            transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);
            transform: translateX(7px);
            color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {white},
                    },
                },
            }) => white};
        }
    }

    @media ${touch} {
        display: none !important;
    }
`;

export const NextArrow = styled(ArrowButton)`
    right: 25px;

    &:hover {
        svg {
            transform: translateX(7px);
        }
    }
`;

export const PrevArrow = styled(ArrowButton)`
    left: 25px;

    &:hover {
        svg {
            transform: translateX(-7px);
        }
    }
`;

export const Dot = styled.div`
    width: 14px;
    height: 14px;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border-radius: 2px;
`;

export const Dots = styled.div`
    bottom: 25px;

    ul {
        padding-left: 0;
    }

    .slick-active {
        div {
            background-color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {primaryGreen},
                    },
                },
            }) => primaryGreen};
        }
    }
`;

export const NewsSingleItem = styled.div<{background: string}>`
    width: 100%;
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    background: ${({background}) =>
        ` no-repeat center rgba(0, 0, 0, 0.45) url(${background})`};
    background-size: cover;
    background-blend-mode: darken;
`;

export const NewsButton = styled(Button)`
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border-color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
`;

export const NewsButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    > button {
        margin: 0 7px;
    }

    @media ${mobileSmall} {
        flex-direction: column;
        align-items: center;

        > button {
            margin: 7px 0;
            width: 210px;
        }
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    max-width: 1200px;

    h2 {
        text-align: center;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
        font-size: 4.1rem;
        letter-spacing: -2px;
    }

    @media ${touch} {
        padding: 0 15px;
        h2 {
            font-size: 2.8rem;
        }
    }
    @media ${mobile} {
        h2 {
            font-size: 2.5rem;
        }
    }

    @media ${mobileSmall} {
        h2 {
            font-size: 2.2rem;
        }
    }
`;

export const LastNewsLoader = styled(Loader)`
    width: 100%;
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-self: center;
`;
