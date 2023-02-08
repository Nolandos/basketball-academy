import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as CommonStyled from '@/styles/commonStyles';
import React, {ReactNode} from 'react';
import * as Styled from '@/styles/styledPage/FAQ.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const FAQ = () => {
    const {t} = useTranslation();
    const {
        applicationForm,
        emailBiuro,
        trainingSchedule,
        clubRegulations,
        shop,
    } = urls;
    const faqItems: {
        id: string;
        header: string;
        content: string | ReactNode;
    }[] = [
        {
            id: '1',
            header: t('faq.faq1Title'),
            content: (
                <>
                    <p>
                        {t('faq.faq1ContentPartOne')}{' '}
                        <CommonStyled.InternalRegulationsLink
                            href={applicationForm}
                        >
                            {t('faq.clickThere')}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                    <p> {t('faq.faq1ContentPartTwo')}</p>
                </>
            ),
        },
        {
            id: '2',
            header: t('faq.faq2Title'),
            content: (
                <>
                    <p>{t('faq.faq2ContentPartOne')}</p>
                    <p>{t('faq.faq2ContentPartTwo')}</p>
                </>
            ),
        },
        {
            id: '3',
            header: t('faq.faq3Title'),
            content: (
                <p>
                    <Trans i18nKey={t('faq.faq3ContentPartOne')} />
                </p>
            ),
        },
        {
            id: '4',
            header: t('faq.faq4Title'),
            content: (
                <>
                    <p>{t('faq.faq4ContentPartOne')}</p>
                    <p>{t('faq.faq4ContentPartTwo')}</p>
                    <p>
                        {t('faq.faq4ContentPartThree')}{' '}
                        <CommonStyled.InternalRegulationsLink href={shop}>
                            {t('faq.faq4ContentPartFour')}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                </>
            ),
        },
        {
            id: '5',
            header: t('faq.faq5Title'),
            content: (
                <p>
                    {t('faq.faq5ContentPartOne')}{' '}
                    <CommonStyled.InternalRegulationsLink href={shop}>
                        {t('faq.faq5ContentPartTwo')}
                    </CommonStyled.InternalRegulationsLink>
                </p>
            ),
        },
        {
            id: '6',
            header: t('faq.faq6Title'),
            content: (
                <>
                    <p>{t('faq.faq6ContentPartOne')}</p>
                    <p>{t('faq.faq6ContentPartTwo')}</p>
                </>
            ),
        },
        {
            id: '7',
            header: t('faq.faq7Title'),
            content: <p>{t('faq.faq7ContentPartOne')}</p>,
        },
        {
            id: '8',
            header: t('faq.faq8Title'),
            content: (
                <p>
                    {t('faq.faq8ContentPartOne')}{' '}
                    <CommonStyled.InternalRegulationsLink
                        href={`mailto:${emailBiuro}`}
                    >
                        {emailBiuro}
                    </CommonStyled.InternalRegulationsLink>{' '}
                    {t('faq.faq8ContentPartTwo')}
                </p>
            ),
        },
        {
            id: '9',
            header: t('faq.faq9Title'),
            content: <p>{t('faq.faq9ContentPartOne')}</p>,
        },
        {
            id: '10',
            header: t('faq.faq10Title'),
            content: <p>{t('faq.faq10ContentPartOne')}</p>,
        },
        {
            id: '11',
            header: t('faq.faq11Title'),
            content: (
                <p>
                    <Trans i18nKey={t('faq.faq11ContentPartOne')} />
                </p>
            ),
        },
        {
            id: '12',
            header: t('faq.faq12Title'),
            content: (
                <>
                    <p>{t('faq.faq12ContentPartOne')}</p>
                    <p>{t('faq.faq12ContentPartTwo')}</p>
                    <p>{t('faq.faq12ContentPartThree')}</p>
                    <p>{t('faq.faq12ContentPartFour')}</p>
                    <p>{t('faq.faq12ContentPartFive')}</p>
                </>
            ),
        },
        {
            id: '13',
            header: t('faq.faq13Title'),
            content: (
                <p>
                    {t('faq.faq13ContentPartOne')}{' '}
                    <CommonStyled.InternalRegulationsLink
                        href={`mailto:${emailBiuro}`}
                    >
                        {emailBiuro}
                    </CommonStyled.InternalRegulationsLink>{' '}
                    {t('faq.faq13ContentPartTwo')}
                </p>
            ),
        },
        {
            id: '14',
            header: t('faq.faq14Title'),
            content: (
                <p>
                    <Trans i18nKey={t('faq.faq14ContentPartOne')} />
                </p>
            ),
        },
        {
            id: '15',
            header: t('faq.faq15Title'),
            content: <p>{t('faq.faq15ContentPartOne')}</p>,
        },
        {
            id: '16',
            header: t('faq.faq16Title'),
            content: (
                <>
                    <p>
                        {t('faq.faq16ContentPartOne')}{' '}
                        <CommonStyled.InternalRegulationsLink
                            href={trainingSchedule}
                        >
                            {t('faq.faq16ContentPartTwo')}
                        </CommonStyled.InternalRegulationsLink>{' '}
                    </p>
                    <p>{t('faq.faq16ContentPartThree')}</p>
                </>
            ),
        },
        {
            id: '17',
            header: t('faq.faq17Title'),
            content: <p>{t('faq.faq17ContentPartOne')}</p>,
        },
        {
            id: '18',
            header: t('faq.faq18Title'),
            content: (
                <>
                    <p>{t('faq.faq18ContentPartOne')}</p>
                    <p>{t('faq.faq18ContentPartTwo')}</p>
                    <p>{t('faq.faq18ContentPartThree')}</p>
                </>
            ),
        },
        {
            id: '19',
            header: t('faq.faq19Title'),
            content: <p>{t('faq.faq19ContentPartOne')}</p>,
        },
    ];
    return (
        <div>
            <Head>
                <title>{t('faq.title')}</title>
                <meta name="description" content={t('faq.title')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.FAQPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>{t('faq.title')}</Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <CommonStyled.Container>
                    <Styled.AccordionWrapper>
                        <Styled.FAQAccordion items={faqItems} />
                    </Styled.AccordionWrapper>
                    <Styled.OtherInfoWrapper>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('faq.otherInfoRegulationsSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.OtherInfo>
                            {t('faq.otherInfoRegulationsPartOne')}{' '}
                            <CommonStyled.InternalRegulationsLink
                                href={clubRegulations}
                            >
                                {t('faq.otherInfoRegulationsPartTwo')}
                            </CommonStyled.InternalRegulationsLink>
                        </Styled.OtherInfo>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('faq.otherInfoMailSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.OtherInfo>
                            {t('faq.otherInfoMailPartOne')}{' '}
                            <CommonStyled.InternalRegulationsLink
                                href={`mailto:${emailBiuro}`}
                            >
                                {t('faq.otherInfoMailPartTwo')}
                            </CommonStyled.InternalRegulationsLink>
                        </Styled.OtherInfo>
                    </Styled.OtherInfoWrapper>
                </CommonStyled.Container>
            </Styled.FAQPage>
        </div>
    );
};

export default FAQ;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
