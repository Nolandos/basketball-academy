import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {NewsType} from '@/utils/commonTypes';

type App = {
    lastNews: {loading: boolean; data: [] | Array<NewsType>};
};

type AppProviderProps = {
    children: React.ReactNode;
};

type AppContext = {
    app: App;
    setApp: Dispatch<SetStateAction<App>>;
    handleSetLastNews: (loading: boolean, data: [] | Array<NewsType>) => void;
};

const initialContext: AppContext = {
    app: {
        lastNews: {
            loading: true,
            data: [],
        },
    },
    setApp: (): void => {
        throw new Error('setApp function must be overridden');
    },
    handleSetLastNews: (loading: boolean, data: [] | Array<NewsType>) => {
        throw new Error(
            `handleSetLastNews function must be overridden , data: ${data}`
        );
    },
};

export const AppContext = createContext<AppContext>(initialContext);

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [app, setApp] = useState<App>({
        lastNews: {
            loading: true,
            data: [],
        },
    });

    const handleSetLastNews = (
        loading: boolean,
        data: [] | Array<NewsType>
    ) => {
        setApp({...app, lastNews: {...app.lastNews, loading, data}});
    };

    return (
        <AppContext.Provider
            value={{
                app,
                setApp,
                handleSetLastNews,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
