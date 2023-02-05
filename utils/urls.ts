import supremeProdukcja from '@/assets/partnersBar/supreme-produkcja.png';
import {include} from 'named-urls';
import ministerstwoSportuITurystyki from '@/assets/partnersBar/ministerstwo-sportu-i-turystyki.png';

export default {
    // Simple routes
    home: '/',
    aboutUs: '/o-nas',
    offer: '/oferta',
    localizations: '/lokalizacje',
    groupWorkouts: '/treningi-grupowe',
    leagueWorkouts: '/treningi-ligowe',
    multiWorkouts: '/treningi-3x3',
    individualTrainings: '/treningi-indywidulane',
    applicationForm: '/formularz-zgloszeniowy',
    frequentlyAskedQuestions: '/najcześciej-zadawane-pytania',
    resignations: '/rezygnacje',
    leagueRecruitment: '/nabory-ligowe',
    sportsCamps: '/obozy-sportowe',
    recreationalDayCamps: '/polkolonie-rekreacyjne',
    membershipDeclaration: '/deklaracja-czlonkowska',
    clubRegulations: '/regulamin-klubu',
    individualTrainingContract: '/umowa-treningi-indywidualne',
    participantCard: '/karta-uczestnika-oboz-polkolinia',
    sponsorship: '/sponsoring',
    openingOfANewLocation: '/otwarcie-nowej-lokalizacji',
    pyraPoznan: '/pyra-poznan',
    simpleHelp: '/prosta-pomoc',
    shop: '/sklep',
    contact: '/kontakt',
    recommendUs: '/polecaja-nas',
    // External urls
    facebook: 'https://www.facebook.com/akademiakoszykowkipoznan',
    instagram: 'https://www.instagram.com/akademiakoszykowki/',
    youtube: 'https://www.youtube.com/channel/UC-bjnl8_ggB3NcCRcu1-fMA',
    poznan: 'https://www.poznan.pl/',
    pyraBar: 'http://www.pyrabar.pl/',
    wzkosz: 'http://www.wzkosz.pl/',
    supremeProdukcja: 'https://www.supremeprodukcja.pl/',
    ministerstwoSportuITurystyki: 'https://www.gov.pl/web/sport',
    eneaAzs: 'http://azs.poznan.pl/',
    pyraPoznanExternal: 'http://www.pyra.com.pl/',
    siekierki: 'https://www.facebook.com/UKSSiekierkiKostrzyn/',
    emailBiuro: 'biuro@akademiakoszykówki.poznan.pl',

    news: include('/aktualnosci', {
        base: '/aktualnosci',
        all: '/aktualnosci?page=1&pageSize=25',
        detail: include(':slug/', {
            show: '',
        }),
    }),

    trainers: include('/trenerzy', {
        base: '',
        detail: include(':slug/', {
            show: '',
        }),
    }),

    gallery: include('/galeria', {
        base: '',
        movies: '/filmy',
        photos: include('zdjecia', {
            base: '',
            all: '?page=1&pageSize=25',
            detail: include(':slug/', {
                show: '',
            }),
        }),
    }),
};
