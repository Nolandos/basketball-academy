import React, {FC} from 'react';
import {TFunction} from 'next-i18next';
import Modal from '@/components/common/Modal/Modal';
import Button from '@/components/common/Buttons/Button/Button';
import * as ModalStyled from './TimetableDetailsModal.styles';

export type PurchaseSummaryModalProps = {
    isOpen: boolean;
    toggleModalHandler: (isOpen: boolean) => void;
    t: TFunction;
    trainingDetails: {
        title: string;
        endDate: string;
        startDate: string;
        annotation: string;
        coach: string;
        ageGroup: string;
        place: string;
        district: string;
    };
};
const TimetableDetailsModal: FC<PurchaseSummaryModalProps> = ({
    isOpen,
    toggleModalHandler,
    trainingDetails,
    t,
}) => {
    const {
        title,
        district,
        place,
        ageGroup,
        coach,
        annotation,
        startDate,
        endDate,
    } = trainingDetails;
    return (
        <Modal
            open={isOpen}
            toggleModalHandler={(val) => toggleModalHandler(val)}
        >
            <ModalStyled.Header>
                <ModalStyled.Title>{title}</ModalStyled.Title>
            </ModalStyled.Header>
            <ModalStyled.Content>
                <ModalStyled.InfoLabel>
                    <p>Godziny:</p>
                    {startDate.split(':')[0]}:{startDate.split(':')[1]} -{' '}
                    {endDate.split(':')[0]}:{endDate.split(':')[1]}
                </ModalStyled.InfoLabel>
                <ModalStyled.InfoLabel>
                    <p>Lokalizacja:</p>
                    {district}
                </ModalStyled.InfoLabel>
                <ModalStyled.InfoLabel>
                    <p>Miejsce:</p>
                    {place}
                </ModalStyled.InfoLabel>
                <ModalStyled.InfoLabel>
                    <p>Grupa Wiekowa:</p>
                    {ageGroup}
                </ModalStyled.InfoLabel>
                <ModalStyled.InfoLabel>
                    <p>Trener:</p>
                    {coach}
                </ModalStyled.InfoLabel>
                <ModalStyled.InfoLabel>
                    <p>Adnotacja:</p>
                    {annotation}
                </ModalStyled.InfoLabel>
            </ModalStyled.Content>
            <ModalStyled.Footer>
                <Button
                    variant="OUTLINED"
                    onClickHandler={() => toggleModalHandler(false)}
                >
                    {t<string>('common:back')}
                </Button>
            </ModalStyled.Footer>
        </Modal>
    );
};

export default TimetableDetailsModal;
