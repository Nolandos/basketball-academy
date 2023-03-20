import styled from 'styled-components';
import Accordion from '@/components/common/Accordion/Accordion';
import device from '@/styles/breakpoints';
import * as CommonStyled from '@/styles/commonStyles';

const {touch, mobileSmall} = device;

export const SponsorshipPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 45px;
`;

export const Title = styled(CommonStyled.Title)`
    @media ${touch} {
        font-size: 1.875rem;
    }
`;

export const AccordionWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 15px;
    display: flex;
    justify-content: center;
`;

export const SponsorshipAccordion = styled(Accordion)`
    max-width: 920px;
`;

export const OtherInfo = styled.p`
    width: 100%;
    max-width: 920px;
    font-size: 1.0625rem;
    margin-top: 0;

    @media ${mobileSmall} {
        text-align: center;
    }
`;

export const OtherInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin-bottom: 45px;
    padding: 15px;

    > h2 {
        width: 100%;
        max-width: 920px;
    }

    @media ${mobileSmall} {
        > h2 {
            display: flex;
            justify-content: center;
        }
    }
`;
