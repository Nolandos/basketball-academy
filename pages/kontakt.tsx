import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/Contact.styles';

const Kontakt = () => {
    const {t} = useTranslation();
    const {emailBiuro, emailBabij} = urls;

    return (
        <div>
            <Head>
                <title>{t('common:contact.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:contact.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.Contact>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:contact.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    <Styled.ContactList>
                        <Styled.SectionSubtitle>
                            {t('common:contact.contact1Title')}
                        </Styled.SectionSubtitle>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact1PartOne'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact1PartTwo'
                                    )}
                                />
                            </p>
                        </li>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact1PartThree'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.ContactList>
                    <Styled.ContactList>
                        <Styled.SectionSubtitle>
                            {t('common:contact.contact2Title')}
                        </Styled.SectionSubtitle>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact2PartOne'
                                    )}
                                />
                                <CommonStyled.InternalRegulationsLink
                                    href={`mailto:${emailBiuro}`}
                                >
                                    {emailBiuro}
                                </CommonStyled.InternalRegulationsLink>
                            </p>
                        </li>
                    </Styled.ContactList>
                    <Styled.ContactList>
                        <Styled.SectionSubtitle>
                            {t('common:contact.contact3Title')}
                        </Styled.SectionSubtitle>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact3PartOne'
                                    )}
                                />
                                <CommonStyled.InternalRegulationsLink
                                    href={`mailto:${emailBabij}`}
                                >
                                    {emailBabij}
                                </CommonStyled.InternalRegulationsLink>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact3PartTwo'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.ContactList>
                    <Styled.ContactList>
                        <Styled.SectionSubtitle>
                            {t('common:contact.contact4Title')}
                        </Styled.SectionSubtitle>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact4PartOne'
                                    )}
                                />
                                <CommonStyled.InternalRegulationsLink
                                    href={`mailto:${emailBiuro}`}
                                >
                                    {emailBiuro}
                                </CommonStyled.InternalRegulationsLink>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Trans
                                    i18nKey={t(
                                        'common:contact.contact4PartTwo'
                                    )}
                                />
                            </p>
                        </li>
                    </Styled.ContactList>
                </Styled.Container>
            </Styled.Contact>
        </div>
    );
};

export default Kontakt;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
