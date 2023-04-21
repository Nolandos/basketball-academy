import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

import {fetchKRSNumber} from '@/lib/fetchStrapi';
import {NextPage} from 'next';
import * as Styled from '@/styles/styledPage/SupportUs.styles';
import {PercentContainer} from '@/styles/styledPage/SupportUs.styles';
import constants from '@/utils/constants';

type SupportUsProps = {
    KRSNumber: string;
};
const SupportUs: NextPage<SupportUsProps> = ({KRSNumber}) => {
    const {t} = useTranslation();
    console.log('KRSNumber', KRSNumber);
    const {bankAccountNumber} = constants;
    return (
        <div>
            <Head>
                <title>{t('common:supportUs.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:supportUs.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.SupportUs>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:supportUs.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.PercentContainer>
                    <Styled.Percent>
                        <Styled.PercentValue>1,5</Styled.PercentValue>
                        <Styled.PercentSign>%</Styled.PercentSign>
                    </Styled.Percent>
                </Styled.PercentContainer>
                <CommonStyled.Container>
                    <Styled.Title>
                        {t('common:supportUs.siteTitle')}
                    </Styled.Title>
                    <Styled.Content>
                        <p>
                            <Trans i18nKey={t('common:supportUs.partOne')} />
                            <b>1,5 %</b>
                        </p>
                        <p>
                            <Trans i18nKey={t('common:supportUs.partTwo')} />
                            {KRSNumber && KRSNumber.trim() !== '' ? (
                                <b>{KRSNumber}</b>
                            ) : (
                                <b>
                                    <i>
                                        <Trans
                                            i18nKey={t(
                                                'common:supportUs.partThree'
                                            )}
                                        />
                                    </i>
                                </b>
                            )}
                            <br />
                            <Trans i18nKey={t('common:supportUs.partFour')} />
                        </p>
                        <p>
                            <Trans i18nKey={t('common:supportUs.partFive')} />
                            <br />
                            <b>{bankAccountNumber}.</b>
                        </p>
                        <p>
                            <Trans i18nKey={t('common:supportUs.partSix')} />
                        </p>
                        <Styled.ThanksInfo>
                            <Trans i18nKey={t('common:supportUs.partSeven')} />
                        </Styled.ThanksInfo>
                    </Styled.Content>
                </CommonStyled.Container>
            </Styled.SupportUs>
        </div>
    );
};

export default SupportUs;

export async function getServerSideProps({locale}: {locale: string}) {
    const {data, errno} = await fetchKRSNumber();

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            KRSNumber: data[0]?.attributes?.KRS || '',
            ...(await serverSideTranslations(locale, ['common', 'layout'])),
        },
    };
}
