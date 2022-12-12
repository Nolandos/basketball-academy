import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {hd, widescreenOnly, touchSec, touch, mobile, mobileSmall} = device;
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
