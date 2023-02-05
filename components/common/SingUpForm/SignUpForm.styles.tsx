import styled from 'styled-components';
import Link from 'next/link';
import CheckboxLabel from '@/components/common/CheckboxLabel/CheckboxLabel';
import device from '@/styles/breakpoints';
import Button from '@/components/common/Buttons/Button/Button';

const {mobile} = device;
export const SignUpForm = styled.form`
    width: 100%;
    min-height: 450px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`;

export const SignUpFormWrapper = styled.div`
    width: 100%;
    max-width: 920px;
    display: flex;
    justify-content: flex-start;
    margin: 15px 0;

    @media ${mobile} {
        margin: 0;
        flex-direction: column;
    }
`;

export const SignUpFormInput = styled.div<{textarea?: boolean}>`
    display: flex;
    width: ${({textarea}) => (textarea ? '100%' : '50%')};
    padding: 0 15px;

    .MuiFormControl-root {
        width: 100%;

        .MuiFormLabel-root {
            color: ${({
                theme: {
                    palette: {
                        basketballAcademy: {fontGraySecond},
                    },
                },
            }) => fontGraySecond};

            &.Mui-focused {
                color: ${({
                    theme: {
                        palette: {
                            basketballAcademy: {primaryGreen},
                        },
                    },
                }) => primaryGreen};
            }
        }

        .MuiInputBase-root {
            border-radius: 0;

            &.Mui-focused {
                .MuiOutlinedInput-notchedOutline {
                    border-color: ${({
                        theme: {
                            palette: {
                                basketballAcademy: {primaryGreen},
                            },
                        },
                    }) => primaryGreen};
                }
            }
        }
    }

    @media ${mobile} {
        width: 100%;
        margin: 15px 0;
    }
`;

export const RegulationsLink = styled(Link)`
    font-weight: 700;
    text-decoration: underline;

    &:hover {
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {primaryGreen},
                },
            },
        }) => primaryGreen};
    }
`;

export const RegulationsCheckboxLabel = styled(CheckboxLabel)`
    margin-left: 23px;
`;

export const SubmitButton = styled(Button)`
    @media ${mobile} {
        margin-top: 25px;
    }
`;

export const RequiredTextInfo = styled.span`
    width: 100%;
    padding: 0 15px;
    margin-bottom: 25px;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGray},
            },
        },
    }) => fontGray};
    font-style: italic;
`;

export const QuestionText = styled.p`
    margin-top: 25px;
    font-size: 1.125rem;

    @media ${mobile} {
        font-size: 1.0625rem;
        text-align: center;
    }
`;
