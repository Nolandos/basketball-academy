import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const NumbersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media ${touch} {
        margin-bottom: 25px;
    }
`;

export const Numbers = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    > svg {
        width: 60px;
        height: 60px;
        color: white;
    }

    > p,
    > h3 {
        color: white;
    }

    > p {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
    }

    > h3 {
        font-size: 53px;
        position: relative;
        margin-top: 0;
        margin-bottom: 35px;

        &:after {
            content: '';
            height: 5px;
            width: 40px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: -16px;
            background-color: white;
        }
    }

    @media ${touch} {
        width: 50%;
        height: auto;
        margin: 20px 0;
    }
    @media ${mobileSmall} {
        width: 100%;
        border-bottom: 2px solid white;
        padding: 0 0 25px 0;

        &:last-child {
            border: none;
        }
    }
`;
