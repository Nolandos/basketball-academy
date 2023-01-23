import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import * as Styled from '@/styles/styledPage/GroupWorkouts.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/pages/about-us-hero.jpg';
import * as CommonStyled from '@/styles/commonStyles';
import preschoolers from '@/assets/pages/group-workouts/3-5.png';
import mediocre from '@/assets/pages/group-workouts/6-9.png';
import elderly from '@/assets/pages/group-workouts/10-13.png';
import Image from 'next/image';
import groupWorkoutsDesc from '@/assets/pages/group-workouts/group-workouts-desc.jpg';
import {FloatOptions} from '@/utils/commonEnums';
import SignUpButton from '@/components/common/Buttons/SignUpButton/SignUpButton';

const GroupWorkouts = () => {
    const {t} = useTranslation();
    const {LEFT} = FloatOptions;

    return (
        <div>
            <Head>
                <title>{t('common:groupWorkouts.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:groupWorkouts.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.GroupWorkouts>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>
                            {t('common:groupWorkouts.siteTitle')}
                        </Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.GeneralInfo>
                    <Styled.GeneralInfoContainer>
                        <Styled.GeneralInfoTexts>
                            <Styled.GeneralInfoText>
                                <Trans i18nKey="common:groupWorkouts.generalInfoPartOne" />
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                {t('common:groupWorkouts.generalInfoPartTwo')}
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                {t('common:groupWorkouts.generalInfoPartThree')}
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                {t('common:groupWorkouts.generalInfoPartFour')}
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                <Trans i18nKey="common:groupWorkouts.generalInfoPartFive" />
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                {t('common:groupWorkouts.generalInfoPartSix')}
                            </Styled.GeneralInfoText>
                        </Styled.GeneralInfoTexts>
                        <Styled.ImageWrapper>
                            <Image
                                src={groupWorkoutsDesc}
                                alt={t('common:groupWorkouts.siteTitle')}
                            />
                        </Styled.ImageWrapper>
                    </Styled.GeneralInfoContainer>
                </Styled.GeneralInfo>
                <Styled.AgeCategories>
                    <CommonStyled.SectionSubtitle belt={false}>
                        {t('common:groupWorkouts.ageCategories')}
                    </CommonStyled.SectionSubtitle>
                    <Styled.MeasureOfWeight>
                        {[...Array(99).keys()].map((item) => (
                            <Styled.MeasureOfWeightBelt
                                key={item}
                                itemNumber={item}
                            />
                        ))}
                    </Styled.MeasureOfWeight>
                    <Styled.AgeCategory>
                        <Styled.AgeCategoryTile>
                            <h3>
                                <Trans i18nKey="common:groupWorkouts.preschoolersSubtitle" />
                            </h3>
                            <p>
                                {t('common:groupWorkouts.preschoolersPartOne')}
                            </p>
                        </Styled.AgeCategoryTile>
                        <Styled.AgeCategoryTile image>
                            <Image
                                src={preschoolers}
                                width={150}
                                height={150}
                                alt={t(
                                    'common:groupWorkouts.preschoolersSubtitle'
                                )}
                            />
                        </Styled.AgeCategoryTile>
                    </Styled.AgeCategory>
                    <Styled.AgeCategory>
                        <Styled.AgeCategoryTile image float={LEFT}>
                            <Image
                                src={mediocre}
                                width={150}
                                height={150}
                                alt={t('common:groupWorkouts.mediocreSubtitle')}
                            />
                        </Styled.AgeCategoryTile>
                        <Styled.AgeCategoryTile>
                            <h3>
                                <Trans i18nKey="common:groupWorkouts.mediocreSubtitle" />
                            </h3>
                            <p> {t('common:groupWorkouts.mediocrePartOne')}</p>
                        </Styled.AgeCategoryTile>
                    </Styled.AgeCategory>
                    <Styled.AgeCategory>
                        <Styled.AgeCategoryTile>
                            <h3>
                                <Trans i18nKey="common:groupWorkouts.elderlySubtitle" />
                            </h3>
                            <p>{t('common:groupWorkouts.elderlyPartOne')}</p>
                        </Styled.AgeCategoryTile>
                        <Styled.AgeCategoryTile image>
                            <Image
                                src={elderly}
                                width={150}
                                height={150}
                                alt={t('common:groupWorkouts.elderlySubtitle')}
                            />
                        </Styled.AgeCategoryTile>
                    </Styled.AgeCategory>
                    <Styled.AgeCategory>
                        <Styled.AgeCategoryTile image float={LEFT}>
                            <Image
                                src={elderly}
                                width={150}
                                height={150}
                                alt={t('common:groupWorkouts.elderlySubtitle')}
                            />
                        </Styled.AgeCategoryTile>
                        <Styled.AgeCategoryTile>
                            <h3>
                                <Trans i18nKey="common:groupWorkouts.theOldestSubtitle" />
                            </h3>
                            <p>{t('common:groupWorkouts.theOldestPartOne')}</p>
                        </Styled.AgeCategoryTile>
                    </Styled.AgeCategory>
                    <Styled.ButtonWrapper>
                        <SignUpButton />
                    </Styled.ButtonWrapper>
                </Styled.AgeCategories>
            </Styled.GroupWorkouts>
        </div>
    );
};

export default GroupWorkouts;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
