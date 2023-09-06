import styled from 'styled-components';
import Link from 'next/link';
import device from '@/styles/breakpoints';

const {mobile} = device;

export const DocumentsList = styled.ul`
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DocumentItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 10px;

    > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > p {
            font-size: 1.15rem;
        }
    }
`;

export const PDFThumbnail = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;

    .rpv-core__inner-pages {
        overflow: hidden;
    }
`;

export const SourcesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AButton = styled.a`
    margin: 6px 6px;
    padding: 4px 7px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;

export const Button = styled.button`
    margin: 6px 6px;
    padding: 4px 7px;
    font-weight: 400;
    font-size: 16px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Titillium Web;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;

export const LinkButton = styled(Link)`
    margin: 6px 6px;
    padding: 4px 7px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
`;

export const MoreInfoText = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    font-size: 1.1875rem;
    text-align: center;

    > p {
        margin: 0 0 0 5px;
    }

    svg {
        width: 36px;
        height: 36px;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }

    @media ${mobile} {
        flex-direction: column;

        > p {
            margin: 8px 0 0 0;
        }
    }
`;
