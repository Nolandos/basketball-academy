import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {NewsType} from '@/utils/commonTypes';
import {AlertMessagesTypes} from '@/utils/commonEnums';

type App = {
    lastNews: {loading: boolean; data: [] | Array<NewsType>};
    messageBox: {id: string; text: string; type: AlertMessagesTypes} | null;
};

type AppProviderProps = {
    children: React.ReactNode;
};

type AppContext = {
    app: App;
    setApp: Dispatch<SetStateAction<App>>;
    handleCloseMessageBox: () => void;
    handleSetLastNews: (loading: boolean, data: [] | Array<NewsType>) => void;
    handleSetMessageBox: ({
        id,
        text,
        type,
    }: {
        id: string;
        text: string;
        type: AlertMessagesTypes;
    }) => void;
};

const initialContext: AppContext = {
    app: {
        lastNews: {
            loading: true,
            data: [],
        },
        messageBox: null,
    },
    setApp: (): void => {
        throw new Error('setApp function must be overridden');
    },
    handleSetLastNews: (loading: boolean, data: [] | Array<NewsType>) => {
        throw new Error(
            `handleSetLastNews function must be overridden , data: ${data}`
        );
    },
    handleSetMessageBox: ({
        id,
        text,
        type,
    }: {
        id: string;
        text: string;
        type: AlertMessagesTypes;
    }) => {
        throw new Error(
            `handleSetMessageBox function must be overridden , data: ${id} ${text} ${type}`
        );
    },
    handleCloseMessageBox: () => {
        throw new Error(
            `handleCloseMessageBox function must be overridden , data:`
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
        messageBox: null,
    });

    const handleSetMessageBox = ({
        id,
        text,
        type,
    }: {
        id: string;
        text: string;
        type: AlertMessagesTypes;
    }) => {
        setApp({...app, messageBox: {...app.messageBox, id, text, type}});
    };

    const handleCloseMessageBox = () => setApp({...app, messageBox: null});

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
                handleSetMessageBox,
                handleCloseMessageBox,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
