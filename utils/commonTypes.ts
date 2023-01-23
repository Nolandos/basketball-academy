import {StaticImageData} from 'next/image';

export type BarListItemType = {
    id: string;
    src: string | StaticImageData;
    height: number;
    width?: number;
    url?: string;
    urlExternal?: boolean;
};

export type TrainerType = {
    id: number;
    attributes: {
        firstName: string | null;
        surname: string | null;
        description: string | null;
        clubs: string[] | null;
        positions: string[] | null;
        slug: string | null;
        photo: {
            data: {
                attributes: {
                    url: string;
                };
            } | null;
        };
    };
};

export type ButtonVariantsTypes = 'OUTLINED' | 'CONTAINED';
