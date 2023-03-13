import React from 'react';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/TrainingInStudio.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const TrainingInStudio = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('common:trainingInStudio.siteTitle')}</title>
                <meta name="description" content={t('trainingInStudio')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.TrainingInStudioPage>
                <CommonStyled.HeroImage image={heroBackgroundImg}>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:trainingInStudio.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.TrainingInStudioContainer>
                    <CommonStyled.Container>
                        <Styled.TrainingInStudioList>
                            <CommonStyled.SectionSubtitle belt={false}>
                                {t('common:trainingInStudio.siteSubtitle')}
                            </CommonStyled.SectionSubtitle>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partOne')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partTwo')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partThree')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partFour')}</p>
                            </li>
                        </Styled.TrainingInStudioList>
                        <Styled.TrainingInStudioList>
                            <CommonStyled.SectionSubtitle belt={false}>
                                {t(
                                    'common:trainingInStudio.whyYouShouldCareSubtitle'
                                )}
                            </CommonStyled.SectionSubtitle>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partFive')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partSix')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partSeven')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partEight')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partNine')}</p>
                            </li>
                            <li>
                                <Styled.LeagueWorkoutsArrowForward />
                                <p>{t('common:trainingInStudio.partTen')}</p>
                            </li>
                        </Styled.TrainingInStudioList>
                    </CommonStyled.Container>
                </Styled.TrainingInStudioContainer>
            </Styled.TrainingInStudioPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default TrainingInStudio;
