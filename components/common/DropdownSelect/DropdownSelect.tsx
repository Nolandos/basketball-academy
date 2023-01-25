import React, {FC} from 'react';
import {Check} from '@mui/icons-material';
import * as Styled from './DropdownSelect.styles';

type DropdownSelectProps = {
    defaultValue: number | string;
    dropdownSelectOptions: Array<{
        id: string;
        value: string | number;
        label: string;
    }>;
    onChangeHandler: (value: string | number) => void;
};

const DropdownSelect: FC<DropdownSelectProps> = ({
    defaultValue,
    dropdownSelectOptions,
    onChangeHandler,
    ...props
}) => (
    <Styled.DropdownSelect
        title={`${
            dropdownSelectOptions.find(
                (dropdownSelectOption) =>
                    dropdownSelectOption.value === defaultValue
            )?.label || defaultValue
        }`}
        url={null}
        {...props}
    >
        {dropdownSelectOptions.map(({id, value, label}) => (
            <Styled.MenuItem
                onClick={() => onChangeHandler(value)}
                selected={defaultValue === value}
                key={id}
            >
                {defaultValue === value && <Check />}
                <Styled.Label>{label}</Styled.Label>
            </Styled.MenuItem>
        ))}
    </Styled.DropdownSelect>
);

export default DropdownSelect;
