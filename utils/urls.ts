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
    frequentlyAskedQuestions: '/najczesciej-zadawane-pytania',
    resignations: '/rezygnacje',
    leagueRecruitment: '/nabory-ligowe',
    documents: '/dokumenty',
    sportsCamps: '/obozy-sportowe',
    recreationalDayCamps: '/polkolonie-rekreacyjne',
    membershipDeclaration: '/deklaracja-czlonkowska',
    clubRegulations: '/regulamin-klubu',
    individualTrainingContract: '/umowa-treningi-indywidualne',
    participantCard: '/karta-uczestnika-oboz-polkolinia',
    sponsorship: '/sponsoring',
    openingOfANewLocation: '/otwarcie-nowej-lokalizacji',
    trainingSchedule: 'harmonogram-treningow',
    pyraPoznan: '/pyra-poznan',
    simpleHelp: '/prosta-pomoc',
    contact: '/kontakt',
    recommendUs: '/polecaja-nas',
    trainingInStudio: '/trening-w-studio',
    trainingOnline: '/treningi-online',
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
    spiceSport:
        'https://www.facebook.com/profile.php?id=61555336299042&mibextid=LQQJ4d&rdid=5AxEpyR5ouSGnvyP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FWCB1GDCHKa1YN32U%2F%3Fmibextid%3DLQQJ4d',
    emailBiuro: 'biuro@akademiakoszykowki.poznan.pl',
    emailBabij: 'Babij@akademiakoszykowki.poznan.pl',
    timetable: '/lokalizacje-i-grafik',
    supportUs: '/wspieraj-nas',
    offerForSchoolsAndKindergartens: 'oferta-dla-szkol-i-przedszkoli',

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

    shop: include('/sklep', {
        base: '/sklep',
        all: '/sklep?page=1&pageSize=25',
        summary: '/sklep/podsumowanie',
        detail: include(':slug/', {
            show: '',
        }),
    }),
};
