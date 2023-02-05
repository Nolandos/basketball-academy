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
    type?: 'button' | 'submit' | 'reset' | undefined;
    loading?: boolean;
    disabled?: boolean;
};

const defaultProps = {
    variant: ButtonVariantsEnum.CONTAINED,
    iconStart: undefined,
    iconEnd: undefined,
    onClickHandler: undefined,
    type: undefined,
    loading: undefined,
    disabled: undefined,
};
const Button: FC<ButtonProps> = ({
    children,
    variant,
    iconStart,
    iconEnd,
    onClickHandler,
    type,
    loading,
    disabled,
    ...props
}) => (
    <Styled.Button
        onClick={() => {
            if (onClickHandler) onClickHandler();
        }}
        variant={variant}
        type={type}
        disabled={disabled}
        {...props}
    >
        {!loading && iconStart && (
            <span className="icon-start">{iconStart}</span>
        )}
        {!loading && children}
        {!loading && iconEnd && <span className="icon-end">{iconEnd}</span>}
        {loading && <Styled.ButtonLoader size={32} />}
    </Styled.Button>
);

Button.defaultProps = defaultProps;

export default Button;
