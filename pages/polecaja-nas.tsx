import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';

import * as Styled from '@/styles/styledPage/RecommendUs.styles';
import {fetchRecommendUs} from '@/lib/fetchStrapi';
import {NextPage} from 'next';
import {RecommendUsTypes} from '@/utils/commonTypes';
import Image from 'next/image';
import mainTargetImg from '@/assets/pages/about-us-main-target.jpg';
import HtmlBox from '@/components/common/HtmlBox/HtmlBox';

type RecommendUsProps = {
    recommendUs: RecommendUsTypes[];
};
const RecommendUs: NextPage<RecommendUsProps> = ({recommendUs}) => {
    const {t} = useTranslation();

    return (
        <div>
            <Head>
                <title>{t('common:recommendUs.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:recommendUs.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.RecommendUs>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:recommendUs.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                {recommendUs.map(
                    (
                        {
                            attributes: {
                                name,
                                description,
                                photo: {data},
                            },
                        },
                        index
                    ) => (
                        <Styled.Wrapper key={name} even={index % 2 === 0}>
                            <CommonStyled.Container>
                                <CommonStyled.SectionSubtitle belt={false}>
                                    {name}
                                </CommonStyled.SectionSubtitle>
                                <Styled.SectionContent>
                                    {index % 2 !== 0 && (
                                        <Styled.ContentImage
                                            even={index % 2 === 0}
                                        >
                                            <Styled.ImageWrapper>
                                                <Image
                                                    height={300}
                                                    width={500}
                                                    src={
                                                        data
                                                            ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${data?.attributes.url}`
                                                            : ''
                                                    }
                                                    alt="test"
                                                />
                                            </Styled.ImageWrapper>
                                        </Styled.ContentImage>
                                    )}
                                    <Styled.SectionDescription
                                        even={index % 2 === 0}
                                    >
                                        <HtmlBox>{description}</HtmlBox>
                                    </Styled.SectionDescription>
                                    {index % 2 === 0 && (
                                        <Styled.ContentImage
                                            even={index % 2 === 0}
                                        >
                                            <Styled.ImageWrapper>
                                                <Image
                                                    height={300}
                                                    width={300}
                                                    src={
                                                        data
                                                            ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${data?.attributes.url}`
                                                            : ''
                                                    }
                                                    alt="test"
                                                />
                                            </Styled.ImageWrapper>
                                        </Styled.ContentImage>
                                    )}
                                </Styled.SectionContent>
                            </CommonStyled.Container>
                        </Styled.Wrapper>
                    )
                )}
            </Styled.RecommendUs>
        </div>
    );
};

export default RecommendUs;

export async function getServerSideProps({locale}: {locale: string}) {
    const {data, errno} = await fetchRecommendUs();

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            recommendUs: data,
            ...(await serverSideTranslations(locale, ['common', 'layout'])),
        },
    };
}
