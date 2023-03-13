import React from 'react';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/Documents.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import DocumentsList from '@/components/documents/DocumentsList/DocumentsList';

const Documents = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('common:documents.siteTitle')}</title>
                <meta name="description" content={t('documents')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.DocumentsPage>
                <CommonStyled.HeroImage image={heroBackgroundImg}>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:documents.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.DocumentsContainer>
                    <CommonStyled.Container>
                        <DocumentsList />
                    </CommonStyled.Container>
                </Styled.DocumentsContainer>
            </Styled.DocumentsPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default Documents;
