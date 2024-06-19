import styled from 'styled-components';
import * as CommonStyled from '@/styles/commonStyles';
import device from '@/styles/breakpoints';

const {touch, mobileSmall} = device;

export const ThirdMenLeagueScheduler = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    padding: 25px;
`;

export const NextTitle = styled.h3`
    font-size: 1.5rem;
`;

export const NextMatchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NextMatch = styled.div`
    width: 450px;
    height: 250px;
    box-shadow: 2px 2px 12px #00000040;
    border-radius: 7px;

    @media ${mobileSmall} {
        width: 100%;
        max-width: 450px;
        min-width: 295px;
        min-height: 250px;
    }
`;

export const NextMatchDate = styled.p`
    width: 100%;
    display: flex;
    margin: 16px 0 5px 0;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
`;

export const NextMatchPlace = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px 0;
    font-size: 1rem;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGraySecond},
            },
        },
    }) => fontGraySecond};
`;

export const NextMatchTeams = styled.div`
    width: 100%;
    display: flex;
`;

export const Teams = styled.div`
    width: 100%;
    display: flex;

    @media ${touch} {
        margin-top: 20px;
        justify-content: center;
    }

    @media ${mobileSmall} {
        flex-direction: column;
    }
`;

export const Team = styled.div`
    width: calc(50% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const ScoreWrapper = styled.div`
    display: flex;
    width: 100px;
    align-items: flex-start;
    padding-top: 20px;
    justify-content: space-between;
`;

export const TeamName = styled.span`
    padding: 7px 7px 0 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 600;

    .MuiSvgIcon-root {
        margin-bottom: 8px;
        width: 4.375rem;
        height: 4.375rem;
        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {fontGrayThird},
                },
            },
        }) => fontGrayThird};
    }

    > img {
        margin-bottom: 8px;
    }
`;

export const DottedDivider = styled.span`
    width: 25px;
    display: flex;
    align-items: center;
    font-size: 3.5rem;
`;

export const Score = styled.p<{mobile?: boolean; nextMatchScore?: boolean}>`
    display: ${({mobile}) => (!mobile ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 45px;
    height: 55px;
    border-radius: 4px;
    background-color: ${({
        theme: {
            palette: {
                basketballAcademy: {primaryGreen},
            },
        },
    }) => primaryGreen};
    color: ${({theme}) => theme.palette.basketballAcademy.white};
    font-weight: 700;
    font-size: 1.625rem;

    @media ${mobileSmall} {
        display: ${({mobile, nextMatchScore}) =>
            mobile || nextMatchScore ? 'flex' : 'none'};
        width: 45px;
        margin-left: 5px;
    }
`;

export const MatchesList = styled(CommonStyled.List)`
    width: 100%;
    margin-top: 45px;
`;

export const MatchesListItem = styled.li`
    width: 100%;
`;

export const MatchPerMonth = styled.div`
    width: 100%;
    padding: 0 10px;
    height: 70px;
    margin-bottom: 8px;
    display: flex;
    border-bottom: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGray},
            },
        },
    }) => `1px solid ${fontGray}`};

    @media ${touch} {
        flex-direction: column;
        height: 200px;
        margin-bottom: 16px;
    }

    @media ${mobileSmall} {
        min-height: 250px;
    }
`;

export const MatchPerMonthLeft = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;

    @media ${touch} {
        width: 100%;
        justify-content: center;
    }
`;

export const MatchPerMonthRight = styled.div`
    display: flex;
    width: 70%;
    @media ${touch} {
        width: 100%;
        justify-content: center;
    }

    @media ${mobileSmall} {
        flex-direction: column;
    }
`;

export const MatchesListItemMonth = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 20px 0;

    > span {
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`;

export const ListTeam = styled.div<{position?: 'start' | 'end'}>`
    display: flex;
    align-items: center;
    justify-content: ${({position}) =>
        position ? `flex-${position}` : 'center'};
    width: 235px;

    .MuiSvgIcon-root {
        width: 3.125rem;
        height: 3.125rem;

        color: ${({
            theme: {
                palette: {
                    basketballAcademy: {fontGrayThird},
                },
            },
        }) => fontGrayThird};
    }

    @media ${mobileSmall} {
        justify-content: flex-start;
        margin-bottom: 15px;
        width: 100%;
    }
`;

export const ListTeamName = styled.span<{
    position?: 'start' | 'end';
    mobile?: boolean;
}>`
    font-weight: 600;
    margin: 0 15px;
    text-align: ${({position}) => position || 'center'};
    display: ${({position, mobile}) =>
        !mobile || position === 'end' ? 'flex' : 'none'};

    @media ${mobileSmall} {
        width: 200px;
        text-align: right;
        justify-content: flex-end;
        margin: 0 5px;
        display: ${({mobile}) => (mobile ? 'flex' : 'none')};
    }
`;

export const ListScoreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 25px;

    @media ${touch} {
        margin: 0 5px;
    }

    @media ${mobileSmall} {
        display: none;
    }
`;

export const MatchPerMonthDate = styled.span`
    font-weight: 700;

    @media ${touch} {
        text-align: center;
    }
`;
export const MatchPerMonthPlace = styled.span`
    font-weight: 600;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGray},
            },
        },
    }) => fontGray};

    @media ${touch} {
        text-align: center;
    }
`;

export const NoTimetableData = styled.p`
    font-style: italic;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({
        theme: {
            palette: {
                basketballAcademy: {fontGray},
            },
        },
    }) => fontGray};
`;
