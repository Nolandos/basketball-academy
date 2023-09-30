import React, {useEffect} from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import Layout from '@/components/layout/Layout';
import {AppProvider} from '@/context/AppContext';

const App = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
        // PREVENT FOUC
        if (process.browser) {
            document.body.classList.add('loaded');
        }
    }, []);

    return (
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    );
};

export default appWithTranslation(App);
