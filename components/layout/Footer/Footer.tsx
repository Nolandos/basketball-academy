import React, {FC, useContext} from 'react';
import * as CommonStyled from '@/styles/commonStyles';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import urls from '@/utils/urls';
import {useRouter} from 'next/router';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import constants from '@/utils/constants';
import {AppContext} from '@/context/AppContext';
import {getFormatDate} from '@/utils/utils';
import {
    AccountBalanceWallet,
    Call,
    MailOutline,
    YouTube,
} from '@mui/icons-material';
import * as Styled from './Footer.styles';

const Footer: FC = () => {
    const {t} = useTranslation(['layout', 'common']);
    const router = useRouter();

    const {aboutUs, contact, shop, sponsorship, facebook, instagram, youtube} =
        urls;
    const {phoneNumber, email, bankAccountNumber} = constants;

    const links = [
        {
            id: 'aboutUs',
            title: t<string>('links.aboutUs'),
            url: aboutUs,
        },
        {
            id: 'contact',
            title: t<string>('links.contact'),
            url: contact,
        },
        {
            id: 'shop',
            title: t<string>('links.shop'),
            items: null,
            url: shop,
        },
        {
            id: 'sponsorship',
            title: t<string>('links.sponsorship'),
            url: sponsorship,
        },
    ];

    const followUs = [
        {
            id: 'instagram-one',
            url: 'https://www.instagram.com/p/CldThOpDmYc/',
            imageUrl: 'https://www.instagram.com/p/CldThOpDmYc/media/?size=m',
        },
        {
            id: 'instagram-two',
            url: 'https://www.instagram.com/p/Cj02v16jh6U/',
            imageUrl: 'https://www.instagram.com/p/Cj02v16jh6U/media/?size=m',
        },
        {
            id: 'instagram-three',
            url: 'https://www.instagram.com/p/Cipt2uhjLjB/',
            imageUrl: 'https://www.instagram.com/p/Cipt2uhjLjB/media/?size=m',
        },
        {
            id: 'instagram-four',
            url: 'https://www.instagram.com/p/ChCLutzj0K3/',
            imageUrl: 'https://www.instagram.com/p/ChCLutzj0K3/media/?size=m',
        },
        {
            id: 'instagram-five',
            url: 'https://www.instagram.com/p/CgPkKdzjCHy/',
            imageUrl: 'https://www.instagram.com/p/CgPkKdzjCHy/media/?size=m',
        },
        {
            id: 'instagram-six',
            url: 'https://www.instagram.com/p/Ce_BVkdjL0M/',
            imageUrl: 'https://www.instagram.com/p/Ce_BVkdjL0M/media/?size=m',
        },
    ];

    return (
        <Styled.Footer>
            <Styled.FooterUpper>
                <CommonStyled.Container>
                    <Styled.UpperColumn className="call-us-upper">
                        <h5>Kontakt</h5> {/* TODO */}
                        <Styled.ContactWrapper>
                            <p className="call-us">
                                <Call />
                                {phoneNumber}
                            </p>
                            <p className="email">
                                <MailOutline />
                                {email}
                            </p>
                            <p className="account-number">
                                <AccountBalanceWallet />
                                {bankAccountNumber}
                            </p>
                        </Styled.ContactWrapper>
                    </Styled.UpperColumn>
                    <Styled.UpperColumn>
                        <h5>{t<string>('footer.links')}</h5>
                        <Styled.LinksList>
                            {links.map(({id, title, url}) => (
                                <Styled.LinksListItem
                                    onClick={() => router.push(url)}
                                    key={id}
                                >
                                    <KeyboardArrowRightIcon fontSize="small" />
                                    <span>{title}</span>
                                </Styled.LinksListItem>
                            ))}
                        </Styled.LinksList>
                    </Styled.UpperColumn>
                    <Styled.UpperColumn>
                        <h5>{t<string>('footer.followUs')}</h5>
                        <Styled.FollowUsList>
                            {followUs.map(({id, url, imageUrl}) => (
                                <Styled.FollowUsItem key={id}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src={imageUrl}
                                            width="250"
                                            height="250"
                                            alt={id}
                                        />
                                    </a>
                                </Styled.FollowUsItem>
                            ))}
                        </Styled.FollowUsList>
                    </Styled.UpperColumn>
                </CommonStyled.Container>
            </Styled.FooterUpper>
            <Styled.FooterBottom>
                <CommonStyled.Container>
                    <Styled.BottomWrapper>
                        <Styled.Copyright>
                            &copy; {new Date().getFullYear()}{' '}
                            {t<string>('common:title')}
                        </Styled.Copyright>
                        <Styled.FollowUsBottom>
                            <p>{t<string>('footer.followUs')}:</p>
                            <a href={facebook} target="_blank" rel="noreferrer">
                                <FacebookIcon />
                            </a>
                            <a
                                href={instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                            <a href={youtube} target="_blank" rel="noreferrer">
                                <YouTube fontSize="large" />
                            </a>
                        </Styled.FollowUsBottom>
                    </Styled.BottomWrapper>
                </CommonStyled.Container>
            </Styled.FooterBottom>
        </Styled.Footer>
    );
};

export default Footer;
