import {StaticImageData} from 'next/image';

export type BarListItemType = {
    id: string;
    src: string | StaticImageData;
    height: number;
    width?: number;
    url?: string;
    urlExternal?: boolean;
};
