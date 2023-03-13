import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {mobile, mobileSmall} = device;

export const TrainingOnlinePage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const TrainingOnlineContainer = styled.div`
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
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
`;

export const YoutubeFilmsListItem = styled.div`
    width: 100%;
    height: 750px;
    margin: 35px 0;

    > h2 {
        width: 100%;
        text-align: center;
    }

    @media ${mobile} {
        margin: 15px 0;
        height: 550px;
    }
    @media ${mobileSmall} {
        height: 350px;
    }
`;

export const YoutubeFilmsListItemIframe = styled.iframe`
    width: 100%;
    height: 100%;
    max-height: 650px;

    @media ${mobile} {
        max-height: 450px;
    }
    @media ${mobileSmall} {
        height: 250px;
    }
`;
