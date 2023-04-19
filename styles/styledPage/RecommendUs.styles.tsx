import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;
export const RecommendUs = styled(CommonStyled.Page)``;
export const Container = styled(CommonStyled.Container)`
    @media ${touch} {
        padding: 0 15px;
    }
`;

export const Wrapper = styled.div<{even: boolean}>`
    width: 100%;
    padding: 48px 0 80px 0;
    display: flex;
    justify-content: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen, backgroundColor},
            },
        },
        even,
    }) => (even ? backgroundColor : primaryGreen)};

    h2 {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {black, white},
                },
            },
            even,
        }) => (even ? black : white)};
        margin-left: ${({even}) => !even && 'calc(50% + 25px)'};

        @media ${touch} {
            margin: 15px 0 15px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }

    @media ${mobileSmall} {
        padding: 28px 15px 80px 15px;
    }
`;

export const SectionContent = styled.div`
    display: flex;

    .cooperation-content {
        width: 50%;
    }

    .cooperation-container {
        margin-top: 55px;
        width: 100%;
        display: flex;
        justify-content: flex-start;

        img {
            margin: 0 30px;
        }
    }

    @media ${touch} {
        flex-direction: column;
        .cooperation-content {
            width: 100%;
        }

        .cooperation-container {
            justify-content: center;
            margin-bottom: 25px;

            img {
                margin: 25px 30px;
            }
        }
    }

    @media ${mobileSmall} {
        .cooperation-container {
            flex-direction: column;
            align-items: center;

            img {
                margin: 25px 0;

                &.pyra-poznan {
                    width: 158px;
                    height: 100px;
                }

                &.uks-siekierki {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
`;

export const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -25px;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {black},
            },
        },
    }) => black};

    @media ${touch} {
        top: 0;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export const ContentImage = styled.div<{even: boolean}>`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${touch} {
        width: 100%;
    }
`;

export const SectionDescription = styled.div<{even: boolean}>`
    width: 50%;
    padding-left: ${({even}) => !even && '25px'};
    padding-right: ${({even}) => even && '25px'};
    font-size: ${({theme}) => theme.typography.fontSize * 1}px;
    line-height: 1.6em;
    margin-top: 0;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {black, white},
            },
        },
        even,
    }) => (even ? black : white)};
    font-weight: 400;

    &.cooperation-text {
        width: 100%;
    }

    span {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {black, white},
                },
            },
            even,
        }) => (even ? black : white)} !important;
    }

    @media ${touch} {
        width: 100%;
        text-align: center;
        padding: 0 5px;
        margin-top: 16px;
    }
`;
