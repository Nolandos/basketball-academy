import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {
    fullHd,
    hd,
    widescreenOnly,
    touchSec,
    touch,
    mobile,
    mobileSmall,
    mobileMicro,
} = device;

export const Page = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 330px;
    display: flex;
    flex-wrap: wrap;

    @media ${hd} {
        max-width: 1350px;
    }
    @media ${widescreenOnly} {
        max-width: 1170px;
    }

    @media ${touchSec} {
        max-width: 1020px;
    }

    @media ${touch} {
        max-width: 838px;
    }

    @media ${mobile} {
        max-width: 700px;
    }

    @media ${mobileSmall} {
        max-width: 520px;
    }
`;
export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${({theme}) => theme.typography.fontSize * 3.125}px;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    font-weight: 700;
    position: relative;
    text-align: center;

    &:after {
        content: '';
        position: absolute;
        width: 40px;
        height: 5px;
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
        bottom: -15px;
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

export const SectionSubtitle = styled.h2<{belt: boolean}>`
    font-size: ${({theme}) => theme.typography.fontSize * 2.25}px;
    font-weight: 700;
    display: inline-flex;
    position: relative;

    &:after {
        content: '';
        display: ${({belt}) => (belt ? 'flex' : 'none')};
        position: absolute;
        width: 40px;
        height: 5px;
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
        bottom: -17px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    @media ${touch} {
        text-align: center;
    }
`;

export const HeroImage = styled.div<{image: any; description?: boolean}>`
    width: 100%;
    height: ${({description}) => (description ? '366px' : '180px')};
    background: ${({image}) =>
        ` no-repeat center rgba(0, 0, 0, 0.45) url(${image?.src})`};
    background-size: cover;
    background-blend-mode: darken;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div`
    height: 100%;
    width: 100%;
    max-width: 820px;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    justify-content: center;
    align-items: center;
`;

export const HeroDescription = styled.p`
    text-align: center;
    font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
    line-height: 1.68em;
    font-weight: 400;
    @media ${mobileSmall} {
        padding: 0 15px;
        font-size: ${({theme}) => theme.typography.fontSize * 0.9375}px;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    height: 65px;
    min-width: 450px;
    border: 1px solid #4a4a4a;
    background-color: #f6f6f6;
    z-index: 1500;
    position: absolute;
    top: 150px;
    padding-left: 24px;
    padding-right: 6px;

    > p {
        margin: 0 92px 0 0;
        font-size: ${({theme}) => theme.typography.fontSize * 1.15}px;
    }

    @media ${fullHd} {
        top: 85px;
    }

    @media ${touch} {
        min-width: 300px;
    }

    @media ${mobileMicro} {
        > p {
            font-size: ${({theme}) => theme.typography.fontSize * 0.9375}px;
        }
    }
`;
