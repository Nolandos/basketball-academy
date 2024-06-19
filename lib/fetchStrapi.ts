import {fetchData} from '@/utils/utils';
import {FetchDataMethods} from '@/utils/commonEnums';
import {sendOrderEmailTypes, sendSignUpEmailTypes} from '@/utils/commonTypes';

const {GET, POST} = FetchDataMethods;
export const fetchTrainers = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/trainers?populate=*`,
        GET
    );

export const fetchTrainersSlugs = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/trainers-slugs`,
        GET
    );

export const fetchTrainer = (slug: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/trainer-info/${slug}?populate=*`,
        GET
    );

export const fetchNews = (page: string, pageSize: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/news?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:DESC&populate=*`,
        GET
    );

export const fetchLastNews = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/news?pagination[start]=0&pagination[limit]=3&sort=date:DESC&populate=*`,
        GET
    );

export const fetchSingleNews = (slug: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/single-news-info/${slug}?populate=*`,
        GET
    );

export const fetchPhotosCollections = (page: string, pageSize: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/photos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:DESC&populate=*`,
        GET
    );

export const fetchPhotosCollection = (slug: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/photos-collection-info/${slug}?populate=*`,
        GET
    );

export const sendSignUpEmail = ({
    name,
    yearOfBirth,
    phoneNumber,
    email,
    additionalInfo,
    localization,
}: sendSignUpEmailTypes) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/email/sign-up-mail?name=${name}&yearOfBirth=${yearOfBirth}&phoneNumber=${phoneNumber}&email=
        ${email}&additionalInfo=${additionalInfo}&localization=${localization}`,
        POST
    );

export const sendOrderEmail = ({
    email,
    phoneNumber,
    name,
    localization,
    trainingLocation,
    generatedOrderCode,
    shopCartProducts,
    totalPrice,
}: sendOrderEmailTypes) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/email/send-order-mail?email=${email}&phoneNumber=${phoneNumber}&name=${name}&localization=
        ${localization}&trainingLocation=${trainingLocation}&generatedOrderCode=${generatedOrderCode}&totalPrice=${totalPrice}`,
        POST,
        null,
        {
            shopCartProducts,
        }
    );

export const fetchProducts = (page: string, pageSize: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:DESC&populate=*`,
        GET
    );

export const fetchTimetable = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/timetables?pagination[page]=1&pagination[pageSize]=9999&sort=startDate:ASC,endDate:ASC&populate=*`,
        GET
    );

export const fetchProductDetails = (slug: string) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/product-info/${slug}?populate=*`,
        GET
    );

export const fetchRecommendUs = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/recommend-uses?populate=*`,
        GET
    );

export const fetchKRSNumber = () =>
    fetchData(`${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/others`, GET);

export const fetchFindClosestMatch = () =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/lm-last-training`,
        GET
    );

export const fetchThirdLeagueTimetable = (page: number, size: number) =>
    fetchData(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}/api/lm-trainings?pagination[page]=${page}&pagination[pageSize]=${size}&sort=date:ASC&populate[guests][populate]=*&populate[hosts][populate]=*`,
        GET
    );
