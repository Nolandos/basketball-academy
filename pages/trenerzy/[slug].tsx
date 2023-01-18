import {
    fetchTrainer,
    fetchTrainers,
    fetchTrainersSlugs,
} from '@/lib/fetchStrapi';
import React, {FC} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {TrainerType} from '@/utils/commonTypes';
import * as Styled from '@/styles/styledPage/Trainer.styles';
import ReactHtmlParser from 'react-html-parser';
import HtmlBox from '@/components/common/HtmlBox/HtmlBox';
import Image from 'next/image';
import * as CommonStyled from '@/styles/commonStyles';

type TrainerInfoType = {
    trainer: TrainerType;
};
const TrainerInfo: FC<TrainerInfoType> = ({trainer}) => {
    const {t} = useTranslation();
    const {
        firstName,
        surname,
        description,
        clubs,
        positions,
        slug,
        photo: {data},
    } = trainer.attributes;

    return (
        <Styled.TrainerPage>
            <CommonStyled.Container>
                <Styled.TrainerContainer>
                    <Styled.TrainerName>
                        {firstName} {surname}
                    </Styled.TrainerName>
                    <Styled.Positions>
                        {positions?.map((position: string, index: number) =>
                            index === positions.length - 1
                                ? `${position}`
                                : `${position} /`
                        )}
                    </Styled.Positions>
                    <HtmlBox>{description || ''}</HtmlBox>
                    {clubs && clubs.length > 0 && (
                        <Styled.ClubsInfo>
                            {t<string>('trainers:clubs')}
                        </Styled.ClubsInfo>
                    )}
                    <Styled.ClubsList>
                        {clubs?.map((club: string) => (
                            <li key={club}>{club}</li>
                        ))}
                    </Styled.ClubsList>
                </Styled.TrainerContainer>
                <Styled.TrainerContainer>
                    <Styled.TrainerImage>
                        <Image
                            height={300}
                            width={300}
                            src={
                                data
                                    ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${data?.attributes.url}`
                                    : ''
                            }
                            alt={`photo-${slug}`}
                        />
                    </Styled.TrainerImage>
                </Styled.TrainerContainer>
            </CommonStyled.Container>
        </Styled.TrainerPage>
    );
};

export default TrainerInfo;

export async function getStaticPaths() {
    const res = await fetchTrainersSlugs();

    const paths = res?.data?.map((trainer: TrainerType) => ({
        params: {slug: trainer.attributes.slug},
    }));
    return {paths, fallback: false};
}

export async function getStaticProps({
    params: {slug},
    locale,
}: {
    params: {slug: string};
    locale: string;
}) {
    const res = await fetchTrainer(slug);

    return {
        props: {
            trainer: res?.data,
            ...(await serverSideTranslations(locale, [
                'common',
                'trainers',
                'layout',
            ])),
        },
    };
}
