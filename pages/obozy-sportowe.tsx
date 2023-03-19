import {Trans, useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {ReactNode} from 'react';
import * as Styled from '@/styles/styledPage/Camps.styles';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import {
    Attractions,
    ChevronRight,
    Home,
    MedicalInformation,
    People,
    Restaurant,
    Sports,
} from '@mui/icons-material';
import Button from '@/components/common/Buttons/Button/Button';
import {useRouter} from 'next/router';
import Image from 'next/image';
import informationImg from '@/assets/pages/camps/camps-informations.jpg';
import howToSignUp from '@/assets/pages/camps/camps-how-to-sign-up.jpg';
import basketballAcademyCampsLikeImg from '@/assets/pages/camps/camps-basketball-academy-camps-like.jpg';
import summerAndWinterCampsImg from '@/assets/pages/camps/camps-summer-and-winter-base.jpg';

const Camps = () => {
    const {t} = useTranslation();
    const {
        emailBiuro,
        applicationForm,
        gallery: {
            photos: {all: galleryPhotosAllUrl},
        },
        documents,
    } = urls;
    const router = useRouter();

    const advantagesCamps: Array<{
        id: string;
        subtitle: string;
        icon: ReactNode;
    }> = [
        {
            id: 'advantagesCampsFood',
            subtitle: t('common:camps.advantagesCampsFood'),
            icon: <Restaurant />,
        },
        {
            id: 'advantagesCampsSportsHall',
            subtitle: t('common:camps.advantagesCampsSportsHall'),
            icon: <Home />,
        },
        {
            id: 'advantagesCampsSportsCadre',
            subtitle: t('common:camps.advantagesCampsSportsCadre'),
            icon: <People />,
        },
        {
            id: 'advantagesCampsSportsPramedic',
            subtitle: t('common:camps.advantagesCampsSportsPramedic'),
            icon: <MedicalInformation />,
        },
        {
            id: 'advantagesCampsSportsBasketballTraining',
            subtitle: t('common:camps.advantagesCampsSportsBasketballTraining'),
            icon: <Sports />,
        },
        {
            id: 'advantagesCampsSportsAdditionalAttractions',
            subtitle: t(
                'common:camps.advantagesCampsSportsAdditionalAttractions'
            ),
            icon: <Attractions />,
        },
    ];

    return (
        <div>
            <Head>
                <title>{t('common:camps.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:camps.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.Camps>
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:camps.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.siteSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={informationImg}
                                    alt={t('common:camps.siteSubtitle')}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                <Trans i18nKey={t('common:camps.partOne')} />
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.howToSignUpSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                <Trans
                                    i18nKey={t(
                                        'common:camps.howToSignUpPartOne'
                                    )}
                                />{' '}
                                <Styled.CampsLink href={applicationForm}>
                                    {t('common:camps.howToSignUpRegistration')}
                                </Styled.CampsLink>{' '}
                                <Trans
                                    i18nKey={t(
                                        'common:camps.howToSignUpPartTwo'
                                    )}
                                />{' '}
                                <Styled.CampsLink href={`mailto:${emailBiuro}`}>
                                    {emailBiuro}
                                </Styled.CampsLink>
                                <br />
                                <Trans
                                    i18nKey={t(
                                        'common:camps.howToSignUpPartFour'
                                    )}
                                />
                                <Styled.InfoBoxWrapper>
                                    <Styled.InfoBox even small>
                                        {t(
                                            'common:recreationalDayCamps.dayCampInformationAppearsPartThree'
                                        )}
                                    </Styled.InfoBox>
                                </Styled.InfoBoxWrapper>
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={howToSignUp}
                                    alt={t('common:camps.howToSignUpSubtitle')}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even={false}>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t(
                                'common:camps.basketballAcademyCampsLikeSubtitle'
                            )}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.ContentImage>
                                <Image
                                    src={basketballAcademyCampsLikeImg}
                                    alt={t(
                                        'common:camps.basketballAcademyCampsLikeSubtitle'
                                    )}
                                />
                            </Styled.ContentImage>
                            <Styled.SectionDescription even={false}>
                                <Trans
                                    i18nKey={t(
                                        'common:camps.basketballAcademyCampsLikePartOne'
                                    )}
                                />
                            </Styled.SectionDescription>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.Wrapper even>
                    <CommonStyled.Container>
                        <CommonStyled.SectionSubtitle belt={false}>
                            {t('common:camps.summerAndWinterCampsSubtitle')}
                        </CommonStyled.SectionSubtitle>
                        <Styled.SectionContent>
                            <Styled.SectionDescription even>
                                <Styled.CampsList>
                                    <li>
                                        <Styled.CampsPlaceIcon />
                                        <p>
                                            {t(
                                                'common:camps.winterCampsPartOne'
                                            )}
                                        </p>
                                    </li>
                                    <li>
                                        <Styled.CampsPlaceIcon />
                                        <p>
                                            {t(
                                                'common:camps.summerCampsPartOne'
                                            )}
                                        </p>
                                    </li>
                                </Styled.CampsList>
                            </Styled.SectionDescription>
                            <Styled.ContentImage>
                                <Image
                                    src={summerAndWinterCampsImg}
                                    alt={t('common:camps.howToSignUpSubtitle')}
                                />
                            </Styled.ContentImage>
                        </Styled.SectionContent>
                    </CommonStyled.Container>
                </Styled.Wrapper>
                <Styled.ButtonsWrapper>
                    <Button
                        onClickHandler={() => router.push(galleryPhotosAllUrl)}
                        iconEnd={<ChevronRight />}
                    >
                        {t('common:galleryBtn')}
                    </Button>
                    <Button
                        onClickHandler={() => router.push(documents)}
                        iconEnd={<ChevronRight />}
                        variant="OUTLINED"
                    >
                        {t('common:documentsBtn')}
                    </Button>
                </Styled.ButtonsWrapper>
                {/* <Styled.Container> */}
                {/*    <Styled.CampsList> */}
                {/*        <CommonStyled.SectionSubtitle belt={false}> */}
                {/*            {t('common:camps.siteSubtitle')} */}
                {/*        </CommonStyled.SectionSubtitle> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p>{t('common:camps.partOne')}</p> */}
                {/*        </li> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p>{t('common:camps.partTwo')}</p> */}
                {/*        </li> */}
                {/*    </Styled.CampsList> */}
                {/*    <Styled.CampsList> */}
                {/*        <CommonStyled.SectionSubtitle belt={false}> */}
                {/*            {t('common:camps.howToSignUpSubtitle')} */}
                {/*        </CommonStyled.SectionSubtitle> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p> */}
                {/*                {t('common:camps.howToSignUpPartOne')}{' '} */}
                {/*                <Styled.CampsLink href={applicationForm}> */}
                {/*                    {t('common:camps.howToSignUpRegistration')} */}
                {/*                </Styled.CampsLink>{' '} */}
                {/*                {t('common:camps.howToSignUpPartTwo')}{' '} */}
                {/*                <Styled.CampsLink href={`mailto:${emailBiuro}`}> */}
                {/*                    {emailBiuro} */}
                {/*                </Styled.CampsLink> */}
                {/*            </p> */}
                {/*        </li> */}
                {/*    </Styled.CampsList> */}
                {/*    <Styled.CampsList> */}
                {/*        <CommonStyled.SectionSubtitle belt={false}> */}
                {/*            {t( */}
                {/*                'common:camps.basketballAcademyCampsLikeSubtitle' */}
                {/*            )} */}
                {/*        </CommonStyled.SectionSubtitle> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p> */}
                {/*                <Trans */}
                {/*                    i18nKey={t( */}
                {/*                        'common:camps.basketballAcademyCampsLikePartOne' */}
                {/*                    )} */}
                {/*                /> */}
                {/*            </p> */}
                {/*        </li> */}
                {/*    </Styled.CampsList> */}
                {/*    <Styled.CampsList> */}
                {/*        <CommonStyled.SectionSubtitle belt={false}> */}
                {/*            {t('common:camps.summerCampsSubtitle')} */}
                {/*        </CommonStyled.SectionSubtitle> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p> */}
                {/*                <Trans */}
                {/*                    i18nKey={t( */}
                {/*                        'common:camps.summerCampsPartOne' */}
                {/*                    )} */}
                {/*                /> */}
                {/*            </p> */}
                {/*        </li> */}
                {/*    </Styled.CampsList> */}
                {/*    <Styled.CampsList> */}
                {/*        <CommonStyled.SectionSubtitle belt={false}> */}
                {/*            {t('common:camps.winterCampsSubtitle')} */}
                {/*        </CommonStyled.SectionSubtitle> */}
                {/*        <li> */}
                {/*            <Styled.LeagueWorkoutsArrowForward /> */}
                {/*            <p> */}
                {/*                <Trans */}
                {/*                    i18nKey={t( */}
                {/*                        'common:camps.winterCampsPartOne' */}
                {/*                    )} */}
                {/*                /> */}
                {/*            </p> */}
                {/*        </li> */}
                {/*    </Styled.CampsList> */}
                {/*    <Styled.ButtonsWrapper> */}
                {/*        <Button */}
                {/*            onClickHandler={() => */}
                {/*                router.push(galleryPhotosAllUrl) */}
                {/*            } */}
                {/*            iconEnd={<ChevronRight />} */}
                {/*        > */}
                {/*            {t('common:goToGallery')} */}
                {/*        </Button> */}
                {/*    </Styled.ButtonsWrapper> */}
                {/* </Styled.Container> */}
                <Styled.CampBenefitsWrapper>
                    <CommonStyled.Container>
                        <Styled.CampBenefitsContent>
                            {advantagesCamps.map(({id, subtitle, icon}) => (
                                <Styled.CampBenefitsTile key={id}>
                                    {icon}
                                    <p>{subtitle}</p>
                                </Styled.CampBenefitsTile>
                            ))}
                        </Styled.CampBenefitsContent>
                    </CommonStyled.Container>
                </Styled.CampBenefitsWrapper>
            </Styled.Camps>
        </div>
    );
};

export default Camps;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
