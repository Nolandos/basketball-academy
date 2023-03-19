import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/LeagueDrafts.styles';
import SignUpButton from '@/components/common/Buttons/SignUpButton/SignUpButton';
import TimetableButton from '@/components/common/Buttons/TimetableButton/TimetableButton';
import Image, {StaticImageData} from 'next/image';
import photoOne from '@/assets/pages/league-drafts/league-drafts-photo-one.jpg';
import photoTwo from '@/assets/pages/league-drafts/league-drafts-photo-two.jpg';
import photoThree from '@/assets/pages/league-drafts/league-drafts-photo-three.jpg';
import photoFour from '@/assets/pages/league-drafts/league-drafts-photo-four.jpg';

const LeagueDrafts = () => {
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
                <title>{t('common:leagueDrafts.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:leagueDrafts.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.LeagueDrafts>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:leagueDrafts.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.LeagueDraftsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:leagueDrafts.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <p>{t('common:leagueDrafts.partOne')}</p>
                        </li>
                        <Styled.InfoBoxWrapper>
                            <Styled.InfoBox>
                                <p>
                                    <Trans
                                        i18nKey={t(
                                            'common:leagueDrafts.partOneInformations'
                                        )}
                                    />
                                </p>
                            </Styled.InfoBox>
                        </Styled.InfoBoxWrapper>
                    </Styled.LeagueDraftsList>
                    <Styled.LeagueDraftsList>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:leagueDrafts.recruitmentToLeagueTeamsSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <li>
                            <Styled.LeagueWorkoutsArrowForward />
                            <ul>
                                <p>
                                    <Trans
                                        i18nKey={t(
                                            'common:leagueDrafts.recruitmentToLeagueTeamsPartOne'
                                        )}
                                    />
                                </p>
                                <li>
                                    {t(
                                        'common:leagueDrafts.recruitmentToLeagueTeamsPartOnePointOne'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        'common:leagueDrafts.recruitmentToLeagueTeamsPartOnePointTwo'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        'common:leagueDrafts.recruitmentToLeagueTeamsPartOnePointThree'
                                    )}
                                </li>
                            </ul>
                        </li>
                    </Styled.LeagueDraftsList>
                    <Styled.ButtonWrapper>
                        <SignUpButton />
                        <TimetableButton />
                    </Styled.ButtonWrapper>

                    <Styled.Photos>
                        {photosArray.map(({id, url}) => (
                            <Styled.ContentImage key={id}>
                                <Image src={url} alt={id} />
                            </Styled.ContentImage>
                        ))}
                    </Styled.Photos>
                </Styled.Container>
            </Styled.LeagueDrafts>
        </div>
    );
};

export default LeagueDrafts;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
