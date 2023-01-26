import {FetchDataMethods} from '@/utils/commonEnums';
import {PhotoTypes} from '@/utils/commonTypes';

export const checkIsMobile = (resolution: number) =>
    window.innerWidth < resolution;

export const getFormatDate = (date: string) =>
    date.split('-').reverse().join('.');

export const fetchData = async (
    url: string,
    method: FetchDataMethods,
    params?: object | null,
    data?: object | null,
    token?: string | null | undefined
) => {
    const {POST, GET, DELETE} = FetchDataMethods;
    if ((method === POST && data) || (method === DELETE && data)) {
        let headers: {'Content-Type': string; Authorization?: string} = {
            'Content-Type': 'application/json; charset="utf-8"',
        };

        if (token) {
            headers = {...headers, Authorization: `Bearer ${token}`};
        }

        try {
            const config = {
                method,
                headers,
                body: JSON.stringify(data),
                referrerPolicy: 'unsafe-url' as ReferrerPolicy,
            };

            return await fetch(url, config);
        } catch (err) {
            console.error(err);
            return err;
        }
    } else if (
        method === GET ||
        (method === DELETE && !data) ||
        (method === POST && !data)
    ) {
        let requestUrl = url;
        let headers: {Authorization?: string} = {};

        if (token) {
            headers = {...headers, Authorization: `Bearer ${token}`};
        }

        if (params) {
            const query = Object.entries(params)
                .filter(([key, items]) => items !== undefined)
                .filter(([key, items]) => items !== '')
                .map(([key, items]) => `${key}=${items}`)
                .join('&');
            requestUrl = `${url}?${query}`;
        }

        try {
            const config = {
                method,
                headers,
                referrerPolicy: 'unsafe-url' as ReferrerPolicy,
            };
            const res = await fetch(requestUrl, config);
            const contentType = res.headers.get('content-type');
            if (!res.ok) throw new Error(res.statusText);

            if (contentType && contentType.indexOf('application/json') !== -1)
                return await res.json();
            return await res;
        } catch (err) {
            console.error(err);
            return err;
        }
    } else {
        return false;
    }
};

export const preparePhotosFromBackendToGallery = (
    photos: PhotoTypes[],
    width: number,
    height: number
) =>
    photos.map(({attributes}) => {
        const {url} = attributes;
        return {
            src: `${process.env.NEXT_PUBLIC_BACKEND_API_ADDRESS}${url || ''}`,
            width,
            height,
        };
    });

export const cutText = (text: string, maxLength: number) => {
    const lastWord = text.slice(0, maxLength).lastIndexOf(' ');

    if (maxLength < 1) return 'Error';
    if (text.length > maxLength) return text.slice(0, lastWord).concat('...');
    return text.slice(0, maxLength);
};

export const removeTags = (str: string) => {
    if (str.trim() === '') return str;
    return str.replace(/(<([^>]+)>)/gi, '');
};
