import React, {FC, useEffect} from 'react';
import {AlertMessagesTypes} from '@/utils/commonEnums';
import {CheckCircle, Error} from '@mui/icons-material';
import * as Styled from './MessageBox.styles';

export type MessageBoxProps = {
    id: string;
    type: AlertMessagesTypes;
    text: string;
    onCloseHandler: () => void;
    duration: number;
};

const MessageBox: FC<MessageBoxProps> = ({
    id,
    type,
    text,
    onCloseHandler,
    duration,
    ...props
}) => {
    const {ERROR, SUCCESS} = AlertMessagesTypes;
    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (id) onCloseHandler();
        }, duration);

        return () => clearTimeout(timeOut);
    }, []);
    return (
        <Styled.ActionInfoBox messageType={type} {...props}>
            {type === ERROR && <Error />}
            {type === SUCCESS && <CheckCircle />}
            <p>{text}</p>
            <Styled.ActionClose onClick={onCloseHandler} />
        </Styled.ActionInfoBox>
    );
};

export default MessageBox;
