import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch, mobileSmall, mobile} = device;
export const PhotoCollectionDetailPage = styled(CommonStyled.Page)`
    padding-bottom: 55px;
`;

export const Container = styled(CommonStyled.Container)`
    padding: 55px 15px;
`;

export const Title = styled(CommonStyled.Title)`
    @media ${touch} {
        font-size: 2.8rem;
    }
    @media ${mobile} {
        font-size: 2.5rem;
    }

    @media ${mobileSmall} {
        font-size: 2.2rem;
    }
`;
