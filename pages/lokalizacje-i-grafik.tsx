import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import * as CommonStyled from '@/styles/commonStyles';
import urls from '@/utils/urls';
import heroBackgroundImg from '@/assets/index/index-main-hero.jpg';
import * as Styled from '@/styles/styledPage/Timetable.styles';
import Loader from '@/components/common/Loader/Loader';
import {fetchTimetable} from '@/lib/fetchStrapi';
import {TimetableDataTypes} from '@/utils/commonTypes';
import {DaysOfWeekEnum} from '@/utils/commonEnums';
import TimetableDetailsModal from '@/components/timetable/TimetableDetailsModal/TimetableDetailsModal';
import {formatTime} from '@/utils/utils';
import {Info} from '@mui/icons-material';

const Timetable = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(true);
    const [timetableData, setTimetableData] = useState<
        TimetableDataTypes[] | []
    >([]);
    const [hoursValues, setHoursValues] = useState<string[] | []>([]);
    const {openingOfANewLocation} = urls;
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const {MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY} = DaysOfWeekEnum;

    const daysOfWeekPl: DaysOfWeekEnum[] = [
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
    ];

    const [currentTraining, setCurrentTraining] = useState<{
        open: boolean;
        trainingDetails: null | {
            title: string;
            endDate: string;
            startDate: string;
            annotation: string;
            coach: string;
            ageGroup: string;
            place: string;
            district: string;
        };
    }>({
        open: false,
        trainingDetails: null,
    });

    const handleFetchTimetable = async () => {
        let getResTimes: string[] = [];
        const res = await fetchTimetable();
        const data = res?.data?.map(
            ({attributes}: {attributes: TimetableDataTypes}) => attributes
        );

        data?.forEach(
            ({startDate, endDate}: {startDate: string; endDate: string}) => {
                getResTimes = [...getResTimes, startDate, endDate];
            }
        );

        const uniqueHours = [...new Set(getResTimes)].map(
            (time) => `${time.split(':')[0]}:${time.split(':')[1]}`
        );
        const generatedHoursValues: string[] = [...Array(24).keys()].map(
            (i) => `${i}:00`
        );

        setHoursValues(
            generatedHoursValues.filter((element) =>
                uniqueHours.includes(element)
            )
        );
        setTimetableData(data || []);

        console.log('HEH_DATA', data);
        setLoading(false);
    };

    const handleCheckIsMobile: () => void = () => {
        if (window.innerWidth > 1080) setIsMobile(false);
        else setIsMobile(true);
    };

    useEffect(() => {
        handleCheckIsMobile();
        window.addEventListener('resize', handleCheckIsMobile);
        handleFetchTimetable();

        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, []);

    return (
        <div>
            <Head>
                <title>{t('common:timetable.siteTitle')}</title>
                <meta
                    name="description"
                    content={t('common:timetable.siteTitle')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styled.Timetable>
                {currentTraining?.trainingDetails && (
                    <TimetableDetailsModal
                        isOpen={currentTraining?.open}
                        trainingDetails={currentTraining?.trainingDetails}
                        toggleModalHandler={() =>
                            setCurrentTraining({
                                open: false,
                                trainingDetails: null,
                            })
                        }
                        t={t}
                    />
                )}
                <CommonStyled.HeroImage
                    image={heroBackgroundImg}
                    description={false}
                >
                    <CommonStyled.HeroContent>
                        <CommonStyled.Title>
                            {t('common:timetable.siteTitle')}
                        </CommonStyled.Title>
                    </CommonStyled.HeroContent>
                </CommonStyled.HeroImage>
                <Styled.Container>
                    {!loading && (
                        <>
                            <Styled.MoreInfoText>
                                <Info />
                                <p>{t('common:timetable.moreInfoText')}</p>
                            </Styled.MoreInfoText>
                            <Styled.TimetableContainer>
                                {!isMobile && (
                                    <Styled.TimetableDays>
                                        <Styled.DaysLabels>
                                            {daysOfWeekPl.map((day) => (
                                                <Styled.DaysLabel key={day}>
                                                    {day}
                                                </Styled.DaysLabel>
                                            ))}
                                        </Styled.DaysLabels>
                                        <Styled.DaysContent>
                                            {daysOfWeekPl.map((day) => (
                                                <Styled.ContentPerDay key={day}>
                                                    {[...timetableData]
                                                        .filter(
                                                            ({dayOfTheWeek}) =>
                                                                dayOfTheWeek.includes(
                                                                    day as never
                                                                )
                                                        )
                                                        ?.map(
                                                            ({
                                                                district,
                                                                place,
                                                                ageGroup,
                                                                coach,
                                                                annotation,
                                                                startDate,
                                                                endDate,
                                                                title,
                                                                color,
                                                                backgroundColor,
                                                            }) => (
                                                                <Styled.CardTrainingPerDay
                                                                    backgroundColor={
                                                                        backgroundColor
                                                                    }
                                                                    textColor={
                                                                        color
                                                                    }
                                                                    onClick={() =>
                                                                        setCurrentTraining(
                                                                            {
                                                                                open: true,
                                                                                trainingDetails:
                                                                                    {
                                                                                        title,
                                                                                        endDate,
                                                                                        startDate,
                                                                                        annotation,
                                                                                        coach,
                                                                                        ageGroup,
                                                                                        place,
                                                                                        district,
                                                                                    },
                                                                            }
                                                                        )
                                                                    }
                                                                    timeDuration={`${formatTime(
                                                                        startDate
                                                                    )} - ${formatTime(
                                                                        endDate
                                                                    )}`}
                                                                >
                                                                    {title}
                                                                </Styled.CardTrainingPerDay>
                                                            )
                                                        )}
                                                </Styled.ContentPerDay>
                                            ))}
                                        </Styled.DaysContent>
                                    </Styled.TimetableDays>
                                )}
                                {isMobile && (
                                    <Styled.AccordionWrapper>
                                        <Styled.SponsorshipAccordion
                                            items={daysOfWeekPl.map((day) => ({
                                                id: day,
                                                header: day,
                                                content: (
                                                    <Styled.MobileContentPerDay>
                                                        {[...timetableData]
                                                            .filter(
                                                                ({
                                                                    dayOfTheWeek,
                                                                }) =>
                                                                    dayOfTheWeek.includes(
                                                                        day as never
                                                                    )
                                                            )
                                                            ?.map(
                                                                ({
                                                                    district,
                                                                    place,
                                                                    ageGroup,
                                                                    coach,
                                                                    annotation,
                                                                    startDate,
                                                                    endDate,
                                                                    title,
                                                                }) => (
                                                                    <Styled.MobileCardTrainingPerDay>
                                                                        <Styled.MobileCardTimeLabel>
                                                                            {`${formatTime(
                                                                                startDate
                                                                            )} - ${formatTime(
                                                                                endDate
                                                                            )}`}
                                                                        </Styled.MobileCardTimeLabel>
                                                                        {title}
                                                                        <Styled.MobileMoreButton
                                                                            onClickHandler={() =>
                                                                                setCurrentTraining(
                                                                                    {
                                                                                        open: true,
                                                                                        trainingDetails:
                                                                                            {
                                                                                                title,
                                                                                                endDate,
                                                                                                startDate,
                                                                                                annotation,
                                                                                                coach,
                                                                                                ageGroup,
                                                                                                place,
                                                                                                district,
                                                                                            },
                                                                                    }
                                                                                )
                                                                            }
                                                                        >
                                                                            {t(
                                                                                'common:more'
                                                                            )}
                                                                        </Styled.MobileMoreButton>
                                                                    </Styled.MobileCardTrainingPerDay>
                                                                )
                                                            )}
                                                    </Styled.MobileContentPerDay>
                                                ),
                                            }))}
                                        />
                                    </Styled.AccordionWrapper>
                                )}
                            </Styled.TimetableContainer>
                            <Styled.OtherInfoWrapper>
                                <CommonStyled.SectionSubtitle belt={false}>
                                    {t('common:timetable.newLocationSubtitle')}
                                </CommonStyled.SectionSubtitle>
                                <Styled.OtherInfo>
                                    {t('common:timetable.newLocationContent')}{' '}
                                    <CommonStyled.InternalRegulationsLink
                                        href={openingOfANewLocation}
                                    >
                                        {t('common:timetable.newLocationLink')}
                                    </CommonStyled.InternalRegulationsLink>
                                </Styled.OtherInfo>
                            </Styled.OtherInfoWrapper>
                        </>
                    )}
                    {loading && <Loader />}
                </Styled.Container>
            </Styled.Timetable>
        </div>
    );
};
export default Timetable;

export const getStaticProps = async ({locale}: {locale: string}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'layout'])),
    },
});
