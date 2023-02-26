import React, {FC} from 'react';
import {TFunction} from 'next-i18next';
import Modal from '@/components/common/Modal/Modal';
import Button from '@/components/common/Buttons/Button/Button';
import {CloseIcon} from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import * as ModalStyled from './PurchaseSummaryModal.styles';

export type PurchaseSummaryModalProps = {
    isOpen: boolean;
    toggleModalHandler: (isOpen: boolean) => void;
    onGoToSummaryHandler: () => void;
    t: TFunction;
};
const PurchaseSummaryModal: FC<PurchaseSummaryModalProps> = ({
    isOpen,
    toggleModalHandler,
    onGoToSummaryHandler,
    t,
}) => (
    <Modal open={isOpen} toggleModalHandler={(val) => toggleModalHandler(val)}>
        <ModalStyled.Header>
            <ModalStyled.Title>
                {t<string>('common:shop.purchaseSummaryModal.title')}
            </ModalStyled.Title>
            <ModalStyled.CloseButton
                onClickHandler={() => toggleModalHandler(false)}
            >
                <CloseIcon />
            </ModalStyled.CloseButton>
        </ModalStyled.Header>
        <ModalStyled.Content>
            <p>{t<string>('common:shop.purchaseSummaryModal.content')}</p>
        </ModalStyled.Content>
        <ModalStyled.Footer>
            <Button
                variant="OUTLINED"
                onClickHandler={() => toggleModalHandler(false)}
            >
                {t<string>('common:shop.purchaseSummaryModal.continueButton')}
            </Button>
            <Button onClickHandler={onGoToSummaryHandler}>
                {t<string>(
                    'common:shop.purchaseSummaryModal.goToSummaryButton'
                )}
            </Button>
        </ModalStyled.Footer>
    </Modal>
);

export default PurchaseSummaryModal;
