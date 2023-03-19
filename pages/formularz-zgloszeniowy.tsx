import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/ApplicationForm.styles';
import SingUpForm from '@/components/common/SingUpForm/SingUpForm';

const ApplicationForm = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('common:applicationForms.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:applicationForms.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.ApplicationForm>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:applicationForms.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <CommonStyled.SectionSubtitle belt>
                    {t<string>('index:signUpSection.title')}
                </CommonStyled.SectionSubtitle>
                <CommonStyled.Container>
                    <SingUpForm />
                </CommonStyled.Container>
            </Styled.ApplicationForm>
        </div>
    );
};

export default ApplicationForm;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            'common',
            'index',
            'layout',
        ])),
    },
});
