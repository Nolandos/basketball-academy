import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {mobileSmall, touch} = device;

export const AboutUsPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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

export const StandOutWrapper = styled.div`
    width: 100%;
    padding: 48px 0 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }
`;
export const StandOutContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const StandOutTile = styled.div`
    width: 25%;
    min-height: 250px;
    padding: 15px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    > h3 {
        margin-bottom: 10px;
    }

    > p {
        margin-top: 0;
    }

    > svg {
        width: 46px;
        height: 46px;
    }

    @media ${touch} {
        width: 50%;
    }
    @media ${mobileSmall} {
        width: 100%;
    }
`;

export const SectionDescription = styled.p<{even: boolean}>`
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

    @media ${touch} {
        width: 100%;
        text-align: center;
        padding: 0 5px;
        margin-top: 16px;
    }
`;

export const SectionContent = styled.div`
    display: flex;
    @media ${touch} {
        flex-direction: column;
    }
`;

export const ContentImage = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: auto;
    }

    @media ${touch} {
        width: 100%;
    }
`;
