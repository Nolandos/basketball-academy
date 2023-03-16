import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import {
    Attractions,
    ChevronRight,
    Home,
    MedicalInformation,
    People,
    Restaurant,
    Sports,
} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import {useRouter} from 'next/router';
import * as Styled from '@/styles/styledPage/Resignations.styles';

const Resignations = () => {
    const {t} = useTranslation();
    const {emailBiuro} = urls;

    return (
        <div>
            <Head>
                <title>{t('common:resignations.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:resignations.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.Resignations>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:resignations.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.ResignationsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:resignations.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:resignations.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <ul>
                                <p>
                                    {t('common:resignations.partTwo')}{' '}
                                    <Styled.ResignationsLink
                                        href={`mailto:${emailBiuro}`}
                                    >
                                        {emailBiuro}
                                    </Styled.ResignationsLink>{' '}
                                    {t('common:resignations.partThree')}
                                </p>
                                <li>
                                    {t('common:resignations.partTwoPointOne')}
                                </li>
                                <li>
                                    {t('common:resignations.partTwoPointTwo')}
                                </li>
                                <li>
                                    {t('common:resignations.partTwoPointThree')}
                                </li>
                            </ul>
                        </li>
                    </Styled.ResignationsList>
                    <Styled.InfoBoxWrapper>
                        <Styled.InfoBox>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:resignations.resignationsInformation'
                                    )}
                                />
                            </p>
                        </Styled.InfoBox>
                    </Styled.InfoBoxWrapper>
                    <Styled.ResignationsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:resignations.suspensionSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:resignations.suspensionPartOne'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:resignations.suspensionPartTwo'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <ul>
                                <p>
                                    {t(
                                        'common:resignations.suspensionPartThree'
                                    )}{' '}
                                    <Styled.ResignationsLink
                                        href={`mailto:${emailBiuro}`}
                                    >
                                        {emailBiuro}
                                    </Styled.ResignationsLink>{' '}
                                    {t(
                                        'common:resignations.suspensionPartFour'
                                    )}
                                </p>
                                <li>
                                    {t(
                                        'common:resignations.suspensionPartThreePointOne'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        'common:resignations.suspensionPartThreePointTwo'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        'common:resignations.suspensionPartThreePointThree'
                                    )}
                                </li>
                                <li>
                                    <Trans
                                        i18nKey={t(
                                            'common:resignations.suspensionPartThreePointFour'
                                        )}
                                    />
                                </li>
                            </ul>
                        </li>
                    </Styled.ResignationsList>
                    <Styled.InfoBoxWrapper>
                        <Styled.InfoBox>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:resignations.suspensionInformation'
                                    )}
                                />
                            </p>
                        </Styled.InfoBox>
                    </Styled.InfoBoxWrapper>
                </Styled.Container>
            </Styled.Resignations>
        </div>
    );
};

export default Resignations;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
