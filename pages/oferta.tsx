import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import * as Styled from '@/styles/styledPage/Offer.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {
    Savings,
    Schedule,
    SportsBasketball,
    TrendingUp,
} from '@mui/icons-material';
import urls from '@/utils/urls';
import Link from 'next/link';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

const Offer = () => {
    const {t} = useTranslation();
    const {
        multiWorkouts,
        groupWorkouts,
        leagueWorkouts,
        individualTrainings,
        sportsCamps,
        recreationalDayCamps,
        trainingInStudio,
    } = urls;

    const howWorksArray: Array<{
        id: string;
        content: string;
        icon: ReactNode;
    }> = [
        {
            id: 'howWorksOfferOne',
            content: t('common:offer.howWorksOfferOne'),
            icon: <Schedule />,
        },
        {
            id: 'howWorksOfferTwo',
            content: t('common:offer.howWorksOfferTwo'),
            icon: <Savings />,
        },
        {
            id: 'howWorksOfferThree',
            content: t('common:offer.howWorksOfferThree'),
            icon: <TrendingUp />,
        },
        {
            id: 'howWorksOfferFour',
            content: t('common:offer.howWorksOfferFour'),
            icon: <SportsBasketball />,
        },
    ];

    const offersArray: Array<{
        id: string;
        title: string | ReactNode;
        content: ReactNode;
    }> = [
        {
            id: 'locationTrainingSubtitle',
            title: (
                <Link href={groupWorkouts}>
                    {t('common:offer.locationTrainingSubtitle')}
                </Link>
            ),
            content: (
                <>
                    <p>{t('common:offer.locationTrainingPartZero')}</p>
                    <p>{t('common:offer.locationTrainingPartOne')}</p>
                    <p>{t('common:offer.locationTrainingPartTwo')}</p>
                    <p className="icon-text">
                        <Styled.OfferArrowForward />
                        {t('common:offer.locationTrainingPartThree')}
                    </p>
                    <p className="icon-text">
                        <Styled.OfferArrowForward />
                        {t('common:offer.locationTrainingPartFour')}
                    </p>
                    <p className="icon-text">
                        <Styled.OfferArrowForward />
                        {t('common:offer.locationTrainingPartFive')}
                    </p>
                    <p className="icon-text">
                        <Styled.OfferArrowForward />
                        {t('common:offer.locationTrainingPartSix')}
                    </p>
                    <p>{t('common:offer.locationTrainingPartSeven')}</p>
                    <p>
                        <b>{t('common:offer.arrangement')}: </b>
                        {t('common:offer.locationTrainingPartEight')}
                    </p>
                    <p>
                        <b>{t('common:offer.trainingTime')}: </b>
                        {t('common:offer.locationTrainingPartNine')}
                    </p>
                    <p>
                        <b>{t('common:offer.price')}: </b>
                        {t('common:offer.locationTrainingPartTen')}
                    </p>
                    <Trans
                        i18nKey={t('common:offer.locationTrainingPartEleven')}
                    />
                </>
            ),
        },
        {
            id: 'leagueTrainingSubtitle',
            title: (
                <Link href={leagueWorkouts}>
                    {t('common:offer.leagueTrainingSubtitle')}
                </Link>
            ),
            content: (
                <>
                    <p>{t('common:offer.leagueTrainingPartOne')}</p>
                    <p>{t('common:offer.leagueTrainingPartTwo')}</p>
                    <p>
                        <b>{t('common:offer.arrangement')}: </b>
                        {t('common:offer.leagueTrainingArrangement')}
                    </p>
                    <p>
                        <b>{t('common:offer.trainingTime')}: </b>
                        {t('common:offer.leagueTrainingTrainingTime')}
                    </p>
                    <p>
                        <b>{t('common:offer.price')}: </b>
                        {t('common:offer.leagueTrainingPrice')}
                    </p>
                </>
            ),
        },
        {
            id: 'individualTrainingSubtitle',
            title: (
                <Link href={individualTrainings}>
                    {t('common:offer.individualTrainingSubtitle')}
                </Link>
            ),
            content: (
                <>
                    <p>{t('common:offer.individualTrainingPartOne')}</p>
                    <p>{t('common:offer.individualTrainingPartTwo')}</p>
                    <p>
                        <b>{t('common:offer.arrangement')}: </b>
                        {t('common:offer.individualTrainingArrangement')}
                    </p>
                    <p>
                        <b>{t('common:offer.trainingTime')}: </b>
                        {t('common:offer.individualTrainingTrainingTime')}
                    </p>
                    <p>
                        <b>{t('common:offer.price')}: </b>
                        {t('common:offer.individualTrainingPrice')}
                    </p>
                </>
            ),
        },
        {
            id: 'trainingInStudio',
            title: (
                <Link href={trainingInStudio}>
                    {t('common:offer.trainingInStudioSubtitle')}
                </Link>
            ),
            content: (
                <>
                    <p>{t('common:offer.trainingInStudioPartOne')}</p>
                    <p>{t('common:offer.trainingInStudioPartTwo')}</p>
                    <p>
                        <b>{t('common:offer.arrangement')}: </b>
                        {t('common:offer.trainingInStudioArrangement')}
                    </p>
                    <p>
                        <b>{t('common:offer.trainingTime')}: </b>
                        {t('common:offer.trainingInStudioTrainingTime')}
                    </p>
                    <p>
                        <b>{t('common:offer.price')}: </b>
                        {t('common:offer.trainingInStudioPrice')}
                    </p>
                </>
            ),
        },
        {
            id: '3x3TrainingSubtitle',
            title: (
                <Link href={multiWorkouts}>
                    {t('common:offer.3x3TrainingSubtitle')}
                </Link>
            ),
            content: (
                <>
                    <p>{t('common:offer.3x3TrainingPartOne')}</p>
                    <p>
                        <b>{t('common:offer.arrangement')}: </b>
                        {t('common:offer.3x3TrainingArrangement')}
                    </p>
                    <p>
                        <b>{t('common:offer.trainingTime')}: </b>
                        {t('common:offer.3x3TrainingTrainingTime')}
                    </p>
                    <p>
                        <b>{t('common:offer.price')}: </b>
                        {t('common:offer.3x3TrainingPrice')}
                    </p>
                </>
            ),
        },
        {
            id: 'holidaySubtitle',
            title: (
                <>
                    <Link href={sportsCamps}>
                        {t('common:offer.holidaySubtitle')}
                    </Link>{' '}
                    {t('common:and')}{' '}
                    <Link href={recreationalDayCamps}>
                        {t('common:offer.holidaySubtitlePartTwo')}
                    </Link>
                </>
            ),
            content: <p>{t('common:offer.holidayPartOne')}</p>,
        },
    ];
    return (
        <div>
            <Head>
                <title>{t('common:offer.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:offer.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.OfferPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:offer.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.HowWorksWrapper>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:offer.howWorksSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.HowWorksContent>
                            {howWorksArray.map(({id, content, icon}) => (
                                <Styled.HowWorksTile key={id}>
                                    {icon}
                                    <p>{content}</p>
                                </Styled.HowWorksTile>
                            ))}
                        </Styled.HowWorksContent>
                    </CommonStyled.Container>
                </Styled.HowWorksWrapper>
                <CommonStyled.SectionSubtitle belt={false}>
                    {t('common:offer.offersSubtitle')}
                </CommonStyled.SectionSubtitle>
                <Styled.OffersContent>
                    {offersArray.map(
                        ({
                            id: offerId,
                            title: offerTitle,
                            content: offerContent,
                        }) => (
                            <Styled.Segment key={offerId}>
                                <h3>{offerTitle}</h3>
                                <div>{offerContent}</div>
                            </Styled.Segment>
                        )
                    )}
                </Styled.OffersContent>
            </Styled.OfferPage>
        </div>
    );
};

export default Offer;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
