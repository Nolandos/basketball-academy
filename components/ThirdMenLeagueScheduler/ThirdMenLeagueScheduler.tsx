import React, {useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {
    fetchFindClosestMatch,
    fetchThirdLeagueTimetable,
} from '@/lib/fetchStrapi';
import {
    ExtendThirdMenLeagueDataTypes,
    ThirdMenLeagueDataTypes,
} from '@/utils/commonTypes';
import {
    formatDateWithDayShortcut,
    groupMatchesByMonth,
    isEmptyObject,
} from '@/utils/utils';
import {Shield} from '@mui/icons-material';
import Image from 'next/image';
import * as Styled from './ThirdMenLeagueScheduler.styles';

const ThirdMenLeagueScheduler = () => {
    const {t} = useTranslation();
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 9999,
        total: 0,
    });

    const [nextMatch, setNextMatch] =
        useState<ExtendThirdMenLeagueDataTypes | null>(null);

    const [timetableData, setTimetableData] = useState<{
        [key: string]: ExtendThirdMenLeagueDataTypes[];
    } | null>(null);

    const handleGetTimetable = async (
        currentPage: number,
        currentPageSize: number
    ) => {
        const resNextMatch = await fetchFindClosestMatch();
        const res = await fetchThirdLeagueTimetable(
            currentPage,
            currentPageSize
        );

        const data: ExtendThirdMenLeagueDataTypes[] | [] = res?.data?.map(
            ({attributes}: {attributes: ThirdMenLeagueDataTypes}) => ({
                ...attributes,
                guests: {
                    name: attributes?.guests?.data?.attributes?.teamName,
                    logo: attributes?.guests?.data?.attributes?.teamLogo?.data
                        ?.attributes?.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${attributes?.guests?.data?.attributes?.teamLogo?.data?.attributes?.url}`
                        : null,
                },
                hosts: {
                    name: attributes?.hosts?.data?.attributes?.teamName,
                    logo: attributes?.hosts?.data?.attributes?.teamLogo?.data
                        ?.attributes?.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${attributes?.hosts?.data?.attributes?.teamLogo?.data?.attributes?.url}`
                        : null,
                },
            })
        );

        if (resNextMatch?.data) {
            const convertLastMatch = {
                ...resNextMatch?.data,
                guests: {
                    name: resNextMatch?.data?.guests?.teamName,
                    logo: resNextMatch?.data?.guests?.teamLogo?.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${resNextMatch?.data?.guests?.teamLogo?.url}`
                        : null,
                },
                hosts: {
                    name: resNextMatch?.data?.hosts?.teamName,
                    logo: resNextMatch?.data?.hosts?.teamLogo?.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${resNextMatch?.data?.hosts?.teamLogo?.url}`
                        : null,
                },
            };

            setNextMatch(convertLastMatch);
        }

        setPagination({
            ...pagination,
            page: res?.meta?.pagination?.page || 1,
            pageSize: res?.meta?.pagination.pageSize || 10,
            total: res?.meta?.pagination.total || 0,
        });

        const dataByMonth = groupMatchesByMonth(data);

        if (timetableData && isEmptyObject(timetableData))
            setTimetableData(null);
        else setTimetableData(dataByMonth);
    };

    useEffect(() => {
        const {page, pageSize} = pagination;
        handleGetTimetable(page, pageSize);
    }, []);

    return (
        <Styled.ThirdMenLeagueScheduler>
            {!timetableData && (
                <Styled.NoTimetableData>
                    {t('common:thirdMenLeague.noTimetableData')}
                </Styled.NoTimetableData>
            )}
            {timetableData && (
                <Styled.NextMatchWrapper>
                    {nextMatch && (
                        <>
                            <Styled.NextTitle>
                                {t('common:thirdMenLeague.nextMatch')}
                            </Styled.NextTitle>
                            <Styled.NextMatch>
                                <Styled.NextMatchDate>
                                    {formatDateWithDayShortcut(nextMatch.date)}{' '}
                                    {nextMatch.time}
                                </Styled.NextMatchDate>
                                <Styled.NextMatchPlace>
                                    {nextMatch.place}
                                </Styled.NextMatchPlace>
                                <Styled.NextMatchTeams>
                                    <Styled.Team>
                                        <Styled.TeamName>
                                            {nextMatch.hosts?.logo ? (
                                                <Image
                                                    width={70}
                                                    height={70}
                                                    src={nextMatch.hosts?.logo}
                                                    alt={nextMatch.hosts?.name}
                                                />
                                            ) : (
                                                <Shield />
                                            )}
                                            {nextMatch.hosts?.name}
                                        </Styled.TeamName>
                                    </Styled.Team>
                                    <Styled.ScoreWrapper>
                                        <Styled.Score nextMatchScore>
                                            {nextMatch.hostsPoints || '?'}
                                        </Styled.Score>
                                        <Styled.Score nextMatchScore>
                                            {nextMatch.guestsPoints || '?'}
                                        </Styled.Score>
                                    </Styled.ScoreWrapper>
                                    <Styled.Team>
                                        <Styled.TeamName>
                                            {nextMatch.guests?.logo ? (
                                                <Image
                                                    width={70}
                                                    height={70}
                                                    src={nextMatch.guests?.logo}
                                                    alt={nextMatch.guests?.name}
                                                />
                                            ) : (
                                                <Shield />
                                            )}
                                            {nextMatch.guests?.name}
                                        </Styled.TeamName>
                                    </Styled.Team>
                                </Styled.NextMatchTeams>
                            </Styled.NextMatch>
                        </>
                    )}
                    <Styled.MatchesList>
                        {timetableData &&
                            Object.keys(timetableData).map((key) => (
                                <Styled.MatchesListItem>
                                    <Styled.MatchesListItemMonth>
                                        <span>{key}</span>
                                    </Styled.MatchesListItemMonth>
                                    {timetableData[key].map(
                                        ({
                                            hosts,
                                            guests,
                                            hostsPoints,
                                            guestsPoints,
                                            place,
                                            date,
                                            time,
                                        }) => (
                                            <Styled.MatchPerMonth>
                                                <Styled.MatchPerMonthLeft>
                                                    <Styled.MatchPerMonthDate>
                                                        {formatDateWithDayShortcut(
                                                            date
                                                        )}{' '}
                                                        {time}
                                                    </Styled.MatchPerMonthDate>
                                                    <Styled.MatchPerMonthPlace>
                                                        {place}
                                                    </Styled.MatchPerMonthPlace>
                                                </Styled.MatchPerMonthLeft>
                                                <Styled.MatchPerMonthRight>
                                                    <Styled.Teams>
                                                        <Styled.ListTeam position="end">
                                                            <Styled.ListTeamName
                                                                mobile
                                                                position="end"
                                                            >
                                                                {hosts?.name}
                                                            </Styled.ListTeamName>
                                                            {hosts?.logo ? (
                                                                <Image
                                                                    width={50}
                                                                    height={50}
                                                                    src={
                                                                        hosts?.logo
                                                                    }
                                                                    alt={
                                                                        hosts?.name
                                                                    }
                                                                />
                                                            ) : (
                                                                <Shield />
                                                            )}
                                                            <Styled.Score
                                                                mobile
                                                            >
                                                                {hostsPoints ||
                                                                    '?'}
                                                            </Styled.Score>
                                                        </Styled.ListTeam>
                                                        <Styled.ListScoreWrapper>
                                                            <Styled.Score>
                                                                {hostsPoints ||
                                                                    '?'}
                                                            </Styled.Score>
                                                            <Styled.Score>
                                                                {guestsPoints ||
                                                                    '?'}
                                                            </Styled.Score>
                                                        </Styled.ListScoreWrapper>
                                                        <Styled.ListTeam position="start">
                                                            <Styled.ListTeamName
                                                                mobile
                                                                position="start"
                                                            >
                                                                {guests?.name}
                                                            </Styled.ListTeamName>
                                                            {guests?.logo ? (
                                                                <Image
                                                                    width={50}
                                                                    height={50}
                                                                    src={
                                                                        guests?.logo
                                                                    }
                                                                    alt={
                                                                        guests?.name
                                                                    }
                                                                />
                                                            ) : (
                                                                <Shield />
                                                            )}
                                                            <Styled.Score
                                                                mobile
                                                            >
                                                                {guestsPoints ||
                                                                    '?'}
                                                            </Styled.Score>
                                                            <Styled.ListTeamName position="start">
                                                                {guests?.name}
                                                            </Styled.ListTeamName>
                                                        </Styled.ListTeam>
                                                    </Styled.Teams>
                                                </Styled.MatchPerMonthRight>
                                            </Styled.MatchPerMonth>
                                        )
                                    )}
                                </Styled.MatchesListItem>
                            ))}
                    </Styled.MatchesList>
                </Styled.NextMatchWrapper>
            )}
        </Styled.ThirdMenLeagueScheduler>
    );
};

export default ThirdMenLeagueScheduler;
