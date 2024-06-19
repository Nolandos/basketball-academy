import React, {FC} from 'react';
import agnieszkaSkobel from '@/assets/recommendUsBar/agnieszka-skobel.jpg';
import dominikaOwczarzak from '@/assets/recommendUsBar/dominika-owczarzak.jpg';
import dorotaMistygacz from '@/assets/recommendUsBar/dorota-mistygacz.jpg';
import eneaAzs from '@/assets/recommendUsBar/enea-azs.png';
import mieszkoWlodarczyk from '@/assets/recommendUsBar/mieszko-wlodarczyk.jpg';
import pyraPoznan from '@/assets/recommendUsBar/pyra-poznan.png';
import siekierki from '@/assets/recommendUsBar/siekierki.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import urls from '@/utils/urls';
import Slider from '@/components/common/Slider/Slider';
import {SliderListItemType} from '@/utils/commonTypes';

const RecommendUsBar: FC = () => {
    const {
        recommendUs,
        eneaAzs: eneaAzsUrl,
        pyraPoznanExternal,
        siekierki: siekierkiUrl,
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
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
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

    const recommendUsList: Array<SliderListItemType> = [
        {
            id: 'agnieszkaSkobel',
            src: agnieszkaSkobel,
            height: 100,
            url: `${recommendUs}/agnieszka-skobel`,
            urlExternal: false,
        },
        {
            id: 'dominikaOwczarzak',
            src: dominikaOwczarzak,
            height: 100,
            width: 255,
            url: `${recommendUs}/dominika-owczarzak`,
            urlExternal: false,
        },
        {
            id: 'dorotaMistygacz',
            src: dorotaMistygacz,
            height: 100,
            url: `${recommendUs}/dorota-mistygacz`,
            urlExternal: false,
        },
        {
            id: 'eneaAzs',
            src: eneaAzs,
            height: 100,
            url: eneaAzsUrl,
            urlExternal: true,
        },
        {
            id: 'pyraPoznan',
            src: pyraPoznan,
            height: 100,
            url: pyraPoznanExternal,
            urlExternal: true,
        },
        {
            id: 'mieszkoWlodarczyk',
            src: mieszkoWlodarczyk,
            height: 100,
            url: `${recommendUs}/mieszko-mistygacz`,
            urlExternal: false,
        },
        {
            id: 'siekierki',
            src: siekierki,
            height: 100,
            url: siekierkiUrl,
            urlExternal: true,
        },
    ];

    return <Slider itemsList={recommendUsList} settings={settings} />;
};

export default RecommendUsBar;
