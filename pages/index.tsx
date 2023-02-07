import React, {useContext} from 'react';
import Head from 'next/head';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import PartnersBar from '@/components/index/Bars/PartnersBar/PartnersBar';
import * as CommonStyled from '@/styles/commonStyles';
import * as Styled from '@/styles/styledPage/IndexPage';
import {useTranslation} from 'next-i18next';
import RecommendUsBar from '@/components/index/Bars/RecommendUsBar/RecommendUsBar';
import mainHeroBackground from '@/assets/index/index-main-hero.jpg';
import mainHeroLogo from '@/assets/index/index-main-hero-logo.png';
import Image from 'next/image';
import {
    ChevronRight,
    EventAvailable,
    Groups,
    Room,
    Sports,
} from '@mui/icons-material';
import {useRouter} from 'next/router';
import urls from '@/utils/urls';
import Button from '@/components/common/Buttons/Button/Button';
import {AppContext} from '@/context/AppContext';
import SingleNewsTile from '@/components/common/SingleNewsTile/SingleNewsTile';
import Loader from '@/components/common/Loader/Loader';
import SingUpForm from '@/components/common/SingUpForm/SingUpForm';
import Targets from '@/components/index/Targets/Targets';

const Home = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const {
        app: {
            lastNews: {loading: lastNewsLoading, data: lastNewsData},
        },
    } = useContext(AppContext);
    const {
        news: {
            all: newsAll,
            detail: {show: newsDetailShow},
        },
        applicationForm,
    } = urls;

    return (
        <div>
            <Head>
                <title>{t<string>('common:title')}</title>
                <meta name="description" content={t<string>('common:title')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.IndexPage>
                <Styled.MainHero>
                    <Styled.MainHeroImage
                        backgroundImage={mainHeroBackground?.src || ''}
                    />
                    <Styled.MainHeroContent>
                        <Image
                            src={mainHeroLogo}
                            width={330}
                            height={330}
                            alt="index-main-hero-logo"
                            className="main-hero-logo"
                        />
                        <Styled.ButtonWrapper>
                            <Button
                                variant="CONTAINED"
                                iconEnd={<ChevronRight />}
                                onClickHandler={() => router.push(newsAll)}
                            >
                                {t('common:news')}
                            </Button>
                            <Styled.NewsButton
                                variant="OUTLINED"
                                iconEnd={<ChevronRight />}
                                onClickHandler={() =>
                                    router.push(applicationForm)
                                }
                            >
                                {t<string>('common:signUp')}
                            </Styled.NewsButton>
                        </Styled.ButtonWrapper>
                    </Styled.MainHeroContent>
                </Styled.MainHero>
                <Styled.LastNewsSection>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('common:news')}
                    </CommonStyled.SectionSubtitle>
                    {lastNewsLoading ? (
                        <Loader />
                    ) : (
                        <Styled.LastNewsList>
                            {lastNewsData?.map(
                                ({
                                    attributes: {
                                        mainPhoto,
                                        slug,
                                        title,
                                        description,
                                    },
                                }) => (
                                    <li key={slug}>
                                        <SingleNewsTile
                                            mainPhoto={mainPhoto}
                                            slug={slug}
                                            title={title}
                                            description={description}
                                            url={newsDetailShow}
                                            t={t}
                                        />
                                    </li>
                                )
                            )}
                        </Styled.LastNewsList>
                    )}
                </Styled.LastNewsSection>
                <Styled.TargetsSection>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('index:targets.title')}
                    </CommonStyled.SectionSubtitle>
                    <Targets />
                </Styled.TargetsSection>
                <Styled.SignUpSection>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('index:signUpSection.title')}
                    </CommonStyled.SectionSubtitle>
                    <CommonStyled.Container>
                        <SingUpForm />
                    </CommonStyled.Container>
                </Styled.SignUpSection>
                <Styled.NumbersSection>
                    <CommonStyled.SectionSubtitle belt>
                        Akademia w liczbach {/* TODO */}
                    </CommonStyled.SectionSubtitle>
                    <CommonStyled.Container>
                        <Styled.NumberContainer>
                            <Groups />
                            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                            <h3 />
                            <p>Członków</p>
                        </Styled.NumberContainer>
                        <Styled.NumberContainer>
                            <Room />
                            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                            <h3 />
                            <p>Placówki</p>
                        </Styled.NumberContainer>
                        <Styled.NumberContainer>
                            <EventAvailable />
                            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                            <h3 />
                            <p>Lat na rynku</p>
                        </Styled.NumberContainer>
                        <Styled.NumberContainer>
                            <Sports />
                            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                            <h3 />
                            <p>Trenerów</p>
                        </Styled.NumberContainer>
                    </CommonStyled.Container>
                </Styled.NumbersSection>
                <Styled.RecommendUsSection>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('index:recommendUsSection.title')}
                    </CommonStyled.SectionSubtitle>
                    <RecommendUsBar />
                </Styled.RecommendUsSection>
                <Styled.PartnersSection>
                    <CommonStyled.SectionSubtitle belt>
                        {t<string>('index:partnersSection.title')}
                    </CommonStyled.SectionSubtitle>
                    <PartnersBar />
                </Styled.PartnersSection>
            </Styled.IndexPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            'index',
            'common',
            'layout',
        ])),
    },
});

export default Home;
