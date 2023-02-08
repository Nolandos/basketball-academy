import React, {ReactNode} from 'react';
import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/AboutUsPage.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import passionImg from '@/assets/pages/about-us-passion.jpg';
import funImg from '@/assets/pages/about-us-fun.jpg';
import trainingStaffImg from '@/assets/pages/about-us-training-staff.jpg';
import cooperationImg from '@/assets/pages/about-us-cooperation.jpg';
import mainTargetImg from '@/assets/pages/about-us-main-target.jpg';
import pyraPoznan from '@/assets/recommendUsBar/pyra-poznan.png';
import uksSiekierki from '@/assets/recommendUsBar/siekierki.png';
import Image from 'next/image';
import {
    Accessibility,
    BatteryChargingFull,
    Diversity3,
    EmojiObjects,
    FavoriteBorder,
    ImportContacts,
    TagFaces,
    Verified,
} from '@mui/icons-material';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const AboutUs = () => {
    const {t} = useTranslation();

    const standOutArray: Array<{
        id: string;
        subtitle: string;
        content: string;
        icon: ReactNode;
    }> = [
        {
            id: 'standOutAccessibilitySubtitle',
            subtitle: t('common:aboutUs.standOutAccessibilitySubtitle'),
            content: t('common:aboutUs.standOutAccessibilityText'),
            icon: <Accessibility />,
        },
        {
            id: 'standOutSmileSubtitle',
            subtitle: t('common:aboutUs.standOutSmileSubtitle'),
            content: t('common:aboutUs.standOutSmileText'),
            icon: <TagFaces />,
        },
        {
            id: 'standOutEngagementSubtitle',
            subtitle: t('common:aboutUs.standOutEngagementSubtitle'),
            content: t('common:aboutUs.standOutEngagementText'),
            icon: <BatteryChargingFull />,
        },
        {
            id: 'standOutPassionSubtitle',
            subtitle: t('common:aboutUs.standOutPassionSubtitle'),
            content: t('common:aboutUs.standOutPassionText'),
            icon: <FavoriteBorder />,
        },
        {
            id: 'standOutOpennessSubtitle',
            subtitle: t('common:aboutUs.standOutOpennessSubtitle'),
            content: t('common:aboutUs.standOutOpennessText'),
            icon: <ImportContacts />,
        },
        {
            id: 'standOutIntegrationSubtitle',
            subtitle: t('common:aboutUs.standOutIntegrationSubtitle'),
            content: t('common:aboutUs.standOutIntegrationText'),
            icon: <Diversity3 />,
        },
        {
            id: 'standOutCreativitySubtitle',
            subtitle: t('common:aboutUs.standOutCreativitySubtitle'),
            content: t('common:aboutUs.standOutCreativityText'),
            icon: <EmojiObjects />,
        },
        {
            id: 'standOutQualitySubtitle',
            subtitle: t('common:aboutUs.standOutQualitySubtitle'),
            content: t('common:aboutUs.standOutQualityText'),
            icon: <Verified />,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:aboutUs.siteTitle')}</title>
                <meta name="description" content={t('aboutUs')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.AboutUsPage>
                <CommonStyled.HeroImage image={heroBackgroundImg} description>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:aboutUs.siteTitle')}
                        </CommonStyled.Title>
                        <CommonStyled.HeroDescription>
                            {t('common:aboutUs.partOne')}
                        </CommonStyled.HeroDescription>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:aboutUs.mainTargetSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={mainTargetImg}
                                    alt={t('common:aboutUs.mainTargetSubtitle')}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                <Trans
                                    i18nKey={t(
                                        'common:aboutUs.mainTargetPartOne'
                                    )}
                                />
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:aboutUs.passionSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                {t('common:aboutUs.passionPartOne')}
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={passionImg}
                                    alt={t('common:aboutUs.passionSubtitle')}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:aboutUs.funDevelopmentLearningPartOneSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={funImg}
                                    alt={t(
                                        'common:aboutUs.funDevelopmentLearningPartOneSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                {t(
                                    'common:aboutUs.funDevelopmentLearningPartOne'
                                )}
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:aboutUs.trainingStaffSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                {t('common:aboutUs.trainingStaffPartOne')}
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={trainingStaffImg}
                                    alt={t(
                                        'common:aboutUs.trainingStaffSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.StandOutWrapper>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:aboutUs.standOutSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.StandOutContent>
                            {standOutArray.map(
                                ({id, subtitle, content, icon}) => (
                                    <Styled.StandOutTile key={id}>
                                        {icon}
                                        <h3>{subtitle}</h3>
                                        <p>{content}</p>
                                    </Styled.StandOutTile>
                                )
                            )}
                        </Styled.StandOutContent>
                    </CommonStyled.Container>
                </Styled.StandOutWrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:aboutUs.cooperationSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <div className="cooperation-content">
                                <Styled.SectionDescription
                                    className="cooperation-text"
                                    even
                                >
                                    {t('common:aboutUs.cooperationPartOne')}
                                </Styled.SectionDescription>
                                <div className="cooperation-container">
                                    <Image
                                        src={pyraPoznan}
                                        height={100}
                                        className="pyra-poznan"
                                        alt="pyra-poznan"
                                    />
                                    <Image
                                        src={uksSiekierki}
                                        height={100}
                                        className="uks-siekierki"
                                        alt="uks-siekierki"
                                    />
                                </div>
                            </div>
                            <Styled.ContentImage>
                                <Image
                                    src={cooperationImg}
                                    alt={t(
                                        'common:aboutUs.cooperationSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
            </Styled.AboutUsPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default AboutUs;
