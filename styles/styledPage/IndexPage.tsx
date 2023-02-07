import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import Button from '@/components/common/Buttons/Button/Button';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const IndexPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const RecommendUsSection = styled(CommonStyled.Section)``;

export const TargetsSection = styled(CommonStyled.Section)`
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    > h2 {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};

        &:after {
            background-color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {white},
                    },
                },
            }) => white};
        }
    }
`;

export const PartnersSection = styled(CommonStyled.Section)``;

export const SignUpSection = styled(CommonStyled.Section)``;
export const NumbersSection = styled(CommonStyled.Section)`
    min-height: 400px;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    > h2 {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};

        &:after {
            background-color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {white},
                    },
                },
            }) => white};
        }
    }
`;

export const NumberContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    > svg {
        width: 60px;
        height: 60px;
        color: white;
    }

    > p,
    > h3 {
        color: white;
    }

    > p {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
    }

    > h3 {
        @property --num {
            syntax: '<integer>';
            initial-value: 0;
            inherits: false;
        }
        font-size: 53px;
        position: relative;
        margin-top: 0;
        margin-bottom: 35px;
        animation: counter 5s infinite alternate ease-in-out;
        counter-reset: num var(--num);

        @keyframes counter {
            from {
                --num: 0;
            }
            to {
                --num: 100;
            }
        }

        &:before {
            content: counter(num);
        }

        &:after {
            content: '';
            height: 5px;
            width: 40px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: -16px;
            background-color: white;
        }
    }
`;

export const MainHero = styled(CommonStyled.Section)`
    height: 500px;
    position: relative;
`;

export const MainHeroImage = styled.div<{backgroundImage: string}>`
    width: 100%;
    height: 100%;
    background: ${({backgroundImage}) =>
        ` no-repeat center rgba(0, 0, 0, 0.45) url(${backgroundImage})`};
    background-size: cover;
    filter: blur(3px);
    z-index: 1;
`;

export const MainHeroContent = styled.div`
    left: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: blur(0);
    position: absolute;

    @media ${touch} {
        .main-hero-logo {
            width: 280px;
            height: 280px;
        }
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 25px;
    display: flex;

    @media ${touch} {
        flex-direction: column;

        > button {
            width: 290px;
            margin: 10px 0;
        }
    }
`;

export const NewsButton = styled(Button)`
    margin-left: 15px;
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

export const LastNewsSection = styled(CommonStyled.Section)`
    margin-top: 35px;
    min-height: 650px;
    width: 100%;

    > div {
        min-height: 650px;
    }
`;

export const LastNewsList = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;

    > li {
        margin: 0 15px;
    }

    @media ${touch} {
        flex-direction: column;
    }
`;
