import React, {useEffect, useState} from 'react';
import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import * as Styled from '@/styles/styledPage/Movies.styles';
import * as CommonStyled from '@/styles/commonStyles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import Loader from '@/components/common/Loader/Loader';
import {fetchData} from '@/utils/utils';
import {FetchDataMethods} from '@/utils/commonEnums';

const Movies = () => {
    const {t} = useTranslation();
    const {GET} = FetchDataMethods;
    const [loading, setLoading] = useState(true);
    const [youtubeFilmsList, setYoutubeFilmsList] = useState<
        {id: number; attributes: {title: string; url: string}}[] | []
    >([]);
    const fetchYoutubeFilms = async () => {
        try {
            const youtubeFilmsData = await fetchData(
                `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/movies`,
                GET
            );

            setYoutubeFilmsList(youtubeFilmsData?.data || []);
        } catch (err) {
            /* empty */
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchYoutubeFilms();
    }, []);

    return (
        <div>
            <Head>
                <title>{t('common:movies.siteTitle')}</title>
                <meta name="description" content={t('movies')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.MoviesPage>
                <CommonStyled.HeroImage image={heroBackgroundImg}>
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:movies.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.MoviesContainer>
                    <CommonStyled.Container>
                        <Styled.YoutubeFilmsList>
                            {loading ? (
                                <Loader />
                            ) : (
                                [...youtubeFilmsList].map(
                                    ({id, attributes: {title, url}}) => (
                                        <Styled.YoutubeFilmsListItem>
                                            <Styled.YoutubeFilmsListItemIframe
                                                key={id}
                                                title={title}
                                                allowFullScreen
                                                src={url}
                                            />
                                            <h2>{title}</h2>
                                        </Styled.YoutubeFilmsListItem>
                                    )
                                )
                            )}
                        </Styled.YoutubeFilmsList>
                    </CommonStyled.Container>
                </Styled.MoviesContainer>
            </Styled.MoviesPage>
        </div>
    );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});

export default Movies;
