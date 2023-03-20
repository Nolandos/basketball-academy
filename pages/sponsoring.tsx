import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as CommonStyled from '@/styles/commonStyles';
import React, {ReactNode} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/Sponsorship.styles';

const Sponsorship = () => {
    const {t} = useTranslation();
    const {
        applicationForm,
        emailBiuro,
        trainingSchedule,
        clubRegulations,
        shop: {all: shopUrl},
    } = urls;
    const sponsorshipItems: {
        id: string;
        header: string;
        content: string | ReactNode;
    }[] = [
        {
            id: '1',
            header: t('sponsorship.sponsorship1Title'),
            content: (
                <>
                    <p>{t('sponsorship.sponsorship1PartOne')}</p>
                    <p>{t('sponsorship.sponsorship1PartTwo')}</p>
                    <p>{t('sponsorship.sponsorship1PartThree')}</p>
                    <Trans i18nKey={t('sponsorship.sponsorship1PartFour')} />
                    <p>{t('sponsorship.sponsorship1PartFive')}</p>
                    <p>{t('sponsorship.sponsorship1PartSix')}</p>
                    <CommonStyled.InternalRegulationsLink
                        href={`mailto:${emailBiuro}`}
                    >
                        {emailBiuro}
                    </CommonStyled.InternalRegulationsLink>
                </>
            ),
        },
        {
            id: '2',
            header: t('sponsorship.sponsorship2Title'),
            content: (
                <p>
                    {t('sponsorship.sponsorship2ContentPartOne')}
                    <CommonStyled.InternalRegulationsLink
                        href={`mailto:${emailBiuro}`}
                    >
                        {emailBiuro}
                    </CommonStyled.InternalRegulationsLink>
                    {t('sponsorship.sponsorship2ContentPartTwo')}
                </p>
            ),
        },
        {
            id: '3',
            header: t('sponsorship.sponsorship3Title'),
            content: (
                <>
                    <p>{t('sponsorship.sponsorship3ContentPartOne')}</p>
                    <p>{t('sponsorship.sponsorship3ContentPartTwo')}</p>
                    <p>
                        {t('sponsorship.sponsorship3ContentPartThree')}
                        <CommonStyled.InternalRegulationsLink
                            href={`mailto:${emailBiuro}`}
                        >
                            {emailBiuro}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                </>
            ),
        },
        {
            id: '4',
            header: t('sponsorship.sponsorship4Title'),
            content: (
                <>
                    <p>{t('sponsorship.sponsorship4ContentPartOne')}</p>
                    <p>{t('sponsorship.sponsorship4ContentPartTwo')}</p>
                    <p>
                        {t('sponsorship.sponsorship4ContentPartThree')}{' '}
                        <CommonStyled.InternalRegulationsLink
                            href={`mailto:${emailBiuro}`}
                        >
                            {emailBiuro}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                </>
            ),
        },
        {
            id: '5',
            header: t('sponsorship.sponsorship5Title'),
            content: (
                <>
                    <p>{t('sponsorship.sponsorship5ContentPartOne')}</p>
                    <p>{t('sponsorship.sponsorship5ContentPartTwo')}</p>
                    <p>
                        {t('sponsorship.sponsorship5ContentPartThree')}
                        <CommonStyled.InternalRegulationsLink
                            href={`mailto:${emailBiuro}`}
                        >
                            {emailBiuro}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                </>
            ),
        },
        {
            id: '6',
            header: t('sponsorship.sponsorship6Title'),
            content: (
                <>
                    <p>{t('sponsorship.sponsorship6ContentPartOne')}</p>
                    <p>{t('sponsorship.sponsorship6ContentPartTwo')}</p>
                    <p>{t('sponsorship.sponsorship6ContentPartThree')}</p>
                    <p>
                        {t('sponsorship.sponsorship6ContentPartFour')}
                        <CommonStyled.InternalRegulationsLink
                            href={`mailto:${emailBiuro}`}
                        >
                            {emailBiuro}
                        </CommonStyled.InternalRegulationsLink>
                    </p>
                </>
            ),
        },
    ];
    return (
        <div>
            <Head>
                <title>{t('sponsorship.siteTitle')}</title>
                <meta name="description" content={t('sponsorship.siteTitle')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.SponsorshipPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>
                            {t('sponsorship.siteTitle')}
                        </Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <CommonStyled.Container>
                    <Styled.OtherInfoWrapper>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('sponsorship.youWantToSupportUsSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.OtherInfo>
                            {t('sponsorship.youWantToSupportUsPartOne')}{' '}
                        </Styled.OtherInfo>
                    </Styled.OtherInfoWrapper>
                    <Styled.AccordionWrapper>
                        <Styled.SponsorshipAccordion items={sponsorshipItems} />
                    </Styled.AccordionWrapper>
                    <Styled.OtherInfoWrapper>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('sponsorship.yourProposalSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.OtherInfo>
                            {t('sponsorship.yourProposalPartOne')}{' '}
                            <CommonStyled.InternalRegulationsLink
                                href={`mailto:${emailBiuro}`}
                            >
                                {emailBiuro}
                            </CommonStyled.InternalRegulationsLink>
                        </Styled.OtherInfo>
                    </Styled.OtherInfoWrapper>
                </CommonStyled.Container>
            </Styled.SponsorshipPage>
        </div>
    );
};

export default Sponsorship;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
