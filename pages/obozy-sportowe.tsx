import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import * as Styled from '@/styles/styledPage/Camps.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import {
    Attractions,
    Home,
    MedicalInformation,
    People,
    Restaurant,
    Sports,
} from '@mui/icons-material';

const Camps = () => {
    const {t} = useTranslation();
    const {emailBiuro, applicationForm} = urls;

    const advantagesCamps: Array<{
        id: string;
        subtitle: string;
        icon: ReactNode;
    }> = [
        {
            id: 'advantagesCampsFood',
            subtitle: t('common:camps.advantagesCampsFood'),
            icon: <Restaurant />,
        },
        {
            id: 'advantagesCampsSportsHall',
            subtitle: t('common:camps.advantagesCampsSportsHall'),
            icon: <Home />,
        },
        {
            id: 'advantagesCampsSportsCadre',
            subtitle: t('common:camps.advantagesCampsSportsCadre'),
            icon: <People />,
        },
        {
            id: 'advantagesCampsSportsPramedic',
            subtitle: t('common:camps.advantagesCampsSportsPramedic'),
            icon: <MedicalInformation />,
        },
        {
            id: 'advantagesCampsSportsBasketballTraining',
            subtitle: t('common:camps.advantagesCampsSportsBasketballTraining'),
            icon: <Sports />,
        },
        {
            id: 'advantagesCampsSportsAdditionalAttractions',
            subtitle: t(
                'common:camps.advantagesCampsSportsAdditionalAttractions'
            ),
            icon: <Attractions />,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:camps.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:camps.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.Camps>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:camps.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.CampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:camps.partOne')}</p>
                        </li>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:camps.partTwo')}</p>
                        </li>
                    </Styled.CampsList>
                    <Styled.CampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.howToSignUpSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                {t('common:camps.howToSignUpPartOne')}{' '}
                                <Styled.CampsLink href={applicationForm}>
                                    {t('common:camps.howToSignUpRegistration')}
                                </Styled.CampsLink>{' '}
                                {t('common:camps.howToSignUpPartTwo')}{' '}
                                <Styled.CampsLink href={`mailto:${emailBiuro}`}>
                                    {emailBiuro}
                                </Styled.CampsLink>
                            </p>
                        </li>
                    </Styled.CampsList>
                    <Styled.CampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:camps.basketballAcademyCampsLikeSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:camps.basketballAcademyCampsLikePartOne'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.CampsList>
                    <Styled.CampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.summerCampsSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:camps.summerCampsPartOne'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.CampsList>
                    <Styled.CampsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.winterCampsSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:camps.winterCampsPartOne'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.CampsList>
                </Styled.Container>
                <Styled.CampBenefitsWrapper>
                    <CommonStyled.Container>
                        <Styled.CampBenefitsContent>
                            {advantagesCamps.map(({id, subtitle, icon}) => (
                                <Styled.CampBenefitsTile key={id}>
                                    {icon}
                                    <p>{subtitle}</p>
                                </Styled.CampBenefitsTile>
                            ))}
                        </Styled.CampBenefitsContent>
                    </CommonStyled.Container>
                </Styled.CampBenefitsWrapper>
            </Styled.Camps>
        </div>
    );
};

export default Camps;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
