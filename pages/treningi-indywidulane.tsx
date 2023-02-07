import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import * as Styled from '@/styles/styledPage/IndividualWorkouts.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import SignUpButton from '@/components/common/Buttons/SignUpButton/SignUpButton';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const IndividualWorkouts = () => {
    const {t} = useTranslation();
    const {emailBiuro} = urls;
    return (
        <div>
            <Head>
                <title>{t('common:individualWorkouts.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:individualWorkouts.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.IndividualWorkouts>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:individualWorkouts.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.IndividualWorkoutsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:individualWorkouts.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:individualWorkouts.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:individualWorkouts.partTwo')}</p>
                        </li>
                    </Styled.IndividualWorkoutsList>
                    <Styled.IndividualWorkoutsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:individualWorkouts.benefitsSiteSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:individualWorkouts.benefitsPartOne'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <ul>
                                <p>
                                    <Trans
                                        i18nKey={t(
                                            'common:individualWorkouts.benefitsPartTwo'
                                        )}
                                    />
                                </p>
                                <li>
                                    {t(
                                        'common:individualWorkouts.benefitsPartTwoPointOne'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        'common:individualWorkouts.benefitsPartTwoPointTwo'
                                    )}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:individualWorkouts.benefitsPartThree'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:individualWorkouts.benefitsPartFour'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:individualWorkouts.benefitsPartFive'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.IndividualWorkoutsList>
                    <Styled.IndividualWorkoutsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:individualWorkouts.localizationsAndTermsSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <ul>
                                <p>
                                    <Trans
                                        i18nKey={t(
                                            'common:individualWorkouts.localizationsAndTermsListSubtitle'
                                        )}
                                    />
                                </p>
                                <li>
                                    <Trans
                                        i18nKey={t(
                                            'common:individualWorkouts.localizationsAndTermsListItemOne'
                                        )}
                                    />
                                </li>
                                <li>
                                    {t(
                                        'common:individualWorkouts.localizationsAndTermsListItemTwo'
                                    )}{' '}
                                    <Styled.IndividualWorkoutsLink
                                        href={`mailto:${emailBiuro}`}
                                    >
                                        {emailBiuro}
                                    </Styled.IndividualWorkoutsLink>
                                </li>
                                <li>
                                    {t(
                                        'common:individualWorkouts.localizationsAndTermsListItemThree'
                                    )}{' '}
                                    <Styled.IndividualWorkoutsLink href="/formularz-kontaktowy">
                                        {t('common:contactForm')}
                                    </Styled.IndividualWorkoutsLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t(
                                    'common:individualWorkouts.localizationsAndTermsPartOne'
                                )}
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t(
                                    'common:individualWorkouts.localizationsAndTermsPartTwo'
                                )}
                            </p>
                        </li>
                    </Styled.IndividualWorkoutsList>
                    <Styled.ButtonWrapper>
                        <SignUpButton />
                    </Styled.ButtonWrapper>
                </Styled.Container>
            </Styled.IndividualWorkouts>
        </div>
    );
};

export default IndividualWorkouts;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
