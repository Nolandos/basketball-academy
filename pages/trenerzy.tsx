import React, {FC} from 'react';
import Head from 'next/head';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as Styled from '@/styles/styledPage/Trainers.styles';
import * as CommonStyled from '@/styles/commonStyles';
import heroBackgroundImg from '@/assets/pages/about-us-hero.jpg';
import Image from 'next/image';
import {fetchTrainers} from '@/lib/fetchStrapi';
import urls from '@/utils/urls';
import Link from 'next/link';
import {reverse} from 'named-urls';
import {TrainerType} from '@/utils/commonTypes';

type TrainersProps = {
    trainers: Array<TrainerType>;
};

const Trainers: FC<TrainersProps> = ({trainers}) => {
    const {t} = useTranslation();
    const {
        trainers: {detail: trainerDetail},
    } = urls;

    return (
        <div>
            <Head>
                <title>{t('trainers:title')}</title>
                <meta name="description" content={t('trainers:title')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.TrainersPage>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('trainers:title')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <CommonStyled.Container>
                    <Styled.TrainersTiles>
                        {trainers.map(
                            ({
                                id,
                                attributes: {
                                    firstName,
                                    surname,
                                    slug,
                                    photo: {data},
                                },
                            }) => (
                                <Styled.TrainerTile key={id}>
                                    <Link
                                        href={reverse(trainerDetail.show, {
                                            slug: slug || '',
                                        })}
                                    >
                                        <Styled.TilePhotoWrapper
                                            text={`${t<string>(
                                                'common:more'
                                            )}...`}
                                        >
                                            <Image
                                                height={250}
                                                width={250}
                                                src={
                                                    data
                                                        ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${data?.attributes.url}`
                                                        : ''
                                                }
                                                alt={`photo-${id}`}
                                            />
                                        </Styled.TilePhotoWrapper>
                                    </Link>
                                    <Styled.TrainerName>
                                        {firstName} {surname}
                                    </Styled.TrainerName>
                                </Styled.TrainerTile>
                            )
                        )}
                    </Styled.TrainersTiles>
                </CommonStyled.Container>
            </Styled.TrainersPage>
        </div>
    );
};

export async function getServerSideProps({
    locale,
}: {
    locale: string;
    query: {page: string; pageSize: string};
}) {
    const {data, errno} = await fetchTrainers();

    if (errno) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            trainers: data,
            ...(await serverSideTranslations(locale, [
                'common',
                'trainers',
                'layout',
            ])),
        },
    };
}

export default Trainers;
