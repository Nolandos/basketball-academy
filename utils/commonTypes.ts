import {StaticImageData} from 'next/image';
import {ReactNode} from 'react';

export type BarListItemType = {
    id: string;
    src: string | StaticImageData;
    height?: number;
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

export type PhotosCollectionType = {
    id: number;
    attributes: {
        slug: string;
        title: string;
        date: string;
        mainPhoto: {
            data: PhotoTypes;
        };
        photos: {
            data: Array<PhotoTypes>;
        };
    };
};

export type PhotoTypes = {
    id: number;
    attributes: {
        name: string;
        alternativeText: null | string;
        caption: null | string;
        width: number;
        height: number;
        formats: {
            thumbnail: PhotoFormatTypes;
            medium: PhotoFormatTypes;
            small: PhotoFormatTypes;
            xsmall: PhotoFormatTypes;
            large: PhotoFormatTypes;
            xlarge: PhotoFormatTypes;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: null | string;
        createdAt: string;
        updatedAt: string;
    };
};

export type PhotoFormatTypes = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null | string;
    width: number;
    height: number;
    size: number;
    url: string;
};

export type NewsType = {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        date: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        mainPhoto: {
            data: PhotoTypes;
        };
        photos: {
            data: Array<PhotoTypes>;
        };
    };
};

export type PhotoGalleryType = {
    src: string;
    srcSet?: string | string[] | undefined;
    sizes?: string | string[] | undefined;
    width: number;
    height: number;
    alt?: string | undefined;
    key?: string | undefined;
    title?: string | undefined;
};

export type ButtonVariantsTypes = 'OUTLINED' | 'CONTAINED' | 'LINK';

export type BackendPaginationMeta = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
};
