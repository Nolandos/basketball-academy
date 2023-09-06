import React, {FC} from 'react';
// Core viewer
import {Worker, Viewer} from '@react-pdf-viewer/core';

// Plugins
import {thumbnailPlugin} from '@react-pdf-viewer/thumbnail';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import {Info} from '@mui/icons-material';
import * as Styled from './DocumentsList.styles';

const DocumentsList: FC = () => {
    const {t} = useTranslation();
    const pdfVersion = '3.4.120';
    const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;

    const thumbnailPluginInstance = thumbnailPlugin();

    const documentsList = [
        {
            id: 'clubRegulations',
            url: '/pdf-files/regulamin_klubu.pdf',
            title: t('common:documents.documentsList.clubRegulations'),
        },
        {
            id: 'membershipDeclaration',
            url: '/pdf-files/deklaracja.pdf',
            title: t('common:documents.documentsList.membershipDeclaration'),
        },
        {
            id: 'individualTrainingContract',
            url: '/pdf-files/umowa-ind.pdf',
            title: t(
                'common:documents.documentsList.individualTrainingContract'
            ),
        },
        {
            id: 'campInformationCard',
            url: '/pdf-files/oboz-info.pdf',
            title: t('common:documents.documentsList.campInformationCard'),
        },
        {
            id: 'participantCard',
            url: '/pdf-files/oboz-karta.pdf',
            title: t('common:documents.documentsList.participantCard'),
        },
        {
            id: 'campRegulations',
            url: '/pdf-files/regulamin-oboz.pdf',
            title: t('common:documents.documentsList.campRegulations'),
        },
        {
            id: 'dayCampRegulations',
            url: '/pdf-files/regulamin-polkolonie.pdf',
            title: t('common:documents.documentsList.dayCampRegulations'),
        },
    ];

    return (
        <Styled.DocumentsList>
            <Styled.MoreInfoText>
                <Info />
                <p>{t('common:documents.moreInfoText')}</p>
            </Styled.MoreInfoText>
            {documentsList.map(({id, url, title}) => (
                <Styled.DocumentItem key={id}>
                    <a href={url} download>
                        <Styled.PDFThumbnail>
                            <Worker workerUrl={pdfWorkerUrl}>
                                <Viewer
                                    fileUrl={url}
                                    plugins={[thumbnailPluginInstance]}
                                />
                            </Worker>
                        </Styled.PDFThumbnail>
                        <p>{title}</p>
                    </a>
                    <Styled.SourcesWrapper>
                        <Styled.AButton href={url} download>
                            {t('common:documents.sourceButton')} 1
                        </Styled.AButton>
                        <Styled.LinkButton href={url}>
                            {t('common:documents.sourceButton')} 2
                        </Styled.LinkButton>
                        <Styled.Button
                            type="button"
                            onClick={() => window.open(url)}
                        >
                            {t('common:documents.sourceButton')} 3
                        </Styled.Button>
                        <Styled.AButton
                            href={`http://akademiakoszykowki.poznan.pl/public${url}`}
                            download
                        >
                            {t('common:documents.sourceButton')} 4
                        </Styled.AButton>
                    </Styled.SourcesWrapper>
                </Styled.DocumentItem>
            ))}
        </Styled.DocumentsList>
    );
};

export default DocumentsList;
