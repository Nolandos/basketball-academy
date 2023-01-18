import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {mobileSmall, touch} = device;
export const TrainersPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const HeroImage = styled.div<{image: any}>`
    width: 100%;
    height: 366px;
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

export const TrainersTiles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 35px 0;
`;

export const TrainerTile = styled.div`
    width: 250px;
    height: 375px;
    margin: 25px 15px;
    cursor: pointer;
`;

export const TilePhotoWrapper = styled.div<{text: string}>`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
    position: relative;

    &:after {
        content: '${({text}) => text}';
        font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
        color: white;
        width: 250px;
        height: 250px;
        position: absolute;
        background-color: rgba(34, 31, 27, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
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

    img {
        width: 100%;
        height: auto;
    }
`;

export const TrainerName = styled.p`
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
    font-weight: 700;
    margin-top: 14px;
`;
