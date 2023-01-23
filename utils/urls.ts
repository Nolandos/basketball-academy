import supremeProdukcja from '@/assets/partnersBar/supreme-produkcja.png';
import {include} from 'named-urls';

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
    photos: '/zdjecia',
    movies: '/filmy',
    sponsorship: '/sponsoring',
    openingOfANewLocation: '/otwarcie-nowej-lokalizacji',
    pyraPoznan: '/pyra-poznan',
    simpleHelp: '/prosta-pomoc',
    news: '/aktualnosci',
    shop: '/sklep',
    contact: '/kontakt',
    recommendUs: '/polecaja-nas',

    // External urls
    facebook: 'https://www.facebook.com/akademiakoszykowkipoznan',
    instagram: 'https://www.instagram.com/akademiakoszykowki/',
    poznan: 'https://www.poznan.pl/',
    pyraBar: 'http://www.pyrabar.pl/',
    wzkosz: 'http://www.wzkosz.pl/',
    supremeProdukcja: 'https://www.supremeprodukcja.pl/',
    eneaAzs: 'http://azs.poznan.pl/',
    pyraPoznanExternal: 'http://www.pyra.com.pl/',
    siekierki: 'https://www.facebook.com/UKSSiekierkiKostrzyn/',

    trainers: include('/trenerzy', {
        base: '',
        detail: include(':slug/', {
            show: '',
        }),
    }),
};
