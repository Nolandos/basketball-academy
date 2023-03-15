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
    ChevronRight,
    DinnerDining,
    DirectionsRun,
    EmojiEvents,
    Home,
    MedicalInformation,
    People,
    Restaurant,
    Sports,
    WbSunny,
} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import {useRouter} from 'next/router';

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
                <Styled.Container>
                    <Styled.RecreationalDayCampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:recreationalDayCamps.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:recreationalDayCamps.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:recreationalDayCamps.partTwo')}</p>
                        </li>
                    </Styled.RecreationalDayCampsList>
                    <Styled.RecreationalDayCampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:recreationalDayCamps.dayCampBaseSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t(
                                    'common:recreationalDayCamps.dayCampBasePartOne'
                                )}
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t(
                                    'common:recreationalDayCamps.dayCampBasePartTwo'
                                )}
                            </p>
                        </li>
                    </Styled.RecreationalDayCampsList>
                    <Styled.InfoBoxWrapper>
                        <Styled.InfoBox>
                            {t(
                                'common:recreationalDayCamps.dayCampBaseInformation'
                            )}
                        </Styled.InfoBox>
                    </Styled.InfoBoxWrapper>
                    <Styled.RecreationalDayCampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:recreationalDayCamps.dayCampInformationAppearsSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
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
                            </p>
                        </li>
                    </Styled.RecreationalDayCampsList>
                    <Styled.InfoBoxWrapper>
                        <Styled.InfoBox>
                            {t(
                                'common:recreationalDayCamps.dayCampInformationAppearsPartThree'
                            )}
                        </Styled.InfoBox>
                    </Styled.InfoBoxWrapper>
                    <Styled.ButtonsWrapper>
                        <Button
                            onClickHandler={() =>
                                router.push(galleryPhotosAllUrl)
                            }
                            iconEnd={<ChevronRight />}
                        >
                            {t('common:goToGallery')}
                        </Button>
                    </Styled.ButtonsWrapper>
                </Styled.Container>
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
