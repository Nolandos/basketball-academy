import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/NewLocation.styles';
import {
    AttachMoney,
    Attractions,
    ChevronRight,
    ContentCopy,
    DinnerDining,
    EmojiEvents,
    Groups,
    LocationOn,
    People,
    PlayCircleOutline,
    WbSunny,
} from '@mui/icons-material';
import {NewLocationLink} from '@/styles/styledPage/NewLocation.styles';

const NewLocation = () => {
    const {t} = useTranslation();
    const {emailBiuro} = urls;

    const advantagesRecreationalDayCamps: Array<{
        id: string;
        subtitle: string;
        icon: ReactNode;
    }> = [
        {
            id: 'twoCourseDinner',
            subtitle: t('common:newLocation.iconographyPartOne'),
            icon: <LocationOn />,
        },
        {
            id: 'additionalAttractions',
            subtitle: t('common:newLocation.iconographyPartTwo'),
            icon: <Groups />,
        },
        {
            id: 'sportsAndArtisticActivities',
            subtitle: t('common:newLocation.iconographyPartThree'),
            icon: <ContentCopy />,
        },
        {
            id: 'outdoorActivities ',
            subtitle: t('common:newLocation.iconographyPartFour'),
            icon: <PlayCircleOutline />,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:newLocation.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:newLocation.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.NewLocation>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:newLocation.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.TextContainer>
                        <p>{t('common:newLocation.partOne')}</p>
                    </Styled.TextContainer>
                </Styled.Container>
                <Styled.NewLocationStepsWrapper>
                    <CommonStyled.Container>
                        <Styled.NewLocationStepsContent>
                            {advantagesRecreationalDayCamps.map(
                                ({id, subtitle, icon}, index) => (
                                    <Styled.NewLocationStepsTile key={id}>
                                        <p className="index-counter">
                                            {index + 1}
                                        </p>
                                        {icon}
                                        <p>{subtitle}</p>
                                    </Styled.NewLocationStepsTile>
                                )
                            )}
                        </Styled.NewLocationStepsContent>
                    </CommonStyled.Container>
                </Styled.NewLocationStepsWrapper>
                <Styled.Container>
                    <Styled.NewLocationList>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:newLocation.partTwo')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:newLocation.partThree')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t('common:newLocation.partFour')}{' '}
                                <Styled.NewLocationLink
                                    href={`mailto:${emailBiuro}`}
                                >
                                    {emailBiuro}
                                </Styled.NewLocationLink>
                            </p>
                        </li>
                    </Styled.NewLocationList>
                </Styled.Container>
            </Styled.NewLocation>
        </div>
    );
};

export default NewLocation;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
