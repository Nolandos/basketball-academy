import styled from 'styled-components';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import device from '@/styles/breakpoints';

const {mobileSmall} = device;
export const Accordions = styled.div`
    width: 100%;
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: ${({theme}) => theme.typography.fontSize}px;
    font-weight: 400;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {black},
            },
        },
    }) => black};
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border: ${({theme}) =>
        `1px solid ${theme.palette.basketballAcademy.fontGraySecond}`};

    p {
        margin: 8px 0;
    }
`;

export const Accordion = styled(MuiAccordion)`
    margin-bottom: 8px;
    box-shadow: none;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
    border-radius: 0;

    &.MuiAccordion-rounded:first-child,
    &.MuiAccordion-rounded:last-child {
        border-radius: 0;
    }
`;
export const AccordionSummary = styled(MuiAccordionSummary)`
    font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
    font-weight: 400;

    &.MuiButtonBase-root {
        min-height: 0;
    }

    .MuiAccordionSummary-content.Mui-expanded {
        margin: 12px 0;
    }

    .MuiSvgIcon-root {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {white},
                },
            },
        }) => white};
    }

    h2 {
        font-size: ${({theme}) => theme.typography.fontSize * 1.25}px;
        margin: 0;
        font-weight: 400;
    }

    @media ${mobileSmall} {
        font-size: ${({theme}) => theme.typography.fontSize * 1.0625}px;
        h2 {
            font-size: ${({theme}) => theme.typography.fontSize * 1.0625}px;
        }
    }
`;
