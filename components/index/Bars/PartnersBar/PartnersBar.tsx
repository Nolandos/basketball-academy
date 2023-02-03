import React, {FC} from 'react';
import poznan from '@/assets/partnersBar/miasto-poznan.png';
import pyraBar from '@/assets/partnersBar/pyra-bar.png';
import wzkosz from '@/assets/partnersBar/wzkosz.png';
import supremeProdukcja from '@/assets/partnersBar/supreme-produkcja.png';
import ministerstwoSportuITurystyki from '@/assets/partnersBar/ministerstwo-sportu-i-turystyki.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import urls from '@/utils/urls';
import Bar from '@/components/index/Bars/Bar';
import {BarListItemType} from '@/utils/commonTypes';

const PartnersBar: FC = () => {
    const {
        poznan: poznanUrl,
        pyraBar: pyraBarUrl,
        wzkosz: wzkoszUrl,
        supremeProdukcja: supremeProdukcjaUrl,
        ministerstwoSportuITurystyki: ministerstwoSportuITurystykiUrl,
    } = urls;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const partnersList: Array<BarListItemType> = [
        {
            id: 'poznan',
            src: poznan,
            height: 50,
            url: poznanUrl,
            urlExternal: true,
        },
        {
            id: 'wzkosz',
            src: wzkosz,
            height: 65,
            url: wzkoszUrl,
            urlExternal: true,
        },
        {
            id: 'ministerstwoSportuITurystyki',
            src: ministerstwoSportuITurystyki,
            height: 50,
            url: ministerstwoSportuITurystykiUrl,
            urlExternal: true,
        },
        {
            id: 'supremeProdukcja',
            src: supremeProdukcja,
            height: 75,
            url: supremeProdukcjaUrl,
            urlExternal: true,
        },
        {
            id: 'pyraBar',
            src: pyraBar,
            height: 50,
            url: pyraBarUrl,
            urlExternal: true,
        },
    ];

    return <Bar itemsList={partnersList} settings={settings} />;
};

export default PartnersBar;
