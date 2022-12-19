import React, {FC} from 'react';
import poznan from '@/assets/partnersBar/miasto-poznan.png';
import pyraBar from '@/assets/partnersBar/pyra-bar.png';
import wzkosz from '@/assets/partnersBar/wzkosz.png';
import supremeProdukcja from '@/assets/partnersBar/supreme-produkcja.png';
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
    } = urls;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3500,
        cssEase: 'linear',
    };

    const partnersList: Array<BarListItemType> = [
        {
            id: 'poznan',
            src: poznan,
            height: 100,
            url: poznanUrl,
            urlExternal: true,
        },
        {
            id: 'pyraBar',
            src: pyraBar,
            height: 100,
            width: 255,
            url: pyraBarUrl,
            urlExternal: true,
        },
        {
            id: 'wzkosz',
            src: wzkosz,
            height: 100,
            url: wzkoszUrl,
            urlExternal: true,
        },
        {
            id: 'supremeProdukcja',
            src: supremeProdukcja,
            height: 100,
            url: supremeProdukcjaUrl,
            urlExternal: true,
        },
    ];

    return <Bar itemsList={partnersList} settings={settings} />;
};

export default PartnersBar;
