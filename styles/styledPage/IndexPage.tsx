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

export const MainHero = styled(CommonStyled.Section)`
    height: 500px;
    position: relative;

    @media ${touch} {
        height: 600px;
    }
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
        padding-top: 80px;

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

export const MainHeroFollowUs = styled.div`
    width: 190px;
    min-height: 70px;
    border: 5px solid white;
    border-radius: 7px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 10px;
    top: 10px;
    background-color: ${({theme}) => theme.palette.basketballAcademy.white};
    color: ${({theme}) => theme.palette.basketballAcademy.black};

    .MuiSvgIcon-root {
        margin: 0 12px;
    }

    .followUsText {
        margin: 3px 0;
        font-weight: 600;
        font-size: 1.1rem;
    }

    @media ${touch} {
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

export const FollowUsIcons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
        cursor: pointer;

        &:hover {
            color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
        }
    }
`;
