import {StaticImageData} from 'next/image';
import React, {ReactNode} from 'react';
import {formatPrice} from '@/utils/utils';

export type sendSignUpEmailTypes = {
    name: string;
    yearOfBirth: string;
    phoneNumber: string;
    email: string;
    additionalInfo: string;
    localization: string;
};

export type sendOrderEmailTypes = {
    email: string;
    phoneNumber: string;
    name: string;
    localization: string;
    generatedOrderCode: string;
    totalPrice: string;

    trainingLocation: string;
    shopCartProducts:
        | {
              productName: string;
              productSize: string;
              amount: string;
              pricePerItem: string;
              price: string;
              additionalInfo: ReactNode;
          }[]
        | [];
};

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
        clubs: string | null;
        positions: string | null;
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

export type ProductsDetailsType = {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        price: number;
        slug: string;
        additionalInfo: boolean;
        sizes: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    width: number;
                    length: number;
                    label: string;
                    thirdSize: number | null;
                    humanHeight: string | null;
                };
            }[];
        };
        photo: {
            data: PhotoTypes;
        };
    };
};

export type TableDataTypes = {
    tableData: {
        tableHeadData: Array<{
            id: string;
            name: string;
            style?: {[key: string]: string | number};
            hidden?: boolean;
        }>;
        tableBodyData:
            | Array<{id: string; [key: string]: string | ReactNode}>
            | [];
    };
};
