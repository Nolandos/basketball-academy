import React, {FC, ReactNode} from 'react';
import {ButtonVariantsTypes} from '@/utils/commonTypes';
import {ButtonVariantsEnum} from '@/utils/commonEnums';
import * as Styled from './Button.styles';

type ButtonProps = {
    children: string | ReactNode;
    variant?: ButtonVariantsTypes;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    onClickHandler?: () => void;
};

const defaultProps = {
    variant: ButtonVariantsEnum.CONTAINED,
    iconStart: undefined,
    iconEnd: undefined,
    onClickHandler: undefined,
};
const Button: FC<ButtonProps> = ({
    children,
    variant,
    iconStart,
    iconEnd,
    onClickHandler,
    ...props
}) => (
    <Styled.Button
        onClick={() => {
            if (onClickHandler) onClickHandler();
        }}
        variant={variant}
        type="button"
        {...props}
    >
        {iconStart && <span className="icon-start">{iconStart}</span>}
        {children}
        {iconEnd && <span className="icon-end">{iconEnd}</span>}
    </Styled.Button>
);

Button.defaultProps = defaultProps;

export default Button;
