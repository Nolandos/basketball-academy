import styled from 'styled-components';
import {ButtonVariantsTypes} from '@/utils/commonTypes';
import {ButtonVariantsEnum} from '@/utils/commonEnums';

export const Button = styled.button<{variant?: ButtonVariantsTypes}>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9375rem;
    min-width: 168px;
    min-height: 58px;
    padding: 15px 32px;
    font-weight: 700;
    font-family: 'Titillium Web', sans-serif;
    text-transform: uppercase;
    line-height: 1em;
    cursor: pointer;
    position: relative;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {black, white},
            },
        },
        variant,
    }) => {
        if (variant === ButtonVariantsEnum.CONTAINED) return white;
        if (variant === ButtonVariantsEnum.OUTLINED) return black;
        if (variant === ButtonVariantsEnum.LINK) return black;
        return white;
    }};

    border: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen, black, transparent},
            },
        },
        variant,
    }) => {
        if (variant === ButtonVariantsEnum.CONTAINED)
            return `2px solid ${primaryGreen}`;
        if (variant === ButtonVariantsEnum.OUTLINED)
            return `2px solid ${black}`;
        if (variant === ButtonVariantsEnum.LINK)
            return `2px solid ${transparent}`;
        return `2px solid ${primaryGreen}`;
    }};

    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen, transparent},
            },
        },
        variant,
    }) => {
        if (variant === ButtonVariantsEnum.CONTAINED) return primaryGreen;
        if (variant === ButtonVariantsEnum.OUTLINED) return transparent;
        if (variant === ButtonVariantsEnum.LINK) return transparent;
        return primaryGreen;
    }};
    transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);

    .icon-end,
    .icon-start {
        width: 24px;
        height: 24px;
    }

    svg {
        transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);
        width: 24px;
        height: 24px;
    }

    &:hover {
        transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);

        .icon-end {
            svg {
                transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);
                transform: translateX(7px);
            }
        }

        .icon-start {
            svg {
                transition: all 0.35s cubic-bezier(0.48, 1.42, 0.48, 1.45);
                transform: translateX(-7px);
            }
        }

        &:after {
            content: '';
            position: absolute;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            top: -2px;
            left: -2px;
            background: rgba(255, 255, 255, 0.15);
            display: block;
        }
    }
`;
