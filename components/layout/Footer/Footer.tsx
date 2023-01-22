import React, {FC} from 'react';
import * as CommonStyled from '@/styles/commonStyles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import urls from '@/utils/urls';
import {useRouter} from 'next/router';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import constants from '@/utils/constants';
import * as Styled from './Footer.styles';

const Footer: FC = () => {
    const {t} = useTranslation(['layout', 'common']);
    const router = useRouter();
    const {aboutUs, contact, shop, sponsorship, facebook, instagram, news} =
        urls;
    const {phoneNumber} = constants;

    const lastPostsMocks = [
        {
            id: '1',
            title: 'Basics First',
            date: '21.10.2022',
        },
        {
            id: '2',
            title: 'Becoming Great',
            date: '27.10.2022',
        },
        {
            id: '3',
            title: 'Better Results',
            date: '30.10.2022',
        },
    ];

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
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/316928841_3353798668192311_4792899622441751972_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=6STXQz0RRgsAX_84ao4&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk4MDYyNDM3MDc5NDE1NjMzNg%3D%3D.2-ccb7-5&oh=00_AfDU4cO4YNTtL5H-odgmuoxI_d2n-7yhEMc0bS5XjR4UBw&oe=63CCA7B3&_nc_sid=30a2ef',
        },
        {
            id: 'instagram-two',
            url: 'https://www.instagram.com/p/Cj02v16jh6U/',
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/309486831_170692275571375_690056732146462746_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=I6yXPdMPYpQAX8UxrtX&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk1MTIyNDQzODA1MjIzMjg1Mg%3D%3D.2-ccb7-5&oh=00_AfATHHbpP4wc37Tozv-jAB8VNYnLgIGmx4rI3j1JCQxerA&oe=63CD682E&_nc_sid=30a2ef',
        },
        {
            id: 'instagram-three',
            url: 'https://www.instagram.com/p/Cipt2uhjLjB/',
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/307435244_623851555991112_2385091381847885791_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=LUKs5MqXZYEAX8TaKXz&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMDA3NDcwNTQ4MDk1NjA5Nw%3D%3D.2-ccb7-5&oh=00_AfB2SjmyghKC9OtFbMkg6pVkCSJqmR35A1k7-tsYpgPrMA&oe=63CD11C6&_nc_sid=30a2ef',
        },
        {
            id: 'instagram-four',
            url: 'https://www.instagram.com/p/ChCLutzj0K3/',
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/298194974_1204993460289782_4718873400354608303_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MKIYOd0rCwwAX__Ux8V&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMDkzMjY5ODc3MDk4MTU1OQ%3D%3D.2-ccb7-5&oh=00_AfDAA7wD8Mb0Vds0wld4xwNuqIFpBqk624TJQB6oJrFr7Q&oe=63CC5670&_nc_sid=30a2ef',
        },
        {
            id: 'instagram-five',
            url: 'https://www.instagram.com/p/CgPkKdzjCHy/',
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/294230540_559318435914050_6233224330688825849_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Y4iz-NJTpWYAX9ImKAT&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjY4NDkzNTA0MDI3OTAyNg%3D%3D.2-ccb7-5&oh=00_AfDQ0VR_4jqDiS-IH-LTQEJP1xrCf1XH5243bvWuBssI4Q&oe=63CD0DEA&_nc_sid=30a2ef',
        },
        {
            id: 'instagram-six',
            url: 'https://www.instagram.com/p/Ce_BVkdjL0M/',
            imageUrl:
                'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/289156827_564287158500240_7829849829697701947_n.webp?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=42NJXgghKvsAX_iVRNE&tn=bUV2xvujTh14wK0a&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NDAxMzc2NDM2MDg1NTIwMw%3D%3D.2-ccb7-5&oh=00_AfA2WUPK-NtDeAEr1HT73nvEsxbR-UrizDMfeowWmUCybA&oe=63CCDBEE&_nc_sid=30a2ef',
        },
    ];

    return (
        <Styled.Footer>
            <Styled.FooterUpper>
                <CommonStyled.Container>
                    <Styled.UpperColumn>
                        <h5>{t<string>('links.aboutUs')}</h5>
                        <p className="about-academy">
                            {t<string>('common:aboutUs.partOne')}
                        </p>
                        <p className="about-academy">
                            {t<string>('common:aboutUs.partTwo')}
                        </p>
                        <p className="call-us">
                            <HeadsetMicIcon />
                            {t<string>('footer.callUs')} {phoneNumber}
                        </p>
                    </Styled.UpperColumn>
                    <Styled.UpperColumn>
                        <h5>{t<string>('footer.news')}</h5>
                        <Styled.NewsList>
                            {lastPostsMocks.map(({id, title, date}) => (
                                <Styled.NewsListItem key={id}>
                                    <Link href={`${news}/${id}`}>{title}</Link>
                                    <span>{date}</span>
                                </Styled.NewsListItem>
                            ))}
                        </Styled.NewsList>
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
                        </Styled.FollowUsBottom>
                    </Styled.BottomWrapper>
                </CommonStyled.Container>
            </Styled.FooterBottom>
        </Styled.Footer>
    );
};

export default Footer;
