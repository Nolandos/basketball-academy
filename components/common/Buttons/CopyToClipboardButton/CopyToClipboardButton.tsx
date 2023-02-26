import {Snackbar} from '@mui/material';
import React, {FC, useState} from 'react';
import {ContentCopy} from '@mui/icons-material';
import * as Styled from './CopyToClipboardButton.styles';

type CopyToClipboardButtonProps = {
    onCopyHandler: () => void;
    copyToClipboardText: string;
};

const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({
    onCopyHandler,
    copyToClipboardText,
}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        onCopyHandler();
    };

    return (
        <>
            <Styled.CopyToClipboardButton onClickHandler={handleClick}>
                <ContentCopy />
            </Styled.CopyToClipboardButton>
            <Snackbar
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message={copyToClipboardText}
            />
        </>
    );
};

export default CopyToClipboardButton;
