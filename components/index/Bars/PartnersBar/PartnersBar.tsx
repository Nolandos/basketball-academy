import React, {FC} from 'react';
import poznan from '@/assets/partnersBar/miasto-poznan.png';
import pyraBar from '@/assets/partnersBar/pyra-bar.png';
import wzkosz from '@/assets/partnersBar/wzkosz.png';
import supremeProdukcja from '@/assets/partnersBar/supreme-produkcja.png';
import ministerstwoSportuITurystyki from '@/assets/partnersBar/ministerstwo-sportu-i-turystyki.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import urls from '@/utils/urls';
import Slider from '@/components/common/Slider/Slider';
import {SliderListItemType} from '@/utils/commonTypes';
import siekierki from '@/assets/partnersBar/siekierki.png';
import pyraPoznan from '@/assets/partnersBar/pyra-poznan.png';
import eneaAzs from '@/assets/partnersBar/enea-azs.png';
import DTZStudioTreningu from '@/assets/partnersBar/logo-studio-treningu.png';
import spiceSport from '@/assets/partnersBar/spice-sport.png';
import * as Styled from './PartnersBar.styles';

const PartnersBar: FC = () => {
    const {
        poznan: poznanUrl,
        pyraBar: pyraBarUrl,
        wzkosz: wzkoszUrl,
        supremeProdukcja: supremeProdukcjaUrl,
        ministerstwoSportuITurystyki: ministerstwoSportuITurystykiUrl,
        pyraPoznanExternal: pyraPoznanExternalUrl,
        siekierki: siekierkiUrl,
        eneaAzs: eneaAzsUrl,
        spiceSport: spiceSportUrl,
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

    const partnersList: Array<SliderListItemType> = [
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
            id: 'pyraPoznan',
            src: pyraPoznan,
            height: 65,
            url: pyraPoznanExternalUrl,
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
            id: 'siekierki',
            src: siekierki,
            height: 80,
            url: siekierkiUrl,
            urlExternal: true,
        },
        {
            id: 'pyraBar',
            src: pyraBar,
            height: 40,
            url: pyraBarUrl,
            urlExternal: true,
        },
        {
            id: 'eneaAzs',
            src: eneaAzs,
            height: 70,
            url: eneaAzsUrl,
            urlExternal: true,
        },
        {
            id: 'DTZStudioTreningu',
            src: DTZStudioTreningu,
            height: 90,
        },
        {
            id: 'spiceSport',
            src: spiceSport,
            height: 70,
            url: spiceSportUrl,
            urlExternal: true,
        },
    ];

    return (
        <Styled.PartnersBar>
            <Slider itemsList={partnersList} settings={settings} />
        </Styled.PartnersBar>
    );
};

export default PartnersBar;
