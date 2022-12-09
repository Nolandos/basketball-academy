import React, {FC, useEffect, useState} from 'react';
import logo from '@/assets/akademia-koszykowki-logo.png';
import Link from 'next/link';
import urls from '@/utils/urls';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIconIcon from '@mui/icons-material/KeyboardArrowRight';
import {checkIsMobile} from '@/utils/utils';
import {useRouter} from 'next/router';
import * as Styled from './Header.styles';

type MenuItemsType = Array<{
    id: string;
    title: string;
    url?: string;
    items:
        | Array<{
              id: string;
              title: string;
              url: string;
          }>
        | []
        | null;
}>;

const Header: FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const {
        home,
        aboutUs,
        offer,
        trainers,
        groupWorkouts,
        multiWorkouts,
        individualTrainings,
        frequentlyAskedQuestions,
        resignations,
        leagueRecruitment,
        sportsCamps,
        recreationalDayCamps,
        membershipDeclaration,
        clubRegulations,
        individualTrainingContract,
        participantCard,
        photos,
        movies,
        sponsorship,
        openingOfANewLocation,
        pyraPoznan,
        simpleHelp,
    } = urls;
    const {t} = useTranslation('header');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const router = useRouter();

    const [menuItems] = useState<MenuItemsType | []>([
        {
            id: 'academy',
            title: t<string>('menu.academy'),
            items: [
                {
                    id: 'aboutUs',
                    title: t<string>('menu.aboutUs'),
                    url: aboutUs,
                },
                {
                    id: 'offer',
                    title: t<string>('menu.offer'),
                    url: offer,
                },
                {
                    id: 'trainers',
                    title: t<string>('menu.trainers'),
                    url: trainers,
                },
            ],
        },
        {
            id: 'workouts',
            title: t<string>('menu.workouts'),
            items: [
                {
                    id: 'localizations',
                    title: t<string>('menu.localizations'),
                    url: aboutUs,
                },
                {
                    id: 'groupWorkouts',
                    title: t<string>('menu.groupWorkouts'),
                    url: groupWorkouts,
                },
                {
                    id: '3x3Workouts',
                    title: t<string>('menu.3x3Workouts'),
                    url: multiWorkouts,
                },
                {
                    id: 'individualTrainings',
                    title: t<string>('menu.individualTrainings'),
                    url: individualTrainings,
                },
            ],
        },
        {
            id: 'records',
            title: t<string>('menu.records'),
            items: [
                {
                    id: 'applicationForm',
                    title: t<string>('menu.applicationForm'),
                    url: aboutUs,
                },
                {
                    id: 'frequentlyAskedQuestions',
                    title: t<string>('menu.frequentlyAskedQuestions'),
                    url: frequentlyAskedQuestions,
                },
                {
                    id: 'resignations',
                    title: t<string>('menu.resignations'),
                    url: resignations,
                },
                {
                    id: 'leagueRecruitment',
                    title: t<string>('menu.leagueRecruitment'),
                    url: leagueRecruitment,
                },
            ],
        },
        {
            id: 'campsAndSummercamp',
            title: t<string>('menu.campsAndSummercamp'),
            items: [
                {
                    id: 'sportsCamps',
                    title: t<string>('menu.sportsCamps'),
                    url: sportsCamps,
                },
                {
                    id: 'recreationalDayCamps',
                    title: t<string>('menu.recreationalDayCamps'),
                    url: recreationalDayCamps,
                },
            ],
        },
        {
            id: 'documents',
            title: t<string>('menu.documents'),
            items: [
                {
                    id: 'membershipDeclaration',
                    title: t<string>('menu.membershipDeclaration'),
                    url: membershipDeclaration,
                },
                {
                    id: 'clubRegulations',
                    title: t<string>('menu.clubRegulations'),
                    url: clubRegulations,
                },
                {
                    id: 'individualTrainingContract',
                    title: t<string>('menu.individualTrainingContract'),
                    url: individualTrainingContract,
                },
                {
                    id: 'participantCard',
                    title: t<string>('menu.participantCard'),
                    url: participantCard,
                },
            ],
        },
        {
            id: 'gallery',
            title: t<string>('menu.gallery'),
            items: [
                {
                    id: 'photos',
                    title: t<string>('menu.photos'),
                    url: photos,
                },
                {
                    id: 'movies',
                    title: t<string>('menu.movies'),
                    url: movies,
                },
            ],
        },
        {
            id: 'cooperation',
            title: t<string>('menu.cooperation'),
            items: [
                {
                    id: 'sponsorship',
                    title: t<string>('menu.sponsorship'),
                    url: sponsorship,
                },
                {
                    id: 'openingOfANewLocation',
                    title: t<string>('menu.openingOfANewLocation'),
                    url: openingOfANewLocation,
                },
                {
                    id: 'pyraPoznan',
                    title: t<string>('menu.pyraPoznan'),
                    url: pyraPoznan,
                },
                {
                    id: 'simpleHelp',
                    title: t<string>('menu.simpleHelp'),
                    url: simpleHelp,
                },
            ],
        },
        {
            id: 'shop',
            title: t<string>('menu.shop'),
            items: null,
            url: '/sklep',
        },
        {
            id: 'contact',
            title: t<string>('menu.contact'),
            items: null,
            url: 'kontakt',
        },
    ]);

    const handleCheckIsMobile = () => setIsMobile(checkIsMobile(1080));

    useEffect(() => {
        setIsMobile(checkIsMobile(1080));
        window.addEventListener('resize', handleCheckIsMobile);
        return () => window.removeEventListener('resize', handleCheckIsMobile);
    }, []);

    return (
        <Styled.Header>
            <Styled.Container>
                <Styled.Logo>
                    <Link href={home} passHref>
                        <Image src={logo} alt="akademia-koszykowki-logo" />
                    </Link>
                </Styled.Logo>
                <Styled.Menu isOpen={isMobile && openMobileMenu}>
                    <Styled.MenuList>
                        {menuItems.map(({id, title, items, url}) => (
                            <Styled.MenuItem
                                onClick={() => {
                                    if (
                                        items &&
                                        activeMenu !== id &&
                                        isMobile
                                    ) {
                                        setActiveMenu(id);
                                    }
                                    if (
                                        items &&
                                        activeMenu === id &&
                                        isMobile
                                    ) {
                                        setActiveMenu(null);
                                    }
                                    if (!items && url) {
                                        router.push(url);
                                    }
                                }}
                                hasItems={!!(items && items.length > 0)}
                                isExpand={activeMenu === id}
                                onMouseEnter={() => {
                                    if (activeMenu !== id && !isMobile)
                                        setActiveMenu(id);
                                }}
                                onMouseLeave={() => {
                                    if (activeMenu && !isMobile)
                                        setActiveMenu(null);
                                }}
                                key={id}
                            >
                                <span>{title}</span>
                                {!isMobile && items && (
                                    <KeyboardArrowDownIcon fontSize="small" />
                                )}
                                {isMobile && items && (
                                    <KeyboardArrowRightIconIcon fontSize="small" />
                                )}
                                {activeMenu === id &&
                                    items &&
                                    items.length > 0 && (
                                        <Styled.DropdownMenu className="dropdown-menu">
                                            {items.map(
                                                ({
                                                    id: dropdownItemId,
                                                    title: dropdownItemTitle,
                                                    url: dropdownItemUrl,
                                                }) => (
                                                    <Styled.DropdownMenuItem
                                                        key={dropdownItemId}
                                                    >
                                                        <Link
                                                            href={
                                                                dropdownItemUrl
                                                            }
                                                            passHref
                                                        >
                                                            {dropdownItemTitle}
                                                        </Link>
                                                    </Styled.DropdownMenuItem>
                                                )
                                            )}
                                        </Styled.DropdownMenu>
                                    )}
                            </Styled.MenuItem>
                        ))}
                    </Styled.MenuList>
                </Styled.Menu>
                <Styled.Mobile>
                    <Styled.HamburgerButton
                        onClick={() => {
                            setOpenMobileMenu(!openMobileMenu);
                        }}
                        isOpen={openMobileMenu}
                    >
                        <div />
                        <div />
                        <div />
                    </Styled.HamburgerButton>
                </Styled.Mobile>
            </Styled.Container>
        </Styled.Header>
    );
};

export default Header;
