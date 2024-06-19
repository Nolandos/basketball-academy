import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const ThirdMenLeague = styled(CommonStyled.Page)`
    padding-bottom: 65px;
`;

export const Title = styled(CommonStyled.Title)`
    @media ${touch} {
        text-align: center;
        font-size: 2.5rem;
    }
    @media ${mobileSmall} {
        text-align: center;
        font-size: 1.6rem;
    }
`;
export const GeneralInfo = styled.div`
    width: 100%;
    padding: 48px 0;
    display: flex;
    justify-content: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    @media ${touch} {
        padding: 20px 15px;
    }
`;

export const GeneralInfoContainer = styled(CommonStyled.Container)`
    @media ${touch} {
        flex-direction: column;
        align-items: center;
    }
`;

export const GeneralInfoTexts = styled.div`
    width: 50%;
    padding-right: 25px;
    @media ${touch} {
        padding: 0;
        width: 100%;
        text-align: center;
    }
`;

export const GeneralInfoText = styled.p`
    width: 100%;
    font-size: 1.0625rem;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
`;

export const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        height: auto;
        max-width: 300px;
        max-height: 300px;
    }

    @media ${touch} {
        width: 100%;
    }
`;

export const ThirdMenLeagueScheduler = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
