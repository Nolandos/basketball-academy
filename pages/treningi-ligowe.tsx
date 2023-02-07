import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as Styled from '@/styles/styledPage/LeagueWorkouts.styles';
import * as CommonStyled from '@/styles/commonStyles';
import photoOne from '@/assets/pages/league-workouts/league-workouts-photo-one.jpg';
import photoTwo from '@/assets/pages/league-workouts/league-workouts-photo-two.jpg';
import photoThree from '@/assets/pages/league-workouts/league-workouts-photo-three.jpg';
import photoFour from '@/assets/pages/league-workouts/league-workouts-photo-four.jpg';
import Image, {StaticImageData} from 'next/image';
import SignUpButton from '@/components/common/Buttons/SignUpButton/SignUpButton';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const LeagueWorkouts = () => {
    const {t} = useTranslation();

    const photosArray: Array<{id: string; url: StaticImageData}> = [
        {
            id: 'photoOne',
            url: photoOne,
        },
        {
            id: 'photoTwo',
            url: photoTwo,
        },
        {
            id: 'photoThree',
            url: photoThree,
        },
        {
            id: 'photoFour',
            url: photoFour,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:leagueWorkouts.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:leagueWorkouts.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.LeagueWorkouts>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:leagueWorkouts.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.LeagueWorkoutsContainer>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:leagueWorkouts.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:leagueWorkouts.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:leagueWorkouts.partTwo')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:leagueWorkouts.partThree')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:leagueWorkouts.partFour'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:leagueWorkouts.partFive')}</p>
                        </li>
                    </Styled.LeagueWorkoutsContainer>
                    <Styled.ButtonWrapper>
                        <SignUpButton />
                    </Styled.ButtonWrapper>

                    <Styled.Photos>
                        {photosArray.map(({id, url}) => (
                            <Styled.ContentImage key={id}>
                                <Image src={url} alt={id} />
                            </Styled.ContentImage>
                        ))}
                    </Styled.Photos>
                </Styled.Container>
            </Styled.LeagueWorkouts>
        </div>
    );
};

export default LeagueWorkouts;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
