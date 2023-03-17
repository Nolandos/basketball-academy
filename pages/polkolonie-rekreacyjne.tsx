import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import * as Styled from '@/styles/styledPage/RecreationalDayCamps.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import {
    AttachMoney,
    Attractions,
    DinnerDining,
    DirectionsRun,
    EmojiEvents,
    People,
    WbSunny,
} from '@mui/icons-material';
import {useRouter} from 'next/router';
import Image from 'next/image';
import informationImg from '@/assets/pages/recreational-day-camps/recreational-day-camps-information.jpg';
import baseImg from '@/assets/pages/recreational-day-camps/recreational-day-camps-information-base.jpg';
import appearsImg from '@/assets/pages/recreational-day-camps/recreational-day-camps-appears.jpg';

const RecreationalDayCamps = () => {
    const {t} = useTranslation();
    const {
        emailBiuro,
        applicationForm,
        gallery: {
            photos: {all: galleryPhotosAllUrl},
        },
    } = urls;
    const router = useRouter();

    const advantagesRecreationalDayCamps: Array<{
        id: string;
        subtitle: string;
        icon: ReactNode;
    }> = [
        {
            id: 'careQualifiedTutors',
            subtitle: t('common:recreationalDayCamps.careQualifiedTutors'),
            icon: <People />,
        },
        {
            id: 'twoCourseDinner',
            subtitle: t('common:recreationalDayCamps.twoCourseDinner'),
            icon: <DinnerDining />,
        },
        {
            id: 'additionalAttractions',
            subtitle: t('common:recreationalDayCamps.additionalAttractions'),
            icon: <Attractions />,
        },
        {
            id: 'sportsAndArtisticActivities',
            subtitle: t(
                'common:recreationalDayCamps.sportsAndArtisticActivities'
            ),
            icon: <DirectionsRun />,
        },
        {
            id: 'outdoorActivities ',
            subtitle: t('common:recreationalDayCamps.outdoorActivities'),
            icon: <WbSunny />,
        },
        {
            id: 'contestsAndGames',
            subtitle: t('common:recreationalDayCamps.contestsAndGames'),
            icon: <EmojiEvents />,
        },
        {
            id: 'lowPrice',
            subtitle: t('common:recreationalDayCamps.lowPrice'),
            icon: <AttachMoney />,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:recreationalDayCamps.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:recreationalDayCamps.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.RecreationalDayCamps>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:recreationalDayCamps.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>

                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:recreationalDayCamps.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                <Trans
                                    i18nKey={t(
                                        'common:recreationalDayCamps.partOne'
                                    )}
                                />
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={informationImg}
                                    alt={t(
                                        'common:recreationalDayCamps.siteSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:recreationalDayCamps.dayCampBaseSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={baseImg}
                                    alt={t(
                                        'common:recreationalDayCamps.dayCampBaseSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                <Styled.RecreationalDayCampsList>
                                    <li>
                                        <Styled.RecreationalDayCampsPlaceIcon />
                                        <p>
                                            {t(
                                                'common:recreationalDayCamps.dayCampBasePartOne'
                                            )}
                                        </p>
                                    </li>
                                    <li>
                                        <Styled.RecreationalDayCampsPlaceIcon />
                                        <p>
                                            {t(
                                                'common:recreationalDayCamps.dayCampBasePartTwo'
                                            )}
                                        </p>
                                    </li>
                                    <li>
                                        <Styled.RecreationalDayCampsPlaceIcon />
                                        <p>
                                            {t(
                                                'common:recreationalDayCamps.dayCampBasePartThree'
                                            )}
                                        </p>
                                    </li>
                                </Styled.RecreationalDayCampsList>
                                {t(
                                    'common:recreationalDayCamps.dayCampBaseInformation'
                                )}
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:recreationalDayCamps.dayCampInformationAppearsSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                {t(
                                    'common:recreationalDayCamps.dayCampInformationAppearsPartOne'
                                )}{' '}
                                <Styled.RecreationalDayCampsLink
                                    href={applicationForm}
                                >
                                    {t(
                                        'common:recreationalDayCamps.dayCampInformationAppearsRegistration'
                                    )}
                                </Styled.RecreationalDayCampsLink>{' '}
                                {t(
                                    'common:recreationalDayCamps.dayCampInformationAppearsPartTwo'
                                )}{' '}
                                <Styled.RecreationalDayCampsLink
                                    href={`mailto:${emailBiuro}`}
                                >
                                    {emailBiuro}
                                </Styled.RecreationalDayCampsLink>
                                .
                                <br />
                                {t(
                                    'common:recreationalDayCamps.dayCampInformationAppearsPartThree'
                                )}
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={appearsImg}
                                    alt={t(
                                        'common:recreationalDayCamps.dayCampInformationAppearsSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.CampBenefitsWrapper>
                    <CommonStyled.Container>
                        <Styled.CampBenefitsContent>
                            {advantagesRecreationalDayCamps.map(
                                ({id, subtitle, icon}) => (
                                    <Styled.CampBenefitsTile key={id}>
                                        {icon}
                                        <p>{subtitle}</p>
                                    </Styled.CampBenefitsTile>
                                )
                            )}
                        </Styled.CampBenefitsContent>
                    </CommonStyled.Container>
                </Styled.CampBenefitsWrapper>
            </Styled.RecreationalDayCamps>
        </div>
    );
};

export default RecreationalDayCamps;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
