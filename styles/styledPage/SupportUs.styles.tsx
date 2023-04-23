import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch} = device;

export const SupportUs = styled(CommonStyled.Page)`
    padding-bottom: 35px;
    @media ${touch} {
        padding-bottom: 35px;
    }
`;
export const PercentContainer = styled.div`
    width: 100%;
    min-height: 150px;
    margin-top: 15px;
    padding: 25px;
    display: flex;
    justify-content: center;
`;

export const Percent = styled.div`
    width: 350px;
    height: 150px;
    border: ${({theme}) =>
        `12px solid ${theme.palette.basketballAcademy.primaryGreen}`};
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.palette.basketballAcademy.primaryGreen};
`;

export const PercentValue = styled.p`
    height: 100%;
    width: calc(65% - 12px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 7.75rem;
    font-weight: 700;

    @media ${touch} {
        font-size: 6.5rem;
    }

    &:after {
        content: '';
        width: 12px;
        height: 100%;
        background-color: ${({theme}) =>
            theme.palette.basketballAcademy.primaryGreen};
        position: absolute;
        right: -12px;
        top: 0;
    }
`;
export const PercentSign = styled.p`
    height: 100%;
    width: 35%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    font-weight: 700;

    @media ${touch} {
        font-size: 6.75rem;
    }
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.125rem;

    p {
        margin: 11px 0;
        width: 60%;
        text-align: center;

        @media ${touch} {
            width: 100%;
            padding: 0 15px;
        }
    }
`;

export const ThanksInfo = styled.p`
    width: 100%;
    margin-top: 25px;
    text-align: center;
    font-size: 2rem;
`;
