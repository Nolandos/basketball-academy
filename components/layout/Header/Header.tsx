import React, {FC, useContext, useEffect, useState} from 'react';
import logo from '@/assets/akademia-koszykowki-logo.png';
import Link from 'next/link';
import urls from '@/utils/urls';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIconIcon from '@mui/icons-material/KeyboardArrowRight';
import {checkIsMobile} from '@/utils/utils';
import {useRouter} from 'next/router';
import ShopCartButton from '@/components/common/Buttons/ShopCartButton/ShopCartButton';
import {AppContext} from '@/context/AppContext';
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
        trainers: {base: trainersBase},
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
        gallery: {photos, movies},
        sponsorship,
        openingOfANewLocation,
        pyraPoznan,
        simpleHelp,
        shop: {all: shopUrl},
        contact,
        leagueWorkouts,
    } = urls;
    const {t} = useTranslation('layout');
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const router = useRouter();
    const {
        app: {shopCartCounter},
    } = useContext(AppContext);

    const [menuItems] = useState<MenuItemsType | []>([
        {
            id: 'academy',
            title: t<string>('links.academy'),
            items: [
                {
                    id: 'aboutUs',
                    title: t<string>('links.aboutUs'),
                    url: aboutUs,
                },
                {
                    id: 'offer',
                    title: t<string>('links.offer'),
                    url: offer,
                },
                {
                    id: 'trainers',
                    title: t<string>('links.trainers'),
                    url: trainersBase,
                },
            ],
        },
        {
            id: 'workouts',
            title: t<string>('links.workouts'),
            items: [
                {
                    id: 'localizations',
                    title: t<string>('links.localizations'),
                    url: aboutUs,
                },
                {
                    id: 'groupWorkouts',
                    title: t<string>('links.groupWorkouts'),
                    url: groupWorkouts,
                },
                {
                    id: 'leagueWorkouts',
                    title: t<string>('links.leagueWorkouts'),
                    url: leagueWorkouts,
                },
                {
                    id: '3x3Workouts',
                    title: t<string>('links.3x3Workouts'),
                    url: multiWorkouts,
                },
                {
                    id: 'individualTrainings',
                    title: t<string>('links.individualTrainings'),
                    url: individualTrainings,
                },
            ],
        },
        {
            id: 'records',
            title: t<string>('links.records'),
            items: [
                {
                    id: 'applicationForm',
                    title: t<string>('links.applicationForm'),
                    url: aboutUs,
                },
                {
                    id: 'frequentlyAskedQuestions',
                    title: t<string>('links.frequentlyAskedQuestions'),
                    url: frequentlyAskedQuestions,
                },
                {
                    id: 'resignations',
                    title: t<string>('links.resignations'),
                    url: resignations,
                },
                {
                    id: 'leagueRecruitment',
                    title: t<string>('links.leagueRecruitment'),
                    url: leagueRecruitment,
                },
            ],
        },
        {
            id: 'campsAndSummercamp',
            title: t<string>('links.campsAndSummercamp'),
            items: [
                {
                    id: 'sportsCamps',
                    title: t<string>('links.sportsCamps'),
                    url: sportsCamps,
                },
                {
                    id: 'recreationalDayCamps',
                    title: t<string>('links.recreationalDayCamps'),
                    url: recreationalDayCamps,
                },
            ],
        },
        {
            id: 'documents',
            title: t<string>('links.documents'),
            items: [
                {
                    id: 'membershipDeclaration',
                    title: t<string>('links.membershipDeclaration'),
                    url: membershipDeclaration,
                },
                {
                    id: 'clubRegulations',
                    title: t<string>('links.clubRegulations'),
                    url: clubRegulations,
                },
                {
                    id: 'individualTrainingContract',
                    title: t<string>('links.individualTrainingContract'),
                    url: individualTrainingContract,
                },
                {
                    id: 'participantCard',
                    title: t<string>('links.participantCard'),
                    url: participantCard,
                },
            ],
        },
        {
            id: 'gallery',
            title: t<string>('links.gallery'),
            items: [
                {
                    id: 'photos',
                    title: t<string>('links.photos'),
                    url: photos.all,
                },
                {
                    id: 'movies',
                    title: t<string>('links.movies'),
                    url: movies,
                },
            ],
        },
        {
            id: 'cooperation',
            title: t<string>('links.cooperation'),
            items: [
                {
                    id: 'sponsorship',
                    title: t<string>('links.sponsorship'),
                    url: sponsorship,
                },
                {
                    id: 'openingOfANewLocation',
                    title: t<string>('links.openingOfANewLocation'),
                    url: openingOfANewLocation,
                },
                {
                    id: 'pyraPoznan',
                    title: t<string>('links.pyraPoznan'),
                    url: pyraPoznan,
                },
                {
                    id: 'simpleHelp',
                    title: t<string>('links.simpleHelp'),
                    url: simpleHelp,
                },
            ],
        },
        {
            id: 'shop',
            title: t<string>('links.shop'),
            items: null,
            url: shopUrl,
        },
        {
            id: 'contact',
            title: t<string>('links.contact'),
            items: null,
            url: contact,
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
                                                        onClick={() =>
                                                            setOpenMobileMenu(
                                                                false
                                                            )
                                                        }
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
                        {!isMobile && (
                            <ShopCartButton shopCartCounter={shopCartCounter} />
                        )}
                    </Styled.MenuList>
                </Styled.Menu>
                <Styled.Mobile>
                    <ShopCartButton shopCartCounter={shopCartCounter} />
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
