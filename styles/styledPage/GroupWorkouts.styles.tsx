import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';
import {FloatOptions} from '@/utils/commonEnums';

const {touch, mobile, mobileSmall} = device;
const {LEFT, RIGHT} = FloatOptions;
export const GroupWorkouts = styled(CommonStyled.Page)``;

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

export const ImageWrapper = styled.div`
    width: 50%;

    img {
        width: 100%;
        height: auto;
    }

    @media ${touch} {
        width: 100%;
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
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {white},
            },
        },
    }) => white};
`;

export const AgeCategories = styled(CommonStyled.Container)`
    padding: 0 0 65px 0;
    min-height: 1500px;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const MeasureOfWeight = styled.div`
    height: 1200px;
    width: 2px;
    background-color: #e2e3e3;
    top: 130px;
    position: absolute;

    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 30px;
        background-color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
        left: 50%;
        transform: translate(-50%, 0);
    }

    &:before {
        top: 0;
    }

    &:after {
        bottom: 0;
    }

    @media ${touch} {
        display: none;
    }
`;

export const MeasureOfWeightBelt = styled.div<{itemNumber: number}>`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    height: 2px;
    width: ${({itemNumber}) => ((itemNumber + 1) % 10 === 0 ? '25px' : '20px')};
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
        itemNumber,
    }) => ((itemNumber + 1) % 10 === 0 ? primaryGreen : '#e2e3e3')};
    top: ${({itemNumber}) => itemNumber * 10 + 10}px;

    &:before {
        content: '${({itemNumber}) =>
            (itemNumber + 1) % 20 === 0 ? `${(itemNumber + 1) * 2} cm` : ''}';
        position: absolute;
        left: ${({itemNumber}) =>
            (itemNumber + 1) * 2 >= 100 ? '-55px' : '-45px'};
        top: -11px;
    }
`;

export const AgeCategory = styled.div`
    width: 100%;
    min-height: 200px;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    @media ${touch} {
        padding: 15px;

        &:nth-child(even) {
            flex-direction: row-reverse;
        }
    }

    @media ${mobile} {
        margin: 0;
        flex-direction: column;
        &:nth-child(even) {
            flex-direction: column-reverse;
        }
    }
`;

export const AgeCategoryTile = styled.div<{
    image?: boolean;
    float?: FloatOptions;
}>`
    min-height: 200px;
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({float}) => {
        if (float === LEFT) return 'flex-end';
        if (float === RIGHT) return 'flex-start';
        return 'flex-start';
    }};

    h3 {
        font-weight: 500;
        @media ${mobile} {
            width: 100%;
            text-align: center;
        }
    }

    p {
        margin: 0;
        @media ${mobile} {
            text-align: center;
        }
    }

    @media ${touch} {
        width: ${({image}) => (image ? '20%' : '80%')};
        align-items: ${({image}) => image && 'center'};
    }

    @media ${mobile} {
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

    > button {
        margin: 0 15px;
    }
`;
