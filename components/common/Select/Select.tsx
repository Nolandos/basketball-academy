import React, {FC} from 'react';
import {
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as MuSelect,
} from '@mui/material';
import * as Styled from './Select.styles';

type SelectProps = {
    labelId: string;
    id: string;
    value: string | number;
    selectLabel: string;
    inputLabel: string;
    onChangeHandler: (value: string) => void;
    options?: Array<{
        id: string;
        label: string;
        value: string | number;
    }>;
    error?: boolean;
    helperText?: string | undefined;
    fullWidth?: boolean | undefined;
    disabled?: boolean | undefined;
};

const defaultProps = {
    options: [],
    error: false,
    helperText: undefined,
    fullWidth: undefined,
    disabled: false,
};

const Select: FC<SelectProps> = ({
    labelId,
    id,
    value,
    inputLabel,
    selectLabel,
    onChangeHandler,
    options = [],
    error,
    helperText,
    fullWidth,
    disabled,
    ...props
}) => (
    <Styled.Container fullWidth={fullWidth} {...props}>
        <InputLabel id={labelId}>{inputLabel}</InputLabel>
        <MuSelect
            error={error}
            labelId={labelId}
            id={id}
            value={value}
            disabled={disabled}
            label={selectLabel}
            onChange={(event) => {
                onChangeHandler(event.target.value as string);
            }}
        >
            {options.map(({id: optionId, value: optionValue, label}) => (
                <MenuItem key={optionId} value={optionValue}>
                    {label}
                </MenuItem>
            ))}
        </MuSelect>
        <FormHelperText>{helperText}</FormHelperText>
    </Styled.Container>
);

Select.defaultProps = defaultProps;

export default Select;
