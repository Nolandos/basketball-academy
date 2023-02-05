import React, {FC, ReactNode} from 'react';
import * as Styled from './CheckboxLabel.styles';

type CheckboxLabelProps = {
    id: string;
    label: string | ReactNode;
    isChecked?: boolean;
    onClickHandler: () => void;
    error?: boolean;
    errorText?: string;
};

const defaultProps = {
    isChecked: undefined,
    error: undefined,
    errorText: '',
};

const CheckboxLabel: FC<CheckboxLabelProps> = ({
    label,
    isChecked,
    onClickHandler,
    error,
    errorText,
    id,
    ...props
}) => (
    <Styled.CheckboxLabel {...props}>
        <Styled.Label
            id={id}
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onClickHandler();
            }}
            control={<Styled.Checkbox error={error} checked={isChecked} />}
            label={label}
        />
        {error && <Styled.Error>{errorText}</Styled.Error>}
    </Styled.CheckboxLabel>
);

CheckboxLabel.defaultProps = defaultProps;

export default CheckboxLabel;
