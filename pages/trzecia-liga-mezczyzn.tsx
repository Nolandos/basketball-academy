import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import * as Styled from '@/styles/styledPage/ThirdMenLeague.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import Image from 'next/image';
import thirdMenLeagueDesc from '@/assets/index/index-main-hero-logo.png';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import ThirdMenLeagueScheduler from '@/components/ThirdMenLeagueScheduler/ThirdMenLeagueScheduler';

const ThirdMenLeague = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('common:thirdMenLeague.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:thirdMenLeague.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.ThirdMenLeague>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <Styled.Title>
                            {t('common:thirdMenLeague.siteTitle')}
                        </Styled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.GeneralInfo>
                    <Styled.GeneralInfoContainer>
                        <Styled.GeneralInfoTexts>
                            <Styled.GeneralInfoText>
                                <Trans i18nKey="common:thirdMenLeague.generalInfoPartOne" />
                            </Styled.GeneralInfoText>
                            <Styled.GeneralInfoText>
                                {t('common:thirdMenLeague.generalInfoPartTwo')}
                            </Styled.GeneralInfoText>
                        </Styled.GeneralInfoTexts>
                        <Styled.ImageWrapper>
                            <Image
                                src={thirdMenLeagueDesc}
                                alt={t('common:thirdMenLeague.siteTitle')}
                            />
                        </Styled.ImageWrapper>
                    </Styled.GeneralInfoContainer>
                </Styled.GeneralInfo>
                <Styled.ThirdMenLeagueScheduler>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('common:thirdMenLeague.schedulerSubtitle')}
                    </CommonStyled.SectionSubtitle>
                    <ThirdMenLeagueScheduler />
                </Styled.ThirdMenLeagueScheduler>
            </Styled.ThirdMenLeague>
        </div>
    );
};

export default ThirdMenLeague;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
