import React, {FC, ReactNode} from 'react';
import {Slide} from '@mui/material';
import * as Styled from './Modal.styles';

interface TransitionProps {
    children: React.ReactElement<any, any>;
}

const Transition = React.forwardRef(
    (props: TransitionProps, ref: React.Ref<unknown>) => (
        <Slide direction="up" ref={ref} {...props} />
    )
);

export type ModalProps = {
    open: boolean;
    toggleModalHandler: (isOpen: boolean) => void;
    children: ReactNode;
};

const Modal: FC<ModalProps> = ({
    open,
    toggleModalHandler,
    children,
    ...props
}) => (
    <Styled.Modal
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => toggleModalHandler(false)}
        {...props}
    >
        {children}
    </Styled.Modal>
);

export default Modal;
