import styled from 'styled-components';
import {ArrowForward} from '@mui/icons-material';
import device from '@/styles/breakpoints';

const {touch} = device;
export const TrainingInStudioPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
`;

export const Photos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    padding: 48px 0;
`;

export const ContentImage = styled.div`
    width: calc(25% - 4px);
    margin: 2px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    @media ${touch} {
        width: 100%;
    }
`;

export const TrainingInStudioContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 250px;
    padding-bottom: 45px;
`;

export const TrainingInStudioList = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;

    > li {
        display: flex;

        > svg {
            margin-top: 16px;
        }

        ul {
            padding-left: 0;

            > p {
                font-weight: 700;
                margin-top: 14px;
                font-size: 1.25rem;
            }

            li {
                margin: 10px 0 10px 40px;
                font-size: 1.0625rem;
            }
        }
    }
`;

export const LeagueWorkoutsArrowForward = styled(ArrowForward)`
    margin-right: 5px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;
