import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, touchSec, mobileMicro, mobileSmall, mobile} = device;
export const MoviesPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const MoviesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 55px 0;
    min-height: 250px;
    @media ${mobile} {
        padding: 25px 0;
    }
`;

export const YoutubeFilmsList = styled.ul`
    width: 100%;
    min-height: 250px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 15px;
`;

export const YoutubeFilmsListItem = styled.div`
    width: calc(25% - 30px);
    height: 320px;
    margin: 0 15px;

    > h2 {
        width: 100%;
        font-weight: 600;
        text-align: left;
        font-size: 1rem;
        margin: 0;
    }

    @media ${touchSec} {
        width: 37%;
    }

    @media ${touch} {
        width: 50%;
    }

    @media ${mobile} {
        width: 100%;
    }
`;

export const YoutubeFilmsListItemIframe = styled.iframe`
    width: 100%;
    height: 200px;
    max-height: 650px;

    @media ${mobile} {
        max-height: 450px;
    }
    @media ${mobileSmall} {
        height: 250px;
    }
`;
