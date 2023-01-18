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
