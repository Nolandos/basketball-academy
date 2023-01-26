import {fetchData} from '@/utils/utils';
import {FetchDataMethods} from '@/utils/commonEnums';

const {GET} = FetchDataMethods;
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
