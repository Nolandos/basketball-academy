import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import * as Styled from '@/styles/styledPage/MultiWorkouts.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import SignUpButton from '@/components/common/Buttons/SignUpButton/SignUpButton';
import Image, {StaticImageData} from 'next/image';
import photoOne from '@/assets/pages/multi-workouts/multi-workouts-one.jpg';
import photoTwo from '@/assets/pages/multi-workouts/multi-workouts-two.jpg';
import photoThree from '@/assets/pages/multi-workouts/multi-workouts-three.jpg';
import photoFour from '@/assets/pages/multi-workouts/multi-workouts-four.jpg';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const MultiWorkouts = () => {
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
                <title>{t('common:multiWorkouts.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:multiWorkouts.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.MultiWorkouts>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:multiWorkouts.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.InfoBoxWrapper>
                        <Styled.InfoBox>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:multiWorkouts.mainInformation'
                                    )}
                                />
                            </p>
                        </Styled.InfoBox>
                    </Styled.InfoBoxWrapper>
                    <Styled.MultiWorkoutsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:multiWorkouts.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:multiWorkouts.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:multiWorkouts.partTwo')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:multiWorkouts.partThree'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.MultiWorkoutsList>
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
            </Styled.MultiWorkouts>
        </div>
    );
};

export default MultiWorkouts;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
