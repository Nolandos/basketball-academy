import React from 'react';
import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import wideStaffImg from '@/assets/pages/offer-for-schools-and-kindergartens/offer-for-schools-and-kindergartens-three.jpg';
import noClassesImg from '@/assets/pages/offer-for-schools-and-kindergartens/offer-for-schools-and-kindergartens-one.jpg';
import whatDoesTheSchoolGainImg from '@/assets/pages/offer-for-schools-and-kindergartens/offer-for-schools-and-kindergartens-two.jpg';
import Image from 'next/image';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/OfferForSchoolsAndKindergartens.styles';

import urls from '@/utils/urls';

const OfferForSchoolsAndKindergartens = () => {
    const {t} = useTranslation();
    const {emailBiuro} = urls;

    return (
        <div>
            <Head>
                <title>
                    {t('common:offerForSchoolsAndKindergartens.siteTitle')}
                </title>
                <meta
                    name="description"
                    content={t('offerForSchoolsAndKindergartens')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.OfferForSchoolsAndKindergartensPage>
                <CommonStyled.HeroImage image={heroBackgroundImg}>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t(
                                'common:offerForSchoolsAndKindergartens.siteTitle'
                            )}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:offerForSchoolsAndKindergartens.noClassesSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={noClassesImg}
                                    alt={t(
                                        'common:offerForSchoolsAndKindergartens.noClassesSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                <Trans
                                    i18nKey={t(
                                        'common:offerForSchoolsAndKindergartens.noClassesPartOne'
                                    )}
                                />
                                <br />
                                <br />
                                <Trans
                                    i18nKey={t(
                                        'common:offerForSchoolsAndKindergartens.noClassesPartTwo'
                                    )}
                                />
                                <br />
                                <br />
                                <Trans
                                    i18nKey={t(
                                        'common:offerForSchoolsAndKindergartens.noClassesPartThree'
                                    )}
                                />
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.OfferForSchoolsAndKindergartensList>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartOne'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartTwo'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartThree'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartFour'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartFive'
                                        )}
                                    </p>
                                </li>
                                <li>
                                    <Styled.LeagueWorkoutsArrowForward />
                                    <p>
                                        {t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainPartSix'
                                        )}
                                    </p>
                                </li>
                            </Styled.OfferForSchoolsAndKindergartensList>

                            <Styled.ContentImage>
                                <Image
                                    src={whatDoesTheSchoolGainImg}
                                    alt={t(
                                        'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                        <Styled.InfoBoxWrapper>
                            <Styled.InfoBox>
                                <p>
                                    <Trans
                                        i18nKey={t(
                                            'common:offerForSchoolsAndKindergartens.whatDoesTheSchoolGainInfoBox'
                                        )}
                                    />
                                    <Styled.OfferForSchoolsAndKindergartensLink
                                        href={`mailto:${emailBiuro}`}
                                    >
                                        {emailBiuro}
                                    </Styled.OfferForSchoolsAndKindergartensLink>
                                </p>
                            </Styled.InfoBox>
                        </Styled.InfoBoxWrapper>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:offerForSchoolsAndKindergartens.wideStaffSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={wideStaffImg}
                                    alt={t(
                                        'common:offerForSchoolsAndKindergartens.wideStaffSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                {t(
                                    'common:offerForSchoolsAndKindergartens.wideStaffPartOne'
                                )}
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
            </Styled.OfferForSchoolsAndKindergartensPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default OfferForSchoolsAndKindergartens;
