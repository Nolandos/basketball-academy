import styled from 'styled-components';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;
export const Targets = styled.ul`
    width: 100%;
    min-height: 250px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    margin: 15px 0 35px 0;

    @media ${touch} {
        flex-wrap: wrap;
    }
`;

export const TargetItem = styled.li`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 25px;

    &:last-child {
        > div {
            &:after {
                display: none;
            }
        }
    }

    @media ${touch} {
        width: 50%;
        height: auto;
        margin: 20px 0;
    }
    @media ${mobileSmall} {
        width: 100%;
    }
`;

export const TargetImageContent = styled.div`
    min-width: 175px;
    min-height: 175px;
    border-radius: 50%;
    margin: 0 85px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};

    &:after {
        content: '';
        position: absolute;
        width: 175px;
        height: 2px;
        background-color: #e1e1e1;
        right: -175px;
        top: 50%;
    }

    @media ${touch} {
        &:after {
            display: none;
        }
    }
`;

export const TargetImage = styled.div<{backgroundImg: string}>`
    min-width: 161px;
    min-height: 161px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({backgroundImg}) =>
        ` no-repeat center url(${backgroundImg})`};
    background-size: 161px;
    transition: background-size 0.2s cubic-bezier(0.35, 0.7, 0.32, 0.9) 0.1s;

    &:hover {
        background-size: 200px;
        transition: background-size 0.2s cubic-bezier(0.35, 0.7, 0.32, 0.9) 0.1s;
    }

    > span {
        font-size: 35px;
        color: white;
        font-weight: 700;
    }
`;

export const TargetTitle = styled.h2`
    margin: 12px 0;
    font-size: 1.3rem;
`;

export const TargetContent = styled.p`
    text-align: center;
    margin-top: 7px;
`;
