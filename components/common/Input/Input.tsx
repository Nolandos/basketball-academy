import React, {FC, ReactNode, useEffect, useRef} from 'react';
import * as Styled from './Input.styles';

type InputProps = {
    id: string;
    label?: string | ReactNode;
    type: string;
    error?: boolean;
    helperText?: string | undefined;
    multiline?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    fullWidth?: boolean | undefined;
    onChangeHandler?: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onFocusHandler?: (event: React.MouseEvent<Element, MouseEvent>) => void;
    autoComplete?: string;
    value?: string;
};

const defaultProps = {
    error: false,
    helperText: undefined,
    multiline: undefined,
    rows: undefined,
    maxRows: undefined,
    fullWidth: undefined,
    onFocusHandler: undefined,
    onChangeHandler: undefined,
    autoComplete: 'on',
    value: '',
    label: undefined,
};

const Input: FC<InputProps> = ({
    id,
    label,
    type,
    error,
    helperText,
    multiline,
    rows,
    maxRows,
    fullWidth,
    onChangeHandler,
    onFocusHandler,
    value,
    autoComplete,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && typeof value === 'string') {
            inputRef.current.value = value;
        }
    }, [value]);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Styled.Input
            inputRef={inputRef}
            fullWidth={fullWidth}
            id={id}
            label={label}
            type={type}
            error={error}
            helperText={helperText}
            multiline={multiline}
            rows={rows}
            maxRows={maxRows}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            autoComplete={autoComplete}
            {...props}
        />
    );
};

Input.defaultProps = defaultProps;

export default Input;
